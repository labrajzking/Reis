import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartbalayagesComponent } from './startbalayages.component';

describe('StartbalayagesComponent', () => {
  let component: StartbalayagesComponent;
  let fixture: ComponentFixture<StartbalayagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartbalayagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartbalayagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
