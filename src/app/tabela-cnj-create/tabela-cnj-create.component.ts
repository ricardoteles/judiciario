import { Component, OnInit } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { HttpClient } from '@angular/common/http';
import { CNJ } from '../model/cnj';
import { DataCNJ } from '../model/dataCnj';
import { EstadoService } from '../services/estado.service';
import { Estado } from '../model/estado';
import { AutoresComponent } from '../autores/autores.component';
import { ReusComponent } from '../reus/reus.component';

@Component({
  selector: 'app-tabela-cnj-create',
  templateUrl: './tabela-cnj-create.component.html',
  styleUrls: ['./tabela-cnj-create.component.css']
})
export class TabelaCnjCreateComponent implements OnInit {
  statusArray = ['OK', 'SJ', 'SC', 'NC'];
  displayedColumns: string[] = ['position', 'cnj', 'cd_pre_cadastro',
    'vara', 'forum', 'uf', 'autores', 'reus', 'eletronico', 'tipo_eletronico', 'audiencia',
    'data_audiencia', 'status', 'obs', 'liminar', 'teor', 'possui_arquivos', 'segredo_justica'];

  public dataSource;
  public estados: Estado[];
  public arrayCnj = [];

  constructor(private http: HttpClient, private estadoService: EstadoService, public dialog: MatDialog) {
    this.http.get('https://pacific-basin-23024.herokuapp.com/update/in-process')
      .subscribe((resp: DataCNJ) => {
        this.dataSource = new MatTableDataSource<CNJ>(resp.data);
      }, error => {
        console.log(error);
      });

    this.estados = this.estadoService.getEstados();
  }

  ngOnInit() {
  }

  enviarDados() {
    console.log('enviar:', this.arrayCnj);
  }

  exibeAutores(row) {
    console.log(this.dataSource.data[row].partes_autoras);
    this.dialog.open(AutoresComponent, {
      height: '400px',
      width: '600px',
      data: []
    });
  }

  exibeReus(row) {
    this.dialog.open(ReusComponent, {
      height: '400px',
      width: '600px',
      data: []
    });
  }
}
