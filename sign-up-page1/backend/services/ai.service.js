import { openai } from "../app.js";

const MAX_TOKENS = 1000;

export async function analyzeInterviewResponses(answers) {
  // answers: Array of candidate's answers (strings)
  // We'll prompt OpenAI to analyze candidate's body language, attitude, confidence, skills, knowledge
  // and provide scores (0-100) and suggestions for improvement

  const prompt = generatePrompt(answers);

  try {
    const response = await openai.createChatCompletion({
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content:
            "You are an experienced HR interviewer and career coach. Analyze the candidate's answers for body language, attitude, confidence, skills, and knowledge. Provide a numeric score (0-100) for each criterion and give detailed feedback and suggestions for improvement. Also provide an overall pass/fail decision based on an overall score cutoff of 70.",
        },
        {
          role: "user",
          content: prompt,
        },
      ],
      max_tokens: MAX_TOKENS,
      temperature: 0.7,
    });

    const aiText = response.data.choices[0].message.content;

    // Parse AI text (expect JSON format)
    // We expect AI to return JSON like:
    // {
    //   "scores": {
    //     "bodyLanguage": 80,
    //     "attitude": 75,
    //     "confidence": 70,
    //     "skills": 85,
    //     "knowledge": 80
    //   },
    //   "feedback": {
    //     "bodyLanguage": "...",
    //     "attitude": "...",
    //     "confidence": "...",
    //     "skills": "...",
    //     "knowledge": "..."
    //   },
    //   "overallScore": 78,
    //   "pass": true,
    //   "suggestions": "..."
    // }

    let parsed;
    try {
      parsed = JSON.parse(aiText);
    } catch {
      // If parsing fails, fallback to basic structure with overallScore 0 fail
      parsed = {
        scores: {
          bodyLanguage: 0,
          attitude: 0,
          confidence: 0,
          skills: 0,
          knowledge: 0,
        },
        feedback: {
          bodyLanguage: "Could not analyze.",
          attitude: "Could not analyze.",
          confidence: "Could not analyze.",
          skills: "Could not analyze.",
          knowledge: "Could not analyze.",
        },
        overallScore: 0,
        pass: false,
        suggestions: "Please provide clearer answers.",
      };
    }

    return parsed;
  } catch (err) {
    // On error, return default failure analysis
    return {
      scores: {
        bodyLanguage: 0,
        attitude: 0,
        confidence: 0,
        skills: 0,
        knowledge: 0,
      },
      feedback: {
        bodyLanguage: "Error analyzing response.",
        attitude: "Error analyzing response.",
        confidence: "Error analyzing response.",
        skills: "Error analyzing response.",
        knowledge: "Error analyzing response.",
      },
      overallScore: 0,
      pass: false,
      suggestions: "Error occurred during analysis.",
    };
  }
}

function generatePrompt(answers) {
  let content = "Candidate answers to interview questions:\n";
  answers.forEach((answer, idx) => {
    content += `Q${idx + 1}: ${answer}\n`;
  });
  content +=
    "\nPlease analyze these answers and provide a JSON response with the following structure:\n" +
    `{
  "scores": {
    "bodyLanguage": number (0-100),
    "attitude": number (0-100),
    "confidence": number (0-100),
    "skills": number (0-100),
    "knowledge": number (0-100)
  },
  "feedback": {
    "bodyLanguage": string,
    "attitude": string,
    "confidence": string,
    "skills": string,
    "knowledge": string
  },
  "overallScore": number (0-100),
  "pass": boolean,
  "suggestions": string
}\n\n`;
  content +=
    "Make sure to base the pass decision on an overallScore >= 70 and provide constructive suggestions.";
  return content;
}
