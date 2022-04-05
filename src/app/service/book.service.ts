import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
// import { env } from 'process';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get(environment.api_url + 'books');
  }

  createBook(data): Observable<any>{
    return this.http.post<any>(environment.api_url + 'books', data);
  }

  getById(id): Observable<any>{
    return this.http.get<any>(environment.api_url + `books/${id}`);
  }

  updateBook(id,data): Observable<any>{
    return this.http.put<any>(environment.api_url + `books/${id}`,data);
  }

  deleteBook(id): Observable<any>{
    return this.http.delete<any>(environment.api_url + `books/${id}`);
  }



}


