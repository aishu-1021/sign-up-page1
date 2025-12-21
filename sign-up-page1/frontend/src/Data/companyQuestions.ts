export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
}
export const companyQuestionSets: { [key: string]: Question[] } = {
  Google: [
    {
      id: 1,
      question: "A cube has all its faces painted. It is then cut into 27 smaller equal cubes. How many small cubes have exactly two faces painted?",
      options: ["6", "8", "12", "24"],
      correctAnswer: 3
    },
    {
      id: 2,
      question: "Find the next number in the series: 2, 5, 10, 17, 26, _ ?",
      options: ["35", "37", "38", "39"],
      correctAnswer: 2
    },
    {
      id: 3,
      question: "A is twice as fast as B and B is three times as fast as C. If C completes a task in 24 hours, how long will A take?",
      options: ["2 hours", "3 hours", "4 hours", "6 hours"],
      correctAnswer: 3
    },
    {
      id: 4,
      question: "All engineers are problem solvers. Some problem solvers like puzzles. Which conclusion logically follows?",
      options: ["All Engineers like puzzle", "Some Engineers like puzzle", "No Engineers like puzzle", "No Valid Conclusion"],
      correctAnswer: 4
    },
    {
      id: 5,
      question: "What is the missing number? 7 → 50       8 → 65       10 → 101        12 → ?",
      options: ["140", "145", "150", "160"],
      correctAnswer: 2
    },
    {
      id: 6,
      question: "Five friends sit in a row. A is left of B but right of C. D is right of B. Who sits in the middle?",
      options: ["A", "B", "C", "D"],
      correctAnswer: 2
    },
    {
      id: 7,
      question: "If MONDAY is written as NPOEBZ, how is FRIDAY written?",
      options: ["GSJEBZ", "GRIEDC", "GSHCBA", "GSJDCB"],
      correctAnswer: 1
    },
    {
      id: 8,
      question: "Which one does not belong?             Circle, Triangle, Square, Pentagon, Cube",
      options: ["Cube", "Triangle", "Pentagon", "Square"],
      correctAnswer: 1
    },
    {
      id: 9,
      question: "If 3 cats catch 3 mice in 3 minutes, how many mice will 100 cats catch in 100 minutes (assuming linearity)?",
      options: ["100", "300", "3333", "1000"],
      correctAnswer: 3
    },
    {
      id: 10,
      question: "A man walks 10 km east, then 10 km south, then 10 km west. How far is he from the starting point?",
      options: ["0 km", "10 km", "20 km", "10√2 km"],
      correctAnswer: 2
    },
    {
      id: 11,
      question: "Which number is the odd one out? 4, 9, 25, 49, 121, 169, 225",
      options: ["25", "49", "121", "225"],
      correctAnswer: 4
    },
    {
      id: 12,
      question: "Identify the pattern: AB = 2     ABC = 6        ABCD = 12         ABCDE = ?",
      options: ["20", "24", "30", "60"],
      correctAnswer: 1
    },
    {
      id: 13,
      question: "Which diagram correctly expresses the relationship? Programmers, Software Engineers, Employees",
      options: ["Three separate circles", "Programmers ⊂ Software Engineers ⊂ Employees", "Employees ⊂ Software Engineers", " Programmers = Software Engineers"],
      correctAnswer: 2
    },
    {
      id: 14,
      question: "Find the next in sequence: 2, 12, 30, 56, 90, _",
      options: ["132", "140", "150", "156"],
      correctAnswer: 1
    },
    {
      id: 15,
      question: "A and B together finish a job in 8 days. A works twice as fast as B. How long does B take alone?",
      options: ["12 Days", "16 Days", "24 Days", "32 Days"],
      correctAnswer: 3
    },
    {
      id: 16,
      question: "If one-third of a number is 24, what is 25% of the number?",
      options: ["12", "18", "20", "24"],
      correctAnswer: 2
    },
    {
      id: 17,
      question: "Which is the mirror image of 2:45 clock time?",
      options: ["9:15", "7:15", "8:15", "9:45"],
      correctAnswer: 3
    },
    {
      id: 18,
      question: "The code for TREE is 20-18-5-5. What is the code for FLOWER?",
      options: ["6-12-15-23-5-18", "5-15-12-23-18-6", "4-14-11-22-4-17", "None"],
      correctAnswer: 1
    },
    {
      id: 19,
      question: "Which number completes the pattern? 15 → 225       17 → 289     20 → 400        25 → ?",
      options: ["525", "600", "625", "675"],
      correctAnswer: 3
    },
    {
      id: 20,
      question: "If * means +, + means –, – means ×, × means /.          What is 6 * 3 + 2 – 1?",
      options: ["5", "7", "9", "11"],
      correctAnswer: 2
    },
    {
      id: 21,
      question: "Which shape comes next? Square, Triangle, Pentagon, Hexagon, _",
      options: ["Heptagon", "Octagon", "Triangle", "Circle"],
      correctAnswer: 1
    },
    {
      id: 22,
      question: "A password must be 4 characters long. The first two characters are letters (26 options each). The last two are digits (10 options each). How many total passwords? ",
      options: ["1000", "2600", "67,600", "676,000"],
      correctAnswer: 3
    },
    {
      id: 23,
      question: "Arrange in order of decreasing size: Bit, Byte, Kilobyte, Megabyte ",
      options: ["MB, KB, Byte, Bit", "Bit, Byte, KB, MB", "KB, MB, Byte, Bit", "Byte, Bit, KB, MB"],
      correctAnswer: 1
    },
    {
      id: 24,
      question: "Find the odd one out: HTTP, FTP, SMTP, SQL",
      options: ["HTTP", "FTP", "SMTP", "SQL"],
      correctAnswer: 4
    },
    {
      id: 25,
      question: "If X=24, Y=25, Z=26, what is the value of A?",
      options: ["1", "2", "3", "27"],
      correctAnswer: 1
    },
    {
      id: 26,
      question: "A clock shows 3:15. What is the angle between the hour and minute hands?",
      options: ["0°", "7.5°", "15°", "22.5°"],
      correctAnswer: 2
    },
    {
      id: 27,
      question: "Which number continues the pattern? 5, 11, 23, 47, _",
      options: ["95", "96", "97", "98"],
      correctAnswer: 1
    },
    {
      id: 28,
      question: "If the code for HELLO is IFMMP, what is the code for WORLD?",
      options: ["XPSME", "WPSME", "XQSMF", "XPSLF"],
      correctAnswer: 1
    },
    {
      id: 29,
      question: "You are given two ropes that each burn for exactly 1 hour, but at inconsistent rates. How do you measure exactly 45 minutes?",
      options: ["Burn one rope from both ends, the other from one end", "Burn both ropes from one end", "Burn both ropes from both ends", "Impossible"],
      correctAnswer: 1
    },
    {
      id: 30,
      question: "If a machine takes 5 minutes to make 5 widgets, how long would 100 machines take to make 100 widgets?",
      options: ["5 mins", "20 mins", "100 mins", "500 mins"],
      correctAnswer: 1
    }
  ],
  Amazon: [
    {
      id: 1,
      question: "1. A server processes 240 requests in 3 minutes. At the same rate, how many requests can it process in 15 minutes? ",
      options: ["800", "900", "1200", "1500"],
      correctAnswer: 3
    },
    {
      id: 2,
      question: "Find the next number: 4, 9, 19, 39, 79, ?",
      options: ["159", "168", "149", "178"],
      correctAnswer: 1
    },
    {
      id: 3,
      question: "In a distributed system, Node A is twice as fast as Node B. Together they complete a task in 6 hours. How long does Node B take alone?",
      options: ["9 hours", "12 hours", "18 hours", "15 hours"],
      correctAnswer: 2
    },
    {
      id: 4,
      question: "All servers in a cluster are Linux machines. Some Linux machines are container-optimized.",
      conclusion: ["All servers are container-optimized", "Some servers might be container-optimized", " No servers are container-optimized", "Cannot be determined"],
      correctAnswer: 2
    },
    {
      id: 5,
      question: "Pick the odd one out:",
      options: ["FTP", "SFTP", "SCP", "HTTP"],
      correctAnswer: 4
    },
    {
      id: 6,
      question: "A cloud API rate limit allows 10,000 calls per hour. After 18 minutes, 3,000 calls are used. At the same rate, will the service exceed its limit in one hour?",
      options: ["Yes", "No", "Exactly at the limit", "Cannot be determined"],
      correctAnswer: 1
    },
    {
      id: 7,
      question: "ENCRYPT → FODSZQU. What is CLOUD → ?",
      options: ["DMQPVE", "BKNVC", "DPSVME", "GNRSXF"],
      correctAnswer: 3
    },
    {
      id: 8,
      question: "Which is different?",
      options: ["Load Balancer", "Auto Scaling Group", "Firewall", "Target Group"],
      correctAnswer: 3
    },
    {
      id: 9,
      question: "A log file grows at 120 MB/day. Starting at 200 MB, what will be its size after 15 days?",
      options: ["1700 MB", "2000 MB", "1200 MB", "2600 MB"],
      correctAnswer: 1
    },
    {
      id: 10,
      question: "A user moves 12 km north, 5 km west, then 12 km south. How far from the starting point?",
      options: ["5 km", "7 km", "10 km", "17 km"],
      correctAnswer: 1
    },
    {
      id: 11,
      question: "Which number does NOT belong?",
      options: ["36", "64", "49", "82"],
      correctAnswer: 4
    },
    {
      id: 12,
      question: "If SERVER = 128-155-217-128-155-301, then BACKUP = ? (Pattern: sum of ASCII of letters)",
      options: ["133-132-147-128-299-181", "132-133-128-147-181-299", "133-128-147-132-181-299", "299-181-147-128-133-132"],
      correctAnswer: 3
    },
    {
      id: 13,
      question: "If RAM costs $5 per GB and you need 64 GB for 40 servers, total cost?",
      options: ["$6,400", "%12,800", "$20,000", "$16,000"],
      correctAnswer: 2
    },
    {
      id: 14,
      question: "VPC : Cloud Networking :: Lambda : ?",
      options: ["Event-Driven Compute", "Storage", "Firewall", "Network Isolation"],
      correctAnswer: 1
    },
    {
      id: 15,
      question: "Find missing number: 3 → 12         5 → 30          7 → 56           9 → ?",
      options: ["72", "80", "90", "99"],
      correctAnswer: 2
    },
    {
      id: 16,
      question: "A container drains ⅓ of its memory every minute. Starting with 81 MB, how much remains after 2 minutes?",
      options: ["36", "27", "18", "9"],
      correctAnswer: 3
    },
    {
      id: 17,
      question: "If EAST = 5120, WEST = 5230, then SOUTH = ?",
      options: ["5940", "5920", "5820", "5960"],
      correctAnswer: 2
    },
    {
      id: 18,
      question: "Which configuration is least related to the other three?",
      options: ["Multi-AZ", "Multi-Region", "Vertical Scaling", "High Availability"],
      correctAnswer: 3
    },
    {
      id: 19,
      question: "ALGORITHM → ZKFNQHSN. CLOUD → ? (Letters shifted -2)",
      options: ["AKMSC", "AMNSB", "AJLSB", "ANOTD"],
      correctAnswer: 3
    },
    {
      id: 20,
      question: "A task scheduler assigns tasks at 50 tasks/min. How many in 2 hours?",
      options: ["3,000", "6,000", "5,000", "1,000"],
      correctAnswer: 2
    },
    {
      id: 21,
      question: "CPU usage values: 20%, 40%, 60%, 40%, 20%. Average?",
      options: ["20%", "36%", "40%", "34%"],
      correctAnswer: 3
    },
    {
      id: 22,
      question: "22. Which comes next?  AB, CD, EF, GH, ?",
      options: ["IJ", "KL", "MN", "HI"],
      correctAnswer: 1
    },
    {
      id: 23,
      question: "In a subnet of 256 IPs, 20 are reserved. How many usable?",
      options: ["234", "236", "244", "212"],
      correctAnswer: 1
    },
    {
      id: 24,
      question: "A container spins up in 3 sec. How many can start in 90 sec?",
      options: ["20", "30", "25", "15"],
      correctAnswer: 2
    },
    {
      id: 25,
      question: "What is the angle between hour & minute hand at 4:20?",
      options: ["10°", "20°", "30°", " 40°"],
      correctAnswer: 4
    },
    {
      id: 26,
      question: "SELECT the odd one:",
      options: ["DynamoDB", "RDS", "MongoDB", "Redshift"],
      correctAnswer: 3
    },
    {
      id: 27,
      question: "27. Pattern:   21 → 441       14 → 196           8 → 64            11 → ?",
      options: ["111", "121", "144", "220"],
      correctAnswer: 2
    },
    {
      id: 28,
      question: "A load balancer adds 50 requests/min. After 8 minutes, how many requests?",
      options: ["200", "300", "350", "400"],
      correctAnswer: 4
    },
    {
      id: 29,
      question: "29. Reverse alphabet code: A=26, B=25, … Z=1.      WORD → ?",
      options: ["4-12-9-23", "23-12-9-4", "23-9-12-4", "4-9-12-23"],
      correctAnswer: 2
    },
    {
      id: 30,
      question: "A VPN connection drops every 15 minutes. In 3 hours, how many drops?",
      options: ["10", "12", "15", "18"],
      correctAnswer: 2
    }
  ],
  Microsoft: [
    {
      id: 1,
      question: "A server completes an API cycle every 120 ms. How many cycles occur in 1 minute?",
      options: ["300", "400", "500", "600"],
      correctAnswer: 3
    },
    {
      id: 2,
      question: "Find the next number: 2, 6, 12, 20, 30, ?",
      options: ["40", "44", "42", "46"],
      correctAnswer: 3
    },
    {
      id: 3,
      question: "A UI rendering engine is 30% slower on Machine A than Machine B. If Machine B renders in 10 seconds, how long does A take?",
      options: ["10 sec", "12 sec", "13 sec", "15 sec"],
      correctAnswer: 3
    },
    {
      id: 4,
      question: "All backend services depend on a database. Some backend services also use caching.",
      conclusion: ["All backend services use caching", "Some backend services may not use caching", "No backend services use caching", "None of the above"],
      correctAnswer: 2
    },
    {
      id: 5,
      question: "Odd One Out: ",
      options: ["React", "Angular", "Node.js", "Vue"],
      correctAnswer: 3
    },
    {
      id: 6,
      question: "A JSON file has 2048 lines. If a linter processes 256 lines/min, time required?",
      options: ["8 min", "10 min", "12 min", "6 min"],
      correctAnswer: 1
    },
    {
      id: 7,
      question: "SHIFTED → TJKKVGF             MODULE → ?",
      options: ["NPEVMF", "LNFTKD", "NFCVMD", "ZOCSMC"],
      correctAnswer: 1
    },
    {
      id: 8,
      question: "Which is different?",
      options: ["Stack", "Queue", "Linked List", "Bubble Sort"],
      correctAnswer: 4
    },
    {
      id: 9,
      question: "A developer moves 4 units east, 6 units north, and 4 units west. Distance from starting point?",
      options: ["2 units", "4 units", "6 units", "8 units"],
      correctAnswer: 3
    },
    {
      id: 10,
      question: "Which number does NOT belong?",
      options: ["27", "64", "125", "145"],
      correctAnswer: 4
    },
    {
      id: 11,
      question: "A task pipeline completes 45 jobs/hour. How many in 5 hours?",
      options: ["125", "175", "225", "250"],
      correctAnswer: 3
    },
    {
      id: 12,
      question: "If CODE = 31245, then FIX = ?",
      options: ["6910", "7910", "5910", "6810"],
      correctAnswer: 1
    },
    {
      id: 13,
      question: "A full-stack team has 12 frontend devs and 18 backend devs. What percent are backend?",
      options: ["40%", "55%", "60%", "70%"],
      correctAnswer: 3
    },
    {
      id: 14,
      question: "API : Backend :: DOM : ?",
      options: ["Browser", "Styling", "Frontend", "JavaScript"],
      correctAnswer: 1
    },
    {
      id: 15,
      question: "Find the missing value: 5 → 30      7 → 56       9 → 90            11 → ?",
      options: ["110", "121", "132", "156"],
      correctAnswer: 3
    },
    {
      id: 16,
      question: "A cache reduces response time by 20%. Original time 120 ms → new time?",
      options: ["90 ms", "96 ms", "100 ms", "110 ms"],
      correctAnswer: 2
    },
    {
      id: 17,
      question: "If NORTH = 1491520, EAST = 5201920, then WEST = ?",
      options: ["523020", "52301920", "52301820", "5202030"],
      correctAnswer: 2
    },
    {
      id: 18,
      question: "Least related to others:",
      options: ["Microservices", "Monolithic", "Containerization", "CI/CD"],
      correctAnswer: 2
    },
    {
      id: 19,
      question: "Reverse alphabet code (A=26,…Z=1). SAVE → ?",
      options: ["19-1-22-5", "8-25-4-22", "7-26-5-22", "8-26-5-22"],
      correctAnswer: 4
    },
    {
      id: 20,
      question: "A script runs every 15 seconds. How many runs in 5 minutes?",
      options: ["15", "20", "30", "40"],
      correctAnswer: 2
    },
    {
      id: 21,
      question: "CPU usage readings: 20%, 80%, 40%, 60%. Average?",
      options: ["40%", "50%", "55%", "75%"],
      correctAnswer: 2
    },
    {
      id: 22,
      question: "Find next in sequence:     AZ, BY, CX, DW, ?",
      options: ["EV", "EX", "EU", "FY"],
      correctAnswer: 1
    },
    {
      id: 23,
      question: "A container stores 500 MB. A log grows 25 MB every 10 minutes. When will it fill?",
      options: ["2 hrs", "1 hr 30 min", "3 hr", "1 hr 40 min"],
      correctAnswer: 3
    },
    {
      id: 24,
      question: "A system logs 125 requests in 5 seconds. How many in 1 minute at same rate?",
      options: ["1200", "1300", "1500", "1800"],
      correctAnswer: 3
    },
    {
      id: 25,
      question: "Angle between clock hands at 3:30?",
      options: ["30°", "45°", "75°", "90°"],
      correctAnswer: 3
    },
    {
      id: 26,
      question: "Odd one out:",
      options: ["Express.js", "Django", "Spring Boot", "Python"],
      correctAnswer: 4
    },
    {
      id: 27,
      question: "Pattern: 16 → 256        10 → 100        7 → 49            12 → ?",
      options: ["121", "128", "144", "169"],
      correctAnswer: 3
    },
    {
      id: 28,
      question: "A WebSocket receives 600 messages in 12 minutes. Rate per minute?",
      options: ["40", "50", "55", "60"],
      correctAnswer: 2
    },
    {
      id: 29,
      question: "If WIRE = 23-9-18-5, then BUG = ?",
      options: ["2-21-7", "25-6-20", "3-20-14", "24-7-12"],
      correctAnswer: 1
    },
    {
      id: 30,
      question: "A CI/CD job runs 6 times/day. How many runs in 45 days?",
      options: ["200", "240", "270", "300"],
      correctAnswer: 3
    }
  ],
  Apple: [
    {
      id: 1,
      question: "A Swift compiler processes 2400 lines in 3 minutes. How many lines in 15 minutes?",
      options: ["9,000", "10,000", "12,000", "15,000"],
      correctAnswer: 3
    },
    {
      id: 2,
      question: "Find the next number: 3, 8, 15, 24, 35, ?",
      options: ["48", "49", "50", "52"],
      correctAnswer: 1
    },
    {
      id: 3,
      question: "An app takes 20 sec to load on Device A and is 25% faster on Device B. Load time on Device B?",
      options: ["10 sec", "12 sec", "15 sec", "16 sec"],
      correctAnswer: 4
    },
    {
      id: 4,
      question: "All iOS apps use UIKit or SwiftUI. Some iOS apps also use CoreData.",
      conclusion: ["All iOS apps use CoreData", "Some iOS apps do not use CoreData", "No iOS apps use CoreData", "Data insufficient"],
      correctAnswer: 2
    },
    {
      id: 5,
      question: "Odd One Out: ",
      options: ["UIKit", "SwiftUI", "Combine", "PostgreSQL"],
      correctAnswer: 4
    },
    {
      id: 6,
      question: "A log file grows 150 MB/day, starting at 50 MB. Size after 10 days?",
      options: ["1000 MB", "1550 MB", "1550 MB", "1550 MB"],
      correctAnswer: 2
    },
    {
      id: 7,
      question: "DESIGN → EFGHJO           SWIFT → ?",
      options: ["TXJGU", "TXJGI", "UXKHV", "TXKHT"],
      correctAnswer: 1
    },
    {
      id: 8,
      question: "Which is different?",
      options: ["MVC", "MVVM", "Singleton", "VIPER"],
      correctAnswer: 3
    },
    {
      id: 9,
      question: "A developer moves 10 m north, 6 m east, 10 m south. Distance from start?",
      options: ["4 m", "6 m", "10 m", "16 m"],
      correctAnswer: 2
    },
    {
      id: 10,
      question: "Choose the number that does NOT belong:",
      options: ["81", "64", "49", "96"],
      correctAnswer: 4
    },
    {
      id: 11,
      question: "A background task runs 45 jobs/hour. How many jobs in 8 hours?",
      options: ["320", "360", "400", "450"],
      correctAnswer: 2
    },
    {
      id: 12,
      question: "If SWIFT = 19-23-9-6-20, then APPLE = ?",
      options: ["1-16-16-12-5", "1-15-16-12-5", "3-16-16-11-5", "1-17-14-12-5"],
      correctAnswer: 1
    },
    {
      id: 13,
      question: "A team has 9 iOS devs and 6 backend devs. What % are iOS devs?",
      options: ["40%", "50%", "60%", "70%"],
      correctAnswer: 3
    },
    {
      id: 14,
      question: "iOS : Swift :: Android : ?",
      options: ["C++", "Kotlin", "Flutter", "Gradle"],
      correctAnswer: 2
    },
    {
      id: 15,
      question: "Find the missing value: 4 → 20       6 → 42       8 → 72          10 → ?",
      options: ["90", "100", "110", "120"],
      correctAnswer: 3
    },
    {
      id: 16,
      question: "A phone battery drains 1/3 every 12 minutes. Starting at 81%, what after 24 minutes?",
      options: ["36%", "27%", "18%", "9%"],
      correctAnswer: 1
    },
    {
      id: 17,
      question: "If NORTH = 14-15-18-20-8, then SOUTH = ?",
      options: ["19-15-21-20-8", "18-16-20-21-7", "20-16-19-21-8", "19-14-21-20-8"],
      correctAnswer: 1
    },
    {
      id: 18,
      question: "Which is least related?",
      options: ["Swift Compiler", "XCode", "Interface Builder", "Nginx"],
      correctAnswer: 4
    },
    {
      id: 19,
      question: "Reverse alphabet code (A=26,...Z=1)         APPLE → ?",
      options: ["1-16-16-12-5", "26-11-11-15-22", "25-12-12-15-22", "24-16-16-11-20"],
      correctAnswer: 2
    },
    {
      id: 20,
      question: "A script triggers every 20 seconds. How many times in 10 minutes?",
      options: ["20", "25", "30", "40"],
      correctAnswer: 3
    },
    {
      id: 21,
      question: "CPU usage: 10%, 30%, 60%, 40%. Average?",
      options: ["30%", "35%", "40%", "45%"],
      correctAnswer: 2
    },
    {
      id: 22,
      question: "Find next in sequence:          AZ, BY, CX, DW, ?",
      options: ["EV", "EX", "EU", "FX"],
      correctAnswer: 1
    },
    {
      id: 23,
      question: "A build takes 90 seconds. How many builds in 45 minutes?",
      options: ["15", "20", "25", "30"],
      correctAnswer: 4
    },
    {
      id: 24,
      question: "An iPhone receives 300 notifications in 10 min. How many in 1 hour?",
      options: ["1200", "1500", "1600", "1800"],
      correctAnswer: 4
    },
    {
      id: 25,
      question: "Angle between clock hands at 2:50?",
      options: ["85°", "90°", "145°", "100°"],
      correctAnswer: 3
    },
    {
      id: 26,
      question: "Odd one out:",
      options: ["Swift", "Objective-C", "Rust", "Xcode"],
      correctAnswer: 4
    },
    {
      id: 27,
      question: "Pattern: 25 → 625       12 → 144        9 → 81          14 → ?",
      options: ["196", "169", "144", "121"],
      correctAnswer: 1
    },
    {
      id: 28,
      question: "A database returns 900 results in 18 min. Rate per minute?",
      options: ["40", "50", "60", "70"],
      correctAnswer: 2
    },
    {
      id: 29,
      question: "If DATA = 4-1-20-1, then CODE = ?",
      options: ["3-15-4-5", "4-15-3-5", "3-14-4-4", "2-14-5-4"],
      correctAnswer: 1
    },
    {
      id: 30,
      question: "An automation job runs 3 times/day. How many times in 90 days?",
      options: ["180", "200", "240", "270"],
      correctAnswer: 4
    }
  ],
  Meta: [
    {
      id: 1,
      question: "Meta’s dashboard renders 18 components per second. How many components can it render in 5 minutes?",
      options: ["5,400", "7,200", "3,600", "9,000"],
      correctAnswer: 1
    },
    {
      id: 2,
      question: "Find the missing number: 3, 9, 27, 81, ?",
      options: ["162", "243", "121", "200"],
      correctAnswer: 2
    },
    {
      id: 3,
      question: "A page loads in 400 ms on one server. When moved to an optimized CDN, load time improves by 25%. What is the new load time?",
      options: ["350 ms", "300 ms", "275 ms", "200 ms"],
      correctAnswer: 2
    },
    {
      id: 4,
      question: "Which conclusion logically follows? Statement: All React components are functions. Some functions return JSX.",
      options: ["All JSX is returned by React components", "Some React components might return JSX", "All functions must return JSX", "No React component returns JSX"],
      correctAnswer: 2
    },
    {
      id: 5,
      question: "Identify the odd one out:",
      options: ["HTML", "CSS", "SQL", "JavaScript"],
      correctAnswer: 3
    },
    {
      id: 6,
      question: "A script downloads 200 KB every 5 seconds. How much data does it download in 2 minutes?",
      options: ["4.8 MB", "2.4 MB", "3.2 MB", "1.6 MB"],
      correctAnswer: 1
    },
    {
      id: 7,
      question: "Which letter comes next? Sequence: A, C, F, J, O, ?",
      options: ["T", "U", "V", "W"],
      correctAnswer: 1
    },
    {
      id: 8,
      question: "Which is most similar to “Virtual DOM”?",
      options: ["Git Commit", "Shadow DOM", "SQL Index", "Websocket"],
      correctAnswer: 2
    },
    {
      id: 9,
      question: "A developer moves 12 steps east, 5 steps north, 12 steps west. How far is he from the starting point?",
      options: ["5", "7", "3", "12"],
      correctAnswer: 1
    },
    {
      id: 10,
      question: "Which number does NOT belong?   5, 11, 17, 23, 29, 38",
      options: ["11", "17", "29", "38"],
      correctAnswer: 4
    },
    {
      id: 11,
      question: "Meta’s system can process 120 API calls per second. How many in 45 seconds?",
      options: ["6,400", "5,400", "4,800", "7,200"],
      correctAnswer: 2
    },
    {
      id: 12,
      question: "Encode “META”         Using A=1, B=2…",
      options: ["13-5-20-1", "14-4-21-2", "15-3-21-1", "12-6-19-2"],
      correctAnswer: 1
    },
    {
      id: 13,
      question: "In a team of 16 frontend engineers, 10 know React and 6 know Vue. If 4 know both, how many know neither?",
      options: ["2", "4", "8", "6"],
      correctAnswer: 2
    },
    {
      id: 14,
      question: "Which is a frontend performance metric?",
      options: ["Latency spikes", "TTFB", "Garbage collection", "Memory leak factor"],
      correctAnswer: 2
    },
    {
      id: 15,
      question: "Find the next number:         12, 20, 30, 42, ?",
      options: ["54", "56", "60", "50"],
      correctAnswer: 1
    },
    {
      id: 16,
      question: "What is 40% of 40% of 250?",
      options: ["20", "25", "40", "16"],
      correctAnswer: 3
    },
    {
      id: 17,
      question: "Decode: If NODE = 14-15-4-5, what is REACT?",
      options: ["18-5-1-3-20", "17-4-2-5-19", "20-1-3-5-18", "10-6-2-2-18"],
      correctAnswer: 1
    },
    {
      id: 18,
      question: "Which is NOT a browser?",
      options: ["Safari", "Firefox", "Chrome", "Docker"],
      correctAnswer: 4
    },
    {
      id: 19,
      question: "Next in sequence:     AZ, BY, CX, DW, ?",
      options: ["EV", "FU", "EZ", "EX"],
      correctAnswer: 1
    },
    {
      id: 20,
      question: "A build process takes 90 sec. How many builds can run in 45 minutes?",
      options: ["45", "30", "60", "50"],
      correctAnswer: 2
    },
    {
      id: 21,
      question: "Average time spent on apps over 4 days: 40 min, 55 min, 65 min, 50 min. The average is:",
      options: ["55 min", "60 min", "52.5 min", "50 min"],
      correctAnswer: 1
    },
    {
      id: 22,
      question: "Find missing pair: (3, 9), (4, 16), (5, 25), (6, ?)",
      options: ["30", "32", "36", "40"],
      correctAnswer: 3
    },
    {
      id: 23,
      question: "If React bundle reduces from 3 MB to 2.1 MB, what is the percentage reduction?",
      options: ["20%", "25%", "30%", "40%"],
      correctAnswer: 2
    },
    {
      id: 24,
      question: "Find the next term: 2, 6, 12, 20, ?",
      options: ["28", "30", "32", "34"],
      correctAnswer: 1
    },
    {
      id: 25,
      question: "A clock shows 3:20. What is the angle between the hour and minute hand?",
      options: ["40°", "30°", "20°", "10°"],
      correctAnswer: 3
    },
    {
      id: 26,
      question: "Which is NOT a frontend technology?",
      options: ["React", "Angular", "Vue", "Python"],
      correctAnswer: 4
    },
    {
      id: 27,
      question: "Find the missing value: 2 → 4     3 → 9     4 → 16       5 → ?",
      options: ["20", "24", "25", "30"],
      correctAnswer: 3
    },
    {
      id: 28,
      question: "How many seconds in 2.5 hours?",
      options: ["6,000", "9,000", "10,800", "7,200"],
      correctAnswer: 3
    },
    {
      id: 29,
      question: "Find missing letters: D, H, M, S, ?",
      options: ["X", "Y", "Z", "V"],
      correctAnswer: 3
    },
    {
      id: 30,
      question: "A user refreshes a page every 12 sec. How many refreshes in 2 hours?",
      options: ["400", "500", "600", "720"],
      correctAnswer: 3
    }
  ],
  Netflix: [
    {
      id: 1,
      question: "Netflix processes 250 API requests per second. How many will it process in 8 minutes?",
      options: ["80,000", "90,000", "100,000", "120,000"],
      correctAnswer: 3
    },
    {
      id: 2,
      question: "Find the missing number: 4, 12, 36, 108, ?",
      options: ["216", "324", "432", "648"],
      correctAnswer: 2
    },
    {
      id: 3,
      question: "A backend job takes 40 seconds. Optimization reduces time by 30%. New processing time?",
      options: ["20 sec", "25 sec", "28 sec", "30 sec"],
      correctAnswer: 3
    },
    {
      id: 4,
      question: "Which conclusion follows logically? Statement: All microservices produce logs. Some logs contain errors.",
      options: ["All microservices produce errors", "Some microservices might produce errors", "No microservice produces errors", "Errors are produced without logs"],
      correctAnswer: 2
    },
    {
      id: 5,
      question: "Identify the odd one out:",
      options: ["Redis", "Memcached", "Kafka", "PostgreSQL"],
      correctAnswer: 3
    },
    {
      id: 6,
      question: "A data pipeline ingests 500 MB per hour. How much data in 18 hours?",
      options: ["7.5 GB", "8 GB", "9 GB", "6 GB"],
      correctAnswer: 3
    },
    {
      id: 7,
      question: "What letter comes next? B, E, I, N, ?",
      options: ["S", "T", "U", "V"],
      correctAnswer: 2
    },
    {
      id: 8,
      question: "Which is most similar to “load balancer”?",
      options: ["API Gateway", "Cron Scheduler", "SQL Index", "CDN"],
      correctAnswer: 1
    },
    {
      id: 9,
      question: "A developer moves 10 steps north, 24 steps east, 10 steps south. How far is he from the starting point?",
      options: ["14", "24", "20", "18"],
      correctAnswer: 2
    },
    {
      id: 10,
      question: "Which number does NOT belong?  16, 25, 36, 49, 64, 81, 100, 120",
      options: ["49", "81", "120", "36"],
      correctAnswer: 3
    },
    {
      id: 11,
      question: "Netflix can serve 15,000 concurrent streams. If 40% log off, how many remain?",
      options: ["9,000", "8,500", "7,800", "6,000"],
      correctAnswer: 1
    },
    {
      id: 12,
      question: "Encode “NETFLIX” using A=1, B=2…",
      options: ["14-5-20-6-12-9-24", "15-4-19-7-14-8-22", "13-6-18-5-13-8-21", "14-4-20-5-10-7-23"],
      correctAnswer: 1
    },
    {
      id: 13,
      question: "In a backend team of 20 devs: 14 know Go, 10 know Java, 6 know both. How many know neither?",
      options: ["0", "2", "4", "6"],
      correctAnswer: 2
    },
    {
      id: 14,
      question: "Which metric measures API latency?",
      options: ["TTFB", "CPU Load", "IO Wait", "Throughput per hour"],
      correctAnswer: 1
    },
    {
      id: 15,
      question: "Find the next number: 11, 23, 47, 95, ?",
      options: ["191", "180", "200", "175"],
      correctAnswer: 1
    },
    {
      id: 16,
      question: "What is 30% of 30% of 500?",
      options: ["45", "50", "60", "40"],
      correctAnswer: 3
    },
    {
      id: 17,
      question: "Decode: If API = 1-16-9, then BACKEND = ?",
      options: ["2-1-3-11-5-14-4", "2-2-3-12-5-16-4", "3-1-3-10-5-12-4", "2-1-4-10-6-12-5"],
      correctAnswer: 1
    },
    {
      id: 18,
      question: "Which is NOT a backend technology?",
      options: ["Node.js", "Django", "Flask", "Figma"],
      correctAnswer: 4
    },
    {
      id: 19,
      question: "What comes next? AZ, BY, CX, DW, ?",
      options: ["EV", "FU", "EY", "EZ"],
      correctAnswer: 1
    },
    {
      id: 20,
      question: "A batch job runs every 75 sec. How many times in 1 hour?",
      options: ["36", "45", "48", "50"],
      correctAnswer: 3
    },
    {
      id: 21,
      question: "Average request time: 120 ms, 140 ms, 160 ms, 100 ms. Average = ?",
      options: ["130 ms", "135 ms", "140 ms", "125 ms"],
      correctAnswer: 1
    },
    {
      id: 22,
      question: "Pair pattern: (2, 4), (3, 9), (4, 16), (5, ?)",
      options: ["21", "24", "25", "30"],
      correctAnswer: 3
    },
    {
      id: 23,
      question: "DB query reduced from 400 ms to 260 ms. Percentage improvement?",
      options: ["30%", "35%", "40%", "45%"],
      correctAnswer: 2
    },
    {
      id: 24,
      question: "Find next term:  3, 8, 15, 24, ?",
      options: ["31", "34", "35", "36"],
      correctAnswer: 3
    },
    {
      id: 25,
      question: "A clock shows 4:40. Angle between hands?",
      options: ["80°", "100°", "120°", "140°"],
      correctAnswer: 2
    },
    {
      id: 26,
      question: "Which is NOT a distributed system concept?",
      options: ["Sharding", "Replication", "Transactions", "Blur filter"],
      correctAnswer: 4
    },
    {
      id: 27,
      question: "Find missing value: 5 → 25     7 → 49      8 → 64      10 → ?",
      options: ["80", "90", "100", "120"],
      correctAnswer: 3
    },
    {
      id: 28,
      question: "How many seconds in 3.5 hours?",
      options: ["9,800", "10,200", "12,600", "14,000"],
      correctAnswer: 3
    },
    {
      id: 29,
      question: "Find next letter:     G, L, R, Y, ?",
      options: ["C", "G", "E", "F"],
      correctAnswer: 2
    },
    {
      id: 30,
      question: "Netflix logs 1 event every 0.5 sec. How many events in 3 hours?",
      options: ["18,000", "21,600", "24,000", "10,800"],
      correctAnswer: 2
    }
  ],
  Tesla: [
    {
      id: 1,
      question: "A robot scans 480 components per hour. If efficiency drops by 20%, how many components will it scan in 3 hours?",
      options: ["960", "1152", "1440", "1800"],
      correctAnswer: 2
    },
    {
      id: 2,
      question: "Find the next number in the series: 7, 14, 12, 24, 22, 44, ?",
      options: ["42", "46", "88", "84"],
      correctAnswer: 1
    },
    {
      id: 3,
      question: "Tesla’s system experiences a 0.8% failure rate per 1000 operations. How many failures in 250,000 operations?",
      options: ["20", "200", "1,800", "2,000"],
      correctAnswer: 4
    },
    {
      id: 4,
      question: "Decode the pattern: XZF → YAG → ZBH → ?",
      options: ["ACI", "HCI", "ABH", "ADB"],
      correctAnswer: 1
    },
    {
      id: 5,
      question: "A sensor takes a reading every 45 seconds. How many readings in 4 hours?",
      options: ["160", "240", "320", "360"],
      correctAnswer: 3
    },
    {
      id: 6,
      question: "If the probability of a system crash is 0.02, what is the probability of no crash?",
      options: ["0.02", "0.20", "0.80", "0.98"],
      correctAnswer: 4
    },
    {
      id: 7,
      question: "Find the odd one out:",
      options: ["169", "121", "196", "128"],
      correctAnswer: 4
    },
    {
      id: 8,
      question: "A program’s runtime doubles every time input size increases by 5 units. If runtime is 3s for input 10, what is runtime for input 20?",
      options: ["6s", "9s", "12s", "24s"],
      correctAnswer: 3
    },
    {
      id: 9,
      question: "A motor rotates 1500 times per minute. How many rotations in 18 seconds?",
      options: ["225", "450", "900", "270"],
      correctAnswer: 2
    },
    {
      id: 10,
      question: "Which two symbols replace “?” ▲ ● ▲ ● ▲ ?",
      options: ["● ▲", "▲ ●", "▲ ▲", "● ●"],
      correctAnswer: 1
    },
    {
      id: 11,
      question: "A battery loses 3% charge every hour. If it starts at 80%, what is the charge after 5 hours?",
      options: ["65%", "80%", "60%", "75%"],
      correctAnswer: 1
    },
    {
      id: 12,
      question: "Find the missing number: 12 → 20    15 → 26     18 → 32       21 → ?",
      options: ["34", "36", "38", "40"],
      correctAnswer: 3
    },
    {
      id: 13,
      question: "A car travels at 72 km/h. How far will it travel in 25 minutes?",
      options: ["20 km", "24 km", "30 km", "36 km"],
      correctAnswer: 3
    },
    {
      id: 14,
      question: "Which number completes the pattern? 5, 10, 8, 16, 14, 28, ?",
      options: ["26", "22", "30", "32"],
      correctAnswer: 1
    },
    {
      id: 15,
      question: "If each letter is shifted backward by 3 positions, what does “KHOOR” become?",
      options: ["HELLO", "WORLD", "GDKKN", "JGNNQ"],
      correctAnswer: 1
    },
    {
      id: 16,
      question: "A server handles 200 requests/minute. Load increases by 15%. How many requests now?",
      options: ["215", "230", "240", "260"],
      correctAnswer: 2
    },
    {
      id: 17,
      question: "Which figure is next? ■ ◆ ■ ◆ ■ ?",
      options: ["★", "■", "◆", "●"],
      correctAnswer: 3
    },
    {
      id: 18,
      question: "Find the next number: 3, 9, 6, 12, 9, 18, ?",
      options: ["12", "15", "20", "21"],
      correctAnswer: 2
    },
    {
      id: 19,
      question: "A process takes 0.5 ms per task. How many tasks can run in 5 seconds?",
      options: ["5,000", "10,000", "12,500", "15,000"],
      correctAnswer: 2
    },
    {
      id: 20,
      question: "Find the odd one out:",
      options: ["JSON", "XML", "HTML", "SQL"],
      correctAnswer: 4
    },
    {
      id: 21,
      question: "If 3 machines finish a job in 8 hours, how long will 6 machines take (same speed)?",
      options: ["2 hours", "4 hours", "6 hours", "8 hours"],
      correctAnswer: 2
    },
    {
      id: 22,
      question: "Series: 2, 6, 12, 20, 30, ?",
      options: ["36", "40", "42", "44"],
      correctAnswer: 3
    },
    {
      id: 23,
      question: "A wheel covers 11 meters per rotation. How many rotations for 550 meters?",
      options: ["45", "48", "50", "55"],
      correctAnswer: 3
    },
    {
      id: 24,
      question: "If A=1, B=2,... Z=26, what is VALUE of “TESLA”?",
      options: ["53", "56", "57", "63"],
      correctAnswer: 3
    },
    {
      id: 25,
      question: "A vehicle increases speed by 20% from 50 km/h. New speed?",
      options: ["55", "60", "65", "70"],
      correctAnswer: 2
    },
    {
      id: 26,
      question: "What comes next? 27, 31, 30, 34, 33, ?",
      options: ["36", "37", "38", "40"],
      correctAnswer: 2
    },
    {
      id: 27,
      question: "A code multiplies a number by 3 then subtracts 4. If result is 26, original number?",
      options: ["8", "9", "10", "12"],
      correctAnswer: 3
    },
    {
      id: 28,
      question: "A drone uses 25% of battery per 12 minutes. How long until battery is empty?",
      options: ["36 min", "42 min", "48 min", "60 min"],
      correctAnswer: 3
    },
    {
      id: 29,
      question: "If 5x = 3y and y = 20, find x.",
      options: ["10", "12", "8", "6"],
      correctAnswer: 2
    },
    {
      id: 30,
      question: "Series completion: 4, 18, 100, 294, ?",
      options: ["576", "644", "728", "900"],
      correctAnswer: 2
    }
  ],
  Spotify: [
    {
      id: 1,
      question: "A data pipeline processes 45,000 records every 15 minutes. How many records in 2 hours?",
      options: ["180,000", "240,000", "360,000", "540,000"],
      correctAnswer: 3
    },
    {
      id: 2,
      question: "Find the next number: 11, 22, 18, 36, 32, 64, ?",
      options: ["56", "60", "72", "80"],
      correctAnswer: 2
    },
    {
      id: 3,
      question: "Spotify servers see a failure rate of 0.5% per 100,000 events. How many failures in 3,200,000 events?",
      options: ["80", "120", "160", "240"],
      correctAnswer: 3
    },
    {
      id: 4,
      question: "Which term completes the pattern? BDF → CEG → DFH → ?",
      options: ["EGI", "EHL", "FGI", "FIK"],
      correctAnswer: 1
    },
    {
      id: 5,
      question: "A listener listens for 75 minutes per day. How many hours in 28 days?",
      options: ["28", "32", "35", "38"],
      correctAnswer: 3
    },
    {
      id: 6,
      question: "What is the probability of not encountering an error if error rate = 0.07?",
      options: ["0.07", "0.93", "0.30", "0.70"],
      correctAnswer: 2
    },
    {
      id: 7,
      question: "Identify the odd one out:",
      options: ["121", "169", "225", "243"],
      correctAnswer: 4
    },
    {
      id: 8,
      question: "A data query takes 0.4 seconds. After optimization, speed improves by 25%. New time?",
      options: ["0.1s", "0.2s", "0.3s", "0.32s"],
      correctAnswer: 3
    },
    {
      id: 9,
      question: "A sensor logs 900 entries/minute. How many entries in 25 seconds?",
      options: ["250", "300", "375", "450"],
      correctAnswer: 3
    },
    {
      id: 10,
      question: "Pattern completion: ▲ ● ■ ▲ ● ■ ▲ ?",
      options: ["●", "■", "▲", "★"],
      correctAnswer: 1
    },
    {
      id: 11,
      question: "A dataset loses 4% of data each hour due to streaming lag. If starting with 500GB, what remains after 3 hours?",
      options: ["440 GB", "456 GB", "480 GB", "500 GB"],
      correctAnswer: 1
    },
    {
      id: 12,
      question: "Find the missing value: 40 → 48    55 → 63    70 → 78     85 → ?",
      options: ["91", "92", "93", "94"],
      correctAnswer: 3
    },
    {
      id: 13,
      question: "If a cluster runs at 120 MB/s, how much data is processed in 12 minutes?",
      options: ["86 GB", "90 GB", "110 GB", "120 GB"],
      correctAnswer: 1
    },
    {
      id: 14,
      question: "Next term: 4, 12, 9, 27, 24, 72, ?",
      options: ["60", "69", "108", "144"],
      correctAnswer: 2
    },
    {
      id: 15,
      question: "Decode: shift each letter forward by 2. “SPOTIFY” → ?",
      options: ["URQVKHA", "URQVKH", "URQWKH", "VTRXJHA"],
      correctAnswer: 1
    },
    {
      id: 16,
      question: "A stream increases from 200k plays to 260k. What is the percentage increase?",
      options: ["20%", "25%", "30%", "32%"],
      correctAnswer: 3
    },
    {
      id: 17,
      question: "Continue the pattern: ◆ ◆ ■ ◆ ◆ ■ ◆ ◆ ?",
      options: ["◆", "■", "●", "▲"],
      correctAnswer: 2
    },
    {
      id: 18,
      question: "Series: 5, 20, 15, 60, 55, 220, ?",
      options: ["210", "215", "225", "230"],
      correctAnswer: 2
    },
    {
      id: 19,
      question: "Processing time per task = 0.25 ms. Tasks processed in 1 second?",
      options: ["1,000", "2,000", "3,000", "4,000"],
      correctAnswer: 4
    },
    {
      id: 20,
      question: "Which is the odd one out?",
      options: ["CSV", "JSON", "PARQUET", "SQL"],
      correctAnswer: 4
    },
    {
      id: 21,
      question: "6 engineers finish a job in 10 hours. How long for 15 engineers?",
      options: ["2", "3", "4", "6"],
      correctAnswer: 3
    },
    {
      id: 22,
      question: "What comes next? 3, 8, 15, 24, 35, ?",
      options: ["45", "48", "50", "52"],
      correctAnswer: 2
    },
    {
      id: 23,
      question: "A user streams 13 songs per hour. How many songs in 14 hours?",
      options: ["140", "156", "182", "200"],
      correctAnswer: 3
    },
    {
      id: 24,
      question: "If A=1, B=2,... Z=26, find numeric value of “DATA”.",
      options: ["26", "31", "33", "35"],
      correctAnswer: 1
    },
    {
      id: 25,
      question: "A data transfer of 400 MB increases by 15%. New data amount?",
      options: ["420", "440", "460", "480"],
      correctAnswer: 3
    },
    {
      id: 26,
      question: "Next number: 33, 37, 34, 38, 35, ?",
      options: ["36", "39", "40", "41"],
      correctAnswer: 2
    },
    {
      id: 27,
      question: "If a number is tripled and then reduced by 8, the result is 31. Find the number.",
      options: ["11", "12", "13", "14"],
      correctAnswer: 3
    },
    {
      id: 28,
      question: "A process uses 10% CPU every 3 minutes. When will it reach 100%?",
      options: ["20 min", "25 min", "30 min", "33 min"],
      correctAnswer: 3
    },
    {
      id: 29,
      question: "If 4a = 3b and b = 48, find a.",
      options: ["24", "32", "36", "40"],
      correctAnswer: 3
    },
    {
      id: 30,
      question: "Pattern completion: 2, 10, 30, 68, ?",
      options: ["120", "130", "140", "150"],
      correctAnswer: 2
    }
  ],
  Adobe: [
    {
      id: 1,
      question: "A designer created 5 prototypes. Each prototype needs 3 hours of testing. Testing can be done by 2 testers working in parallel. What is the minimum total time?",
      options: ["7.5 hours", "6 hours", "3 hours", "9 hours"],
      correctAnswer: 1
    },
    {
      id: 2,
      question: "A UI pattern repeats every 4 screens. If a flow has 22 screens, how many cycles of repetition occur?",
      options: ["5", "5.5", "6", "7"],
      correctAnswer: 2
    },
    {
      id: 3,
      question: "A UX team labels screens as A, B, C, D, repeating this pattern. What is the label of the 37th screen?",
      options: ["A", "B", "C", "D"],
      correctAnswer: 1
    },
    {
      id: 4,
      question: "A color palette has 6 base colors. Each color can generate 4 shades. How many unique swatches?",
      options: ["10", "18", "24", "36"],
      correctAnswer: 3
    },
    {
      id: 5,
      question: "A designer completes personas in 12 days working 6 hours daily. How many days if working 4 hours daily?",
      options: ["16", "18", "20", "24"],
      correctAnswer: 2
    },
    {
      id: 6,
      question: "A usability test fails if more than 25% users struggle. In a sample of 40, how many users struggling means failure?",
      options: ["9", "10", "11", "12"],
      correctAnswer: 3
    },
    {
      id: 7,
      question: "A wireframe file is 120 MB. Each export reduces size by 25%. Final size after 2 exports?",
      options: ["90 MB", "75 MB", "67.5 MB", "60 MB"],
      correctAnswer: 3
    },
    {
      id: 8,
      question: "Buttons must follow a sequence: Circle → Square → Triangle → Circle → … What is the 15th shape?",
      options: ["Circle", "Square", "Triangle", "None"],
      correctAnswer: 3
    },
    {
      id: 9,
      question: "A design sprint has 5 phases. If each phase takes twice the previous, and phase 1 takes 1 hour, total time?",
      options: ["16 hours", "31 hours", "32 hours", "63 hours"],
      correctAnswer: 2
    },
    {
      id: 10,
      question: "A UX designer tests 60 users. 1/3 prefer layout A, the rest equally prefer B and C. How many chose C?",
      options: ["10", "15", "20", "25"],
      correctAnswer: 3
    },
    {
      id: 11,
      question: "A design system saves 10 minutes per task. If a project has 150 tasks, how much time saved?",
      options: ["25 hours", "20 hours", "15 hours", "30 hours"],
      correctAnswer: 1
    },
    {
      id: 12,
      question: "A user spends 20% of a session on navigation. If the session is 25 minutes, time spent navigating?",
      options: ["4 minutes", "5 minutes", "6 minutes", "7 minutes"],
      correctAnswer: 2
    },
    {
      id: 13,
      question: "Icon sets have 8 icons each. A project needs 50 icons. Minimum sets needed?",
      options: ["6", "7", "8", "9"],
      correctAnswer: 2
    },
    {
      id: 14,
      question: "A designer has 3 font families, each with 4 styles. If two must be paired, how many combinations?",
      options: ["6", "9", "12", "24"],
      correctAnswer: 4
    },
    {
      id: 15,
      question: "A feedback rating increases from 3.2 to 4.0. What is the percentage increase?",
      options: ["20%", "22%", "25%", "30%"],
      correctAnswer: 3
    },
    {
      id: 16,
      question: "In a sequence: 2, 6, 12, 20, 30… Next number?",
      options: ["40", "42", "45", "50"],
      correctAnswer: 2
    },
    {
      id: 17,
      question: "A designer reviews 5 screens day 1, 8 screens day 2, 11 screens day 3… How many on day 6?",
      options: ["18", "20", "23", "26"],
      correctAnswer: 2
    },
    {
      id: 18,
      question: "A navigation path allows 3 choices on Home, 2 on each sub-page. How many paths of length 2?",
      options: ["3", "6", "9", "12"],
      correctAnswer: 2
    },
    {
      id: 19,
      question: "A team reduces prototype time from 16 hours to 10 hours. Reduction percentage?",
      options: ["25%", "30%", "33.3%", "37.5%"],
      correctAnswer: 4
    },
    {
      id: 20,
      question: "A feedback form has 10 questions. Each can have 3 responses. Total unique combinations?",
      options: ["3¹⁰", "10³", "30", "100"],
      correctAnswer: 1
    },
    {
      id: 21,
      question: "A sample image loads in 4 seconds on 20 Mbps. How long at 10 Mbps?",
      options: ["8 sec", "6 sec", "4 sec", "2 sec"],
      correctAnswer: 1
    },
    {
      id: 22,
      question: "A/B tests run with 300 users each. If 45% prefer A, how many prefer B?",
      options: ["135", "150", "165", "180"],
      correctAnswer: 3
    },
    {
      id: 23,
      question: "A UI element moves 5 px, 10 px, 20 px… each step doubles. What is step 6?",
      options: ["80", "120", "160", "320"],
      correctAnswer: 3
    },
    {
      id: 24,
      question: "Team velocity increases from 10 to 15 story points. Growth factor?",
      options: ["1.3", "1.4", "1.5", "1.6"],
      correctAnswer: 3
    },
    {
      id: 25,
      question: "A designer mixes 4 colors. Each color can be paired with the others. Number of unique pairs?",
      options: ["4", "6", "8", "12"],
      correctAnswer: 2
    },
    {
      id: 26,
      question: "A sequence: 3, 9, 27, 81... Next term?",
      options: ["162", "243", "324", "405"],
      correctAnswer: 2
    },
    {
      id: 27,
      question: "A project uses 60% budget. Remaining is ₹40,000. Total budget?",
      options: ["1,00,000", "90,000", "80,000", "70,000"],
      correctAnswer: 1
    },
    {
      id: 28,
      question: "A team logs 90 hours across 5 members. Average per member?",
      options: ["15", "18", "20", "22"],
      correctAnswer: 2
    },
    {
      id: 29,
      question: "5 reviewers give scores: 6, 7, 8, 7, 6. What is the mode?",
      options: ["6", "7", "8", "None"],
      correctAnswer: 4
    },
    {
      id: 30,
      question: "A designer increases padding from 10px to 25px. What is the increase percentage?",
      options: ["150%", "140%", "125%", "60%"],
      correctAnswer: 1
    }
  ],
  IBM: [
    {
      id: 1,
      question: "A model processes 2,400 records in 3 minutes. How many will it process in 15 minutes at the same rate?",
      options: ["10,000", "12,000", "9,000", "15,000"],
      correctAnswer: 2
    },
    {
      id: 2,
      question: "What is the next number in the sequence? 3, 9, 21, 45, 93, ?",
      options: ["189", "186", "181", "201"],
      correctAnswer: 1
    },
    {
      id: 3,
      question: "An AI system has an error rate of 4%. What is the probability that all 3 predictions in a row are correct?",
      options: ["0.96", "0.884", "0.9216", "0.78"],
      correctAnswer: 2
    },
    {
      id: 4,
      question: "Which word does NOT belong? Tensor, Matrix, Vector, Gravity",
      options: ["Tensor", "Matrix", "Vector", "Gravity"],
      correctAnswer: 4
    },
    {
      id: 5,
      question: "A dataset grows by 20% each week. If its initial size is 100 GB, what will be its size after two weeks?",
      options: ["140 GB", "144 GB", "160 GB", "180 GB"],
      correctAnswer: 2
    },
    {
      id: 6,
      question: "A server takes 0.25 seconds to process one request. How many requests can it handle in 1 minute?",
      options: ["240", "200", "300", "150"],
      correctAnswer: 1
    },
    {
      id: 7,
      question: "Find the odd one out: 32, 27, 64, 125",
      options: ["32", "27", "64", "125"],
      correctAnswer: 1
    },
    {
      id: 8,
      question: "If a neural network layer has 128 neurons and each neuron connects to 64 inputs, how many weights does the layer have?",
      options: ["8192", "4096", "5120", "16384"],
      correctAnswer: 1
    },
    {
      id: 9,
      question: "What comes next in the pattern? A, C, F, J, O, ?",
      options: ["S", "T", "U", "V"],
      correctAnswer: 3
    },
    {
      id: 10,
      question: "A training job takes 12 hours on one GPU. If you use 4 identical GPUs with perfect parallelization, how long will it take?",
      options: ["3 hours", "6 hours", "4 hours", "2 hours"],
      correctAnswer: 1
    },
    {
      id: 11,
      question: "A = 1, B = 2, C = 3,... Z = 26. Find the value of: DATA",
      options: ["26", "30", "35", "32"],
      correctAnswer: 1
    },
    {
      id: 12,
      question: "A model accuracy increases from 70% to 84%. What is the percentage increase?",
      options: ["14%", "20%", "18%", "11%"],
      correctAnswer: 2
    },
    {
      id: 13,
      question: "A robot moves in this pattern: +3 steps, +5 steps, +7 steps, +9 steps … If it starts at position 0, where is it after 4 moves?",
      options: ["24", "20", "16", "18"],
      correctAnswer: 1
    },
    {
      id: 14,
      question: "Which of the following is a PRIME number?",
      options: ["81", "91", "97", "57"],
      correctAnswer: 3
    },
    {
      id: 15,
      question: "Complete the sequence: 2, 4, 12, 48, ?",
      options: ["144", "192", "240", "96"],
      correctAnswer: 3
    },
    {
      id: 16,
      question: "16. A model has precision = 0.8 and recall = 0.5. What is the F1-score?",
      options: ["0.70", "0.61", "0.55", "0.64"],
      correctAnswer: 2
    },
    {
      id: 17,
      question: "What is the missing number? 5, 10, 8, 16, 14, 28, ?",
      options: ["22", "26", "30", "32"],
      correctAnswer: 2
    },
    {
      id: 18,
      question: "A computer processes 1.5 million operations per second. How many operations in 8 seconds?",
      options: ["10 million", "12 million", "16 million", "20 million"],
      correctAnswer: 2
    },
    {
      id: 19,
      question: "If P(A) = 0.4 and P(B) = 0.5 and events are independent, what is P(A and B)?",
      options: ["0.2", "0.9", "0.25", "0.1"],
      correctAnswer: 1
    },
    {
      id: 20,
      question: "Choose the odd one out: Python, Java, C++, Jupyter Notebook",
      options: ["Python", "Java", "C++", "Jupyter Notebook"],
      correctAnswer: 4
    },
    {
      id: 21,
      question: "A researcher annotates 60 images in 45 minutes. How long for 200 images?",
      options: ["3 hours", "2.5 hours", "2 hours", "1.5 hours"],
      correctAnswer: 2
    },
    {
      id: 22,
      question: "A model predicts correctly 420 times out of 500. What is the accuracy?",
      options: ["0.84", "0.88", "0.91", "0.80"],
      correctAnswer: 1
    },
    {
      id: 23,
      question: "Complete the pattern: 11, 17, 23, 29, ?",
      options: ["34", "35", "37", "39"],
      correctAnswer: 2
    },
    {
      id: 24,
      question: "Which shape completes the pattern? ⬤ ◼︎ ⬤ ◼︎ ⬤ ?",
      options: ["⬤", "◼︎", "◆", "⬛"],
      correctAnswer: 2
    },
    {
      id: 25,
      question: "A machine learning pipeline reduces processing time from 50 minutes to 35 minutes. What is the percentage decrease?",
      options: ["20%", "30%", "25%", "15%"],
      correctAnswer: 2
    },
    {
      id: 26,
      question: "If 2 models together complete training in 12 hours, how long does one model take alone (assuming equal speed)?",
      options: ["24 hours", "30 hours", "18 hours", "12 hours"],
      correctAnswer: 1
    },
    {
      id: 27,
      question: "A sequence goes: 1, 4, 9, 16, 25, ?",
      options: ["30", "36", "32", "49"],
      correctAnswer: 2
    },
    {
      id: 28,
      question: "If CPU usage increases from 40% to 70%, what is the % increase?",
      options: ["30%", "70%", "75%", "40%"],
      correctAnswer: 3
    },
    {
      id: 29,
      question: "A variable doubles every second. If value at second 5 is 32, what was it at second 1?",
      options: ["4", "2", "8", "1"],
      correctAnswer: 2
    },
    {
      id: 30,
      question: "Which number is divisible by both 3 and 5?",
      options: ["45", "26", "55", "75"],
      correctAnswer: 1
    }
  ]
};

// Fallback to Google questions if company not found
export const getQuestions = (companyName: string): Question[] => {
  return companyQuestionSets[companyName] || companyQuestionSets.Google;
};
