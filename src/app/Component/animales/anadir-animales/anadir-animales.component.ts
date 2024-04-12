import { Component } from '@angular/core';
import { Animal, Dueno, Pelaje } from '../../../Interfaces/Index';
import { AnimalesService } from '../../../Services/Animales/animales.service';
import { DuenosService } from '../../../Services/Duenos/duenos.service';
import { PelajeService } from '../../../Services/Pelaje/pelaje.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-anadir-animales',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './anadir-animales.component.html',
  styleUrl: './anadir-animales.component.scss',
})
export class AnadirAnimalesComponent {
  constructor(
    private animalServ: AnimalesService,
    private dueñoServ: DuenosService,
    private pelajeServ: PelajeService
  ) {}
  errorNewAnimal: boolean = false;
  errorMensage: string = '';
  animales: Animal[] = this.animalServ.getAnimales();
  duenos: Dueno[] = this.dueñoServ.getDuenos();
  pelajes: Pelaje[] = this.pelajeServ.getPelajes();

  //Data new Animal
  dniDuenoNew: number = 0;
  idPelajeNew: number = 0;
  caravanaNew: string = '';
}
