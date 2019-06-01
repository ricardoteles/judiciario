import { Injectable } from '@angular/core';
import { TipoEletronico } from '../model/tipoEletronico';

@Injectable({
  providedIn: 'root'
})
export class TipoEletronicoService {

  constructor() { }

  getTiposEletronico() {
    return [
      new TipoEletronico(1, 'E-SAJ'),
      new TipoEletronico(2, 'Projudi'),
      new TipoEletronico(3, 'Pje'),
      new TipoEletronico(4, 'Themis'),
      new TipoEletronico(5, 'Tucujuris'),
      new TipoEletronico(6, 'outros'),
      new TipoEletronico(7, 'TRE-AC'),
      new TipoEletronico(8, 'TRE-AL'),
      new TipoEletronico(9, 'TRE-AP'),
      new TipoEletronico(10, 'TRE-AM'),
      new TipoEletronico(11, 'TRE-BA'),
      new TipoEletronico(12, 'TRE-CE'),
      new TipoEletronico(13, 'TRE-DF'),
      new TipoEletronico(14, 'TRE-ES'),
      new TipoEletronico(15, 'TRE-GO'),
      new TipoEletronico(16, 'TRE-MA'),
      new TipoEletronico(17, 'TRE-MT'),
      new TipoEletronico(18, 'TRE-MS'),
      new TipoEletronico(19, 'TRE-MG'),
      new TipoEletronico(20, 'TRE-PA'),
      new TipoEletronico(21, 'TRE-PB'),
      new TipoEletronico(22, 'TRE-PR'),
      new TipoEletronico(23, 'TRE-PE'),
      new TipoEletronico(24, 'TRE-PI'),
      new TipoEletronico(25, 'TRE-RJ'),
      new TipoEletronico(26, 'TRE-RN'),
      new TipoEletronico(27, 'TRE-RS'),
      new TipoEletronico(28, 'TRE-RO'),
      new TipoEletronico(29, 'TRE-RR'),
      new TipoEletronico(30, 'TRE-SC'),
      new TipoEletronico(31, 'TRE-SP'),
      new TipoEletronico(32, 'TRE-SE'),
      new TipoEletronico(33, 'TRE-TO'),
      new TipoEletronico(34, 'TRF-1'),
      new TipoEletronico(35, 'TRF-3'),
      new TipoEletronico(36, 'TRT-1'),
      new TipoEletronico(37, 'TRT-2'),
      new TipoEletronico(38, 'TRT-3'),
      new TipoEletronico(39, 'TRT-4'),
      new TipoEletronico(40, 'TRT-5'),
      new TipoEletronico(41, 'TRT-6'),
      new TipoEletronico(42, 'TRT-7'),
      new TipoEletronico(43, 'TRT-8'),
      new TipoEletronico(44, 'TRT-9'),
      new TipoEletronico(45, 'TRT-10'),
      new TipoEletronico(46, 'TRT-11'),
      new TipoEletronico(47, 'TRT-12'),
      new TipoEletronico(48, 'TRT-13'),
      new TipoEletronico(49, 'TRT-14'),
      new TipoEletronico(50, 'TRT-15'),
      new TipoEletronico(51, 'TRT-16'),
      new TipoEletronico(52, 'TRT-17'),
      new TipoEletronico(53, 'TRT-18'),
      new TipoEletronico(54, 'TRT-19'),
      new TipoEletronico(55, 'TRT-20'),
      new TipoEletronico(56, 'TRT-21'),
      new TipoEletronico(57, 'TRT-22'),
      new TipoEletronico(58, 'TRT-23'),
      new TipoEletronico(59, 'TRT-24')
    ];
  }
}
