import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyAngelScaleLangingPageComponent } from './why-angel-scale-langing-page.component';

describe('WhyAngelScaleLangingPageComponent', () => {
  let component: WhyAngelScaleLangingPageComponent;
  let fixture: ComponentFixture<WhyAngelScaleLangingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WhyAngelScaleLangingPageComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhyAngelScaleLangingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
