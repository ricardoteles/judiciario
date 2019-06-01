import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EstadoService } from './services/estado.service';
import { AutoresComponent } from './components/autores/autores.component';
import { ReusComponent } from './components/reus/reus.component';
import { TabelaCnjUpdateComponent } from './components/tabela-cnj-update/tabela-cnj-update.component';
import { TabelaCnjCreateComponent } from './components/tabela-cnj-create/tabela-cnj-create.component';
import { ConfirmaRemocaoComponent } from './components/confirma-remocao/confirma-remocao.component';

@NgModule({
    declarations: [
        AppComponent,
        TabelaCnjUpdateComponent,
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
