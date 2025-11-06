import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  //  declaramos la signal (campo reactivo)
  posts = signal<any[]>([]);

  constructor(private http: HttpClient) {}

  //  método que carga los datos
  cargarPosts() {
    this.http.get<any[]>('https://jsonplaceholder.typicode.com/posts')
      .subscribe({
        next: (data) => {
          console.log(' Datos recibidos de la API:', data);
          this.posts.set(data);
        },
        error: (err) => console.error(' Error al cargar posts:', err)
      });
  }
}




