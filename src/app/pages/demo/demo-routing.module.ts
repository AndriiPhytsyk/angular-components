import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoComponent } from './demo.component';
import { RouterModule } from '@angular/router';

const routes = [
  {
    path: '',
    component: DemoComponent,
    children: [
      {
        path: 'shared',
        loadChildren: () =>
          import('./pages/shared/shared.module').then(m => m.SharedModule)
      },
      {
        path: 'styles',
        loadChildren: () =>
          import('./pages/styles/styles.module').then(m => m.StylesModule)
      }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoRoutingModule {}
