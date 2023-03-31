import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FichaSocialComponent } from './ficha-social.component';

describe('FichaSocialComponent', () => {
  let component: FichaSocialComponent;
  let fixture: ComponentFixture<FichaSocialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FichaSocialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FichaSocialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
