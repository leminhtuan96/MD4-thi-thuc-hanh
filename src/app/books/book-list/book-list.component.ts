import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { BookService } from 'src/app/service/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books = [];
  id: number;
  constructor(private bookService: BookService, private router: Router, private activateRoute: ActivatedRoute) {
    this.activateRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
    })
  }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.bookService.getAll().subscribe(res => this.books = res);
  }

  deleteBook(id) {
    if (confirm('Are you sure')) {
      this.bookService.deleteBook(id).subscribe(() => {
        this.getAll();
        alert('Delete Success');
      })
    }else{
      this.getAll();
    }
  }
}
