import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BookModel } from '../models/book-model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {
  private books : BookModel[] = [
    {
      id : "1" ,
      name: "harry porter",
      earnings: 100,
      description: "good book"
    },
    {
      id : "2" ,
      name: "harry porter v2",
      earnings: 110,
      description: "good book 2"
    }
  ]
  constructor() { }

  all() {
    return this.books;
  }

  create(bookProps: any):Observable<any> {
    this.books = [...this.books,{id:(this.books.length+1).toString(),...bookProps}]
    console.log(this.books );
    
    return of({
      status:"success",
    })
  }

  update(id: string, updates: any) {
  //  this.books.filter((book)=>{

  //  })
  }

  delete(id: string):Observable<any> {
    this.books = this.books.filter(book=>{
      return book.id != id;
    })
    return of({
      status:"success",
    })
  }
}
