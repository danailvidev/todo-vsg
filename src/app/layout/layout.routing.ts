import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutComponent } from './layout.component';
import { DefaultLayoutComponent } from './default-layout';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: '/todos', pathMatch: 'full' },
      {
        path: 'todos',
        loadChildren: () =>
          import('../pages/todos/todos.module').then(
            (m) => m.TodosModule
          ),
      },
    ],
  },
];

export const LayoutRouting: ModuleWithProviders<RouterModule> =
  RouterModule.forChild(routes);

export class LayoutComponents {
  public static components = [DefaultLayoutComponent, LayoutComponent];
}
