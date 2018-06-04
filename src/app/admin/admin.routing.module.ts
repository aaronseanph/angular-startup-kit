import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AdminComponent } from 'src/app/admin/admin.component';


const adminRoutes: Routes = [
    { path: 'admin', component: AdminComponent, children: [
        {path: '', component: AdminComponent }
    ]}
];

@NgModule({
    imports: [RouterModule.forChild(adminRoutes)],
    exports: [RouterModule]
})
export class AdminRouteModule {}
