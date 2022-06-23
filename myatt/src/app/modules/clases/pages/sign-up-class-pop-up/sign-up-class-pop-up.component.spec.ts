import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpClassPopUpComponent } from './sign-up-class-pop-up.component';

describe('SignUpClassPopUpComponent', () => {
  let component: SignUpClassPopUpComponent;
  let fixture: ComponentFixture<SignUpClassPopUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignUpClassPopUpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignUpClassPopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
