import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';

@NgModule({
    imports: [
        MatTableModule,
        MatProgressSpinnerModule,
        MatPaginatorModule,
        MatIconModule
    ],
    exports: [
        MatTableModule,
        MatProgressSpinnerModule,
        MatPaginatorModule,
        MatIconModule
    ]
})
export class AngularMaterialModule { }
