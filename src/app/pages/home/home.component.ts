import { Component, OnInit } from '@angular/core';
import { QuizComponent } from "../../components/quiz/quiz.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [QuizComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  contructor() {

  }

  ngOnInit(): void {
   var x = 0; 
   var y = ++x + x++
   

   console.log('-------xxx------')
   console.log(y)
  }


}
