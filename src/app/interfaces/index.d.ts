export interface Usuario {
  uid: string;
  nome: string;
  dataNascimento: Date;
  genero: string;
  endereco: Endereco;
  telefone: string;
  email: string;
  nivelIngles: string;
  outrosIdiomas: string;
  curriculoTexto: string;
  curriculoUrl: string;
  provider: string;
  providerId: string;
}

export interface Empresa {
  uid: string;
  nome: string;
  endereco: Endereco;
  telefone: string;
  email: string;
  logoUrl: string;
  descricao: string;
  acoesProDiversidade: string;
  quantidadePessoas: number;
  quantidadeMulheres: number;
  quantidadeMulheresGerencia: number;
  quantidadePessoasNegras: number;
  quantidadePessoasLGBTs: number;
  quantidadePessoasTrans: number;
  facebookUrl: string;
  twitterUrl: string;
  instagramUrl: string;
  linkedinUrl: string;
  gitHubId: string;
}

export interface Endereco {
  cidade: string;
  estado: string;
  bairro: string;
  logragouro: string;
  numero: number;
  cep: string;
  complemento: string;
}
