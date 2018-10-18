import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

login(email:string,senha:string){
  if(email!="" && senha!=""){
    console.log("tudo ok", email, senha);
    //aqui fica função para mandar dados pro login
  }else{
    console.log("falta algo");
  }
}

}
