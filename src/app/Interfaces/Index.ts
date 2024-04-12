export interface Animal {
  idAnimal: number;
  dniDueno: number;
  idPelaje: number;
  caravana: number;
}

export interface Pelaje {
  id: number;
  denominacion: string;
}

export interface Dueno {
  dni: number;
  nombre: string;
  apellido: string;
  sena: string;
}
