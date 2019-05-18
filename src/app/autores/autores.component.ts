import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { Partes } from '../model/partes';

@Component({
  selector: 'app-autores',
  templateUrl: './autores.component.html',
  styleUrls: ['./autores.component.sass']
})
export class AutoresComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: Partes[]) {}

  ngOnInit() {
  }

}
