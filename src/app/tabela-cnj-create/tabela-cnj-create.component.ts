import { Component, OnInit } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource, MatDialog, MatSnackBar } from '@angular/material';
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
  displayedColumns: string[] = ['select', 'position', 'cnj', 'cd_pre_cadastro',
    'vara', 'forum', 'uf', 'autores', 'reus', 'eletronico', 'tipo_eletronico', 'audiencia',
    'data_audiencia', 'status', 'obs', 'liminar', 'teor', 'possui_arquivos', 'segredo_justica'];

  public dataSource;
  public selection;
  public estados: Estado[];
  public arrayIndexCnjAlterados = [];
  public enviarArrayCnj = [];


  constructor(private http: HttpClient, private estadoService: EstadoService,
    public dialog: MatDialog, private snackBar: MatSnackBar) {
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
    if (this.isAllSelected()) {
      this.arrayIndexCnjAlterados = [];
      this.selection.clear();
    } else {
      let i = 0;

      this.dataSource.data.forEach(row => {
        this.selection.select(row);
        this.arrayIndexCnjAlterados.push(i++);
      });
    }
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: CNJ): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }

  montaDados(index) {
    this.enviarArrayCnj.push({
      cnj: this.dataSource.data[index].cnj,
      cd_pre_cadastro: this.dataSource.data[index].cd_pre_cadastro,
      vara: this.dataSource.data[index].vara,
      forum: this.dataSource.data[index].forum,
      uf: this.dataSource.data[index].uf,
      eletronico: this.dataSource.data[index].eletronico,
      tipo_eletronico: this.dataSource.data[index].tipo_eletronico,
      audiencia: this.dataSource.data[index].audiencia,
      data_audiencia: this.dataSource.data[index].data_audiencia,
      liminar: this.dataSource.data[index].liminar,
      teor: this.dataSource.data[index].teor,
      possui_arquivos: this.dataSource.data[index].possui_arquivos,
      segredo_justica: this.dataSource.data[index].segredo_justica,
      status: this.dataSource.data[index].status,
      obs: this.dataSource.data[index].obs,
      partes_autoras: this.dataSource.data[index].partes_autoras,
      partes_re: this.dataSource.data[index].partes_re,
      linha_alterada: true
    });
  }

  enviarDados() {
    this.enviarArrayCnj = [];

    for (let linha = 0; linha < this.dataSource.data.length; linha++) {
      this.montaDados(linha);
    }

    this.metodoPOST(this.enviarArrayCnj)
  }

  metodoPOST(dados) {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    let options = {
      headers: headers
    };

    this.http.post('https://pacific-basin-23024.herokuapp.com/update/send-altered-cnjs', dados, options)
      .subscribe(data => {
        // console.log(data);
        this.snackBar.open("Dados enviados com sucesso!", undefined, {
          duration: 5000,
        });
      }, error => {
        // console.log(error.status);
        this.snackBar.open("Dados não foram enviados. Por favor, tente mais tarde!", undefined, {
          duration: 5000,
        });
      });
  }

  alteraCnj(selection, row, index) {
    if (!selection.isSelected(row)) {
      this.arrayIndexCnjAlterados.push(index);
    } else {
      // remove o elemento a ser enviado pelo metodo post em um array por meio do index
      const indexRemovido = this.arrayIndexCnjAlterados.findIndex(elem => elem === index);
      this.arrayIndexCnjAlterados.splice(indexRemovido, 1);
    }
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
