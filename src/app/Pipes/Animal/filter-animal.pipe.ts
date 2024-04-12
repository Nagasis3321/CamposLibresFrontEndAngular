import { Pipe, PipeTransform } from '@angular/core';
import { Animal } from '../../Interfaces/Index';

@Pipe({
  name: 'filterAnimal',
  standalone: true,
})
export class FilterAnimalPipe implements PipeTransform {
  transform(
    animales: Animal[] | undefined,
    filters: {
      dni: number | undefined;
      pelaje: number | undefined;
      caravana: number | undefined;
    }
  ): any[] {
    if (!animales || (!filters.dni && !filters.pelaje && !filters.caravana)) {
      // Si los animales o los filtros no están definidos, o ninguno de los filtros tiene un valor,
      // devolvemos todos los animales
      return animales || [];
    }

    return animales.filter((animal) => {
      return (
        this.cumpleFiltro(animal.dniDueno, filters.dni) &&
        this.cumpleFiltro(animal.idPelaje, filters.pelaje) &&
        this.cumpleFiltro(animal.caravana, filters.caravana)
      );
    });
  }

  private cumpleFiltro(
    valor: number | undefined,
    filtro: number | undefined
  ): boolean {
    if (filtro === undefined) {
      // Si el filtro no está definido, lo consideramos como válido
      return true;
    }

    // Convertimos ambos a cadenas para realizar una comparación parcial
    const valorComoCadena = valor?.toString();
    const filtroComoCadena = filtro.toString();

    // Verificamos si la cadena del valor contiene la cadena del filtro
    return valorComoCadena?.includes(filtroComoCadena) || false;
  }
}
