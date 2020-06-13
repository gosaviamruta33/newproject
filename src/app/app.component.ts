import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ReactiveForm';

  submit = false;
  registrationform: FormGroup;
  constructor(private fb:FormBuilder){}

  // registrationform = new FormGroup({
  //   FirstName: new FormControl('Vicky'),
  //   LastName: new FormControl(''),
  //   Email: new FormControl(''),
  //   Phone: new FormControl(''),
  //   Address: new FormControl('')
  // })
  ngOnInit(){
    this.registrationform = this.fb.group({
      FirstName: ['',Validators.required],
      LastName: ['',Validators.required],
      Email: ['',[Validators.required,
        Validators.pattern('[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,3}')]],
      Phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      Address: ['',Validators.required]
    });
  }

  get f(){
    return this.registrationform.controls;
  }

  onSubmit()
  {
    if(this.registrationform.invalid){
      return;
    }

    alert('Success:' + JSON.stringify(this.registrationform.value))
    this.registrationform.reset();

  }

  // get lname(){
  //   return this.registrationform.get("LastName");
  // }

  // get email(){
  //   return this.registrationform.get("Email");
  // }

  // get phone(){
  //   return this.registrationform.get("Phone");
  // }

  // get addr(){
  //   return this.registrationform.get("Address");
  // }
}
