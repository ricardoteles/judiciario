import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { Partes } from '../model/partes';

@Component({
  selector: 'app-reus',
  templateUrl: './reus.component.html',
  styleUrls: ['./reus.component.sass']
})
export class ReusComponent implements OnInit {


  constructor(@Inject(MAT_DIALOG_DATA) public data: Partes[]) {}

  ngOnInit() {
  }

}
