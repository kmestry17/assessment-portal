export const exams = [
  {
    id: 1,
    title: "Math Exam",
    totalScore: 10, // Total score of the exam
    allowedUsers: [1, 2], // User IDs allowed to take this exam
    questions: [
      {
        id: 1,
        question: "What is 2 + 2?",
        options: ["2", "3", "4", "5"],
        correctAnswer: "4",
        weight: 5,
        negativeMarking: true,
        negativeScore: -3,
      },
      {
        id: 2,
        question: "What is 3 x 3?",
        options: ["6", "7", "8", "9"],
        correctAnswer: "9",
        weight: 5,
        negativeMarking: false,
        negativeScore: 0, // Not used since negativeMarking is false
      },
    ],
  },
  {
    id: 2,
    title: "Science Exam",
    totalScore: 15, // Total score of the exam
    allowedUsers: [2], // User IDs allowed to take this exam
    questions: [
      {
        id: 1,
        question: "What planet is closest to the sun?",
        options: ["Venus", "Earth", "Mercury", "Mars"],
        correctAnswer: "Mercury",
        weight: 5,
        negativeMarking: true,
        negativeScore: -2,
      },
      {
        id: 2,
        question: "What is H2O commonly known as?",
        options: ["Salt", "Oxygen", "Water", "Hydrogen"],
        correctAnswer: "Water",
        weight: 4,
        negativeMarking: false,
        negativeScore: 0, // Not used since negativeMarking is false
      },
    ],
  },
];
