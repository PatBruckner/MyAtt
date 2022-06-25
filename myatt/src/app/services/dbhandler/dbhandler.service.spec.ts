import { TestBed } from '@angular/core/testing';

import { DbhandlerService } from './dbhandler.service';

describe('DbhandlerService', () => {
  let service: DbhandlerService;

  // beforeEach(() => {
  //   TestBed.configureTestingModule({});
  //   service = TestBed.inject(DbhandlerService);
  // });

  it('should create a class', () => {
     expect(service.createClass).toBeTruthy();
   });

  it('should add a student', () => {
    expect(service.addStudent).toBeTruthy();
  });

  it('should update user', () => {
    expect(service.updateUser).toBeTruthy();
  });

  it('should create a user', () => {
    expect(service.createUser).toBeTruthy();
  });  
  
  it('should get classes', () => {
    expect(service.getClasses).toBeTruthy();
  });  

  it('should update attendance', () => {
    expect(service.updateAttendance).toBeTruthy();
  }); 

  it('should get a class', () => {
    expect(service.getAClass ).toBeTruthy();
  }); 
  








})
