import { Injectable } from '@angular/core';
import { Animal } from '../../Interfaces/Index';
@Injectable({
  providedIn: 'root',
})
export class AnimalesService {
  animales: Animal[] = [
    {
      idAnimal: 1,
      dniDueno: 17905189,
      idPelaje: 1,
      caravana: 3232,
    },
    {
      idAnimal: 2,
      dniDueno: 43266572,
      idPelaje: 2,
      caravana: 120,
    },
    {
      idAnimal: 3,
      dniDueno: 43266572,
      idPelaje: 3,
      caravana: 200,
    },
    {
      idAnimal: 4,
      dniDueno: 17905189,
      idPelaje: 1,
      caravana: 92,
    },
    {
      idAnimal: 5,
      dniDueno: 43266572,
      idPelaje: 2,
      caravana: 33,
    },
  ];

  getAnimales(): Animal[] {
    return this.animales;
  }

  getAnimal(id: number): Animal | undefined {
    return this.animales.find((animal: Animal) => {
      animal.idAnimal === id;
    });
  }

  putAnimal(animal: Animal): void {
    this.animales.push(animal);
  }

  constructor() {}
}
