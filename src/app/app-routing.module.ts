import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentDocumentationComponent } from './pages/component-documentation/component-documentation.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    component: ComponentDocumentationComponent,
    data: { title: 'Components' }
  },
  {
    path: 'services',
    data: { title: 'Components' },
    loadChildren: () =>
      import(
        './pages/services-documentation/services-documentation.module'
      ).then(m => m.ServicesDocumentationModule)
  },
  {
    path: 'js',
    data: { title: 'Javascript' },
    loadChildren: () =>
      import('./pages/js-documentation/js-documentation.module').then(
        m => m.JsDocumentationModule
      )
  },
  {
    path: 'directives',
    data: { title: 'Directives' },
    loadChildren: () =>
      import(
        './pages/directives-documentation/directives-documentation.module'
      ).then(m => m.DirectivesDocumentationModule)
  },
  {
    path: 'pipes',
    data: { title: 'Pipes' },
    loadChildren: () =>
      import('./pages/pipes-documentation/pipes-documentation.module').then(
        m => m.PipesDocumentationModule
      )
  },
  {
    path: 'other',
    data: { title: 'Other' },
    loadChildren: () =>
      import('./pages/other-documentation/other-documentation.module').then(
        m => m.OtherDocumentationModule
      )
  },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
