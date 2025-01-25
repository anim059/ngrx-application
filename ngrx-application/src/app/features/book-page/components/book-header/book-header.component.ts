import { Component, Input } from '@angular/core';

import { Observable } from 'rxjs';

@Component({
  selector: 'book-header',
  templateUrl: './book-header.component.html',
  styleUrl: './book-header.component.css'
})
export class BookHeaderComponent {
  @Input() total$ !: Observable<number>;
}
