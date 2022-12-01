import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { cadastra } from '../models/cadastra.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

// API
export class UsuarioService {
  private listaCadastro: any[];
  // private url ='http://localhost:3000/cadastro';
  url : string = 'http://localhost:3000/cadastro';

  // FETCH: interage com as APIS (no angular o fetch é o HTTPCLIENT)
  // injeção de dependencia
  constructor(private httpClient : HttpClient) { 
    this.listaCadastro = [];
  }


  get cadastro(){
    return this.listaCadastro;
  }

  // OBSERVABLE: o que acontece depois, durante e caso de erro


  // pegando os dados da API
  // lista
  getUsuario(): Observable<cadastra[]>{
     return this.httpClient.get<cadastra[]>(this.url);
  }


  // cadastra
  postUsuario(dados : any): Observable<any>{
    return this.httpClient.post(this.url, dados);
  }
  
  // excluir
  excluirUsuario(i: number): Observable<any>{
    return this.httpClient.delete(`${this.url}/${i}`)
  }  

  // editar
  editarUsuario(dados:any): Observable<any>{
    return this.httpClient.put(`${this.url}/${dados.id}`, dados)
  }  




}
  


