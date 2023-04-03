import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Book } from '../components/book-management/Interfaces/book.interface';


@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private store: AngularFirestore) { }

  getAll(collection:string){
    return this.store.collection(collection).valueChanges() as Observable<Book[]>
  }
}
