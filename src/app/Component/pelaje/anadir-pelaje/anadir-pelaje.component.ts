import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-anadir-pelaje',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './anadir-pelaje.component.html',
  styleUrl: './anadir-pelaje.component.scss',
})
export class AnadirPelajeComponent {
  errorMensage: string = 'Nombre Invalido';
  errorNewDueno: boolean = false;
}
