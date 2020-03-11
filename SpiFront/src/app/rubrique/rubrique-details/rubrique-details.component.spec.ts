import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RubriqueDetailsComponent } from './rubrique-details.component';

describe('RubriqueDetailsComponent', () => {
  let component: RubriqueDetailsComponent;
  let fixture: ComponentFixture<RubriqueDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RubriqueDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RubriqueDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
