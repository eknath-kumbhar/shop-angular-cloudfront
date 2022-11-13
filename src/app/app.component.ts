import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  constructor() {
    const token = 'ZWtuYXRoa3VtYmhhcjpURVNUX1BBU1NXT1JE';
    localStorage.setItem('authorization_token', token);
  }
}
