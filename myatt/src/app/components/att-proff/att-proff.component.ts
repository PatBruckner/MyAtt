import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DbhandlerService } from 'src/app/services/dbhandler/dbhandler.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-att-proff',
  templateUrl: './att-proff.component.html',
  styleUrls: ['./att-proff.component.scss']
})
export class AttProffComponent implements OnInit {
  
  classCode!:string
  classId!:string

  constructor(private dbhandler: DbhandlerService) { }

  ngOnInit(): void {
    this.classId = this.dbhandler.infoHolder.pop();

  }

  makeid():string {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < 8; i++) {
      result += characters.charAt(Math.floor(Math.random() *
        charactersLength));
    }
    return result;
  }

  closeAtt(){
    let date = this.getDate()

    console.log(date)
    this.dbhandler.updateAttendance(this.classId,{
      [`Attendances.${date}.Open`]:false,
    }).then(() => console.log("Success"))
  }

  openAtt(){
    this.classCode = this.makeid();
    

    let date = this.getDate()

    console.log(date)
    this.dbhandler.updateAttendance(this.classId,{
      [`Attendances.${date}.Code`]:this.classCode,
      [`Attendances.${date}.Open`]:true,
      [`Attendances.${date}.Students`]:[]
    }).then(() => console.log("Success"))
  }

  getDate():string{
    let temp = new Date()
    var m = temp.getUTCMonth()+1
    var d = temp.getUTCDate()
    var y = temp.getUTCFullYear()
    return m+"-"+d+"-"+y
  }
}
