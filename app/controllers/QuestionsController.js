import { AppState } from '../AppState.js';
import { Pop } from '../utils/Pop.js';
import { questionsService } from '../services/QuestionsService.js';
import { setHTML } from '../utils/Writer.js';

function _drawQuestion() {
    setHTML('trivia-container', AppState.question.QuestionTemplate)
}

export class QuestionsController {
    constructor() {
        console.log('hello from the questions controller');
        this.getQuestions()
        AppState.on('question', _drawQuestion)
    }

    async getQuestions() {
        try {
            await questionsService.getQuestions();
        } catch (error) {
            Pop.error(error)
            console.error(error)
        }
    }

    checkAnswer(answer) {
        if (answer == AppState.question.correct_answer) {
            Pop.toast('CONGRATS!')
            this.getQuestions()
        } else {
            Pop.error("Nope, but I'm sure you'll do better next time!")
        }
    }

    updateScore(name, value) {
        if (name == 'jeanne') {
            AppState.jeannePoints += value
            document.getElementById('jeanne-points').innerText = AppState.jeannePoints.toString()
        } else {
            AppState.classPoints += value
            document.getElementById('class-points').innerText = AppState.classPoints.toString()
        }

    }
}