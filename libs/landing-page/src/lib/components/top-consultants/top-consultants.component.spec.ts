/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TopConsultantsComponent } from './top-consultants.component';

describe('TopConsultantsComponent', () => {
  let component: TopConsultantsComponent;
  let fixture: ComponentFixture<TopConsultantsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopConsultantsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopConsultantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
