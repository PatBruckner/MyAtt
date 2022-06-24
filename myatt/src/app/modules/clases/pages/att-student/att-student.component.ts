import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ActivatedRoute, Router } from '@angular/router';
import { arrayRemove, arrayUnion } from 'firebase/firestore';
import { DbhandlerService } from 'src/app/services/dbhandler/dbhandler.service';

@Component({
  selector: 'app-att-student',
  templateUrl: './att-student.component.html',
  styleUrls: ['./att-student.component.scss']
})
export class AttStudentComponent implements OnInit {
  @Input() attCode!: string;
  @Output() attCodeChange = new EventEmitter<string>();
  constructor(private dbhandler: DbhandlerService, private fbAuth: AngularFireAuth, private route: ActivatedRoute, private router: Router) { }
  classId!: string
  att!: any;
  uid!: string;
  dates: string[] = [];
  datesPresent: boolean[] = []

  ngOnInit(): void {
    this.route.params.subscribe((event: any) => {
      this.classId = event.classid;
    })
    this.fbAuth.onAuthStateChanged((user: any) => {
      this.uid = user.uid;
    })

    this.dbhandler.getAClass(this.classId).subscribe((res: any) => {
      if (!res.exists) {
        alert("This class does not exist anymore")
        console.log("rip")
        this.dbhandler.getAUser(this.uid).subscribe(async (user: any) => {
          let temp
          await user.data().ClassesAsStudent.forEach((item: any) => {
            if (item["ClassId"] == this.classId) {
              console.log(item["ClassName"])
              temp = item["ClassName"]
            }
          })
          this.dbhandler.updateUser(this.uid, {
            "ClassesAsStudent": arrayRemove({ ClassId: this.classId, ClassName: temp })
          }).then(() => this.router.navigate(['/dashboard/classes/list']))
        })

      }
      this.att = res.data()
      this.constructArray()
      // this.constructArray2()
    })
  }

  markAtt() {
    if (this.checkEmptyCode()) {
      this.attCode = this.attCode.trim()
      let temp = this.getDate()
      console.log("allsfine")
      if (this.att.Attendances[`${temp}`] == undefined) {
        alert("Attendance is not yet open for today")
      } else if (this.att.Attendances[`${temp}`].Code == this.attCode && this.att.Attendances[`${temp}`].Open) {
        console.log("Oie vos, Bienvienido")
        this.dbhandler.updateAttendance(this.classId, {
          [`Attendances.${temp}.Students`]: arrayUnion(this.uid)
        }).then(() => {
          alert("Attendance registered successfully")
          this.router.navigate(['/dashboard/classes/list/'])
        })
      } else {
        alert("Wrong attendance code")
      }
    } else {
      alert("The code cannot be empty")
    }
  }

  getDate(): string {
    let temp = new Date()
    var m = temp.getUTCMonth() + 1
    var d = temp.getUTCDate()
    var y = temp.getUTCFullYear()
    return m + "-" + d + "-" + y
  }

  // constructArray() {
  //   // console.log(this.att.Attendances)

  //   for (let i in this.att.Attendances) {
  //     console.log(i)
  //     this.dates.push(i)
  //     console.log(this.att.Attendances[i].Students.indexOf(this.uid) > -1)
  //     this.datesPresent.push(this.att.Attendances[i].Students.indexOf(this.uid) > -1)
  //   }

  // }

  constructArray() {
    for (let i in this.att.Attendances) {
      this.dates.push(i)
    }

    this.dates = this.dates.sort((a, b) => {
      return <any>new Date(a) - <any>new Date(b);
    });

    for(let i of this.dates){
      this.datesPresent.push(this.att.Attendances[i].Students.indexOf(this.uid) > -1)
    }
  }

  checkEmptyCode(): boolean {
    return this.attCode != undefined;
  }
}
