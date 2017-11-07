import { Component } from '@angular/core';

@Component({
  selector: 'app-person',
  template: `
    <h2>{{heading}}</h2>
    <p>
      Name: {{person.sex === 'm' ? 'Mr' : 'Ms'}}
      {{person.name.first + ' ' + person.name.surname}}
    </p>
    <p>City: {{person.address?.city}}</p>`
})
export class PersonComponent {

  heading = 'Person Details';

  person: any = {
    name: {
      first: 'Harry',
      surname: 'Angel'
    },
    sex: 'm'
  };
}
