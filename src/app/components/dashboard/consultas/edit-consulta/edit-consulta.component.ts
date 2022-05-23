import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Consulta } from 'src/app/models/consulta';
import { ConsultaService } from 'src/app/services/consulta.service';

@Component({
  selector: 'app-edit-consulta',
  templateUrl: './edit-consulta.component.html',
  styleUrls: ['./edit-consulta.component.css'],
})
export class EditConsultaComponent implements OnInit {
  idConsulta: number;
  consulta: Consulta = new Consulta();
  form: FormGroup;
  consultaModificada: Consulta;
  datas: any = {
    porcentajeVariable: '',
    duracion: '',
    fechaConsulta: '',
    precio: '',
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private _consultaService: ConsultaService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.idConsulta = this.route.snapshot.params['id'];
    this._consultaService
      .getConsultasId(this.idConsulta)
      .subscribe((resp: any) => console.log(resp));
    console.log('objeto consulta ' + this.consulta);
    console.log(this.idConsulta);
    this.form = this.fb.group({
      porcentajeVariable: [''],
      duracion: [''],
      fechaConsulta: [''],
      precio: [''],
    });
  }

  editConsulta() {
    this._consultaService
      .getConsultasId(this.idConsulta)
      .subscribe((resp: Consulta) => {
        console.log(resp.porcentajeVariable);
        if (this.form.get('porcentajeVariable')?.value !== '') {
          resp.porcentajeVariable = this.form.get('porcentajeVariable')?.value;
        }
        if (this.form.get('duracion')?.value !== '') {
          resp.duracion = this.form.get('duracion')?.value;
        }
        if (this.form.get('fechaConsulta')?.value !== '') {
          resp.fechaConsulta = this.form.get('fechaConsulta')?.value;
          resp.fechaConsulta = resp.fechaConsulta.concat(' 00:00:00');
        }
        if (this.form.get('precio')?.value !== '') {
          resp.precio = this.form.get('precio')?.value;
        }
        console.log(resp.porcentajeVariable);
        console.log(resp.duracion);
        console.log(resp.fechaConsulta);
        console.log(resp.precio);
        //console.log(resp.fechaConsulta.split(' ')[0]);
        //resp.fechaConsulta = resp.fechaConsulta.split(' ')[0];

        this._consultaService.putConsulta(resp).subscribe({
          next: (data) => {
            console.log('CONSULTA MODIFICADA: ' + JSON.stringify(data));
            this.router.navigate(['/dashboard/consultas']);
          },
          error: (err) => console.log('ERROR: ', err),
        });
      });

    /* this._consultaService.putConsulta(this.consulta).subscribe({
      next: (data) => {
        console.log('CONSULTA MODIFICADA: ' + JSON.stringify(data));
        this.router.navigate(['/dashboard/consultas']);
      },
      error: (err) => console.log('ERROR: ', err),
    }); */

    this.snackBar.open('Consulta editada con éxito', '', {
      duration: 1500,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
    });
  }
}
