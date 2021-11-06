import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-compras',
  templateUrl: './compras.component.html',
  styleUrls: ['./compras.component.scss']
})
export class ComprasComponent implements OnInit {

  user=""
  password=""

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  irVentas(){
    this.router.navigateByUrl('/ventas')
  }

  iniciarSesion(){
    if(this.user == 'profe' && this.password == '1234'){
      //credenciales correctas
      alert("CREDENCIALES CORRECTAS, REDIRIGIENDO")
      this.irVentas()
    }else{
      //credenciales incorrectas
      alert("CREDENCIALES INCORRECTAS")
    }
  }
}
