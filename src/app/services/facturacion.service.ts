import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { FacturacionNutricionista } from '../models/facturacion-nutricionista';
import { URLS_ADMINISTRADOR } from '../shared/constants';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept' 
  })
};
@Injectable({
  providedIn: 'root'
})
export class FacturacionService {

  listFacturas: FacturacionNutricionista[] = [];
  constructor(private http: HttpClient) {}


  getFacturacion() : Observable<FacturacionNutricionista> {
    const url = `${environment.URL_BASE}${URLS_ADMINISTRADOR.GET_FACTURACION}`;
    return this.http.get<FacturacionNutricionista>(url, httpOptions);
    
  }
  getFacturacionMensual() : Observable<FacturacionNutricionista> {
    const url = `${environment.URL_BASE}${URLS_ADMINISTRADOR.GET_FACTURACION_MENSUAL}`;
    return this.http.get<FacturacionNutricionista>(url, httpOptions);
    
  }
  getFacturacionDiaria() : Observable<FacturacionNutricionista> {
    const url = `${environment.URL_BASE}${URLS_ADMINISTRADOR.GET_FACTURACION_DIARIA}`;
    return this.http.get<FacturacionNutricionista>(url, httpOptions);
  }

  getFacturacionNutricionista(idNutricionista: number) {
    const url = `${environment.URL_BASE}${URLS_ADMINISTRADOR.GET_FACTURACION_NUTRICIONISTA}/${idNutricionista}`;
    return this.http.get(url, httpOptions);
  }
  
}
