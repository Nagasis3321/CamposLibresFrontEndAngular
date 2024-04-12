import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-borrar-pelaje',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './borrar-pelaje.component.html',
  styleUrl: './borrar-pelaje.component.scss',
})
export class BorrarPelajeComponent {
  errorDeleteFlag: boolean = false;
  errorDelete: string = '';
}
