import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { Consulta } from 'src/app/models/consulta';
import { ConsultaService } from 'src/app/services/consulta.service';

@Component({
  selector: 'app-info-consulta',
  templateUrl: './info-consulta.component.html',
  styleUrls: ['./info-consulta.component.css'],
})
export class InfoConsultaComponent implements OnInit {
  consulta: Consulta;
  id: number;
  listConsultas: Consulta[] = [];
  listConsultasfecha: Consulta[] = [];
  fecha: any;

  // Array que recoge las conlumnas empleadas por la tabla tipo Angular material
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

  // Array que recoge las conlumnas empleadas por la tabla tipo Angular material
  displayedColumnsfecha: string[] = [
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

  // Elemento para almacenar la lógica para recuperar los datos
  dataSource!: MatTableDataSource<any>;
  dataSourcefecha!: MatTableDataSource<any>;

  constructor(
    private route: ActivatedRoute,
    private _consultaService: ConsultaService,
    private router: Router
  ) {}

   // El método que inicia con el componente contiene 
  // el la lógica para recuperar las consultas por nutricionista
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    console.log(this.id);
    this.consulta = new Consulta();
    this._consultaService
      .getConsultasByNutricionista(this.id)
      .subscribe((resp: any) => {
        this.listConsultas = resp;
        this.dataSource = new MatTableDataSource(resp);
        console.log(this.listConsultas);
      });
  }

  // Método para cargar las consultas
  cargarConsultas() {
    this._consultaService.getAllConsultas().subscribe((response) => {
      this.listConsultas = response;
      this.dataSource = new MatTableDataSource(response);
    });
  }

  SendDataonChange(event: any) {
    this.fecha = event.target.value;

    //const dateString = fecha + ' ' + '02:00:00';
    //console.log(dateString);
  }

  // Metodo para controlar guardar las fechas
  // para poder recuperar las consultas
  // con dicho dato
  buscarxfecha() {
    console.log(this.fecha);
    const fec = '2022-05-13 02:00:00';
    this.router.navigate(['info-consulta-fecha', this.id, this.fecha]);
  }

  /* SendDataonChange(event: any) {
    const fecha = event.target.value;
    const dateString = fecha;
    const year = +dateString.substring(0, 4);
    const month = +dateString.substring(4, 6);
    const day = +dateString.substring(6, 8);

    const date = new Timestamp(year, month - 1, day);
    console.log(date);
  } */

  /* ionViewDidEnter() {
    this.consulta.idConsulta = this.route.snapshot.paramMap.get('idConsulta');
    this.cargarConsultasNutricionista();
  } */
}
