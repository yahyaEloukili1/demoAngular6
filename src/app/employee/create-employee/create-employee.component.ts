import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder,Validators } from "@angular/forms";
import { TestService } from "../../services/test.service";
@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  employeeForm : FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.employeeForm = this.fb.group({
      fullName : ['',[Validators.required,Validators.minLength(2),Validators.maxLength(10)]],
      email : [''],
      skills : this.fb.group({
        skillName: [''],
        experienceInYears : [''],
        proficiency : ['']
      })
    })

  }
  logKeyValuePairs(group: FormGroup): void{
      Object.keys(group.controls).forEach((key : string)=>{
       const abstractControl =  group.get(key)
       if(abstractControl instanceof FormGroup){
         this.logKeyValuePairs(abstractControl)
       }else{
         abstractControl.disable()
       }
      });

  }
  onSubmit(): void{
    console.log(this.employeeForm.controls.fullName.value)
    console.log(this.employeeForm.get('fullName').errors)
    console.log(this.employeeForm.value)
  }
  onLoadDataClick(){
    this.logKeyValuePairs(this.employeeForm);
  }
}
