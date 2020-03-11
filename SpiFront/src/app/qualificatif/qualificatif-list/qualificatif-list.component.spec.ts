import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QualificatifListComponent } from './qualificatif-list.component';

describe('QualificatifListComponent', () => {
  let component: QualificatifListComponent;
  let fixture: ComponentFixture<QualificatifListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QualificatifListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QualificatifListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
