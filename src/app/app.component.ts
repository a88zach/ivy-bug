import { Component, Optional, Directive } from '@angular/core';

@Directive()
export abstract class AppBaseDirective {
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
export class AppComponent extends AppBaseDirective {
  constructor() {
    // super(); // this now works and sets display to 'test'
    super('override'); // this now works and sets display to 'override'
  }
}
