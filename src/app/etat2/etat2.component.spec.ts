import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Etat2Component } from './etat2.component';

describe('Etat2Component', () => {
  let component: Etat2Component;
  let fixture: ComponentFixture<Etat2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Etat2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Etat2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
