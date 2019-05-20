import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TabelaCnjCreateComponent } from './tabela-cnj-create/tabela-cnj-create.component';
import { TabelaCnjComponent } from './tabela-cnj/tabela-cnj.component';

const routes: Routes = [
  { path: '', redirectTo: '/update', pathMatch: 'full' },
  { path: 'update', component: TabelaCnjComponent },
  { path: 'create', component: TabelaCnjCreateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
