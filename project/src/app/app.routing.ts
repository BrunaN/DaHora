import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { Routes, RouterModule } from "@angular/router";

const APP_ROUTES: Routes = [
    {path:"", redirectTo: "/login", pathMatch:"full"},
    {path: "login", component: LoginComponent},
    {path: "cadastro", component: CadastroComponent}
]

export const routing = RouterModule.forRoot(APP_ROUTES);