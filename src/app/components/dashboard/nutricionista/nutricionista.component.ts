import { Component, OnInit} from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Nutricionista } from 'src/app/interfaces/nutricionista';
import { NutricionistaService } from 'src/app/services/nutricionista.service';

@Component({
  selector: 'app-nutricionista',
  templateUrl: './nutricionista.component.html',
  styleUrls: ['./nutricionista.component.css']
})

export class NutricionistaComponent implements OnInit {
  
  listNutricionistas: Nutricionista[] = [];
  displayedColumns: string[] = ['idNutricionista','nombre', 'apellidos', 'telefono',  'opciones'];
  

  constructor(private nutricionistaService: NutricionistaService, private router: Router, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.cargarNutricionistas();
  }

  cargarNutricionistas() {
    this.nutricionistaService.getAllNutricionistas().subscribe (response => {
    this.listNutricionistas = response;
    })
  }
  
  getNutricionista(idNutricionista: Number) {
    this.router.navigate(['/dashboard/detail-nutricionista', idNutricionista])
  }

  editNutricionista(idNutricionista: Number) {
    this.router.navigate(['/dashboard/edit-nutricionista', idNutricionista])
  }

  eliminarNutricionista(idNutricionista : number) {
    this.nutricionistaService.deleteNutricionista(idNutricionista).subscribe ({
      next: response => {
        this.cargarNutricionistas()
      },
      error: err => {
        if (err.status === 200)
        this.cargarNutricionistas()
        console.log ('ERROR: ', err)}
    })
  }
}
