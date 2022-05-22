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

  // Array que recoge las conlumnas empleadas por la tabla tipo Angular material
  displayedColumns: string[] = ['idNutricionista',
                                'nombre', 
                                'apellidos', 
                                'telefono',  
                                'opciones'];
  

  constructor(private nutricionistaService: NutricionistaService,
              private router: Router, 
              private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.cargarNutricionistas();
  }

  // Metodo para mostrar todos los nutricionistas
  cargarNutricionistas() {
    this.nutricionistaService.getAllNutricionistas().subscribe (response => {
    this.listNutricionistas = response;
    })
  }
  
  // Metodo para registrar el id del nutricionista
  // y pasarlo al siguiente componente
  getNutricionista(idNutricionista: Number) {
    this.router.navigate(['/dashboard/detail-nutricionista', idNutricionista])
  }

  // Metodo para registrar el id del nutricionista
  // y pasarlo al siguiente componente
  editNutricionista(idNutricionista: Number) {
    this.router.navigate(['/dashboard/edit-nutricionista', idNutricionista])
  }

  // Metodo para eliminar a un nutricionista
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
    // llamada al elemento del mensaje en pantalla tras la ejecucion
    // exitosa del metodo
    this.snackBar.open('Nutricionista eliminado con éxito', '', {
      duration: 1500,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    })
  }
}
