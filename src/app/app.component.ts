import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  template: `
    <app-person *ngIf="showSection('person')"></app-person>
    <app-calc *ngIf="showSection('calc')"></app-calc>
    <app-escape *ngIf="showSection('escape')"></app-escape>
  `
})
export class AppComponent {

  showSection(name: string): boolean {
    if (!window.location.search) {
      return true;
    }
    const PARAM = window.location.search.substr(1);
    return PARAM === name;
  }

}
