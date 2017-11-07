import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { CalcComponent } from './calc.component';
import { EscapingComponent } from './escaping.component';
import { PersonComponent } from './person.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        CalcComponent,
        EscapingComponent,
        PersonComponent
      ],
    }).compileComponents();
  }));
  it(`should have some tests`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    // test here
  }));
});
