import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BookModel } from 'src/app/core/models/book-model';

@Component({
  selector: 'book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent {
  originalBook: BookModel | undefined;
  @Input() book !: any;
  @Output() save = new EventEmitter();
  @Output() cancel = new EventEmitter();

  bookForm = new FormGroup({
    name: new FormControl(''),
    earnings: new FormControl(),
    description: new FormControl(''),
  });

  onSubmit(book: BookModel) {
    this.save.emit({ ...this.originalBook, ...book });
    this.bookForm.reset();
  }
  
}
