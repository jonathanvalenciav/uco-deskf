import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormNewProjectComponent } from './form-new-project.component';

describe('FormNewProjectComponent', () => {
  let component: FormNewProjectComponent;
  let fixture: ComponentFixture<FormNewProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormNewProjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormNewProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
