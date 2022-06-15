import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { arrayUnion } from 'firebase/firestore';
import { DbhandlerService } from 'src/app/services/dbhandler/dbhandler.service';

@Component({
  selector: 'app-att-student',
  templateUrl: './att-student.component.html',
  styleUrls: ['./att-student.component.scss']
})
export class AttStudentComponent implements OnInit {
  @Input() attCode!: string;
  @Output() attCodeChange = new EventEmitter<string>();
  constructor(private dbhandler: DbhandlerService, private fbAuth: AngularFireAuth) { }
  classId!: string
  att!: any;
  uid!: string;
  dates: string[] = [];
  datesPresent: boolean[] = []

  ngOnInit(): void {
    this.fbAuth.onAuthStateChanged((user: any) => {
      this.uid = user.uid;
    })

    this.classId = this.dbhandler.infoHolder.pop()
    this.dbhandler.getAClass(this.classId).subscribe((res: any) => {
      this.att = res.data()
      this.constructArray()
    })
  }

  markAtt() {
    if (this.checkEmptyCode()) {
      this.attCode=this.attCode.trim()
      let temp = this.getDate()
      if (this.att.Attendances[`${temp}`].Code == this.attCode && this.att.Attendances[`${temp}`].Open) {
        console.log("Oie vos, Bienvienido")
        this.dbhandler.updateAttendance(this.classId, {
          [`Attendances.${temp}.Students`]: arrayUnion(this.uid)
        }).then(() => console.log("Success"))
      } else {
        console.log("LATE, RIP")
      }
    } else {
      console.log("Empty code")
    }
  }

  getDate(): string {
    let temp = new Date()
    var m = temp.getUTCMonth() + 1
    var d = temp.getUTCDate()
    var y = temp.getUTCFullYear()
    return m + "-" + d + "-" + y
  }

  constructArray() {
    // console.log(this.att.Attendances)

    for (let i in this.att.Attendances) {
      console.log(i)
      this.dates.push(i)
      console.log(this.att.Attendances[i].Students.indexOf(this.uid) > -1)
      this.datesPresent.push(this.att.Attendances[i].Students.indexOf(this.uid) > -1)
    }

  }

  checkEmptyCode(): boolean{
    return this.attCode != undefined;
  }
}
