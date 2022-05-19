import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Consulta } from 'src/app/interfaces/consulta';
import { ConsultaService } from 'src/app/services/consulta.service';

@Component({
  selector: 'app-consultas',
  templateUrl: './consultas.component.html',
  styleUrls: ['./consultas.component.css']
})
export class ConsultasComponent implements OnInit {

  listConsultas: Consulta[] = [];

  displayedColumns: string[] = ['consulta','nombre', 'apellido', 'edad', 'sexo', 'opciones'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private _consultaService: ConsultaService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.cargarConsultas();
  }

  cargarConsultas() {
    this.listConsultas = this._consultaService.getConsulta();
    this.dataSource = new MatTableDataSource(this.listConsultas);
    console.log(this.dataSource)
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  eliminarConsulta(index: number) {
   console.log(index);

   this._consultaService.eliminarConsulta(index);
   this.cargarConsultas();

   this._snackBar.open('Consulta eliminada con éxito', '', {
    duration: 1500,
    horizontalPosition: 'center',
    verticalPosition: 'bottom'
  })
  }
}
