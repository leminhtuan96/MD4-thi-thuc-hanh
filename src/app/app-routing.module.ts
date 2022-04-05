import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookCreateComponent } from './books/book-create/book-create.component';
import { BookDeleteComponent } from './books/book-delete/book-delete.component';
import { BookDetailComponent } from './books/book-detail/book-detail.component';
import { BookEditComponent } from './books/book-edit/book-edit.component';
import { BookListComponent } from './books/book-list/book-list.component';


const routes: Routes = [
  {
    path: "books",
    component: BookListComponent
  },
  {path:'books/create',component: BookCreateComponent},
  {path:'books/update/:id',component: BookEditComponent},
  {path:'books/delete/:id',component: BookDeleteComponent},
  {path: 'books/detail/:id',component: BookDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
