import { Component, OnInit } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource, MatDialog, MatSnackBar } from '@angular/material';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CNJ } from '../../model/cnj';
import { DataCNJ } from '../../model/dataCnj';
import { EstadoService } from '../../services/estado.service';
import { Estado } from '../../model/estado';
import { AutoresComponent } from '../autores/autores.component';
import { ReusComponent } from '../reus/reus.component';
import { TipoEletronico } from '../../model/tipoEletronico';
import { TipoEletronicoService } from '../../services/tipo-eletronico.service';

@Component({
  selector: 'app-tabela-cnj-create',
  templateUrl: './tabela-cnj-create.component.html',
  styleUrls: ['./tabela-cnj-create.component.css']
})
export class TabelaCnjCreateComponent implements OnInit {
  statusArray = ['OK', 'SJ', 'SC', 'NC'];
  displayedColumns: string[] = ['select', 'position', 'cd_pre_cadastro', 'cnj',
    'vara', 'forum', 'uf', 'autores', 'reus', 'eletronico', 'tipo_eletronico', 'audiencia',
    'data_audiencia', 'status', 'obs', 'liminar', 'teor', 'possui_arquivos', 'segredo_justica'];

  public dataSource;
  public selection;
  public estados: Estado[];
  public tiposEletronicos: TipoEletronico[];
  public arrayIndexCnjAlterados = [];
  public dados;
  public carregouPagina = false;


  constructor(private http: HttpClient, private estadoService: EstadoService,
    private tipoEletronicoService: TipoEletronicoService,
    public dialog: MatDialog, private snackBar: MatSnackBar) {


    this.obterDadosDoServidor();
    this.estados = this.estadoService.getEstados();
    this.tiposEletronicos = this.tipoEletronicoService.getTiposEletronico();
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

  montaDados(resp) {
    this.dados = [];

    resp.forEach(elem => {
      this.dados.push({
        cnj: elem.cnj,
        cd_pre_cadastro: elem.cd_pre_cadastro,
        vara: '',
        forum: '',
        uf: elem.uf,
        eletronico: true,
        tipo_eletronico: '',
        audiencia: true,
        data_audiencia: '',
        liminar: true,
        teor: '',
        possui_arquivos: false,
        segredo_justica: false,
        status: 'Ok',
        obs: '',
        partes_autoras: [],
        partes_re: []
      });
    });

    return this.dados;
  }

  enviarDados() {
    let enviarArrayCnj = [];

    this.arrayIndexCnjAlterados.forEach(linha =>
      enviarArrayCnj.push(this.dados[linha])
    );

    this.metodoPOST({ "data": enviarArrayCnj });
  }


  metodoPOST(dados) {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    let options = {
      headers: headers
    };

    this.http.post('https://pacific-basin-23024.herokuapp.com/insert/create-cnjs', dados, options)
      .subscribe(data => {
        this.snackBar.open("Dados enviados com sucesso!", undefined, {
          duration: 5000,
        });

        location.reload();

      }, error => {
        console.log(error);
        this.snackBar.open("Dados não foram enviados. Por favor, tente mais tarde!", undefined, {
          duration: 5000,
        });
      });
  }

  obterDadosDoServidor() {
    this.http.get('https://pacific-basin-23024.herokuapp.com/insert/read-cnjs')
      .subscribe((resp: DataCNJ) => {
        this.dataSource = new MatTableDataSource<CNJ>(this.montaDados(resp.data));
        this.selection = new SelectionModel<CNJ>(true, []);
        this.carregouPagina = true;
      }, error => {
        console.log(error);
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
      data: this.dataSource.data[row].partes_autoras,
      disableClose: true
    });
  }

  exibeReus(row) {
    const dialogRef = this.dialog.open(ReusComponent, {
      height: '400px',
      width: '600px',
      data: this.dataSource.data[row].partes_re,
      disableClose: true
    });
  }
}
