import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

// Metodo para mostrar la barra de navegar en todos los componentes
// del dashboard
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
