import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FacturacionService } from 'src/app/services/facturacion.service';

@Component({
  selector: 'app-facturacion',
  templateUrl: './facturacion.component.html',
  styleUrls: ['./facturacion.component.css']
})
export class FacturacionComponent implements OnInit {

  facturacionGlobal: any 
  facturacionNutricionista: any
  facturacionDiaria: any

  constructor(private facturaService: FacturacionService, private _snackBar: MatSnackBar,
    private http:HttpClient) { }

  ngOnInit(): void {

    this.cargarFacturacionGlobalFechas();
    this.cargarFacturacionNutricionista();
    this.cargarFacturacionDiaria();
  }


  cargarFacturacionGlobalFechas() {
    let fxmin = '1900-01-01'
    let fxmax = '2023-01-01'
    let params = new HttpParams()
    .set('fechaMin', fxmin)
    .set('fechaMax', fxmax)

    this.http.get(`http://localhost:8080/nutricionistas/facturacion`, {params: params}).subscribe({
          next: data => {
            // Global saca pormenorizada por nutri entre fechas
            this.facturacionGlobal = data
            console.log('GLOBALFECHAS', JSON.stringify(this.facturacionGlobal))
          },
          error: err => console.log("ERROR: ", err) 
    })
  }

  cargarFacturacionNutricionista() {
    this.http.get(`http://localhost:8080/nutricionistas/facturacion/1`).subscribe({
          next: data => {
            // Tiene en cuenta que la facturacion es del mes del 1 hasta el dia actual
            this.facturacionNutricionista = data
            this.facturacionNutricionista = Array.of(this.facturacionNutricionista)
            console.log('NUTRICIONISTA', JSON.stringify(this.facturacionNutricionista))
          },
          error: err => console.log("ERROR: ", err) 
    })
  }

  cargarFacturacionDiaria() { 
    this.facturaService.getFacturacionDiaria().subscribe ({
      next: data => {
        this.facturacionDiaria = data
        console.log('DIARIA', JSON.stringify(this.facturacionDiaria))
     },
      error: err => console.log("ERROR: ", err) 
    })
 }

}

