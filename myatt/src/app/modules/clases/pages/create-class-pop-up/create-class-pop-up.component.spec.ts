import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateClassPopUpComponent } from './create-class-pop-up.component';

describe('CreateClassPopUpComponent', () => {
  let component: CreateClassPopUpComponent;
  let fixture: ComponentFixture<CreateClassPopUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateClassPopUpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateClassPopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
