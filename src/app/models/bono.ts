import { Cliente } from './cliente';

export class Bono {
  idBono: number;
  activo: number;
  cantidadConsultas: number;
  consultasRestantes: number;
  fechaAlta: string;
  cliente: Cliente;
}
