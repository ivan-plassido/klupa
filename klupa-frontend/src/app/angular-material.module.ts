import { OverlayModule } from '@angular/cdk/overlay';
import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
    imports: [
        MatTableModule,
        MatProgressSpinnerModule,
        MatPaginatorModule,
        MatIconModule,
        OverlayModule,
        MatDialogModule,
        MatTabsModule
    ],
    exports: [
        MatTableModule,
        MatProgressSpinnerModule,
        MatPaginatorModule,
        MatIconModule,
        OverlayModule,
        MatDialogModule,
        MatTabsModule
    ]
})
export class AngularMaterialModule { }
