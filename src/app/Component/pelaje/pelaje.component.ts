import { Component } from '@angular/core';
import { AnadirPelajeComponent } from './anadir-pelaje/anadir-pelaje.component';
import { BorrarPelajeComponent } from './borrar-pelaje/borrar-pelaje.component';
import { BuscarPelajeComponent } from './buscar-pelaje/buscar-pelaje.component';
import { ModificarPelajeComponent } from './modificar-pelaje/modificar-pelaje.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pelaje',
  standalone: true,
  imports: [
    AnadirPelajeComponent,
    BorrarPelajeComponent,
    BuscarPelajeComponent,
    ModificarPelajeComponent,
    CommonModule,
    FormsModule,
  ],
  templateUrl: './pelaje.component.html',
  styleUrl: './pelaje.component.scss',
})
export class PelajeComponent {
  viewComponente: 'new' | 'modify' | 'delete' | 'find' = 'modify';
  constructor() {}
  seleccionarComponente(eleccion: 'new' | 'modify' | 'delete' | 'find') {
    this.viewComponente = eleccion;
  }
}
