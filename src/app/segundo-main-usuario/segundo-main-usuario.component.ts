import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
// import { cadastra } from '../models/cadastra.model';
import { UsuarioService } from '../services/cadastra.service';


@Component({
  selector: 'app-segundo-main-usuario',
  templateUrl: './segundo-main-usuario.component.html',
  styleUrls: ['./segundo-main-usuario.component.scss']
})

export class SegundoMainUsuarioComponent implements OnInit {

  // guardar a lista de usuarios
  ListaUsuarios: any;
  
  // parte de EDITAR
  idElemento!: number;

  // parte do cadastro precisa de um formulario
  form!: FormGroup;

  constructor(private serviceUsuario : UsuarioService, private FB: FormBuilder) { }

  // metodo que é executado quando o componente abre
  ngOnInit(): void {
    this.form = this.FB.group({
      nome:'',
      email:'',
      telefone:'',
    })


    this.listarUsuario()
  }

  // LISTAR
  listarUsuario(){
    this.serviceUsuario.getUsuario().subscribe({
      next: (usuarios: any) => {
        console.log(usuarios);
        this.ListaUsuarios = usuarios;
        
      },
      error: (pessoas:any) => {
        console.log("deu ruim" + pessoas);
        
      } 
    })
  }

  // cadastra
  cadastraUsuarios(){
   let nomeInput = this.form.controls["nome"].value
   let emailInput = this.form.controls["email"].value
   let telefoneInput = this.form.controls["telefone"].value

  //  objeto
  let dados = {
    id: this.ListaUsuarios[this.ListaUsuarios.length - 1].id + 1,
    nome: nomeInput,
    email: emailInput,
    telefone: telefoneInput,
  }


    this.serviceUsuario.postUsuario(dados).subscribe({
      next: (usuarios: any) => {
        console.log(usuarios);
        this.ListaUsuarios()
        
      },
      error: (pessoas:any) => {
        console.log("deu ruim" + pessoas);
        
      } 
    })
  }

  deletarUsuario(identificador:number){
    this.serviceUsuario.excluirUsuario(identificador).subscribe({
      next: (usuarios: any) => {
        console.log(usuarios);
        this.listarUsuario()
      },
      error: (pessoas:any) => {
        console.log("deu ruim" + pessoas);
        
      } 
    })
  }


  // EDITAR
  pegarDados(dados: any){
    this.idElemento = dados.id;
    this.form.controls["nome"].setValue(dados.nome);
    this.form.controls["email"].setValue(dados.email);
    this.form.controls["telefone"].setValue(dados.telefone);
  }

  // segunda parte EDITAR
    editarUsuarios(){
   let nomeInput = this.form.controls["nome"].value
   let emailInput = this.form.controls["email"].value
   let telefoneInput = this.form.controls["telefone"].value

  //  objeto
  let dados = {
    id: this.idElemento,
    nome: nomeInput,
    email: emailInput,
    telefone: telefoneInput,
  }


    this.serviceUsuario.editarUsuario(dados).subscribe({
      next: (usuarios: any) => {
        console.log(usuarios);
        this.ListaUsuarios()
        
      },
      error: (pessoas:any) => {
        console.log("deu ruim" + pessoas);
        
      } 
    })
    }




}

  






