import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CodebuilderComponent } from './modules/codebuilder/component/codebuilder.component';

const routes: Routes = [
  {
    path: 'codebuilder',
    component: CodebuilderComponent,
  },
  { path: '', redirectTo: 'codebuilder', pathMatch: 'full' },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
