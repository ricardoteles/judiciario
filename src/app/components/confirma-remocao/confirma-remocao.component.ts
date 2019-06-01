import { Component, OnInit, Inject } from '@angular/core';
import { MatBottomSheetRef, MAT_BOTTOM_SHEET_DATA } from '@angular/material';

@Component({
  selector: 'app-confirma-remocao',
  templateUrl: './confirma-remocao.component.html',
  styleUrls: ['./confirma-remocao.component.css']
})
export class ConfirmaRemocaoComponent implements OnInit {
  tipo_parte: string;

  constructor(private bottomSheetRef: MatBottomSheetRef<ConfirmaRemocaoComponent>,
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: any
  ) { }

  cancelar(): void {
    this.bottomSheetRef.dismiss({
      message: 'Cancelar',
      data: this.data
    });
    event.preventDefault();
  }

  remover() {
    this.bottomSheetRef.dismiss({
      message: 'Remover',
      data: this.data
    });
  }

  ngOnInit() {
    this.tipo_parte = this.data;
  }
}
