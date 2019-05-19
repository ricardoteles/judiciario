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
  selector: 'app-tabela-cnj',
  templateUrl: './tabela-cnj.component.html',
  styleUrls: ['./tabela-cnj.component.css']
})
export class TabelaCnjComponent implements OnInit {
  statusArray = ['OK', 'SJ', 'SC', 'NC'];
  displayedColumns: string[] = ['select', 'position', 'cnj', 'cd_pre_cadastro',
    'vara', 'forum', 'uf', 'autores', 'reus', 'eletronico', 'tipo_eletronico', 'audiencia',
    'data_audiencia', 'status', 'obs', 'liminar', 'teor', 'possui_arquivos', 'segredo_justica'];

  public dataSource;
  public selection;
  public estados: Estado[];
  public arrayCnj = [];

  constructor(private http: HttpClient, private estadoService: EstadoService, public dialog: MatDialog) {
    this.http.get('https://pacific-basin-23024.herokuapp.com/update/in-process')
      .subscribe((resp: DataCNJ) => {
        this.dataSource = new MatTableDataSource<CNJ>(resp.data);
        this.selection = new SelectionModel<CNJ>(true, []);
      }, error => {
        console.log(error);
      });

    this.estados = this.estadoService.getEstados();
  }

  ngOnInit() {
  }


  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    if (this.selection) {
      const numSelected = this.selection.selected.length;
      const numRows = this.dataSource.data.length;
      return numSelected === numRows;
    } else {
      return false;
    }
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: CNJ): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }

  enviarDados() {
    console.log('enviar:', this.arrayCnj);
  }

  alteraCnj(selection, row) {
    if (!selection.isSelected(row)) {
      // adiciona o elemento a ser enviado pelo metodo post em um array
      this.arrayCnj.push({
        cnj: row.cnj,
        cd_pre_cadastro: row.cd_pre_cadastro,
        vara: row.vara,
        forum: row.forum,
        uf: row.uf,
        eletronico: row.eletronico,
        tipo_eletronico: row.tipo_eletronico,
        audiencia: row.audiencia,
        data_audiencia: row.data_audiencia,
        liminar: row.liminar,
        teor: row.teor,
        possui_arquivos: row.possui_arquivos,
        segredo_justica: row.segredo_justica,
        status: row.status,
        obs: row.obs,
        partes_autoras: row.partes_autoras,
        partes_re: row.partes_re
      });
    } else {
      // remove o elemento a ser enviado pelo metodo post em um array por meio do index
      const index = this.arrayCnj.findIndex(elem => elem.cnj === row.cnj);
      this.arrayCnj.splice(index, 1);
    }
  }

  exibeAutores(row) {
    console.log(this.dataSource.data[row].partes_autoras);
    this.dialog.open(AutoresComponent, {
      height: '400px',
      width: '600px',
      data: this.dataSource.data[row].partes_autoras
    });
  }

  exibeReus(row) {
    this.dialog.open(ReusComponent, {
      height: '400px',
      width: '600px',
      data: this.dataSource.data[row].partes_re
    });
  }

  corBotaoConsulta(tipoParte, row) {
    let btnColor = '';
    let arrayPartes = this.dataSource.data[row];

    if (tipoParte === 'autores') {
      arrayPartes = this.dataSource.data[row].partes_autoras;
    } else {
      arrayPartes = this.dataSource.data[row].partes_re;
    }

    arrayPartes.forEach(elem => {
      if (elem.nome_alterado || elem.numero_documento_alterado || elem.tipo_partes_alterado) {
        btnColor = 'primary';
      }
    });

    return btnColor;
  }
}
