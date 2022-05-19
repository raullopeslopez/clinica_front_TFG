import { Injectable } from '@angular/core';
import { Consulta } from '../interfaces/consulta';

@Injectable({
  providedIn: 'root'
})
export class ConsultaService {

  listConsultas: Consulta[] = [
    {consulta: "geza", nombre: "Gonzalo", apellido: "Eza", edad: 30, sexo: "M"},
    {consulta: "geza", nombre: "Gonzalo", apellido: "Eza", edad: 30, sexo: "M"},
    {consulta: "geza", nombre: "Gonzalo", apellido: "Eza", edad: 30, sexo: "M"},
    {consulta: "geza", nombre: "Gonzalo", apellido: "Eza", edad: 30, sexo: "M"},
    {consulta: "geza", nombre: "Gonzalo", apellido: "Eza", edad: 30, sexo: "M"},
    {consulta: "geza", nombre: "Gonzalo", apellido: "Eza", edad: 30, sexo: "M"},
    {consulta: "geza", nombre: "Gonzalo", apellido: "Eza", edad: 30, sexo: "M"},
    {consulta: "geza", nombre: "Gonzalo", apellido: "Eza", edad: 30, sexo: "F"},
    {consulta: "geza", nombre: "Gonzalo", apellido: "Eza", edad: 30, sexo: "F"},

  ];
  constructor() { }

  getConsulta() {
    return this.listConsultas.slice();
  }

  eliminarConsulta(index: number) {
    this.listConsultas.splice(index, 1);
  }

  addConsulta(consulta: Consulta) {
    this.listConsultas.unshift(consulta);
  }
}
