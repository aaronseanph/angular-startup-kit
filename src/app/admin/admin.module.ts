import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { AdminComponent } from 'src/app/admin/admin.component';
import { AdminRouteModule } from 'src/app/admin/admin.routing.module';

@NgModule({
    declarations: [
        AdminComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        AdminRouteModule
    ],
    providers: []
})
export class AdminModule { }
