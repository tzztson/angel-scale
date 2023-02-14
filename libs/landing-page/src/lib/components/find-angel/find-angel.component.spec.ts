/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FindAngelComponent } from './find-angel.component';

describe('FindAngelComponent', () => {
  let component: FindAngelComponent;
  let fixture: ComponentFixture<FindAngelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindAngelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindAngelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
