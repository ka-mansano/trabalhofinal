import { LightningElement } from 'lwc';

export default class CalculadoraVenda extends LightningElement {
  estilosDeCerveja = [
    { nome: 'Alpinista', preco: 97.00 },
    { nome: 'Queda-Livre', preco: 90.30 },
    { nome: 'Goiaba Madura', preco: 82.20 },
    { nome: 'Flor de Ipê', preco: 80.00 },
    { nome: 'Montanha Negra', preco: 86.50 },
    { nome: 'Pôr do Sol', preco: 91.00 },
    { nome: 'Descida Radical', preco: 102.00 },
    { nome: 'Trilha Aventureira', preco: 122.50 },
    { nome: 'Caminhada na Praia', preco: 94.10 },
    { nome: 'Bergamota Selvagem', preco: 135.00 }
  ];
/*
A função do map é criar um novo array a partir do array
"estilosDeCervejas" e inserir no combobox. Isso é feito
atribuinto o nome do "estilosDeCervejas", por isso o label
e value.
*/
  opcoesDeEstilos = this.estilosDeCerveja.map((estilo) => ({
    label: estilo.nome,
    value: estilo.nome,
  }));

  estiloSelecionado = '';
  quantidade = 0;
  itensDaCotacao = [];
/*
Sempre que o combobox é mudado ele irá atualizar
*/
  atualizarEstilo(event) {
    this.estiloSelecionado = event.detail.value;
  }
/*
Sempre que o input é mudado ele irá atualizar
*/
  atualizarQuantidade(event) {
    this.quantidade = event.detail.value;
  }

  /*
    Armazena um estilo de cerveja que será encontrado através
    do nome da cerveja (ele vai ver se o nome
      da cerveja é igual ao do event
      capturado no "atualizarEstilo") e caso encontre ele
      retornará o preço * quantidade do outro event capturado
    */
  calcularTotal() {
    const estilo = this.estilosDeCerveja.find(
      (est) => est.nome === this.estiloSelecionado
    );
    return estilo ? estilo.preco * this.quantidade : 0;
  }

  /*
  A sua função é apenas colocar os elementos na tela
  */
  adicionarCerveja() {
    const valor = this.calcularTotal();
    /*
    Adiciona o estilo, quantidade e valor da cerveja no objeto (são
      as 3 coluna que existe no simulador). 
    */
    const novaCerveja = { estilo: this.estiloSelecionado, quantidade: this.quantidade, valor: valor };
    /*
    Aqui ele irá adicionar um linha em outra já existente, por isso o
    spread ('...')
    */
    this.itensDaCotacao = [...this.itensDaCotacao, novaCerveja];
  }

  limparTabela() {
    this.itensDaCotacao = [];
  }

  /*
  As classes JavaScript contam com dois métodos especiais: 
  um com o prefixo get que tem a função de retornar um 
  valor, e outro precedido pela palavra set que serve 
  para atribuir um valor.
  */
  get valorTotalDaCotacao() {
    /*
    Tem o objeto retornar um array reduce com a soma de cada
    linha
    */
    return this.itensDaCotacao.reduce((total, item) => total + item.valor, 0);
  }

}


