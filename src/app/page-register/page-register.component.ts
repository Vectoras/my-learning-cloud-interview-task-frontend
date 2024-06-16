import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-page-register',
  standalone: true,
  imports: [RouterModule, NgClass],
  templateUrl: './page-register.component.html',
  styleUrl: './page-register.component.scss',
})
export class PageRegisterComponent {

  // state

  isValidForm = true;

  // methods

  processFormSubmission(e: SubmitEvent): void {
    e.preventDefault();

    // typeguard
    if (e.target === null)
      throw new Error(`Could not find the form for submission event!`);
    if (!(e.target instanceof HTMLFormElement))
      throw new Error(`Target of submission event is not a form!`);

    // extract submitted data
    const formData = new FormData(e.target);

    // validate
    this.isValidForm = this.checkIfValidForm(formData);

    // debug
    console.log(formData);
  }

  invalidateField(fieldName: string): void {
    const fieldEl = document.querySelector(`input[name='${fieldName}']`);
    fieldEl?.classList.add('invalid');

    console.log('fieldName: ', fieldName);
    console.log('fieldEl: ', fieldEl);

  }

  removeFiedlInvalidation(fieldName: string): void {
    const fieldEl = document.querySelector(`input[name='${fieldName}']`);
    fieldEl?.classList.remove('invalid');
  }

  checkIfValidForm(formData: FormData): boolean {

    // assume it will be valid and check bellow
    let isValid = true;

    // --- firstname

    const firstname = formData.get('firstname');
    // check if exists
    if(!firstname) {
      this.invalidateField('firstname');
      isValid = false;
    } 
    // check if valid (only alphabetic characters)
    else if (!firstname.toString().match(/^[a-zA-Z]*$/)) {
      this.invalidateField('firstname');
      isValid = false;
    } 
    // remove invalidation in case it has been placed before
    else {
      this.removeFiedlInvalidation('firstname');
    }

    // --- lastname

    const lastname = formData.get('lastname');
    // check if exists
    if(!lastname) {
      this.invalidateField('lastname');
      isValid = false;
    } 
    // check if valid (only alphabetic characters)
    else if (!lastname.toString().match(/^[a-zA-Z]*$/)) {
      this.invalidateField('lastname');
      isValid = false;
    } 
    // remove invalidation in case it has been placed before
    else {
      this.removeFiedlInvalidation('lastname');
    }

    // --- email

    const email = formData.get('email');
    // check if exists
    if(!email) {
      this.invalidateField('email');
      isValid = false;
    } 
    // check if valid (username@domain.tld)
    else if (!email.toString().match(/^[^\s@]+@([^\s@.,]+\.)+[^\s@.,]{2,}$/)) {
      this.invalidateField('email');
      isValid = false;
    }
    // remove invalidation in case it has been placed before
    else {
      this.removeFiedlInvalidation('email');
    }

    // --- dob

    const dob = formData.get('dob');
    // check if exists
    if(!dob) {
      this.invalidateField('dob');
      isValid = false;
    }
    // remove invalidation in case it has been placed before
    else {
      this.removeFiedlInvalidation('dob');
    }

    // --- username

    const username = formData.get('username');
    // check if exists
    if(!username) {
      this.invalidateField('username');
      isValid = false;
    } 
    // check if valid (only alphabetic characters and digits)
    else if (!username.toString().match(/^[a-zA-Z0-9]*$/)) {
      this.invalidateField('username');
      isValid = false;
    } 
    // remove invalidation in case it has been placed before
    else {
      this.removeFiedlInvalidation('username');
    }

    // --- password

    const password = formData.get('password');
    // check if exists
    if(!password) {
      this.invalidateField('password');
      isValid = false;
    } 
    // check if valid (min 8 charcters of which at least on uppercase, one lowercase, one digit, one special)
    else if (!password.toString().match(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/)) {
      this.invalidateField('password');
      isValid = false;
    }
    // remove invalidation in case it has been placed before
    else {
      this.removeFiedlInvalidation('password');
    }


    // return valid status
    return isValid;
  }
}
