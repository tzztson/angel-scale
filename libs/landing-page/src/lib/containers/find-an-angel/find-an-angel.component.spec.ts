import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindAnAngelLandingPageComponent } from './find-an-angel.component';

describe('LandingComponent', () => {
  let component: FindAnAngelLandingPageComponent;
  let fixture: ComponentFixture<FindAnAngelLandingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FindAnAngelLandingPageComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindAnAngelLandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
