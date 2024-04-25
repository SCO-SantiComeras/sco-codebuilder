import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CodebuilderComponent } from './modules/codebuilder/component/codebuilder.component';
import { CodebuilderExampleComponent } from './modules/codebuilder-example/codebuilder-example.component';

const routes: Routes = [
  {
    path: 'codebuilder',
    component: CodebuilderComponent,
  },
  {
    path: 'codebuilder-example',
    component: CodebuilderExampleComponent,
  },
  { path: '', redirectTo: 'codebuilder', pathMatch: 'full' },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
