import { Component } from '@angular/core';
// importing components
import { AppNavComponent } from './app-nav/app-nav.component';
import { AppFooterComponent } from './app-footer/app-footer.component';
import { AppPageComponent } from './app-page/app-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AppNavComponent, AppFooterComponent, AppPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Assessment';
}
