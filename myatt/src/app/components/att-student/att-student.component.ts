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
  constructor(private dbhandler: DbhandlerService, private fbAuth:AngularFireAuth) { }
  classId!:string
  att!:any;
  uid!:string;
  ngOnInit(): void {
    this.fbAuth.onAuthStateChanged((user: any) => {
      this.uid = user.uid;
    })

    this.classId = this.dbhandler.infoHolder.pop()
    this.dbhandler.getAClass(this.classId).subscribe((res:any) =>{
      console.log(res.data())
      this.att=res.data()
    })
  }

  markAtt(){
    let temp = this.getDate()
    console.log(this.att.Attendaces[`${temp}`].Code)
    console.log(this.att.Attendaces[`${temp}`].Code == this.attCode)
    if(this.att.Attendaces[`${temp}`].Code == this.attCode && this.att.Attendaces[`${temp}`].Open){
      console.log("Oie vos, Bienvienido")
      this.dbhandler.updateAttendance(this.classId,{
        [`Attendaces.${temp}.Students`]:arrayUnion(this.uid)
      }).then(() => console.log("Success"))
    }else{
      console.log("LATE, RIP")
    }
  }

  getDate():string{
    let temp = new Date()
    var m = temp.getUTCMonth()+1
    var d = temp.getUTCDate()
    var y = temp.getUTCFullYear()
    return m+"-"+d+"-"+y
  }
}
