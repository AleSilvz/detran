const questions = {
  Legislação: [
    {
      pergunta:
        "Qual é a idade mínima para obter a Permissão para Dirigir (PPD)?",
      alternativas: [
        "16 anos completos",
        "18 anos completos",
        "21 anos completos",
        "17 anos com autorização dos pais",
      ],
      correta: 1, // "18 anos completos"
    },
    {
      pergunta: "Qual documento é obrigatório para conduzir um veículo?",
      alternativas: [
        "Carteira de trabalho",
        "Identidade civil (RG)",
        "Carteira Nacional de Habilitação (CNH)",
        "CPF",
      ],
      correta: 2, // "Carteira Nacional de Habilitação (CNH)"
    },
    {
      pergunta:
        "O condutor que comete infração gravíssima pode ter como penalidade:",
      alternativas: [
        "Apenas multa simples",
        "Advertência verbal",
        "Apreensão do veículo apenas",
        "Multa, suspensão ou cassação do direito de dirigir",
      ],
      correta: 3, // "Multa, suspensão ou cassação do direito de dirigir"
    },
    {
      pergunta:
        "Conforme o Código de Trânsito Brasileiro, o pedestre tem preferência sobre veículos:",
      alternativas: [
        "Apenas nas vias rurais",
        "Somente na faixa de pedestres com semáforo verde",
        "Sempre que estiver atravessando na faixa de pedestres",
        "Nunca tem preferência, pois é mais lento",
      ],
      correta: 2, // "Sempre que estiver atravessando na faixa de pedestres"
    },
    {
      pergunta: "Dirigir sob influência de álcool é considerado:",
      alternativas: [
        "Infração leve",
        "Infração grave",
        "Infração gravíssima com penalidades severas",
        "Permitido em pequenas quantidades",
      ],
      correta: 2, // "Infração gravíssima com penalidades severas"
    },
    {
      pergunta: "O que significa uma linha amarela contínua no centro da via?",
      alternativas: [
        "Permitido ultrapassar com atenção",
        "Proibido ultrapassar",
        "Estacionamento permitido",
        "Faixa exclusiva para pedestres",
      ],
      correta: 1, // "Proibido ultrapassar"
    },
    {
      pergunta: "É obrigatória a utilização do farol baixo durante o dia em:",
      alternativas: [
        "Rodovias apenas",
        "Vias urbanas",
        "Somente em túneis e neblina",
        "Durante o verão",
      ],
      correta: 0, // "Rodovias apenas"
    },
    {
      pergunta: "O uso do celular ao volante é considerado:",
      alternativas: [
        "Permitido se for no viva-voz",
        "Infração média",
        "Infração gravíssima",
        "Infração leve com advertência",
      ],
      correta: 2, // "Infração gravíssima"
    },
    {
      pergunta: "Qual é a penalidade para quem dirige com a CNH suspensa?",
      alternativas: [
        "Multa simples",
        "Recolhimento da CNH e detenção",
        "Cassação da CNH",
        "Advertência por escrito",
      ],
      correta: 2, // "Cassação da CNH"
    },
    {
      pergunta: "Em uma rotatória, a preferência é sempre de:",
      alternativas: [
        "Quem vem pela direita",
        "Quem está entrando na rotatória",
        "Quem já está circulando na rotatória",
        "Veículos maiores",
      ],
      correta: 2, // "Quem já está circulando na rotatória"
    },
  ],
  'Direção Defensiva': [
    {
      pergunta: "O principal objetivo da direção defensiva é:",
      alternativas: [
        "Chegar mais rápido ao destino",
        "Evitar acidentes, mesmo em situações inesperadas",
        "Economizar combustível",
        "Ultrapassar o maior número de veículos",
      ],
      correta: 1, // "Evitar acidentes, mesmo em situações inesperadas"
    },
    {
      pergunta: "Ao dirigir sob forte chuva, o condutor deve:",
      alternativas: [
        "Aumentar a velocidade para sair logo da chuva",
        "Manter a mesma velocidade e seguir normalmente",
        "Reduzir a velocidade e aumentar a distância do veículo à frente",
        "Parar no meio da via com o pisca-alerta ligado",
      ],
      correta: 2, // "Reduzir a velocidade e aumentar a distância do veículo à frente"
    },
    {
      pergunta: "É considerado um comportamento de direção defensiva:",
      alternativas: [
        "Buzinar para advertir os outros motoristas constantemente",
        "Respeitar a sinalização e antecipar possíveis riscos",
        "Ultrapassar pela direita em vias urbanas",
        "Fazer curvas em alta velocidade com segurança",
      ],
      correta: 1, // "Respeitar a sinalização e antecipar possíveis riscos"
    },
    {
      pergunta: "O que é distância de segurança?",
      alternativas: [
        "A distância entre o carro e a calçada",
        "O espaço entre o veículo e o sinal de trânsito",
        "A distância mínima entre seu carro e o veículo da frente",
        "A distância percorrida durante uma ultrapassagem",
      ],
      correta: 2, // "A distância mínima entre seu carro e o veículo da frente"
    },
    {
      pergunta: "Ao perceber um animal na pista, o condutor deve:",
      alternativas: [
        "Buzinar e seguir em frente",
        "Acelerar para evitar colisão traseira",
        "Frear bruscamente e virar o volante",
        "Reduzir a velocidade com segurança e tentar parar o veículo",
      ],
      correta: 3, // "Reduzir a velocidade com segurança e tentar parar o veículo"
    },
    {
      pergunta: "Um condutor atento à direção defensiva deve sempre:",
      alternativas: [
        "Usar o celular apenas em chamadas curtas",
        "Estar preparado para agir com rapidez e segurança",
        "Ignorar gestos de outros condutores",
        "Dirigir sempre na faixa da esquerda",
      ],
      correta: 1, // "Estar preparado para agir com rapidez e segurança"
    },
    {
      pergunta: "Dirigir cansado aumenta o risco de acidentes porque:",
      alternativas: [
        "O carro consome mais combustível",
        "O tempo de reação do condutor diminui",
        "O veículo perde potência",
        "A embreagem pode falhar",
      ],
      correta: 1, // "O tempo de reação do condutor diminui"
    },
    {
      pergunta: "A atitude correta ao se deparar com um buraco na pista é:",
      alternativas: [
        "Frear bruscamente em cima do buraco",
        "Desviar rapidamente sem sinalizar",
        "Reduzir a velocidade e contornar o obstáculo com segurança",
        "Ignorar e passar por cima com firmeza",
      ],
      correta: 2, // "Reduzir a velocidade e contornar o obstáculo com segurança"
    },
    {
      pergunta:
        "O que o condutor deve fazer ao iniciar uma ultrapassagem segura?",
      alternativas: [
        "Ultrapassar mesmo com faixa contínua",
        "Aumentar a velocidade e buzinar",
        "Verificar se há espaço e sinalizar com antecedência",
        "Apenas acelerar, sem olhar os retrovisores",
      ],
      correta: 2, // "Verificar se há espaço e sinalizar com antecedência"
    },
    {
      pergunta:
        "O que significa a técnica do “olhar 360 graus” na direção defensiva?",
      alternativas: [
        "Observar somente os espelhos retrovisores laterais",
        "Olhar apenas para frente de forma constante",
        "Fazer movimentos circulares com o volante",
        "Observar constantemente ao redor do veículo, incluindo retrovisores e pontos cegos",
      ],
      correta: 3, // "Observar constantemente ao redor do veículo, incluindo retrovisores e pontos cegos"
    },
  ],
  'Primeiros Socorros': [
    {
      pergunta:
        "Em caso de acidente com vítima, a primeira ação do condutor deve ser:",
      alternativas: [
        "Remover a vítima imediatamente",
        "Sinalizar o local e acionar o socorro especializado",
        "Dar água para a vítima",
        "Tentar colocar a vítima em pé",
      ],
      correta: 1, // "Sinalizar o local e acionar o socorro especializado"
    },
    {
      pergunta:
        "Ao sinalizar o local de um acidente em via de trânsito rápido, o triângulo de segurança deve ser colocado a:",
      alternativas: [
        "5 metros do veículo",
        "10 metros do veículo",
        "20 metros do veículo",
        "30 metros do veículo",
      ],
      correta: 3, // "30 metros do veículo"
    },
    {
      pergunta:
        "Ao se deparar com uma vítima inconsciente e com dificuldade para respirar, o condutor deve:",
      alternativas: [
        "Tentar reanimar com massagem cardíaca imediatamente",
        "Desobstruir as vias aéreas e aguardar o socorro",
        "Forçar a vítima a sentar",
        "Retirar a vítima do local",
      ],
      correta: 1, // "Desobstruir as vias aéreas e aguardar o socorro"
    },
    {
      pergunta:
        "O que NUNCA se deve fazer ao socorrer uma vítima com suspeita de fratura na coluna?",
      alternativas: [
        "Conversar com a vítima para mantê-la consciente",
        "Impedir que ela se mova",
        "Mover a vítima para posição confortável",
        "Aguardar o resgate sem removê-la",
      ],
      correta: 2, // "Mover a vítima para posição confortável"
    },
    {
      pergunta:
        "Se a vítima estiver com sangramento intenso, o socorrista leigo deve:",
      alternativas: [
        "Aplicar torniquete imediatamente",
        "Fazer compressão direta com pano limpo",
        "Esperar o sangue parar naturalmente",
        "Usar álcool no ferimento",
      ],
      correta: 1, // "Fazer compressão direta com pano limpo"
    },
    {
      pergunta:
        "Caso a vítima esteja em local perigoso (ex: risco de explosão), o que fazer?",
      alternativas: [
        "Esperar o socorro chegar",
        "Retirar rapidamente, mantendo a cabeça alinhada ao corpo",
        "Movê-la sem cuidado, pois o tempo é curto",
        "Virar a vítima de lado para facilitar a respiração",
      ],
      correta: 1, // "Retirar rapidamente, mantendo a cabeça alinhada ao corpo"
    },
    {
      pergunta:
        "Uma vítima consciente, que responde perguntas e respira normalmente deve ser:",
      alternativas: [
        "Imobilizada imediatamente",
        "Deitada no chão",
        "Acalmada e observada até a chegada do socorro",
        "Obrigada a se levantar",
      ],
      correta: 2, // "Acalmada e observada até a chegada do socorro"
    },
    {
      pergunta:
        "Se a vítima estiver com objeto perfurante preso ao corpo, o correto é:",
      alternativas: [
        "Remover o objeto com cuidado",
        "Empurrar o objeto para dentro",
        "Estabilizar o objeto no local e aguardar socorro",
        "Puxar rapidamente para evitar infecção",
      ],
      correta: 2, // "Estabilizar o objeto no local e aguardar socorro"
    },
    {
      pergunta: "Em casos de queimaduras, o procedimento correto é:",
      alternativas: [
        "Aplicar pomadas e cremes",
        "Cobrir com pano limpo e molhado com água fria",
        "Estourar bolhas formadas",
        "Passar pasta de dente",
      ],
      correta: 1, // "Cobrir com pano limpo e molhado com água fria"
    },
    {
      pergunta:
        "O número para acionar o SAMU (Serviço de Atendimento Móvel de Urgência) é:",
      alternativas: ["190", "192", "193", "199"],
      correta: 1, // "192"
    },
  ],
  'Meio Ambiente': [
    {
      pergunta:
        "Uma das formas de contribuir com o meio ambiente ao dirigir é:",
      alternativas: [
        "Utilizar o carro sempre em marcha lenta",
        "Realizar acelerações bruscas para limpar o motor",
        "Fazer manutenção regular do veículo",
        "Manter o motor ligado mesmo em longas paradas",
      ],
      correta: 2, // "Fazer manutenção regular do veículo"
    },
    {
      pergunta: "A emissão de gases poluentes é maior quando o veículo:",
      alternativas: [
        "Está com o motor regulado",
        "Passa por manutenção periódica",
        "Está com o motor desregulado ou com defeito",
        "É abastecido com combustível de qualidade",
      ],
      correta: 2, // "Está com o motor desregulado ou com defeito"
    },
    {
      pergunta: "O catalisador tem como função:",
      alternativas: [
        "Aumentar o consumo de combustível",
        "Filtrar o óleo do motor",
        "Reduzir a emissão de gases poluentes",
        "Melhorar o desempenho do motor",
      ],
      correta: 2, // "Reduzir a emissão de gases poluentes"
    },
    {
      pergunta: "O descarte incorreto de óleo de motor usado pode:",
      alternativas: [
        "Melhorar a lubrificação do solo",
        "Não causar impacto ambiental",
        "Poluir o solo e lençóis freáticos",
        "Ser jogado em qualquer ralo ou esgoto",
      ],
      correta: 2, // "Poluir o solo e lençóis freáticos"
    },
    {
      pergunta: "Entre as atitudes abaixo, a mais sustentável é:",
      alternativas: [
        "Dirigir com pneus murchos",
        "Evitar transportes coletivos",
        "Fazer revisões periódicas no veículo",
        "Utilizar combustível adulterado por ser mais barato",
      ],
      correta: 2, // "Fazer revisões periódicas no veículo"
    },
    {
      pergunta: "Qual prática ajuda a reduzir a poluição sonora no trânsito?",
      alternativas: [
        "Usar buzina com frequência",
        "Evitar acelerações desnecessárias e buzinas excessivas",
        "Trocar o escapamento por um esportivo",
        "Ouvir música alta com as janelas abertas",
      ],
      correta: 1, // "Evitar acelerações desnecessárias e buzinas excessivas"
    },
    {
      pergunta: "A cidadania no trânsito envolve:",
      alternativas: [
        "Impor seu direito de passagem sempre",
        "Desrespeitar regras quando estiver com pressa",
        "Respeitar os direitos dos outros e cumprir deveres",
        "Ignorar os pedestres para evitar atrasos",
      ],
      correta: 2, // "Respeitar os direitos dos outros e cumprir deveres"
    },
    {
      pergunta: "O uso excessivo do ar-condicionado no carro:",
      alternativas: [
        "Reduz o consumo de combustível",
        "Melhora o desempenho ambiental do carro",
        "Aumenta o consumo de combustível e a emissão de poluentes",
        "Ajuda a filtrar os gases do escapamento",
      ],
      correta: 2, // "Aumenta o consumo de combustível e a emissão de poluentes"
    },
    {
      pergunta:
        "Qual atitude é adequada ao parar em um semáforo por tempo prolongado?",
      alternativas: [
        "Deixar o carro ligado para evitar desgaste",
        "Desligar o motor, se possível, para evitar desperdício de combustível",
        "Acelerar o carro de tempo em tempo",
        "Manter o motor funcionando e o ar-condicionado ligado",
      ],
      correta: 1, // "Desligar o motor, se possível, para evitar desperdício de combustível"
    },
    {
      pergunta:
        "Combustíveis como etanol são considerados menos poluentes porque:",
      alternativas: [
        "Têm cheiro mais agradável",
        "Não causam desgaste no motor",
        "Emitam menos gases que causam efeito estufa",
        "São mais baratos",
      ],
      correta: 2, // "Emitam menos gases que causam efeito estufa"
    },
  ],
  'Mecanica Básica': [
    {
      pergunta: "Qual é a função do sistema de suspensão do veículo?",
      alternativas: [
        "Reduzir a emissão de gases",
        "Dar estabilidade e conforto ao veículo",
        "Diminuir o consumo de combustível",
        "Aumentar a velocidade máxima do veículo",
      ],
      correta: 1, // "Dar estabilidade e conforto ao veículo"
    },
    {
      pergunta: "Um dos sinais de que os freios estão com problema é:",
      alternativas: [
        "O volante puxar para o lado ao frear",
        "O motor ficar mais silencioso",
        "Aumentar a potência do carro",
        "O consumo de combustível diminuir",
      ],
      correta: 0, // "O volante puxar para o lado ao frear"
    },
    {
      pergunta:
        "Qual item abaixo deve ser verificado com frequência para evitar superaquecimento do motor?",
      alternativas: [
        "Óleo do freio",
        "Fluido da direção hidráulica",
        "Água do radiador (ou fluido de arrefecimento)",
        "Líquido do limpador de para-brisa",
      ],
      correta: 2, // "Água do radiador (ou fluido de arrefecimento)"
    },
    {
      pergunta: "Pneus carecas aumentam o risco de:",
      alternativas: [
        "Redução de consumo de combustível",
        "Perda de controle e aquaplanagem",
        "Melhor desempenho em curvas",
        "Maior conforto na direção",
      ],
      correta: 1, // "Perda de controle e aquaplanagem"
    },
    {
      pergunta: "A função do óleo lubrificante no motor é:",
      alternativas: [
        "Aumentar a potência do motor",
        "Manter o motor limpo apenas",
        "Reduzir o atrito entre as peças e evitar desgaste",
        "Esfriar o combustível",
      ],
      correta: 2, // "Reduzir o atrito entre as peças e evitar desgaste"
    },
    {
      pergunta: "A bateria do carro é responsável por:",
      alternativas: [
        "Reduzir a velocidade do veículo",
        "Filtrar o combustível",
        "Alimentar os sistemas elétricos quando o motor está desligado",
        "Aumentar o torque das rodas",
      ],
      correta: 2, // "Alimentar os sistemas elétricos quando o motor está desligado"
    },
    {
      pergunta: "O nível baixo de óleo do motor pode causar:",
      alternativas: [
        "Aumento da tração",
        "Superaquecimento e desgaste do motor",
        "Melhoria no desempenho",
        "Melhor funcionamento da suspensão",
      ],
      correta: 1, // "Superaquecimento e desgaste do motor"
    },
    {
      pergunta: "Quando o alternador está com defeito, o que pode ocorrer?",
      alternativas: [
        "Maior estabilidade do veículo",
        "Desligamento do motor e descarga da bateria",
        "Melhor desempenho elétrico",
        "Desgaste nos pneus",
      ],
      correta: 1, // "Desligamento do motor e descarga da bateria"
    },
    {
      pergunta: "A função do filtro de ar é:",
      alternativas: [
        "Reduzir o ruído do motor",
        "Filtrar impurezas do ar que entra no motor",
        "Filtrar o combustível",
        "Aumentar o consumo para melhorar o desempenho",
      ],
      correta: 1, // "Filtrar impurezas do ar que entra no motor"
    },
    {
      pergunta:
        "A luz indicadora de bateria no painel acesa com o motor funcionando indica:",
      alternativas: [
        "Bateria totalmente carregada",
        "Sistema de carga com problema",
        "Porta aberta",
        "Nível de óleo baixo",
      ],
      correta: 1, // "Sistema de carga com problema"
    },
  ],
};

export { questions };
