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
  validationMessages = {
    'fullName': {
      'required': 'Full Name is required.',
      'minlength': 'Full Name must be greater than 2 characters.',
      'maxlength': 'Full Name must be less than 10 characters.'
    },
    'email': {
      'required': 'Email is required.'
    },
    'skillName': {
      'required': 'Skill Name is required.',
    },
    'experienceInYears': {
      'required': 'Experience is required.',
    },
    'proficiency': {
      'required': 'Proficiency is required.',
    },
  };
  formErrors = {
    'fullName': '',
    'email': '',
    'skillName': '',
    'experienceInYears': '',
    'proficiency': ''
  };
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.employeeForm = this.fb.group({
      fullName : ['',[Validators.required,Validators.minLength(2),Validators.maxLength(10)]],
      email : ['',Validators.required],
      skills : this.fb.group({
        skillName: ['',Validators.required],
        experienceInYears : ['',Validators.required],
        proficiency : ['',Validators.required]
      })
    })
this.employeeForm.valueChanges.subscribe(data=>{
  this.logValidationErrors(this.employeeForm)
})
  }
  logValidationErrors(group: FormGroup = this.employeeForm): void{
      Object.keys(group.controls).forEach((key : string)=>{
       const abstractControl =  group.get(key)
       if(abstractControl instanceof FormGroup){
         this.logValidationErrors(abstractControl)
       }else{
        this.formErrors[key] = ''
        if(abstractControl && !abstractControl.valid &&( abstractControl.touched || abstractControl.dirty)){
          const messages = this.validationMessages[key];
          for(const errorKey in abstractControl.errors){
            if(errorKey){
              this.formErrors[key]+= messages[errorKey] + ' ';
            }
          }
        }
       }
      });

  }
  onSubmit(): void{
    // console.log(this.employeeForm.controls.fullName.value)
    // console.log(this.employeeForm.get('fullName').errors)
    // console.log(this.employeeForm.value)
  }
  onLoadDataClick(){
    // this.logValidationErrors(this.employeeForm);
    // console.log(this.formErrors)
  }
}
