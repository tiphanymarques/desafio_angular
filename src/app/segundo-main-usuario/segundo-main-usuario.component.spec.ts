import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SegundoMainUsuarioComponent } from './segundo-main-usuario.component';

describe('SegundoMainUsuarioComponent', () => {
  let component: SegundoMainUsuarioComponent;
  let fixture: ComponentFixture<SegundoMainUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SegundoMainUsuarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SegundoMainUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
