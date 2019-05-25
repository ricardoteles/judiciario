import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Partes } from '../model/partes';

@Component({
  selector: 'app-reus',
  templateUrl: './reus.component.html',
  styleUrls: ['./reus.component.scss']
})
export class ReusComponent implements OnInit {


  constructor(public dialogRef: MatDialogRef<ReusComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Partes[]) { }

  ngOnInit() {
    if (this.data.length === 0) {
      this.novoReu();
    }
  }

  removerReu(index) {
    this.data.splice(index, 1);

    // se todos os inputs forem removidos, deixar um input vazio
    if (this.data.length === 0) {
      this.novoReu();
    }
  }

  adicionarReu() {
    if (this.data[this.data.length - 1].nome !== '') {
      this.novoReu();
    }
  }

  novoReu(){
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

    // TODO: aparecer a mensagem certeza que deseja salvar?

    this.dialogRef.close();
  }

}
