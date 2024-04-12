import { Injectable } from '@angular/core';
import { Pelaje } from '../../Interfaces/Index';
@Injectable({
  providedIn: 'root',
})
export class PelajeService {
  pelajes: Pelaje[] = [
    { id: 1, denominacion: 'Colorada' },
    { id: 2, denominacion: 'Pampa' },
    { id: 3, denominacion: 'Pampa Colorada' },
    { id: 4, denominacion: 'Vasca' },
    { id: 5, denominacion: 'Vallo' },
  ];

  getPelajes(): Pelaje[] {
    return this.pelajes;
  }
  getPelaje(denominacion: string): Pelaje | undefined {
    return this.pelajes.find((pelaje) => pelaje.denominacion === denominacion);
  }

  constructor() {}
}
