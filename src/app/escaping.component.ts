import { Component } from '@angular/core';

@Component({
  selector: 'app-escape',
  template: `
    <h2>Escape</h2>
    <p>{{html}}</p>
    <p>{{script}}</p>
    <p>
      For HTML, don't use {{stars}},
      use <span [innerHTML]="stars"></span> instead
    </p>
    <p>Evaluate: {{variable}}</p>
    <p ngNonBindable>Do not evaluate: {{variable}}</p>`
})
export class EscapingComponent {

  html = '<div>this is a div</div>';
  script = '<script>alert("danger!")</script>';
  variable = 'abc';

  get stars(): string {
    return '&#10032;'.repeat(4);
  }
}
