import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatRippleModule } from '@angular/material/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
    exports: [
        MatFormFieldModule,
        MatInputModule,
        MatDialogModule,
        MatTooltipModule,
        MatSelectModule,
        MatButtonModule,
        MatCardModule,
        MatRippleModule,
        MatProgressBarModule,
        MatProgressSpinnerModule
    ],
})
export class MaterialModule { }
