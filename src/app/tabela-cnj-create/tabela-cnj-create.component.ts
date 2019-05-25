import { Component, OnInit } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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
    this.arrayCnj = [];

    this.dataSource.data.forEach(elem => {
      this.arrayCnj.push({
        cnj: elem.cnj,
        cd_pre_cadastro: elem.cd_pre_cadastro,
        vara: elem.vara,
        forum: elem.forum,
        uf: elem.uf,
        eletronico: elem.eletronico,
        tipo_eletronico: elem.tipo_eletronico,
        audiencia: elem.audiencia,
        data_audiencia: elem.data_audiencia,
        liminar: elem.liminar,
        teor: elem.teor,
        possui_arquivos: elem.possui_arquivos,
        segredo_justica: elem.segredo_justica,
        status: elem.status,
        obs: elem.obs,
        partes_autoras: elem.partes_autoras,
        partes_re: elem.partes_re
      });
    });

    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    let options = {
      headers: headers
    };

    this.http.post('https://pacific-basin-23024.herokuapp.com/update/send-altered-cnjs', this.arrayCnj, options)
      .subscribe(data => {
        console.log(data);
        console.log('array:', this.arrayCnj);
      });
  }

  exibeAutores(row) {
    const dialogRef = this.dialog.open(AutoresComponent, {
      height: '400px',
      width: '600px',
      data: [],
      disableClose: true
    });
  }

  exibeReus(row) {
    const dialogRef = this.dialog.open(ReusComponent, {
      height: '400px',
      width: '600px',
      data: [],
      disableClose: true
    });
  }
}
