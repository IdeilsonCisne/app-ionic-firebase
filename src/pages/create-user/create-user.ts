import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ValidateConfirmPassword } from '../../validators/confirmPassword';

@IonicPage({
  name: 'create-user'
})
@Component({
  selector: 'page-create-user',
  templateUrl: 'create-user.html',
})
export class CreateUserPage {

  registerForm: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, public formbuilder: FormBuilder) {
    this.registerForm = this.formbuilder.group({
      name: [null, [Validators.required, Validators.minLength(5)]],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(6)]],
      confirmPassword: [null, [Validators.required, Validators.minLength(6), ValidateConfirmPassword]]
    })
  }

  submitForm(){
    console.log(this.registerForm.value)
  }

}
