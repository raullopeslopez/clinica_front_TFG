import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Facturacion } from 'src/app/interfaces/facturacion';
import { FacturacionService } from 'src/app/services/facturacion.service';

@Component({
  selector: 'app-add-factura',
  templateUrl: './add-factura.component.html',
  styleUrls: ['./add-factura.component.css']
})
export class AddFacturaComponent implements OnInit {

  form: FormGroup;
  constructor(private fb: FormBuilder, 
              private _facturacionService: FacturacionService,
              private router: Router,
              private _snackBar: MatSnackBar) {
    this.form = this.fb.group({
      factura: ['', Validators.required],
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      edad: ['', Validators.required],
    })
  }

  ngOnInit(): void {
  }

  addFactura() {
    const factura: Facturacion = {
      factura: this.form.value.factura,
      nombre: this.form.value.nombre,
      apellido: this.form.value.apellido,
      edad: this.form.value.edad,
      sexo: this.form.value.sexo
    }

    //this._facturacionService.addFactura(factura);
    this.router.navigate(['/dashboard/consultas'])

    this._snackBar.open('Factura añadida con éxito', '', {
      duration: 1500,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    })
  }
}
