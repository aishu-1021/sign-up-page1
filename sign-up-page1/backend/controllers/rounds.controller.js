import { Result } from "../models/Result.js";
import { User } from "../models/User.js";
import { sendFailAnalysisEmail, sendPassQualificationEmail, sendInterviewFeedbackEmail } from "../services/email.service.js";
import { analyzeInterviewResponses } from "../services/ai.service.js";

const ROUND_CUTOFFS = {
  aptitude: 80,
  technical: 85,
  interview: 70, // Interview and HR rounds use AI analysis scoring, cutoff 70%
  hr: 70,
};

// Example questions for aptitude and technical rounds (static for demo)
const QUESTIONS = {
  aptitude: [
    {
      id: "apt1",
      question: "What is 15% of 200?",
      options: ["20", "25", "30", "35"],
      answer: "30",
    },
    {
      id: "apt2",
      question: "If a train travels 60 km in 1.5 hours, what is its speed?",
      options: ["40 km/h", "50 km/h", "60 km/h", "45 km/h"],
      answer: "40 km/h",
    },
    {
      id: "apt3",
      question: "Which number comes next in the series: 2, 6, 12, 20, ?",
      options: ["28", "30", "32", "26"],
      answer: "30",
    },
    {
      id: "apt4",
      question: "If x + 5 = 12, what is x?",
      options: ["5", "7", "6", "8"],
      answer: "7",
    },
    {
      id: "apt5",
      question: "What is the square root of 144?",
      options: ["10", "11", "12", "13"],
      answer: "12",
    },
  ],
  technical: [
    {
      id: "tech1",
      question: "What is the output of: console.log(typeof NaN); in JavaScript?",
      options: ["number", "NaN", "undefined", "object"],
      answer: "number",
    },
    {
      id: "tech2",
      question: "Which SQL statement is used to extract data from a database?",
      options: ["SELECT", "INSERT", "UPDATE", "DELETE"],
      answer: "SELECT",
    },
    {
      id: "tech3",
      question: "In OOP, what does 'inheritance' mean?",
      options: [
        "An object acquiring properties from another",
        "Data hiding",
        "Overloading methods",
        "Encapsulation",
      ],
      answer: "An object acquiring properties from another",
    },
    {
      id: "tech4",
      question: "HTTP status code 404 means?",
      options: ["Success", "Not Found", "Server Error", "Unauthorized"],
      answer: "Not Found",
    },
    {
      id: "tech5",
      question: "What does CSS stand for?",
      options: [
        "Cascading Style Sheets",
        "Computer Style Sheets",
        "Creative Style System",
        "Colorful Style Sheets",
      ],
      answer: "Cascading Style Sheets",
    },
  ],
};

export async function getRoundQuestions(req, res, next) {
  try {
    const { round } = req.params;
    if (!["aptitude", "technical", "interview", "hr"].includes(round)) {
      return res.status(400).json({ message: "Invalid round" });
    }

    if (round === "aptitude" || round === "technical") {
      // Return questions without answers
      const questions = QUESTIONS[round].map(({ id, question, options }) => ({
        id,
        question,
        options,
      }));
      return res.json({ questions, cutoff: ROUND_CUTOFFS[round] });
    }

    // For interview and hr rounds, questions are AI-driven simulations
    // We'll return predefined questions for interview and HR rounds
    const interviewQuestions = [
      "Tell me about yourself.",
      "Describe a challenging problem you solved.",
      "How do you handle stressful situations?",
      "What are your strengths and weaknesses?",
      "Why do you want to work with us?",
    ];

    const hrQuestions = [
      "Describe a time you worked in a team.",
      "How do you handle conflict at work?",
      "What motivates you?",
      "Where do you see yourself in 5 years?",
      "What are your salary expectations?",
    ];

    const questions =
      round === "interview" ? interviewQuestions : hrQuestions;

    return res.json({ questions, cutoff: ROUND_CUTOFFS[round] });
  } catch (err) {
    next(err);
  }
}

function calculateScore(questions, answers) {
  if (!Array.isArray(answers) || answers.length !== questions.length) return 0;
  let correctCount = 0;
  for (let i = 0; i < questions.length; i++) {
    if (
      answers[i] !== undefined &&
      answers[i] !== null &&
      answers[i].toString().trim().toLowerCase() === questions[i].answer.toString().trim().toLowerCase()
    ) {
      correctCount++;
    }
  }
  return Math.round((correctCount / questions.length) * 100);
}

export async function submitRoundAnswers(req, res, next) {
  try {
    const { round } = req.params;
    const userId = req.user.id;
    const { answers } = req.body;

    if (!["aptitude", "technical", "interview", "hr"].includes(round)) {
      return res.status(400).json({ message: "Invalid round" });
    }

    if (!answers || typeof answers !== "object") {
      return res.status(400).json({ message: "Answers are required" });
    }

    const cutoff = ROUND_CUTOFFS[round];
    let score = 0;
    let passed = false;
    let feedback = "";
    // Handle aptitude and technical rounds
    if (round === "aptitude" || round === "technical") {
      const questions = QUESTIONS[round];
      score = calculateScore(questions, answers);

      passed = score >= cutoff;

      if (!passed) {
        // Prepare analysis for fail email
        // Identify incorrect questions and provide resource links
        let incorrectItems = [];
        for (let i = 0; i < questions.length; i++) {
          const q = questions[i];
          if (
            !answers[i] ||
            answers[i].toString().trim().toLowerCase() !== q.answer.toString().trim().toLowerCase()
          ) {
            incorrectItems.push({
              question: q.question,
              correctAnswer: q.answer,
            });
          }
        }

        // Basic feedback analysis text
        feedback = `You answered ${score}% of the questions correctly. Here are the questions you struggled with:\n`;
        incorrectItems.forEach((item, idx) => {
          feedback += `${idx + 1}. ${item.question}\n   Correct answer: ${item.correctAnswer}\n`;
        });
      } else {
        feedback = `Congratulations! You have cleared the ${round} round with a score of ${score}%. You qualify for the next round.`;
      }
    } else {
      // Interview and HR rounds - AI analysis

      if (!Array.isArray(answers) || answers.length === 0) {
        return res.status(400).json({ message: "Answers array is required for interview/HR rounds" });
      }

      // The answers here are expected to be array of strings (candidate responses)
      const aiAnalysis = await analyzeInterviewResponses(answers);

      score = aiAnalysis.overallScore;
      passed = score >= cutoff;
      feedback = JSON.stringify(aiAnalysis.feedback, null, 2);

      // For interview round, if passed, qualify for next round (HR)
      // For HR round, no next round qualification needed
    }

    // Save result in DB
    await Result.create({
      userId,
      round,
      score,
      passed,
      feedback,
    });

    // Send emails based on round and pass/fail
    const user = await User.findByPk(userId);
    if (!user) return res.status(404).json({ message: "User not found" });

    if (round === "aptitude" || round === "technical") {
      if (!passed) {
        await sendFailAnalysisEmail(
          user.email,
          round,
          feedback,
          getImprovementResources(round)
        );
      } else {
        const nextRound = round === "aptitude" ? "technical" : "interview";
        await sendPassQualificationEmail(user.email, nextRound);
      }
    } else if (round === "interview") {
      if (!passed) {
        await sendInterviewFeedbackEmail(user.email, feedback);
      } else {
        await sendPassQualificationEmail(user.email, "hr");
      }
    } else if (round === "hr") {
      if (!passed) {
        await sendInterviewFeedbackEmail(user.email, feedback);
      } else {
        // Passed HR round - final success email can be sent here (optional)
        await sendPassQualificationEmail(user.email, null);
      }
    }

    return res.json({ score, passed, feedback });
  } catch (err) {
    next(err);
  }
}

function getImprovementResources(round) {
  if (round === "aptitude") {
    return [
      {
        title: "Khan Academy - Arithmetic and Pre-algebra",
        url: "https://www.khanacademy.org/math/arithmetic",
      },
      {
        title: "Logical Reasoning Practice",
        url: "https://www.indiabix.com/logical-reasoning/questions/",
      },
      {
        title: "Magoosh GRE Logical Reasoning",
        url: "https://magoosh.com/gre/gre-logical-reasoning-practice-questions/",
      },
    ];
  } else if (round === "technical") {
    return [
      {
        title: "FreeCodeCamp - JavaScript Algorithms and Data Structures",
        url: "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/",
      },
      {
        title: "SQL Tutorial - W3Schools",
        url: "https://www.w3schools.com/sql/",
      },
      {
        title: "OOP Concepts - TutorialsPoint",
        url: "https://www.tutorialspoint.com/object_oriented_analysis_design/ooad_object_oriented_concepts.htm",
      },
    ];
  }
  return [];
}
