import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FrontComponent } from 'src/app/front/front.component';


const frontRoutes: Routes = [
    { path: '', component: FrontComponent, children: [

    ]}
];

@NgModule({
    imports: [RouterModule.forChild(frontRoutes)],
    exports: [RouterModule]
})
export class FrontRouteModule {}
