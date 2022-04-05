import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { BookService } from 'src/app/service/book.service';

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.css']
})
export class BookCreateComponent implements OnInit {

  createbook: FormGroup = new FormGroup({
    title: new FormControl(),
    author: new FormControl(),
    description: new FormControl(),
  });
  constructor(private bookService: BookService, private router: Router) { }

  ngOnInit() {
  }

  createBook() {
    this.bookService.createBook(this.createbook.value).subscribe(() => {
      this.router.navigate(['/books']);
      alert('Create Success');
    }, () => {
      alert('Create Failure');
    })
  }


}
