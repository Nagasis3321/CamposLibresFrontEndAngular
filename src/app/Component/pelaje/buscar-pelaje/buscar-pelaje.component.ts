import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FilterPelajePipe } from './filter-pelaje.pipe';

@Component({
  selector: 'app-buscar-pelaje',
  standalone: true,
  imports: [CommonModule, FormsModule, FilterPelajePipe],
  templateUrl: './buscar-pelaje.component.html',
  styleUrl: './buscar-pelaje.component.scss',
})
export class BuscarPelajeComponent {
  denominacionFilter: string = '';
  pelajes = [
    { id: 1, denominacion: 'Colorada' },
    { id: 2, denominacion: 'Pampa' },
    { id: 3, denominacion: 'Pampa Colorada' },
    { id: 4, denominacion: 'Vasca' },
    { id: 5, denominacion: 'Vallo' },
  ];
}
