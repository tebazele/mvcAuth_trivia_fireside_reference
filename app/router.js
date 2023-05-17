import { AboutController } from "./controllers/AboutController.js";
import { HomeController } from "./controllers/HomeController.js";
import { QuestionsController } from "./controllers/QuestionsController.js";

export const router = [
  {
    path: '',
    controller: QuestionsController
  },
  {
    path: '#/about',
    controller: AboutController
  },

]