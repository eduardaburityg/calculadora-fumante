# 🚭 Calculadora do Fumante

Uma ferramenta educativa e interativa para ajudar pessoas a entenderem o impacto real do cigarro em sua vida, tanto na saúde quanto no bolso.

---

## 💡 Propósito

Este projeto tem como objetivo:

- Conscientizar fumantes (e não fumantes) sobre os impactos do cigarro
- Apresentar dados como:
  - Cigarros consumidos
  - Dinheiro gasto
  - Dias de vida perdidos (com base em estudos científicos e pesquisas)
  - O que poderia ser comprado ou feito com esse dinheiro

---

## Funcionalidades

- Três perfis de fumantes:
  1. **Fumante diário**
  2. **Fumante ocasional**
  3. **Fumante esporádico (em festas ou eventos)**
  
- Interface simples e responsiva
- Cálculo automático de:
  - Quantidade de cigarros fumados
  - Dias de vida perdidos (baseado em 20 minutos por cigarro)
  - Dinheiro gasto (com base no preço médio do maço)
  - Possíveis aquisições com o valor gasto:
    - Viagens
    - Televisões Smart 50”
    - Pizzas grandes

---

## Como os cálculos são feitos?

- **Tempo de vida perdido:**  
  Cada cigarro reduz cerca de **20 minutos** da expectativa de vida (fonte: CNN Brasil e estudos científicos). - https://www.cnnbrasil.com.br/saude/cada-cigarro-fumado-reduz-20-minutos-da-expectativa-de-vida-revela-pesquisa/

- **Conversão para dias:**  
  `totalMinutosPerdidos / 1440` → 1440 minutos = 1 dia

- **Custo total:**  
  Com base em quantos cigarros cabem em um maço (20 unidades) e o valor informado pelo usuário.

- **Comparações:**  
  - 📺 Smart TV 50” = R$ 3.000  
  - 🌴 Viagem de férias = R$ 4.000  
  - 🍕 Pizza grande = R$ 102

---

🧠 **Contribuição**

- Este projeto é totalmente aberto a melhorias. Sugestões de novas funcionalidades, melhorias no design e ajustes nos cálculos são sempre bem-vindas!

---

## Como rodar localmente

1. Clone o repositório:
```bash
git clone https://github.com/eduardaburityg/calculadora-fumante.git

