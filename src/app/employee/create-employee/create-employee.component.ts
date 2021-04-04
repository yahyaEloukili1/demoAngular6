import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from "@angular/forms";
import { TestService } from "../../services/test.service";
@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  employeeForm : FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.employeeForm = new FormGroup({
      fullName: new FormControl(),
      email: new FormControl(),
      skills: new FormGroup({
        skillName : new FormControl(),
        experienceInYears : new FormControl(),
        proficiency : new FormControl(),
      })
    })

  }
  onSubmit(): void{
    console.log(this.employeeForm.controls.fullName.value)
    console.log(this.employeeForm.get('fullName').value)
    console.log(this.employeeForm.value)
  }
  onLoadDataClick(){
    this.employeeForm.patchValue({
      fullName : 'Pregim technologies',
      email : 'pragim@pragimtech.com',
      // skills : {
      //   skillName : 'c#',
      //   experienceInYears :5,
      //   proficiency : 'beginner'
      // }
    })
  }
}
