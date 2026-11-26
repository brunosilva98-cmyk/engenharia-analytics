const PROJECTS = [
  {
    "name": "Controle orçamentário executivo",
    "category": "Finanças",
    "title": "Receitas, custos e previsões",
    "problem": "Resultados dispersos entre obras e competências.",
    "solution": "Consolidação de receitas, custos, previsões e desvios por projeto.",
    "benefit": "Antecipar riscos de margem e orientar decisões.",
    "demo": "executive",
    "image": "executive",
    "metrics": "Receita|Custos|Resultado"
  },
  {
    "name": "Planejamento e desempenho de projetos",
    "category": "Projetos",
    "title": "Avanço, prazos e desvios",
    "problem": "Dificuldade de acompanhar marcos e evolução dos projetos.",
    "solution": "Visão integrada de planejamento, indicadores e projeções.",
    "benefit": "Identificar desvios e priorizar ações.",
    "demo": "orbit",
    "image": "orbit",
    "metrics": "Avanço|Prazo|Desvios"
  },
  {
    "name": "Gestão integrada de projetos",
    "category": "Projetos",
    "title": "Cronogramas e interfaces operacionais",
    "problem": "Cronogramas e informações operacionais fragmentados.",
    "solution": "Acompanhamento de cronogramas, engenharia e suprimentos.",
    "benefit": "Dar visibilidade às interfaces e riscos.",
    "demo": "nexus",
    "image": "nexus",
    "metrics": "Marcos|Suprimentos|Engenharia"
  },
  {
    "name": "Metas e desempenho estratégico",
    "category": "Estratégia",
    "title": "Histórico, metas e evolução",
    "problem": "Metas futuras desconectadas do histórico de desempenho.",
    "solution": "Comparação entre períodos e acompanhamento de metas.",
    "benefit": "Apoiar a definição de prioridades.",
    "demo": "axioma",
    "image": "axioma",
    "metrics": "Histórico|Metas|Evolução"
  },
  {
    "name": "Fluxo de caixa e capital de giro",
    "category": "Finanças",
    "title": "Entradas, saídas e projeções",
    "problem": "Incerteza sobre disponibilidade de caixa nas próximas semanas.",
    "solution": "Projeções de entradas e saídas, vencimentos e cenários.",
    "benefit": "Antecipar necessidades de caixa.",
    "demo": "",
    "image": "conceito-01.svg",
    "metrics": "Saldo projetado|Recebíveis|Pagamentos"
  },
  {
    "name": "Controladoria gerencial",
    "category": "Finanças",
    "title": "DRE, margens e orçamento",
    "problem": "Dificuldade de entender a formação do resultado.",
    "solution": "DRE gerencial, margens, despesas e comparação com orçamento.",
    "benefit": "Identificar fatores que afetam a rentabilidade.",
    "demo": "",
    "image": "conceito-02.svg",
    "metrics": "Receita|Margem|Despesas"
  },
  {
    "name": "Gestão de contratos e medições",
    "category": "Contratos",
    "title": "Saldos, aditivos e faturamento",
    "problem": "Saldos, aditivos e medições controlados separadamente.",
    "solution": "Controle de valores contratuais, medições, retenções e faturamento.",
    "benefit": "Identificar pendências e oportunidades de receita.",
    "demo": "",
    "image": "conceito-03.svg",
    "metrics": "Saldo|Medições|Faturamento"
  },
  {
    "name": "Gestão de suprimentos e fornecedores",
    "category": "Operações",
    "title": "Compras, prazos e pendências",
    "problem": "Solicitações atrasadas e pouca visibilidade sobre compras.",
    "solution": "Monitoramento de pedidos, prazos e desempenho de fornecedores.",
    "benefit": "Priorizar pendências e reduzir retrabalho.",
    "demo": "",
    "image": "conceito-04.svg",
    "metrics": "Pedidos|Lead time|Pendências"
  },
  {
    "name": "Gestão de desempenho comercial",
    "category": "Estratégia",
    "title": "Funil, conversões e metas",
    "problem": "Pipeline e metas sem acompanhamento consistente.",
    "solution": "Funil de vendas, conversões, ticket médio e projeções.",
    "benefit": "Orientar prioridades comerciais.",
    "demo": "",
    "image": "conceito-05.svg",
    "metrics": "Pipeline|Conversão|Ticket médio"
  },
  {
    "name": "Gestão de indicadores de pessoas",
    "category": "Operações",
    "title": "Quadro, capacidade e custos",
    "problem": "Informações de pessoal dispersas em controles manuais.",
    "solution": "Indicadores agregados de quadro, horas extras e absenteísmo.",
    "benefit": "Apoiar decisões sobre capacidade e custos.",
    "demo": "",
    "image": "conceito-06.svg",
    "metrics": "Quadro|Horas extras|Absenteísmo"
  },
  {
    "name": "Gestão de estoques",
    "category": "Operações",
    "title": "Giro, cobertura e reposição",
    "problem": "Excesso ou falta de materiais sem alertas claros.",
    "solution": "Curva ABC, giro, cobertura e níveis de estoque.",
    "benefit": "Apoiar reposição e reduzir capital imobilizado.",
    "demo": "",
    "image": "conceito-07.svg",
    "metrics": "Giro|Cobertura|Estoque"
  },
  {
    "name": "Automação de controles em Excel",
    "category": "Automação",
    "title": "Importação, validação e consolidação",
    "problem": "Consolidações repetitivas e fórmulas sujeitas a erros.",
    "solution": "Importação, classificação e consolidação automatizada de bases.",
    "benefit": "Reduzir tarefas manuais e padronizar resultados.",
    "demo": "",
    "image": "conceito-08.svg",
    "metrics": "Importar|Validar|Consolidar"
  },
  {
    "name": "Relatórios executivos automatizados",
    "category": "Automação",
    "title": "Dados, indicadores e comunicação",
    "problem": "Relatórios periódicos exigem montagem manual.",
    "solution": "Geração de relatórios responsivos a partir de bases estruturadas.",
    "benefit": "Simplificar atualização e comunicação gerencial.",
    "demo": "",
    "image": "conceito-09.svg",
    "metrics": "Dados|Indicadores|Relatório"
  },
  {
    "name": "Conciliação e auditoria de informações",
    "category": "Automação",
    "title": "Correspondências e divergências",
    "problem": "Divergências entre bases difíceis de localizar.",
    "solution": "Comparação por chaves, identificação de duplicidades e exceções.",
    "benefit": "Aumentar rastreabilidade e facilitar conferências.",
    "demo": "",
    "image": "conceito-10.svg",
    "metrics": "Correspondências|Divergências|Exceções"
  }
];
