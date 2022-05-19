import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FacturacionService } from 'src/app/services/facturacion.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {


  facturacionMensual: any;
  facturacionDiaria: any;
  constructor( private facturaService: FacturacionService) { }

  ngOnInit(): void {
    this.cargarFacturacionMensual();
    this.cargarFacturacionDiaria();
  }

  cargarFacturacionMensual() { 
    this.facturaService.getFacturacionMensual().subscribe ({
      next: data => {
        this.facturacionMensual = data
       console.log('MENSUAL: ' + JSON.stringify(this.facturacionMensual)) 
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
