import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { FacturacionService } from 'src/app/services/facturacion.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  facturacionMensual: any;
  facturacionDiaria: any;

  // Array que recoge las conlumnas empleadas por la tabla tipo Angular material
  displayedColumns: string[] = [
    'nutricionista',
    'minutos_trabajados',
    'facturacion_bruta',
    'facturacion_neta',
    'facturacion_bruta_hora',
    'facturacion_neta_hora',
    'numero_consultas'];

  // Elemento para almacenar la lógica para recuperar los datos  
  dataSource!: MatTableDataSource<any>;
  dataSourceDiario!: MatTableDataSource<any>;

  constructor( private facturaService: FacturacionService) { }

  ngOnInit(): void {
    this.cargarFacturacionMensual();
    this.cargarFacturacionDiaria();
  }

  //Metodo para mostrar la facturacion mensual
  cargarFacturacionMensual() { 
    this.facturaService.getFacturacionMensual().subscribe ({
      next: data => {
        this.facturacionMensual = data
        this.dataSource = new MatTableDataSource(this.facturacionMensual)
        console.log('MENSUAL: ' + JSON.stringify(this.facturacionMensual)) 
     },
      error: err => console.log("ERROR: ", err) 
    })
 }

 // Metodo para cargar la facturacion diaria
 cargarFacturacionDiaria() { 
  this.facturaService.getFacturacionDiaria().subscribe ({
    next: data => {
      this.facturacionDiaria = data
      this.dataSourceDiario = new MatTableDataSource(this.facturacionDiaria)
      console.log('DIARIA', JSON.stringify(this.facturacionDiaria))
   },
    error: err => console.log("ERROR: ", err) 
  })
}

}
