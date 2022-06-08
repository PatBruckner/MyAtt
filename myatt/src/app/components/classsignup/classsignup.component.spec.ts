import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClasssignupComponent } from './classsignup.component';

describe('ClasssignupComponent', () => {
  let component: ClasssignupComponent;
  let fixture: ComponentFixture<ClasssignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClasssignupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClasssignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
