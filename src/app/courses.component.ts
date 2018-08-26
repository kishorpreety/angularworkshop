import { CourseComponent } from './course/course.component';
import { browser } from 'protractor';
import { CoursesService } from './courses.service';
import{ Component } from '@angular/core';

@Component({
    selector:'courses' ,
    template: `
    <h2>{{ title }}</h2>
    <h2 [textContent]="title"></h2>
    <ul>
        <li *ngFor="let course of courses">
            {{ course }}
        </li>
    </ul>
     <img src="{{imageUrl}}" />
    <img [src]="imgUrl" />
    <table>
        <tr>
            <td [attr.colspan]="colSpan">{{ tdTitle }}</td>
        </tr>
    </table>  
    <button class="btn btn-primary" [class.active]="isActive"> Save</button>  <br/>   
    <button [style.backgroundColor]="isActive ? 'blue' : 'white'"> Submit </button><br/>
   <div (click)="onDivClicked()">
    <button (click)="onSave($event)">Save</button><br/>
   </div> 
   <input (keyup)="onKeyUp($event)"/><br/>
   <input (keyup.enter)="onKeyEnter()"/><br/>
   <input (keyup.enter)="onKey_Enter($event)"/><br/>
   <input #email (keyup.enter)="onKeyEmail(email.value)"/><br/>
  <!--pipe-->
    {{ course.title | uppercase }} <br/>
    {{ course.students | number }} <br/>
    {{ course.rating | number:'1.1-1' }} <br/>
    {{ course.price | currency:'INR':true:'3.2-2' }} <br/>
    {{ course.releaseDate | date:'shortDate'}}  <br/> <br/> <br/>
    {{ text | summary:10 }}
   
    `  
})
export class CoursesComponent{
    text = `In today's fast paced working environment, you need to learn "on the go". e-Learning allows you to learn “your way" by providing learning resources in a flexible, global and agile way`
    title="List of Courses";
    tdTitle="item1"
    imgUrl="https://loremflickr.com/320/240/dog";
    courses;
    imageUrl ="https://loremflickr.com/320/240/dog";
     colSpan = 2;
    constructor(){
        let service = new CoursesService();
        this.courses = service.getCourses();
    }
    isActive= true;
    onDivClicked(){
        console.log("Div was clicked")
    }

    onSave($event){
        $event.stopPropagation();
        console.log("Button was clicked", $event)
    }
    onKeyUp($event){
        if($event.keyCode ===13)console.log("Enter was pressed")

    }
    onKeyEnter(){
        console.log("Enter was pressed")
    }
    onKey_Enter($event){
        console.log($event.target.value);
    }

    onKeyEmail(email){
        console.log(email);
    }

    course={
        title: "The complete Angular course",
        rating: 4.9745,
        students: 30123,
        price: 190.95,
        releaseDate: new Date(2016, 3 ,1)
    }

    //getTitle(){
     //   return this.title;
   // }
    //logic for calling an HTTP service

}