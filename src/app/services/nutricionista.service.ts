import {
  HttpClient,
  HttpClientModule,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Nutricionista } from '../interfaces/nutricionista';
import { environment } from '../../environments/environment';
import { URLS_ADMINISTRADOR } from '../shared/constants';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers':
      'Origin, X-Requested-With, Content-Type, Accept',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class NutricionistaService {
  listNutricionistas: Nutricionista[] = [];

  constructor(private http: HttpClient) {}

  getAllNutricionistas(): Observable<Nutricionista[]> {
    const url = `${environment.URL_BASE}${URLS_ADMINISTRADOR.GET_ALL_NUTRICIONISTAS}`;
    return this.http.get<Nutricionista[]>(url, httpOptions);
  }

  getNutricionista(idNutricionista: number){
    const url = `${environment.URL_BASE}${URLS_ADMINISTRADOR.GET_ALL_NUTRICIONISTAS}/${idNutricionista}`;
    console.log('URL: ' + url);
    return this.http.get(url, httpOptions);
  }

   postNutricionista(nutricionista: Nutricionista) {
     const url = `${environment.URL_BASE}${URLS_ADMINISTRADOR.POST_NUTRICIONISTA}`;
     return this.http.post(url, nutricionista, { responseType: 'text' });
   }


  putNutricionista(nutricionista: Nutricionista): Observable<Object> {
    const url = `${environment.URL_BASE}${URLS_ADMINISTRADOR.PUT_NUTRICIONISTA}`;
    return this.http.put(url, nutricionista, { responseType: 'text' });
  }

  deleteNutricionista(idNutricionista: number): Observable<Object> {
    const url = `${environment.URL_BASE}${URLS_ADMINISTRADOR.DELETE_NUTRICIONISTA}/${idNutricionista}`;
    return this.http.delete(url, { responseType: 'text' });
  }
}
