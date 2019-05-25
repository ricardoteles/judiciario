import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Partes } from '../model/partes';

@Component({
  selector: 'app-autores',
  templateUrl: './autores.component.html',
  styleUrls: ['./autores.component.scss']
})
export class AutoresComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AutoresComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Partes[]) {}

  ngOnInit() {
    if (this.data.length === 0) {
      this.novoAutor();
    }
  }

  removerAutor(index) {
    this.data.splice(index, 1);

    // se todos os inputs forem removidos, deixar um input vazio
    if (this.data.length === 0) {
      this.novoAutor();
    }
  }

  adicionarAutor() {
    if (this.data[this.data.length - 1].nome !== '') {
      this.novoAutor();
    }
  }

  novoAutor(){
    this.data.push({
      nome: '',
      nome_alterado: false,
      numero_documento: '',
      numero_documento_alterado: false,
      tipo_partes: 'autor',
      tipo_partes_alterado: false,
    });
  }

  salvarAutores() {
    // se o último elemento da lista for vazio, remove-o antes de enviar para o backend
    if (this.data[this.data.length - 1].nome === '') {
      this.data.splice(this.data.length - 1, 1);
    }

    // TODO: aparecer a mensagem certeza que deseja salvar?

    this.dialogRef.close();
  }

}
