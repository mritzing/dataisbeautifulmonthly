import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrugPolarChartsComponent } from './drug-polar-charts.component';

describe('DrugPolarChartsComponent', () => {
  let component: DrugPolarChartsComponent;
  let fixture: ComponentFixture<DrugPolarChartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrugPolarChartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrugPolarChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
