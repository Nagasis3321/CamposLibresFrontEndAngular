import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-borrar-dueno',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './borrar-dueno.component.html',
  styleUrl: './borrar-dueno.component.scss',
})
export class BorrarDuenoComponent {
  errorDeleteFlag: boolean = false;
  errorDelete: string = '';
}
