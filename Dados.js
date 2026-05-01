export const Categorias = [
  {
    "id": 1009220,
    "nome": "Refeições Sem Glúten",
    "descricao": "Para Celíacos",
    "dataModificacao": "2026-04-04T19:01:59-0400",
    "imagem": require('./assets/images/sem-gluten.jpeg'),
    "dataHoje" : "2026-04-18",
    "cor": "#7ddaff",
    "etiqueta": "Sem Glúten"
  },
  {
    "id": 1010914,
    "nome": "Baixo Índice Glicêmico",
    "descricao": "Especial para pessoas com diabetes ou restrições ao consumo de açúcar",
    "dataModificacao": "2014-03-05T13:17:50-0500",
    "imagem": require('./assets/images/para-diabeticos.jpeg'),
    "cor": "#e1a6ff",
    "etiqueta": "Sem Açúcar"
  },
  {
    "id": 1017295,
    "nome": "Para Intolerantes a Lactose",
    "descricao": "Alimentos sem lactose",
    "dataModificacao": "2013-09-18T11:15:29-0400",
    "imagem": require('./assets/images/sem-lactose.jpeg'),
    "cor": "#ffde9c",
    "etiqueta": "Sem Lactose"
  },
  {
    "id": 1017575,
    "nome": "Alimentação Balanceada",
    "descricao": "Opções saudáveis ricas em proteínas e baixas em calorias",
    "dataModificacao": "2014-11-17T17:46:57-0500",
    "imagem": require('./assets/images/dieta-balanceada.jpeg'),
    "cor": "#9985ff",
    "etiqueta": "Dieta"
  },
  {
    "id": 1017566,
    "nome": "Alimentação Infantil",
    "descricao": "Opções saudáveis ricas em proteínas e baixas em calorias",
    "dataModificacao": "2014-11-17T17:46:57-0500",
    "imagem": require('./assets/images/alimentacao-infantiljpeg.jpeg'),
    "cor": "#fca7c6",
    "etiqueta": "Kids"
  }
];

export const Produtos = [
  {
    "id": 1009220,
    "nome": "Café da Tarde",
    "descricao": "Pão sem glúten e preparado de aveia e yogurte com frutas",
    "dataModificacao": "2026-04-04T19:01:59-0400",
    "imagem": require('./assets/images/produto-sem-gluten.jpeg'),
    "dataHoje" : "2026-04-18",
    "idCategoria": 1009220,
    "preco": 29.9
  },
  {
    "id": 1010914,
    "nome": "Almoço",
    "descricao": "Grão de bico, abacate, salada e ovo frito",
    "dataModificacao": "2014-03-05T13:17:50-0500",
    "imagem": require('./assets/images/produto-diabeticos.jpeg'),
    "idCategoria": 1010914,
    "preco": 29.9
  },
  {
    "id": 1017295,
    "nome": "Café da Manhã",
    "descricao": "Leite de amêndoas com tigela de 300ml de yogurte fresco e frutas silvestres",
    "dataModificacao": "2013-09-18T11:15:29-0400",
    "imagem": require('./assets/images/produto-sem-lactose.jpeg'),
    "idCategoria": 1017295,
    "preco": 29.9
  },
  {
    "id": 1017575,
    "nome": "Refeição Balanceada",
    "descricao": "Grão de bico, peito de frango, salada personalizada. Rico em fibras e proteína.",
    "dataModificacao": "2014-11-17T17:46:57-0500",
    "imagem": require('./assets/images/produto-dieta-balanceada.jpeg'),
    "idCategoria": 1017575,
    "preco": 29.9
  },
  {
    "id": 1017566,
    "nome": "Almoço Infantil",
    "descricao": "Opções saudáveis ricas em proteínas. Personalize uma refeição especialmente para o seu filho!",
    "dataModificacao": "2014-11-17T17:46:57-0500",
    "imagem": require('./assets/images/alimentacao-infantiljpeg.jpeg'),
    "idCategoria": 1017566
  }
];