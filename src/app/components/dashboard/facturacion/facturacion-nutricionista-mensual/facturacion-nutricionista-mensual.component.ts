import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FacturacionNutricionista } from 'src/app/models/facturacion-nutricionista';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-facturacion-nutricionista-mensual',
  templateUrl: './facturacion-nutricionista-mensual.component.html',
  styleUrls: ['./facturacion-nutricionista-mensual.component.css']
})
export class FacturacionNutricionistaMensualComponent implements OnInit {

  idNutricionista : number
  param = new HttpParams()
  fechaMin : any
  fechaMax : any

  // Elemento para almacenar la lógica para recuperar los datos
  dataSource!: MatTableDataSource<any>;
  
  // Array que recoge las conlumnas empleadas por la tabla tipo Angular material
  displayedColumns: string[] = [
    'nutricionista',
    'minutos_trabajados',
    'facturacion_bruta',
    'facturacion_neta',
    'facturacion_bruta_hora',
    'facturacion_neta_hora',
    'numero_consultas'
  ];


  constructor(private http : HttpClient,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.idNutricionista = this.route.snapshot.params['idNutricionista'];
  }

  // Metodo para recuperar la facturacion global segun las fechas
  // y el ID recuperados en el formulario de la vista
  getFacturacionFechasNutricionista (fMin: any, fMax:any, idNu:any) {
    this.fechaMin = fMin
    this.fechaMax = fMax
    this.idNutricionista = idNu
    this.param = new HttpParams()
    .set('fechaMin', this.fechaMin)
    .set('fechaMax', this.fechaMax)
    
    console.log('FECHAS: ' + this.param)
    
    this.http.get(`http://localhost:8080/gestion/facturacion/nutricionista/${idNu}/mensual`, {params: this.param}).subscribe({
        next: data => {
        // Global saca pormenorizada por nutri entre fechas
        console.log('aaa ' + data)
        this.dataSource = new MatTableDataSource([data])
            },
            error: err => console.log("ERROR: ", err) 
     })
  }

  

}
