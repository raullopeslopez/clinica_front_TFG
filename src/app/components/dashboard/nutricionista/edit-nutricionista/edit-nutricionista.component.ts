import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Nutricionista } from 'src/app/models/nutricionista';
import { NutricionistaService } from 'src/app/services/nutricionista.service';

@Component({
  selector: 'app-edit-nutricionista',
  templateUrl: './edit-nutricionista.component.html',
  styleUrls: ['./edit-nutricionista.component.css'],
})
export class EditNutricionistaComponent implements OnInit {
  idNutricionista: number;
  nutricionista: Nutricionista;

  form: FormGroup;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private nutricionistaService: NutricionistaService,
    private fb: FormBuilder,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.idNutricionista = this.route.snapshot.params ['idNutricionista'];
    this.form = this.fb.group({
      idNutricionista: ['', Validators.required],
      nombre: ['', Validators.required],
      apellidos: ['', Validators.required],
      fechaNacimiento: ['', Validators.required],
      fechaAlta: ['', Validators.required],
      activo: ['', Validators.required],
      dni: ['', Validators.required],
      telefono: ['', Validators.required],
      sueldo: ['', Validators.required],
    });
  }

  editNutricionista() {
    this.nutricionistaService.putNutricionista(this.form.value).subscribe({
      next: (data) => {
        console.log("NUTRICIONISTA MODIFICADO: " + JSON.stringify(data))
        this.router.navigate(['/dashboard/nutricionistas'])
      },
      error: (err) => console.log('ERROR: ', err),
    });

    this.snackBar.open('Nutricionista editado con éxito', '', {
      duration: 1500,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    })
  }
}
