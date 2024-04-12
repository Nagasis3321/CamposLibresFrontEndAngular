import { Component } from '@angular/core';
import { AnadirAnimalesComponent } from './anadir-animales/anadir-animales.component';
import { ModificarAnimalesComponent } from './modificar-animales/modificar-animales.component';
import { BuscarAnimalesComponent } from './buscar-animales/buscar-animales.component';
import { BorrarAnimalesComponent } from './borrar-animales/borrar-animales.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-animales',
  standalone: true,
  imports: [
    AnadirAnimalesComponent,
    ModificarAnimalesComponent,
    BuscarAnimalesComponent,
    BorrarAnimalesComponent,
    CommonModule,
    FormsModule,
  ],
  templateUrl: './animales.component.html',
  styleUrl: './animales.component.scss',
})
export class AnimalesComponent {
  viewComponente: 'new' | 'modify' | 'delete' | 'find' = 'modify';
  constructor() {}
  seleccionarComponente(eleccion: 'new' | 'modify' | 'delete' | 'find') {
    this.viewComponente = eleccion;
  }
}
