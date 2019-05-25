import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabelaCnjComponent } from './tabela-cnj/tabela-cnj.component';
import {
    MatTableModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatOptionModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatBottomSheetModule
} from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { EstadoService } from './services/estado.service';
import { AutoresComponent } from './autores/autores.component';
import { ReusComponent } from './reus/reus.component';
import { FormsModule } from '@angular/forms';
import { TabelaCnjCreateComponent } from './tabela-cnj-create/tabela-cnj-create.component';
import { ConfirmaRemocaoComponent } from './confirma-remocao/confirma-remocao.component';

@NgModule({
    declarations: [
        AppComponent,
        TabelaCnjComponent,
        AutoresComponent,
        ReusComponent,
        TabelaCnjCreateComponent,
        ConfirmaRemocaoComponent,
    ],
    imports: [
        BrowserAnimationsModule,
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        MatTableModule,
        MatCheckboxModule,
        MatFormFieldModule,
        MatInputModule,
        MatSlideToggleModule,
        MatSelectModule,
        MatOptionModule,
        MatButtonModule,
        MatDialogModule,
        MatIconModule,
        MatTooltipModule,
        MatSnackBarModule,
        MatBottomSheetModule
    ],
    entryComponents: [
        AutoresComponent,
        ReusComponent,
        ConfirmaRemocaoComponent
    ],
    providers: [
        EstadoService
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }
