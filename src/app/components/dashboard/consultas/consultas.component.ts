import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Consulta } from 'src/app/models/consulta';
import { ConsultaService } from 'src/app/services/consulta.service';

@Component({
  selector: 'app-consultas',
  templateUrl: './consultas.component.html',
  styleUrls: ['./consultas.component.css'],
})
export class ConsultasComponent implements OnInit {
  listConsultas: Consulta[] = [];

  // Array que recoge las conlumnas empleadas por la tabla tipo Angular material
  displayedColumns: string[] = [
    'idConsulta',
    'fecha',
    'duracion',
    'precio',
    'cliente',
    'nutricionista',
    'opciones',
  ];
  
  // Elemento para almacenar la lógica para recuperar los datos
  dataSource!: MatTableDataSource<any>;

  // Elementos de paginación y ordenamiento Angular Material
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private _consultaService: ConsultaService,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.cargarConsultas();
  }

  // Método para cargar todas las consultas
  cargarConsultas() {
    this._consultaService.getAllConsultas().subscribe((response) => {
      this.listConsultas = response;
      this.dataSource = new MatTableDataSource(response);
      this.dataSource.paginator = this.paginator;
    });
  }

  // ngAfterViewInit() {
  //   this.dataSource.paginator = this.paginator;
  //   this.dataSource.sort = this.sort;
  // }



  /*
  eliminarConsulta(index: number) {
   console.log(index);

   this._consultaService.eliminarConsulta(index);
   this.cargarConsultas();

   this._snackBar.open('Consulta eliminada con éxito', '', {
    duration: 1500,
    horizontalPosition: 'center',
    verticalPosition: 'bottom'
  })
  } */

  // Método para eliminar la consulta.
  // Devuelve la tabla despues de la operacion
  eliminarConsulta(idConsulta: number) {
    this._consultaService.deleteConsulta(idConsulta).subscribe({
      next: (response) => {
        this.cargarConsultas();
      },
      error: (err) => {
        if (err.status === 200) this.cargarConsultas();
        console.log('ERROR: ', err);
      },
    });
  }
}
