import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule,  Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRouteModule {

}
