import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglePizzaItemComponent } from './single-pizza-item.component';

describe('SinglePizzaItemComponent', () => {
  let component: SinglePizzaItemComponent;
  let fixture: ComponentFixture<SinglePizzaItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SinglePizzaItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SinglePizzaItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
