import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-anadir-dueno',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './anadir-dueno.component.html',
  styleUrl: './anadir-dueno.component.scss',
})
export class AnadirDuenoComponent {
  errorMensage: string = 'Nombre Invalido';
  errorNewDueno: boolean = false;
}
