import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReccurenceComponent } from './reccurence.component';

describe('ReccurenceComponent', () => {
  let component: ReccurenceComponent;
  let fixture: ComponentFixture<ReccurenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReccurenceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReccurenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
