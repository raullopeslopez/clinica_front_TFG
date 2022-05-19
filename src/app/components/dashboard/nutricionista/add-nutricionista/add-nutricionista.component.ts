import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Nutricionista } from 'src/app/models/nutricionista';
import { NutricionistaService } from 'src/app/services/nutricionista.service';

@Component({
  selector: 'app-add-nutricionista',
  templateUrl: './add-nutricionista.component.html',
  styleUrls: ['./add-nutricionista.component.css'],
})
export class AddNutricionistaComponent implements OnInit {
  
  newNutricionista: Nutricionista = new Nutricionista();
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private nutricionistaService: NutricionistaService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
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

  postNutricionista() {
    this.nutricionistaService.postNutricionista(this.form.value).subscribe({
      next: (data) => {
        this.router.navigate(['/dashboard/nutricionistas']);
      },
      error: (err) => console.log('ERROR: ', err),
    });

     this.snackBar.open('Nutricionista añadido con éxito', '', {
      duration: 1500,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    })
  }
}
