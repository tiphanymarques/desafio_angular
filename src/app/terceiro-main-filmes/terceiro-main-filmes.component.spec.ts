import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerceiroMainFilmesComponent } from './terceiro-main-filmes.component';

describe('TerceiroMainFilmesComponent', () => {
  let component: TerceiroMainFilmesComponent;
  let fixture: ComponentFixture<TerceiroMainFilmesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TerceiroMainFilmesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TerceiroMainFilmesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
