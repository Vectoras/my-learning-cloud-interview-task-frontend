import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-page-login',
  standalone: true,
  imports: [RouterModule, NgClass],
  templateUrl: './page-login.component.html',
  styleUrl: './page-login.component.scss',
})
export class PageLoginComponent {
  // state

  validState: "valid" | "invalid" | null = null;
  validationMessage = "";

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
    const isValidForm = this.checkIfValidForm(formData);

    // action based on validation
    if(isValidForm) {
      e.target.reset();
      this.validationMessage = 'Successfully submitted';
      this.validState = "valid";
      // debug
    console.log(formData);
    } else {
      this.validationMessage = 'Please review the invalid fields!';
      this.validState = "invalid";
    }

    
  }

  invalidateField(fieldName: string): void {
    const fieldEl = document.querySelector(`input[name='${fieldName}']`);
    fieldEl?.classList.add('invalid');
  }

  removeFiedlInvalidation(fieldName: string): void {
    const fieldEl = document.querySelector(`input[name='${fieldName}']`);
    fieldEl?.classList.remove('invalid');
  }

  checkIfValidForm(formData: FormData): boolean {
    // assume it will be valid and check bellow
    let isValid = true;

    // --- username

    const username = formData.get('username');
    // check if exists
    if (!username) {
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
    if (!password) {
      this.invalidateField('password');
      isValid = false;
    }
    // check if valid (min 8 charcters of which at least on uppercase, one lowercase, one digit, one special)
    else if (
      !password
        .toString()
        .match(
          /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/
        )
    ) {
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
