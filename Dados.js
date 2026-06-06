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
    "preco": 29.9,
    "ingredientes": "",
    "maisPedido": true
  },
  {
    "id": 1010914,
    "nome": "Almoço",
    "descricao": "Grão de bico, abacate, salada e ovo frito",
    "dataModificacao": "2014-03-05T13:17:50-0500",
    "imagem": require('./assets/images/produto-diabeticos.jpeg'),
    "idCategoria": 1010914,
    "preco": 29.9,
    "ingredientes": "",
    "maisPedido": true
  },
  {
    "id": 1017295,
    "nome": "Café da Manhã",
    "descricao": "Leite de amêndoas com tigela de 300ml de yogurte fresco e frutas silvestres",
    "dataModificacao": "2013-09-18T11:15:29-0400",
    "imagem": require('./assets/images/produto-sem-lactose.jpeg'),
    "idCategoria": 1017295,
    "preco": 29.9,
    "ingredientes": "",
    "maisPedido": true
  },
  {
    "id": 1017575,
    "nome": "Refeição Balanceada",
    "descricao": "Grão de bico, peito de frango, salada personalizada. Rico em fibras e proteína.",
    "dataModificacao": "2014-11-17T17:46:57-0500",
    "imagem": require('./assets/images/produto-dieta-balanceada.jpeg'),
    "idCategoria": 1017575,
    "preco": 29.9,
    "ingredientes": "",
    "maisPedido": true
  },
  {
    "id": 1,
    "nome": "Panqueca de aveia e banana",
    "descricao": "Perfeita para começar o dia com energia. Esta panqueca combina a doçura natural da fruta com os benefícios dos grãos integrais, uma excelente escolha para quem busca uma refeição equilibrada, sem glúten e sem lactose.",
    "dataModificacao": "2014-11-17T17:46:57-0500",
    "imagem": require('./assets/images/Café da Tarde Sem Lactose - Panquecas com banana e menta.png'),
    "idCategoria": 1017295,
    "preco": 15.99,
    "ingredientes": "banana, ovo, farinha de aveia, canela em pó e azeite",
    "maisPedido": false
  },
  {
    "id": 2,
    "nome": "Avocado toast com ovos poché e sementes",
    "descricao": "sofisticada, nutritiva e reconfortante para começar o dia ou para um brunch especial. A combinação da cremosidade do abacate com a proteína de alta qualidade do ovo e a crocância das sementes resultando em uma refeição equilibrada e atrativa, 100% livre de lactose.",
    "dataModificacao": "2014-11-17T17:46:57-0500",
    "imagem": require('./assets/images/Sem Lactose (Avocado Toast) - Torrada com abacate e ovo poché.png'),
    "idCategoria": 1017295,
    "preco": 29.99,
    "ingredientes": "pão de fermentação natural (sourdough), abacate, limão, sal marinho, azeite de oliva, pimenta-do-reino, ovo, vinagre branco, sementes de abóbora e girassol torradas, folhas de rúcula",
    "maisPedido": false
  },
  {
    "id": 3,
    "nome": "Salmão grelhado com purê rústico de mandioquinha e aspargos",
    "descricao": "Refeição refinada e nutritiva. O salmão fornece gorduras saudáveis que ajudam na redução da inflamação, enquanto a mandioquinha oferece energia de absorção lenta e muita saciedade.",
    "dataModificacao": "2014-11-17T17:46:57-0500",
    "imagem": require('./assets/images/Dieta Balanceada (Salmão) - Prato de salmão grelhado e purê.png'),
    "idCategoria": 1017575,
    "preco": 41.99,
    "ingredientes": "salmão, mandioquinha, aspargos, azeite de oliva, sal marinho, pimenta-do-reino, limão",
    "maisPedido": false
  },
  {
    "id": 4,
    "nome": "Frango xadrez funcional com arroz integral e mix de legumes",
    "descricao": "Equilíbrio perfeito entre carboidratos complexos e proteínas magras. O gengibre e o óleo de gergelim trazem um sabor especial enquanto auxiliam na digestão e no metabolismo.",
    "dataModificacao": "",
    "imagem": require('./assets/images/Dieta Balanceada (Frango Xadrez) - Prato colorido de stir-fry com arroz.png'),
    "idCategoria": 1017575,
    "preco": 24.99,
    "ingredientes": "peito de frango, arroz integral, brócolis, cenoura, pimentão vermelho, shoyu light, gengibre, alho, óleo de gergelim e cebolinha",
    "maisPedido": false
  },
  {
    "id": 5,
    "nome": "Macarrão do \"Hulk\" com Almôndegas de Carne Magnéticas",
    "descricao": "Superpoderes no prato! Uma deliciosa massa envolvida em um molho verde super secreto e nutritivo, acompanhada de mini almôndegas caseiras de carne magra grelhadas na hora.",
    "dataModificacao": "",
    "imagem": require('./assets/images/Macarrão divertido com temática Hulk.png'),
    "idCategoria": 1017566,
    "preco": 24.99,
    "ingredientes": "espaguete, folha de espinafre, folha de manjericão, azeite de oliva, creme de castanhas, sal, carne de patinho moída, aveia, cebola, salsa e cebolinha",
    "maisPedido": false
  },
  {
    "id": 6,
    "nome": "Panqueca de aveia e banana (sem lactose e sem glúten)",
    "descricao": "Perfeita para começar o dia com energia. Esta panqueca combina a doçura natural da fruta com os benefícios dos grãos integrais, uma excelente escolha para quem busca uma refeição equilibrada, sem glúten e sem lactose.",
    "dataModificacao": "",
    "imagem": require('./assets/images/Café da Tarde Sem Lactose - Panquecas com banana e menta.png'),
    "idCategoria": 1009220,
    "preco": 15.99,
    "ingredientes": "banana, ovo, farinha de aveia, canela em pó e azeite",
    "maisPedido": false
  },
  {
    "id": 7,
    "nome": "Pão proteico de frango (sem lactose e sem glúten)",
    "descricao": "Nutritivo e saboroso, o pão proteico de frango é a opção ideal para um lanche da tarde. Proteína e paladar juntos sem conter glúten ou lactose.",
    "dataModificacao": "",
    "imagem": require('./assets/images/Lanche da Tarde Proteico - Pão rústico com ervas e tomate.png'),
    "idCategoria": 1009220,
    "preco": 25.99,
    "ingredientes": "ovos, azeite, tomilho, frango cozido, fermento em pó, tomate-cereja, alecrim",
    "maisPedido": false
  },
  {
    "id": 8,
    "nome": "Lasanha de berinjela e abobrinha (sem glúten)",
    "descricao": "Equilíbrio e sabor em união, esta lasanha é uma alternativa sem farinha de trigo do famoso prato italiano. Ao invés das tradicionais camadas com massa, este prato utiliza dos legumes e do queijo para criar uma versão livre de glúten.",
    "dataModificacao": "",
    "imagem": require('./assets/images/Almoço - Lasanha de legumes estilo mediterrâneo.png'),
    "idCategoria": 1010914,
    "preco": 24.99,
    "ingredientes": "berinjela, abobrinha, tomate, cebola, queijo, manjericão, azeite",
    "maisPedido": false
  },
  {
    "id": 9,
    "nome": "Nhoque ao molho de tomate caseiro (sem lactose, sem glúten, vegano)",
    "descricao": "Que tal almoçar um nhoque ao molho? Com um molho de tomate caseiro e utilizando apenas farinha de arroz na composição da massa, este prato é uma ótima opção para o seu almoço. Não contém glúten, lactose e nenhum produto de origem animal.",
    "dataModificacao": "",
    "imagem": require('./assets/images/Almoço Vegano - Gnocchi com molho de tomate e ervas.png'),
    "idCategoria": 1010914,
    "preco": 22.99,
    "ingredientes": "Massa: batata, farinha de arroz, sal e salsinha. Molho: tomate, cebola e alho",
    "maisPedido": false
  },
  {
    "id": 10,
    "nome": "Pão Colorido (sem lactose, vegano)",
    "descricao": "Com uma aparência que lembra um rocambole colorido, este pão utiliza de diferentes vegetais para moldar não apenas o seu visual, mas também o seu sabor. Sem lactose e vegano, é uma ótima opção para despertar a curiosidade das crianças com o seu gosto.",
    "dataModificacao": "",
    "imagem": require('./assets/images/Infantil (Pão Colorido) - Pão espiral colorido e vegetais frescos.png'),
    "idCategoria": 1017566,
    "preco": 26.99,
    "ingredientes": "espinafre, cenoura, beterraba, cebola, azeite e farinha de trigo",
    "maisPedido": false
  },
  {
    "id": 11,
    "nome": "Brownie de Banana (sem lactose, sem glúten e vegano)",
    "descricao": "Combinando os sabores da banana e do cacau, este brownie de banana é ideal para um lanchinho da tarde. Não contém lactose, glúten ou produtos de origem animal.",
    "dataModificacao": "",
    "imagem": require('./assets/images/ChatGPT Image 5 de jun. de 2026, 20_43_20.png'),
    "idCategoria": 1010914,
    "preco": 6.99,
    "ingredientes": "banana, cacau em pó e fermento",
    "maisPedido": false
  }
]
