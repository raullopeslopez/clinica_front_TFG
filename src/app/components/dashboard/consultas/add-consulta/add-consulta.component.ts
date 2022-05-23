import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Bono } from 'src/app/models/bono';
import { Cliente } from 'src/app/models/cliente';
import { Consulta } from 'src/app/models/consulta';
import { Nutricionista } from 'src/app/models/nutricionista';
import { ConsultaService } from 'src/app/services/consulta.service';
import { NutricionistaService } from 'src/app/services/nutricionista.service';

@Component({
  selector: 'app-add-consulta',
  templateUrl: './add-consulta.component.html',
  styleUrls: ['./add-consulta.component.css'],
})
export class AddConsultaComponent implements OnInit {
  form: FormGroup;
  nuevaConsulta: Consulta = new Consulta();
  listNutricionistas: Nutricionista[] = [];
  listBono: Bono[] = [];
  listCliente: Cliente[] = [];

  constructor(
    private fb: FormBuilder,
    private nutricionistaService: NutricionistaService,
    private _consultaService: ConsultaService,
    private router: Router,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.nutricionistaService.getAllNutricionistas().subscribe((response) => {
      this.listNutricionistas = response;
    });
    this._consultaService.getAllBonos().subscribe((response) => {
      this.listBono = response;
    });
    this._consultaService.getAllClientes().subscribe((response) => {
      this.listCliente = response;
    });
    this.form = this.fb.group({
      duracion: ['', Validators.required],
      fechaConsulta: ['', Validators.required],
      porcentajeVariable: ['', Validators.required],
      precio: ['', Validators.required],
      bono: ['', Validators.required],
      cliente: ['', Validators.required],
      nutricionista: ['', Validators.required],
    });
  }
  postConsulta() {
    console.log(this.form.value.fechaConsulta.concat(' 00:00:00'));
    this.form.value.fechaConsulta =
      this.form.value.fechaConsulta.concat(' 00:00:00');
    console.log(this.form.value.fechaConsulta.concat(' 00:00:00'));
    this._consultaService.postConsulta(this.form.value).subscribe({
      next: (data) => {
        console.log('CONSULTA AÑADIDA: ' + JSON.stringify(data));
        this.router.navigate(['/dashboard/consultas']);
      },
      error: (err) => console.log('ERROR: ', err),
    });
    //this._consultaService.addConsulta(consulta);
    //this.router.navigate(['/dashboard/consultas']);

    this._snackBar.open('Consulta añadida con éxito', '', {
      duration: 1500,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
    });
  }
}
