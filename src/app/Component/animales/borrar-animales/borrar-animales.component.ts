import { Component } from '@angular/core';
import { PelajeService } from '../../../Services/Pelaje/pelaje.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AnimalesService } from '../../../Services/Animales/animales.service';
import { DuenosService } from '../../../Services/Duenos/duenos.service';
import { Animal, Dueno } from '../../../Interfaces/Index';
import { IdtoDenominacionPipe } from '../../../Pipes/Pelaje/idto-denominacion.pipe';

@Component({
  selector: 'app-borrar-animales',
  standalone: true,
  imports: [FormsModule, CommonModule, IdtoDenominacionPipe],
  templateUrl: './borrar-animales.component.html',
  styleUrl: './borrar-animales.component.scss',
})
export class BorrarAnimalesComponent {
  constructor(
    private animalesServ: AnimalesService,
    private pelajesServ: PelajeService,
    private duenoServ: DuenosService
  ) {}

  duenos: Dueno[] = this.duenoServ.getDuenos();
  animales: Animal[] = this.animalesServ.getAnimales();
  duenoSelect: Dueno | undefined;
  errorDeleteFlag: boolean = false;
  errorDelete: string = '';
  animalesFilter: Animal[] | undefined = this.animales.filter((animal) => {
    animal.dniDueno === this.duenoSelect?.dni;
  });
  findAnimales(): void {
    this.animalesFilter = this.animales.filter(
      (animal) => animal.dniDueno === this.duenoSelect?.dni
    );
  }
}
