import { Injectable } from '@angular/core';
import { Estado } from '../model/estado';

@Injectable()

// Método para salvar os estados sendo mostrados na tela de escolha de escolas para salvar chamadas de API
export class EstadoService {

  constructor() { }

  getEstados() {
    return [
        new Estado(1, 'Acre', 'AC'),
        new Estado(2, 'Alagoas', 'AL'),
        new Estado(3, 'Amapá', 'AP'),
        new Estado(4, 'Amazonas', 'AM'),
        new Estado(5, 'Bahia', 'BA'),
        new Estado(6, 'Ceará', 'CE'),
        new Estado(7, 'Distrito Federal', 'DF'),
        new Estado(8, 'Espírito Santo', 'ES'),
        new Estado(9, 'Goiás', 'GO'),
        new Estado(10, 'Maranhão', 'MA'),
        new Estado(11, 'Mato Grosso', 'MT'),
        new Estado(12, 'Mato Grosso do Sul', 'MS'),
        new Estado(13, 'Minas Gerais', 'MG'),
        new Estado(14, 'Pará', 'PA'),
        new Estado(15, 'Paraíba', 'PB'),
        new Estado(16, 'Paraná', 'PR'),
        new Estado(17, 'Pernambuco', 'PE'),
        new Estado(18, 'Piauí', 'PI'),
        new Estado(19, 'Rio de Janeiro', 'RJ'),
        new Estado(20, 'Rio Grande do Norte', 'RN'),
        new Estado(21, 'Rio Grande do Sul', 'RS'),
        new Estado(22, 'Rondônia', 'RO'),
        new Estado(23, 'Roraima', 'RR'),
        new Estado(24, 'Santa Catarina', 'SC'),
        new Estado(25, 'São Paulo', 'SP'),
        new Estado(26, 'Sergipe', 'SE'),
        new Estado(27, 'Tocantins', 'TO')
    ];
  }
}
