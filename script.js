const tipoFumante = document.getElementById('tipoFumante');
const formCampos = document.getElementById('formCampos');
const calcularBtn = document.getElementById('calcularBtn');
const resultado = document.getElementById('resultado');

tipoFumante.addEventListener('change', () => {
  formCampos.innerHTML = '';
  resultado.style.display = 'none';

  switch (tipoFumante.value) {
    case 'diario':
      formCampos.innerHTML = `
        <label for="cigarrosPorDia">Cigarros por dia:</label>
        <input type="number" id="cigarrosPorDia" min="1" placeholder="Ex: 20" />
        
        <label for="anosFumando">Anos fumando:</label>
        <input type="number" id="anosFumando" min="0" step="0.1" placeholder="Ex: 6" />
        
        <label for="precoMaco">Preço médio do maço (R$):</label>
        <input type="number" id="precoMaco" min="0" step="0.01" placeholder="Ex: 7,50" />
      `;
      break;

    case 'ocasional':
      formCampos.innerHTML = `
        <label for="cigarrosPorMes">Cigarros por mês:</label>
        <input type="number" id="cigarrosPorMes" min="1" placeholder="Ex: 10" />

        <label for="anosFumandoOcasional">Anos fumando (ocasionalmente):</label>
        <input type="number" id="anosFumandoOcasional" min="0" step="0.1" placeholder="Ex: 5" />

        <label for="precoMacoOcasional">Preço médio do maço (R$):</label>
        <input type="number" id="precoMacoOcasional" min="0" step="0.01" placeholder="Ex: 7,50" />
      `;
      break;

    case 'raro':
      formCampos.innerHTML = `
        <label for="macosPorMes">Maços comprados por mês:</label>
        <input type="number" id="macosPorMes" min="0.01" step="0.01" placeholder="Ex: 0.5" />

        <label for="anosFumandoRaro">Anos fumando (raramente):</label>
        <input type="number" id="anosFumandoRaro" min="0" step="0.1" placeholder="Ex: 3" />

        <label for="precoMacoRaro">Preço médio do maço (R$):</label>
        <input type="number" id="precoMacoRaro" min="0" step="0.01" placeholder="Ex: 7,50" />
      `;
      break;

    default:
      formCampos.innerHTML = '';
  }
});

calcularBtn.addEventListener('click', () => {
  resultado.style.display = 'none';
  const tipo = tipoFumante.value;

  if (!tipo) {
    alert('Por favor, selecione o tipo de fumante.');
    return;
  }

  // Variáveis que usaremos no cálculo
  let totalCigarros = 0;
  let precoMaco = 0;
  let anosFumando = 0;

  if (tipo === 'diario') {
    const cigarrosPorDia = Number(document.getElementById('cigarrosPorDia')?.value);
    anosFumando = Number(document.getElementById('anosFumando')?.value);
    precoMaco = Number(document.getElementById('precoMaco')?.value);

    if (!cigarrosPorDia || !anosFumando || !precoMaco) {
      alert('Por favor, preencha todos os campos corretamente.');
      return;
    }

    totalCigarros = cigarrosPorDia * 365 * anosFumando;

  } else if (tipo === 'ocasional') {
    const cigarrosPorMes = Number(document.getElementById('cigarrosPorMes')?.value);
    anosFumando = Number(document.getElementById('anosFumandoOcasional')?.value);
    precoMaco = Number(document.getElementById('precoMacoOcasional')?.value);

    if (!cigarrosPorMes || !anosFumando || !precoMaco) {
      alert('Por favor, preencha todos os campos corretamente.');
      return;
    }

    totalCigarros = cigarrosPorMes * 12 * anosFumando;

  } else if (tipo === 'raro') {
    const macosPorMes = Number(document.getElementById('macosPorMes')?.value);
    anosFumando = Number(document.getElementById('anosFumandoRaro')?.value);
    precoMaco = Number(document.getElementById('precoMacoRaro')?.value);

    if (!macosPorMes || !anosFumando || !precoMaco) {
      alert('Por favor, preencha todos os campos corretamente.');
      return;
    }

    totalCigarros = macosPorMes * 20 * 12 * anosFumando;
  }

  // Cálculo dos minutos perdidos
  const minutosPerdidos = totalCigarros * 20;

  // Dias perdidos arredondado para inteiro
  const diasPerdidos = Math.floor(minutosPerdidos / 1440);

  // Total de maços fumados
  const macosFumados = totalCigarros / 20;

  // Total gasto
  const gastoTotal = macosFumados * precoMaco;

  // Valores fixos para as "trocas"
  const valorViagem = 4000;
  const valorTv = 3000;
  const valorPizza = 102;

  // Quantidade de cada coisa que poderia comprar
  const viagens = Math.floor(gastoTotal / valorViagem);
  const tvs = Math.floor(gastoTotal / valorTv);
  const pizzas = Math.floor(gastoTotal / valorPizza);

  // Formatando gasto para Real brasileiro
  const gastoFormatado = gastoTotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

  // Mostrar resultado
  resultado.style.display = 'block';
  resultado.innerHTML = `
    <p><span class="destaque vermelho">Você fumou cerca de:</span> ${totalCigarros.toLocaleString()} cigarros.</p>
    <p><span class="destaque vermelho">Perdeu aproximadamente:</span> ${diasPerdidos} dias de vida.</p>
    <p><span class="destaque vermelho">Gastou cerca de:</span> ${gastoFormatado}.</p>
    <p>Com esse dinheiro, você poderia ter:</p>
    <ul>
      <li>🌴 Feito ${viagens} viagem(ns) de férias</li>
      <li>📺 Comprado ${tvs} televisão(ões) Smart TV 50"</li>
      <li>🍕 Pedido ${pizzas} pizza(s) grande(s)</li>
    </ul>
  `;
});
