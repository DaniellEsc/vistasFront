import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FichaAbordajeComponent } from './ficha-abordaje.component';

describe('FichaAbordajeComponent', () => {
  let component: FichaAbordajeComponent;
  let fixture: ComponentFixture<FichaAbordajeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FichaAbordajeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FichaAbordajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
