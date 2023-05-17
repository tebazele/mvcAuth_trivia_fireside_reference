import { AppState } from '../AppState.js';
import { Question } from '../models/Question.js';
import { triviaApi } from './AxiosService.js';

class QuestionsService {
    async getQuestions() {
        const res = await triviaApi.get()
        // console.log(res.data.results);
        AppState.question = new Question(res.data.results[0]);
        console.log(AppState.question);
    }

}

export const questionsService = new QuestionsService();