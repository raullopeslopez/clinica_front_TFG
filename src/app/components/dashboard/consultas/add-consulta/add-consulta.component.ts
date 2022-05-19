import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Consulta } from 'src/app/interfaces/consulta';
import { ConsultaService } from 'src/app/services/consulta.service';

@Component({
  selector: 'app-add-consulta',
  templateUrl: './add-consulta.component.html',
  styleUrls: ['./add-consulta.component.css']
})
export class AddConsultaComponent implements OnInit {

  form: FormGroup;
  constructor(private fb: FormBuilder, 
              private _consultaService: ConsultaService,
              private router: Router,
              private _snackBar: MatSnackBar) {
    this.form = this.fb.group({
      consulta: ['', Validators.required],
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      edad: ['', Validators.required],
    })
  }

  ngOnInit(): void {
  }
addConsulta() {
   const consulta: Consulta = {
   consulta: this.form.value.consulta,
   nombre: this.form.value.nombre,
   apellido: this.form.value.apellido,
   edad: this.form.value.edad,
   sexo: this.form.value.sexo
   }

  this._consultaService.addConsulta(consulta);
  this.router.navigate(['/dashboard/consultas'])

  this._snackBar.open('Consulta añadida con éxito', '', {
     duration: 1500,
     horizontalPosition: 'center',
     verticalPosition: 'bottom'
   })
  }
}
