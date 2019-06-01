import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatSnackBar, MatBottomSheet } from '@angular/material';
import { Partes } from '../../model/partes';
import { ConfirmaRemocaoComponent } from '../confirma-remocao/confirma-remocao.component';

@Component({
  selector: 'app-reus',
  templateUrl: './reus.component.html',
  styleUrls: ['./reus.component.css'],
})
export class ReusComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ReusComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Partes[],
    private snackBar: MatSnackBar,
    private bottomSheet: MatBottomSheet
  ) { }

  ngOnInit() {
    if (this.data.length === 0) {
      this.novoReu();
    }
  }

  adicionarReu() {
    if (this.data[this.data.length - 1].nome !== '') {
      this.novoReu();
    }
  }

  removerReu(tipo_parte, index) {
    let sheetRef = this.bottomSheet.open(ConfirmaRemocaoComponent, {
      data: tipo_parte
    });

    sheetRef.afterDismissed().subscribe(data => {
      if (data && data.message == 'Remover') {
        this.data.splice(index, 1);

        // se todos os inputs forem removidos, deixar um input vazio
        if (this.data.length === 0) {
          this.novoReu();
        }
      }
    });
  }

  novoReu() {
    this.data.push({
      nome: '',
      nome_alterado: false,
      numero_documento: '',
      numero_documento_alterado: false,
      tipo_partes: 'reu',
      tipo_partes_alterado: false,
    });
  }

  salvarReus() {
    // se o último elemento da lista for vazio, remove-o antes de enviar para o backend
    if (this.data[this.data.length - 1].nome === '') {
      this.data.splice(this.data.length - 1, 1);
    }

    this.openSnackBar("Dados salvos com sucesso", undefined);

    this.dialogRef.close();
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }
}
