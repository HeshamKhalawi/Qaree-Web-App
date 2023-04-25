import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Book } from '../components/book-management/Interfaces/book.interface';
import { User } from '../components/user-management/interfaces/user.interface';
import { Group } from '../components/group-management/Interfaces/group.interface';


@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private store: AngularFirestore) { }

  getAll(collection:string){
    return this.store.collection(collection).valueChanges() as Observable<any>
  }

  add(collection:string,data:User|Book|Group){
    return this.store.collection(collection).add(data)
  }
}
