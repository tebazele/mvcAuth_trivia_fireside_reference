export class Question {
  constructor(data) {
    this.type = data.type
    this.difficulty = data.difficulty
    this.question = data.question
    // this.correct_answer = data.correct_answer
    // NOTE if there's time, show off how to clean the answer of weird characters
    this.correct_answer = this.cleanString(data.correct_answer)
    this.incorrect_answers = data.incorrect_answers
    this.category = data.category
    this.choices = [...data.incorrect_answers, data.correct_answer]
  }


  get QuestionTemplate() {
    if (this.type == 'boolean') {

      this.choices.sort(() => Math.random() - 0.5)

      this.choices.sort(() => Math.random() - 0.5)

      this.choices.sort(() => Math.random() - 0.5)
      return `<section class="row justify-content-center">
        <div class="col-10 text-center">
          <p>${this.question}</p>
        </div>
      </section>
      <section class="row">
        <div class="col-12 text-center">
          <button class="btn btn-primary" onclick="app.QuestionsController.checkAnswer('${this.choices[0]}')">${this.choices[0]}</button>
          <button class="btn btn-primary" onclick="app.QuestionsController.checkAnswer('${this.choices[1]}')">${this.choices[1]}</button>
        </div>
      </section>`
    } else {
      return `<section class="row justify-content-center">
        <div class="col-10">
          <p>${this.question}</p>
        </div>
      </section>
      <section class="row">
        <div class="col-12 text-center">
          ${this.MultipleTemplate}
        </div>
      </section>`
    }
  }

  get MultipleTemplate() {
    // @ts-ignore
    this.choices.sort(() => Math.random() - 0.5)
    this.choices.sort(() => Math.random() - 0.5)
    this.choices.sort(() => Math.random() - 0.5)
    let template = ''
    this.choices.forEach(a => {
      template += `<button class="btn btn-primary m-2" onclick="app.QuestionsController.checkAnswer('${a}')">${a}</button>`
    })
    return template;
  }

  // NOTE if there's time, show off how to use methods in your model
  cleanString(string) {
    let txtElem = document.createElement("textarea");
    txtElem.innerHTML = string;
    return txtElem.value;
  }

}