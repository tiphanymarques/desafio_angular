import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimeiroMainComponent } from './primeiro-main.component';

describe('PrimeiroMainComponent', () => {
  let component: PrimeiroMainComponent;
  let fixture: ComponentFixture<PrimeiroMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrimeiroMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrimeiroMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
