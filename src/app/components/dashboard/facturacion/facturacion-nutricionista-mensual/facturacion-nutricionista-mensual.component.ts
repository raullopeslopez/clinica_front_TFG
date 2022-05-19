import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FacturacionNutricionista } from 'src/app/models/facturacion-nutricionista';

@Component({
  selector: 'app-facturacion-nutricionista-mensual',
  templateUrl: './facturacion-nutricionista-mensual.component.html',
  styleUrls: ['./facturacion-nutricionista-mensual.component.css']
})
export class FacturacionNutricionistaMensualComponent implements OnInit {

  listFacturas: any = {}

  constructor(private http : HttpClient) { }

  ngOnInit(): void {
    this.cargarFacturacionNutricionistaMensual();
  }

  cargarFacturacionNutricionistaMensual() {
    let fxmin = '1900-01-01'
    let fxmax = '2023-01-01'
    let params = new HttpParams()
    .set('fechaMin', fxmin)
    .set('fechaMax', fxmax)

    this.http.get(`http://localhost:8080/nutricionistas/facturacion/1/mensual`, {params: params}).subscribe({
          next: data => {
            // Te saca entre las fechas seleccionadas y por el nutri seleccionado
            this.listFacturas = data
            this.listFacturas = Array.of(this.listFacturas)
            console.log('XXX',data)
          },
          error: err => console.log("ERROR: ", err) 
    })

  }

  

}
