import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-page-login',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './page-login.component.html',
  styleUrl: './page-login.component.scss',
})
export class PageLoginComponent {
  processFormSubmission(e: SubmitEvent) {
    e.preventDefault();

    // typeguard
    if (e.target === null)
      throw new Error(`Could not find the form for submission event!`);
    if (!(e.target instanceof HTMLFormElement))
      throw new Error(`Target of submission event is not a form!`);

    // extract submitted data
    const formData = new FormData(e.target);

    // debug
    console.log(formData);
  }
}
