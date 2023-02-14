/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BestConsultantSecondComponent } from './best-consultant-second.component';

describe('BestConsultantSecondComponent', () => {
  let component: BestConsultantSecondComponent;
  let fixture: ComponentFixture<BestConsultantSecondComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BestConsultantSecondComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BestConsultantSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
