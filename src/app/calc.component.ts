import { Component } from '@angular/core';

@Component({
  selector: 'app-calc',
  template: `
    <h2>Calc</h2>
    <p>
      <input #num1 type="number" value="{{init.first}}" (input)="0">
      <input #num2 type="number" value="{{init.second}}" (input)="0">
    </p>
    <p>
      Sum: {{num1.valueAsNumber + num2.valueAsNumber}},
      Largest: {{max(num1.valueAsNumber, num2.valueAsNumber)}}
    </p>`
})
export class CalcComponent {

  get init(): any {
    return {
      first: 11,
      second: 22
    };
  }

  max(first: number, second: number): number {
    return Math.max(first, second);
  }
}
