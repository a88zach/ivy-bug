import { Component, Optional } from '@angular/core';

// @Component({
//   template: '',
// })
export abstract class AppBaseComponent {
  display = 'test';

  constructor(@Optional() optionalVar?: string) {
    if (optionalVar) {
      this.display = optionalVar;
    }
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent extends AppBaseComponent {

}
