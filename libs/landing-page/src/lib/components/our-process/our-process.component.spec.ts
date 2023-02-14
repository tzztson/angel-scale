/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { OurProcessComponent } from './our-process.component';

describe('OurProcessComponent', () => {
  let component: OurProcessComponent;
  let fixture: ComponentFixture<OurProcessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurProcessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
