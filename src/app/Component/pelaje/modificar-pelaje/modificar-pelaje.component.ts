import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-modificar-pelaje',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './modificar-pelaje.component.html',
  styleUrl: './modificar-pelaje.component.scss',
})
export class ModificarPelajeComponent {
  denominacionPelaje: string = '';
  errorModifyPelaje: boolean = false;
  errorMensage: string = '';
  pelajeFindedBoolean: boolean = false;
  pelaje: any = {};

  findPelaje() {}
}
