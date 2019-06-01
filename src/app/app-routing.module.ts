import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TabelaCnjCreateComponent } from './components/tabela-cnj-create/tabela-cnj-create.component';
import { TabelaCnjUpdateComponent } from './components/tabela-cnj-update/tabela-cnj-update.component';

const routes: Routes = [
  { path: '', redirectTo: '/update', pathMatch: 'full' },
  { path: 'update', component: TabelaCnjUpdateComponent },
  { path: 'create', component: TabelaCnjCreateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
