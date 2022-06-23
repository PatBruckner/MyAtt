import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { arrayUnion } from 'firebase/firestore';
import { Subscription } from 'rxjs';
import { DbhandlerService } from 'src/app/services/dbhandler/dbhandler.service';
import { CreateClassPopUpComponent } from '../create-class-pop-up/create-class-pop-up.component';
import { SignUpClassPopUpComponent } from '../sign-up-class-pop-up/sign-up-class-pop-up.component';


@Component({
  selector: 'app-classes-list',
  templateUrl: './classes-list.component.html',
  styleUrls: ['./classes-list.component.scss']
})
export class ClassesListComponent implements OnInit {
  uid!: string;
  asProffList!: any[];
  asStudentList!: any[];
  name!:string;
  obs!: Subscription;
  loading:boolean=true

  @Input() classCode!: string;
  @Output() classCodeChange = new EventEmitter<string>();

  @Input() className!: string;
  @Output() classNameChange = new EventEmitter<string>();

  constructor(private fbAuth: AngularFireAuth, private dbhandler: DbhandlerService, private router: Router, private dialogRef: MatDialog) {
  }

  ngOnInit(): void {
    this.fbAuth.onAuthStateChanged((user: any) => {
      this.uid = user.uid;
      this.name = user.displayName;
      this.fetchClasses()
      this.obs = this.dbhandler.snapshotListener(this.uid).subscribe((res: any) => {
        if (res.type == 'modified') {
          this.fetchClasses()
        }
      })
    })
  }

  openDialogSignUpClass(){
    this.dialogRef.open(SignUpClassPopUpComponent);
  }

  openDialogCreateClass(){
    this.dialogRef.open(CreateClassPopUpComponent);
  }

  createClass(start: any, end: any) {

    console.log(this.checkValidDate(start, end))
    console.log(this.checkValidName())

    if (this.checkValidDate(start, end)) {
      if (this.checkValidName()) {
        this.dbhandler.createClass({
          ClassName: this.className,
          IdProff: this.uid,
          StartDate: start,
          EndDate: end,
          Students: [],
          Attendances: []
        }).then((res: any) => {
          console.log(res.id)
          console.log("Class creation was successful")
          this.dbhandler.updateUser(this.uid,
            {
              ClassesAsProff: arrayUnion({ ClassId: res.id, ClassName: this.className })
            }).then((res2: any) => console.log("success"))
        })
      }
    }
  }

  fetchClasses() {
    this.dbhandler.getClasses(this.uid).subscribe((res: any) => {
      console.log(res.data().ClassesAsProff)
      this.asProffList = res.data().ClassesAsProff
      this.asStudentList = res.data().ClassesAsStudent
      this.loading=false
    })
  }

  goToAttendanceProff(classId: string,index : number) {
    this.dbhandler.infoHolder = []
    // this.dbhandler.infoHolder.push(classId)
    // this.dbhandler.infoHolder.push(index)
    this.dbhandler.setFire("yellow")
    this.router.navigate(['/dashboard/classes/prof/'+classId])
  }

  goToAttendanceStudent(classId: string) {

    this.router.navigate(['/dashboard/classes/stu/'+classId])
  }

  signUp() {
    console.log("Trying to signup")
    console.log(this.classCode)
    console.log(this.uid)
    this.dbhandler.addStudent(
      this.classCode
      , {
      [`Students.${this.uid}`]:this.name, //[`Students.${this.uid}`]
    }).then(()=>{
      console.log("success adding student")
      this.dbhandler.getAClass(this.classCode).subscribe((res: any) => {
        console.log(res.data().ClassName)
          this.dbhandler.updateUser(this.uid, {
            ClassesAsStudent: arrayUnion({ ClassId: this.classCode, ClassName: res.data().ClassName })
          }).then((res2: any) => console.log("success"))
      })
    })

    // this.dbhandler.getAClass(this.classCode).subscribe((res: any) => {
    //   console.log(res.data().ClassName)
    //   this.dbhandler.updateUser(this.uid, {
    //     ClassesAsStudent: arrayUnion({ ClassId: this.classCode, ClassName: res.data().ClassName })
    //   }).then((res2: any) => console.log("success"))
    // })
  }

  checkValidDate(start: string, end: string): boolean {
    let startDate = new Date(start)
    let endDate = new Date(end)
    console.log(startDate)
    console.log(endDate)
    let today = new Date()
    if(start=='' || end==''){
      console.log("empty date")
      return false
    }else if (startDate < today || startDate > endDate|| start == end) {
      console.log("wrong date")
      return false
    } else {
      return true
    }
  }

  checkValidName(): boolean{
    console.log(this.className)
    return this.className != undefined
  }

  

  // markAttendance(classId:string){
  //   this.dbhandler.infoHolder = []
  //   this.dbhandler.infoHolder.push(classId)
  //   this.router.navigate(['atts'])
  // }

}