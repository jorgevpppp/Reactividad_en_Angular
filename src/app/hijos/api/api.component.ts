import { Component, OnInit, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../servicios/api.service';

@Component({
  selector: 'app-api',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class ApiComponent implements OnInit {

  constructor(public apiService: ApiService) {}

  ngOnInit(): void {
    console.log('ApiComponent iniciado');
    this.apiService.cargarPosts();

    effect(() => {
      console.log('Signal actualizada:', this.apiService.posts());
    });
  }
}
