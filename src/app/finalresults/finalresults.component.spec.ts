import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalresultsComponent } from './finalresults.component';

describe('FinalresultsComponent', () => {
  let component: FinalresultsComponent;
  let fixture: ComponentFixture<FinalresultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinalresultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalresultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
