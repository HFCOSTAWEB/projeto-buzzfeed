import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import quizz_questions from '../../../../public/data/quizz_questions.json'


@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.css'
})
export class QuizComponent implements OnInit{

  title:string = '';

  questions:any
  questionSelected:any

  answers:string[] = []
  answersSelected:string = ''

  questionIndex: number = 0
  questionMaxIndex:number = 0

  finished:boolean = false

  contructor() {}

  ngOnInit(): void {
    if(quizz_questions){

      this.finished = false
      this.title = quizz_questions.title

      this.questions = quizz_questions.questions
      this.questionSelected = this.questions[this.questionIndex]

      this.questionIndex = 0
      this.questionMaxIndex = this.questions.length

      console.log(this.questionSelected)
    }

  }


  playerChoose(value:string){
     this.answers.push(value)
     this.nextStep()         
  }


  async nextStep(){
    this.questionIndex+=1

    if(this.questionMaxIndex > this.questionIndex){
      this.questionSelected = this.questions[this.questionIndex]
    }else{
      const finalAnswer:string = await this.checkResult(this.answers)
      this.finished = true
      this.answersSelected = quizz_questions.results[finalAnswer as keyof 
        typeof quizz_questions.results]
    }
  }



  async checkResult(anwsers:string[]){
    const result = anwsers.reduce((previous, current, i, arr) =>{
      if(arr.filter(item => item === previous).length > 
         arr.filter(item => item === current).length              
        ){
            return previous
      }else{
        return current
      }
    })

    return result
  }
}
