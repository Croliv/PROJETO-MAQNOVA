export const pricingPlans = [
  {
    title: 'Visita Técnica',
    price: 'R$ 80',
    features: [
      { text: 'Diagnóstico completo' },
      { text: 'Valor deduzido do reparo' }
    ],
    buttonText: 'Agendar Visita',
    service: 'Visita Técnica'
  },
  {
    title: 'Manutenção Preventiva',
    price: 'R$ 150',
    features: [
      { text: 'Limpeza completa' },
      { text: 'Lubrificação' },
      { text: 'Verificação geral' }
    ],
    buttonText: 'Contratar',
    service: 'Manutenção Preventiva',
    highlighted: true
  },
  {
    title: 'Reparo Completo',
    price: 'Sob consulta',
    features: [
      { text: 'Orçamento detalhado' },
      { text: 'Garantia de 90 dias' },
      { text: 'Peças originais' }
    ],
    buttonText: 'Solicitar Orçamento',
    service: 'Reparo Completo'
  }
];