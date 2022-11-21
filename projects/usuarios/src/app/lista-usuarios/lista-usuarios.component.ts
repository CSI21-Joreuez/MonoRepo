import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../usuarios.service';
import { Usuarios } from '../interfaces/usuarios';
import { User } from '../interfaces/user';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent implements OnInit {

  listaUsuarios: any[] = [];
  constructor(private userService: UsuariosService) {}

  ngOnInit(): void {
    this.userService.getUsuarios().subscribe(resp => {
      console.log(resp);
      resp.data.forEach((User :Usuarios) => this.listaUsuarios.push(User)); 
        
      })
        
      }
    }
