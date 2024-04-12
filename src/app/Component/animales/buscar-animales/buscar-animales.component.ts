import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AnimalesService } from '../../../Services/Animales/animales.service';
import { Animal, Pelaje } from '../../../Interfaces/Index';
import { FilterAnimalPipe } from '../../../Pipes/Animal/filter-animal.pipe';
import { PelajeService } from '../../../Services/Pelaje/pelaje.service';
import { IdtoDenominacionPipe } from '../../../Pipes/Pelaje/idto-denominacion.pipe';
@Component({
  selector: 'app-buscar-animales',
  standalone: true,
  imports: [CommonModule, FormsModule, FilterAnimalPipe, IdtoDenominacionPipe],
  templateUrl: './buscar-animales.component.html',
  styleUrl: './buscar-animales.component.scss',
})
export class BuscarAnimalesComponent {
  constructor(
    public animalesServ: AnimalesService,
    private pelajeServ: PelajeService
  ) {}

  animales: Animal[] = this.animalesServ.getAnimales();
  pelajes: Pelaje[] = this.pelajeServ.getPelajes();
  //Options Find
  dniFilter: number | undefined = undefined;
  pelajeFilter: number | undefined = undefined;
  caravanaFilter: number | undefined = undefined;
}
