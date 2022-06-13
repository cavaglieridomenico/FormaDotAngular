import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  //Nell'array specifico le rotte. Sono degli oggetti JS
  {path: '', component: HomeComponent},
  {path: 'users', component: UsersComponent, children: [
    //i : identificano una propr dinamica da passare alla route, all'url
    {path: ':id/:nome', component: UserComponent}
  ]},

  {path: 'servers', component: ServersComponent, children: [
    // {path: 'server', component: ServerComponent},
    // {path: 'edit', component: EditServerComponent}
    {path: ':id', component: ServerComponent},
    {path: ':id/edit', component: EditServerComponent}
  ]},

  //NOt found. ATT: deve essere sempre inserito al fondo
  {path: 'not-found', component: PageNotFoundComponent},
  {path: '**', redirectTo: 'not-found'} //wildcard, da inserire sempre al fondo


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
