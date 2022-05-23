import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Bono } from '../models/bono';
import { Cliente } from '../models/cliente';
import { Consulta } from '../models/consulta';
import { URLS_ADMINISTRADOR } from '../shared/constants';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};
@Injectable({
  providedIn: 'root',
})
export class ConsultaService {
  listConsultas: Consulta[] = [];

  constructor(private http: HttpClient) {}

  getAllConsultas(): Observable<Consulta[]> {
    const url = `${environment.URL_BASE}${URLS_ADMINISTRADOR.GET_ALL_CONSULTAS}`;
    return this.http.get<Consulta[]>(url, httpOptions);
  }

  getConsultasByNutricionista(id: number): Observable<Object> {
    const url = `${environment.URL_BASE}${URLS_ADMINISTRADOR.GET_CONSULTAS_BY_NUTRICIONISTA}/${id}`;
    return this.http.get(url, httpOptions);
  }

  getConsultasByNutricionistaDate(
    id: number,
    fecha: string
  ): Observable<Object> {
    const url = `${environment.URL_BASE}${URLS_ADMINISTRADOR.GET_CONSULTAS_BY_NUTRICIONISTA}/${id}/${fecha}`;
    return this.http.get(url, httpOptions);
  }

  putConsulta(consulta: Consulta): Observable<Object> {
    const url = `${environment.URL_BASE}${URLS_ADMINISTRADOR.PUT_CONSULTA}`;
    return this.http.put(url, consulta, { responseType: 'text' });
  }

  postConsulta(consulta: Consulta): Observable<Object> {
    const url = `${environment.URL_BASE}${URLS_ADMINISTRADOR.POST_CONSULTA}`;
    console.log(url);
    return this.http.post(url, consulta, { responseType: 'text' });
  }

  deleteConsulta(idConsulta: number): Observable<Object> {
    const url = `${environment.URL_BASE}${URLS_ADMINISTRADOR.REMOVE_CONSULTA}/${idConsulta}`;
    console.log(url);
    return this.http.delete(url, { responseType: 'text' });
  }

  getConsultasId(id: number) {
    const url = `${environment.URL_BASE}${URLS_ADMINISTRADOR.GET_CONSULTA}/${id}`;
    console.log(url);
    return this.http.get<Consulta>(url, httpOptions);
  }

  getAllBonos(): Observable<Bono[]> {
    const url = `${environment.URL_BASE}${URLS_ADMINISTRADOR.GET_BONOS}`;
    console.log(url);
    return this.http.get<Bono[]>(url, httpOptions);
  }

  getAllClientes(): Observable<Cliente[]> {
    const url = `${environment.URL_BASE}${URLS_ADMINISTRADOR.GET_CLIENTES}`;
    console.log(url);
    return this.http.get<Cliente[]>(url, httpOptions);
  }

  /* getConsulta() {
    return this.listConsultas.slice();
  }

  eliminarConsulta(index: number) {
    this.listConsultas.splice(index, 1);
  }
  */
  addConsulta(consulta: Consulta) {
    this.listConsultas.unshift(consulta);
  }
}
