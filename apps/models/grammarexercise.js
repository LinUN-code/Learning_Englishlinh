class Question {
    question;
    type;
    correctAnswer;
    explanation;
    options = [];
}

class GrammarExercise {
    _id;
    title;
    createdAt = new Date();
    questions = [];


    addQuestion(question, type, correctAnswer, explanation, options = []) {
        const newQuestion = new Question();
        newQuestion.question = question;
        newQuestion.type = type;
        newQuestion.correctAnswer = correctAnswer;
        newQuestion.explanation = explanation;
        newQuestion.options = type === 'multiple-choice' ? options : [];
        this.questions.push(newQuestion);
    }
    constructor() {
        
    }
}

module.exports = GrammarExercise;
