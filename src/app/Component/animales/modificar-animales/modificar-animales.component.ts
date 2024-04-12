import { Component } from '@angular/core';
import { AnimalesService } from '../../../Services/Animales/animales.service';
import { PelajeService } from '../../../Services/Pelaje/pelaje.service';
import { Animal, Dueno, Pelaje } from '../../../Interfaces/Index';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DuenosService } from '../../../Services/Duenos/duenos.service';
import { IdtoDenominacionPipe } from '../../../Pipes/Pelaje/idto-denominacion.pipe';
@Component({
  selector: 'app-modificar-animales',
  standalone: true,
  imports: [CommonModule, FormsModule, IdtoDenominacionPipe],
  templateUrl: './modificar-animales.component.html',
  styleUrl: './modificar-animales.component.scss',
})
export class ModificarAnimalesComponent {
  constructor(
    private animalesServ: AnimalesService,
    private pelajesServ: PelajeService,
    private duenoServ: DuenosService
  ) {}

  caravanaCheckBox: boolean = false;
  pelajeCheckBox: boolean = false;
  dniCheckBox: boolean = false;
  duenoSelect: Dueno | undefined;
  dniSeleccionado: number | undefined;
  pelajes: Pelaje[] = this.pelajesServ.getPelajes();
  animales: Animal[] = this.animalesServ.getAnimales();
  duenos: Dueno[] = this.duenoServ.getDuenos();
  newAnimal: Animal = this.animales[0];
  animalesFilter: Animal[] | undefined = this.animales.filter((animal) => {
    animal.dniDueno === this.duenoSelect?.dni;
  });

  findAnimales(): void {
    this.animalesFilter = this.animales.filter(
      (animal) => animal.dniDueno === this.duenoSelect?.dni
    );
  }
}
