import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Esercizio2Component } from './esercizio2.component';

describe('Esercizio2Component', () => {
  let component: Esercizio2Component;
  let fixture: ComponentFixture<Esercizio2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Esercizio2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Esercizio2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
