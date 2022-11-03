import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuartoMainGeneroComponent } from './quarto-main-genero.component';

describe('QuartoMainGeneroComponent', () => {
  let component: QuartoMainGeneroComponent;
  let fixture: ComponentFixture<QuartoMainGeneroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuartoMainGeneroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuartoMainGeneroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
