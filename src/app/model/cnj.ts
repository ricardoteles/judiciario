import { Partes } from './partes';

export interface CNJ {
  position: number;
  cnj: string;
  cd_pre_cadastro: number;
  vara: string;
  vara_alterado: boolean;
  forum: string;
  forum_alterado: boolean;
  uf: string;
  uf_alterado: boolean;
  eletronico: boolean;
  eletronico_alterado: boolean;
  tipo_eletronico: string;
  tipo_eletronico_alterado: boolean;
  audiencia: boolean;
  audiencia_alterado: boolean;
  data_audiencia: string;
  data_audiencia_alterado: boolean;
  liminar: boolean;
  liminar_alterado: boolean;
  teor: string;
  teor_alterado: boolean;
  possui_arquivos: boolean;
  possui_arquivos_alterado: boolean;
  segredo_justica: boolean;
  segredo_justica_alterado: boolean;
  status: string;
  status_alterado: boolean;
  obs: string;
  obs_alterado: boolean;
  partes_autoras: Partes[];
  partes_re: Partes[];
}


