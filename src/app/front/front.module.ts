import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { FrontComponent } from 'src/app/front/front.component';
import { FrontRouteModule } from 'src/app/front/front.routing.module';

@NgModule({
    declarations: [
        FrontComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        FrontRouteModule
    ],
    providers: []
})
export class FrontModule { }
