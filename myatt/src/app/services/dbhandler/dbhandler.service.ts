import { Injectable } from '@angular/core';
//import { Polls } from '../models/polls';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FieldValue, arrayRemove } from 'firebase/firestore';
import { Subject } from 'rxjs';
//import {collection, getDocs} from 'firebase/firestore';



@Injectable({
  providedIn: 'root'
})
export class DbhandlerService {

  //sharableList: any[];
  pollHolder: any;
  uid: any;
  infoHolder!: any[];
  fire: Subject<any> = new Subject<any>();

  constructor(private firestore: AngularFirestore) {
    //this.sharableList = [];
  }

  setFire(val:any){
    this.fire.next("hello")
  }

  public createClass(body: any) {
    return this.firestore.collection("Classes").add(body)
  }

  public addStudent(id: any, body: any) {
    return this.firestore.collection("Classes").doc(id).update(body)
  }

  public updateUser(uid: any, body: any) {
    return this.firestore.collection("Users").doc(uid).update(body)
  }

  public createUser(uid: any, body: any) {
    return this.firestore.collection("Users").doc(uid).set(body)
  }

  public getClasses(uid: any) {
    return this.firestore.collection('Users').doc(uid).get()
  }

  public updateAttendance(classid:any, body:any){
    return this.firestore.collection("Classes").doc(classid).update(body)
  }

  public getAClass(id:any){
    return this.firestore.collection('Classes').doc(id).get()
  }

  public getAUser(id:any){
    return this.firestore.collection('Users').doc(id).get()
  }

  public killClass(id:any){ 
    return this.firestore.collection('Classes').doc(id).delete()
  }


  // public createPoll(body:any){
  //   return this.firestore.collection("polls").add({body})
  // }




  // public getAUser(id:any){
  //   return this.firestore.collection('owners').doc(id).get()
  // }

  //  public submitAnswer(pollid:any, body:any){  //check this one
  //    return this.firestore.collection('polls').doc(pollid).update(body)
  //  }

  //  public updateAnswersAdmin(pollId:any, body:any){
  //   return this.firestore.collection("polls").doc(pollId).update(body)    
  //  }

  //  public updatePoll(pollId:any, body:any){
  //    return this.firestore.collection("polls").doc(pollId).update(body)
  //  }

  //  public submitToOwner(uid:any, body:any){  //check this one
  //   return this.firestore.collection('owners').doc(uid).update(body)
  // }

  // public getAllPollsFromAuthor(id:any){
  //   return this.firestore.collection('polls', ref => ref.where("owner","==", "pity")).get();
  // }

 
  // public killUserPoll(uid:any,body:any){ //should be an update
  //   return this.firestore.collection("owners").doc(uid).update(body)   
  // }

  // public openOrClosePollSide(id: any, body: any){
  //   return this.firestore.collection("polls").doc(id).update(body)
  // }

  // public openOrCloseOwnerSide(uid: any, body: any){
  //   return this.firestore.collection("owners").doc(uid).update(body)
  // }

  // //Testing Ground
 snapshotListener(id:any){
    return this.firestore.collection('Users').doc(id).snapshotChanges()
 }

}
