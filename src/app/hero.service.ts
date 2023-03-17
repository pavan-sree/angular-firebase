import { Injectable } from '@angular/core';
import { collectionData, Firestore } from '@angular/fire/firestore';
import { addDoc, collection,doc } from '@firebase/firestore';
import { Observable } from 'rxjs';
import { student } from './home/interface/student';
@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private fs:Firestore) { }
  addDetail(student: student){
    student.id=doc(collection(this.fs,'id')).id;
    return addDoc(collection(this.fs,'Students'),student)
  }
  getDetails():Observable<student[]>{
    let studentRef=collection(this.fs,'Students');
    return collectionData(studentRef) as Observable<student[]>;
  }
}
