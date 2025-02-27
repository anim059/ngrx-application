import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookHeaderComponent } from './book-header.component';

describe('BookHeaderComponent', () => {
  let component: BookHeaderComponent;
  let fixture: ComponentFixture<BookHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookHeaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BookHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
