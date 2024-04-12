import { Pipe, PipeTransform } from '@angular/core';
import { PelajeService } from '../../Services/Pelaje/pelaje.service';
import { Pelaje } from '../../Interfaces/Index';
@Pipe({
  name: 'idtoDenominacion',
  standalone: true,
})
export class IdtoDenominacionPipe implements PipeTransform {
  constructor(private pelajeServ: PelajeService) {}
  transform(id: number): string {
    const pelajes: Pelaje[] = this.pelajeServ.getPelajes();

    return pelajes.find((pelaje) => pelaje.id === id)!.denominacion;
  }
}
