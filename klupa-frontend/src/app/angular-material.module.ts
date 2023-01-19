import { NgModule } from '@angular/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';

@NgModule({
    imports: [
        MatTableModule,
        MatProgressSpinnerModule,
        MatPaginatorModule
    ],
    exports: [
        MatTableModule,
        MatProgressSpinnerModule,
        MatPaginatorModule
    ]
})
export class AngularMaterialModule { }
