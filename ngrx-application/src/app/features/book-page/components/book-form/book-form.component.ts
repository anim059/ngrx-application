import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { IBook } from 'src/app/features/book-page/models/book-model';

@Component({
  selector: 'book-form',
  templateUrl: './book-form.component.html',
  styleUrl: './book-form.component.css'
})
export class BookFormComponent implements OnChanges{

  @Input() book: IBook = {
    id: '',
    name: '',
    price: 0,
    description: ''
  };

  @Output() save = new EventEmitter<{type:string, book: any}>();


  bookForm = new FormGroup({
    id: new FormControl(''),
    name: new FormControl( '', [Validators.required]),
    price: new FormControl('', [Validators.required]),
    description: new FormControl( '', [Validators.required]),
  });

  ngOnChanges(changes: SimpleChanges): void {
    if(this.book.id) {
      this.bookForm.patchValue({
        id: this.book.id,
        name: this.book.name,
        price: this.book.price.toString(),
        description: this.book.description
      });
    }
  }

  onSubmit() {
    let type = this.book.id ? 'update' : 'create';
    this.save.emit({type, book: this.bookForm.value});
    this.bookForm.reset();
  }
}
