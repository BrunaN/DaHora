import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  constructor() {
    
   }

  ngOnInit() {
    
  }

  pega(nome:string, matricula:string, curso:number, email:string, senha:string, senha2:string) {
    console.log(nome, matricula, curso, email, senha, senha2);
    if(nome!="" && matricula!="" && email!=""  && senha!="" && senha2!=""){
      console.log("tudo cheio");
      if(senha==senha2){
        console.log("senha certa");
        //aqui fica a função de enviar os dados para o servidor.
      }
    }
  }
}
