import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TomorrowForecastComponent } from './tomorrow-forecast.component';

describe('TomorrowForecastComponent', () => {
  let component: TomorrowForecastComponent;
  let fixture: ComponentFixture<TomorrowForecastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TomorrowForecastComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TomorrowForecastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
