// app.component.ts

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div style="text-align:center;">
      <h1>
        Welcome to {{ title }}!
      </h1>
      <label for="myTextField">Enter Text:</label>
      <input type="text" id="myTextField" [(ngModel)]="inputText" />
      <br />
      <p style="color: blue;">Static Text: Marvellous Infosystems</p>
    </div>
  `,
})
export class AppComponent {
  title = 'Assignement-6_3';
  inputText: string = '';
}
