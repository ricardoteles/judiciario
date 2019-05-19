import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { Partes } from '../model/partes';

@Component({
  selector: 'app-autores',
  templateUrl: './autores.component.html',
  styleUrls: ['./autores.component.scss']
})
export class AutoresComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: Partes[]) {}

  ngOnInit() {
  }

  removerAutor(index) {
    this.data.splice(index, 1);

    // se todos os inputs forem removidos, deixar um input vazio
    if (this.data.length === 0) {
      this.data.push({
        nome: '',
        nome_alterado: false,
        numero_documento: '',
        numero_documento_alterado: false,
        tipo_partes: 'autor',
        tipo_partes_alterado: false,
      });
    }
  }

  adicionarAutor() {
    if (this.data[this.data.length - 1].nome !== '') {
      this.data.push({
        nome: '',
        nome_alterado: false,
        numero_documento: '',
        numero_documento_alterado: false,
        tipo_partes: 'autor',
        tipo_partes_alterado: false,
      });
    }
  }

  salvarAutores() {
    // se o último elemento da lista for vazio, remove-o antes de enviar para o backend
    if (this.data[this.data.length - 1].nome === '') {
      this.data.splice(this.data.length - 1, 1);
    }

    // TODO: Enviar a requisição via post para o servidor
    console.log(this.data[this.data.length - 1]);
  }

}
