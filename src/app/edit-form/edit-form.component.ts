import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.css']
})
export class EditFormComponent {
  studentForm!:FormGroup;
  constructor(private fb:FormBuilder){
    this.studentForm=this.fb.group({
      Rollno:['',Validators.required],
      Name:['',Validators.required],
      Attendance:['',Validators.required],
      Performance:['',Validators.required]
    })
  }
  editDetail(){
    const student= this.studentForm.value;
    console.log(student);
  }

}
