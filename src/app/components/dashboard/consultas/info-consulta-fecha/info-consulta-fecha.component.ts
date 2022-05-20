import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { Consulta } from 'src/app/models/consulta';
import { ConsultaService } from 'src/app/services/consulta.service';

@Component({
  selector: 'app-info-consulta-fecha',
  templateUrl: './info-consulta-fecha.component.html',
  styleUrls: ['./info-consulta-fecha.component.css'],
})
export class InfoConsultaFechaComponent implements OnInit {
  id: number;
  fecha: string;
  listConsultas: Consulta[] = [];

  displayedColumns: string[] = [
    'idConsulta',
    'fecha',
    'duracion',
    'precio',
    'porcentajeVariable',
    'cliente',
    'clienteapellidos',
    'fechaalta',
    'bonosRestantes',
    'cantidadConsultas',
  ];

  dataSource!: MatTableDataSource<any>;

  constructor(
    private route: ActivatedRoute,
    private _consultaService: ConsultaService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.fecha = this.route.snapshot.params['fecha'];
    console.log(this.id);
    console.log(this.fecha);
    this._consultaService
      .getConsultasByNutricionistaDate(this.id, this.fecha)
      .subscribe((resp: any) => {
        this.listConsultas = resp;
        this.dataSource = new MatTableDataSource(resp);
        console.log(this.listConsultas);
      });
  }
}
