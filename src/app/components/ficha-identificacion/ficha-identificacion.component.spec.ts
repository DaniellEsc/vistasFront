import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FichaIdentificacionComponent } from './ficha-identificacion.component';

describe('FichaIdentificacionComponent', () => {
  let component: FichaIdentificacionComponent;
  let fixture: ComponentFixture<FichaIdentificacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FichaIdentificacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FichaIdentificacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
