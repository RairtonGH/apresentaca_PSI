// Configuração central. Valores presentes na URL têm prioridade.
window.CLIENT_CONFIG = {
  // Vazio = seleção automática pelo nicho. Veja as chaves em paletas.
  paleta: '',
  paletas: {
  "geral": {
    "bg": "#f8f7f3",
    "paper": "#fffefa",
    "ink": "#293d35",
    "muted": "#536459",
    "green": "#355b48",
    "green-dark": "#264635",
    "line": "#d8dfd4",
    "soft": "#eaece2",
    "accent": "#526b46"
  },
  "ansiedade": {
    "bg": "#f3f7f5",
    "paper": "#fcfefc",
    "ink": "#283f3a",
    "muted": "#50675f",
    "green": "#326657",
    "green-dark": "#244d42",
    "line": "#d4e2dc",
    "soft": "#e3eee8",
    "accent": "#426d60"
  },
  "infantil": {
    "bg": "#fcf6f0",
    "paper": "#fffdfa",
    "ink": "#4c3832",
    "muted": "#746056",
    "green": "#98543b",
    "green-dark": "#783e2b",
    "line": "#ead9ce",
    "soft": "#f5e6da",
    "accent": "#93523b"
  },
  "neuropsicologia": {
    "bg": "#f3f7f9",
    "paper": "#fcfdff",
    "ink": "#293e4d",
    "muted": "#536775",
    "green": "#34627d",
    "green-dark": "#24495f",
    "line": "#d5e1e8",
    "soft": "#e4edf3",
    "accent": "#496b85"
  },
  "relacionamentos": {
    "bg": "#faf4f3",
    "paper": "#fffafa",
    "ink": "#4e343c",
    "muted": "#755b64",
    "green": "#8a4d60",
    "green-dark": "#6d3849",
    "line": "#e8d5da",
    "soft": "#f1e2e5",
    "accent": "#8c5063"
  },
  "luto": {
    "bg": "#f7f5f9",
    "paper": "#fdfbff",
    "ink": "#40374c",
    "muted": "#6b6076",
    "green": "#716083",
    "green-dark": "#544461",
    "line": "#dfd8e7",
    "soft": "#ece6f1",
    "accent": "#756087"
  },
  "trauma": {
    "bg": "#f3f7f7",
    "paper": "#fcfefe",
    "ink": "#2a4144",
    "muted": "#52696b",
    "green": "#35666b",
    "green-dark": "#244d52",
    "line": "#d2e2e2",
    "soft": "#e1eeee",
    "accent": "#426e72"
  },
  "organizacional": {
    "bg": "#f4f6f9",
    "paper": "#fcfdff",
    "ink": "#2d3c51",
    "muted": "#59677b",
    "green": "#405d80",
    "green-dark": "#2c4564",
    "line": "#d8dfe9",
    "soft": "#e5eaf2",
    "accent": "#526989"
  }
},
  nome: 'Psicóloga', nicho: '', foto: '', zap: '', bio: '', seg: '',
  crp: '', instagram: '', modalidade: '',
  hero: 'Você não precisa|dar conta de|tudo sozinha.',
  descricao: 'Um espaço de escuta para acolher o que você sente, compreender sua história e construir novos caminhos, no seu tempo.',
  mensagem: 'Olá, {nome}! Gostaria de saber mais sobre o atendimento psicológico e a disponibilidade de horários.',
  temas: [
    { icon: 'ear', title: 'Quando a mente não desacelera', text: 'Preocupações que ocupam espaço, pensamentos que se repetem e a dificuldade de estar no presente.' },
    { icon: 'heart', title: 'Relações que pedem cuidado', text: 'Laços, limites, conflitos e a busca por formas de se relacionar sem deixar de ser você.' },
    { icon: 'leaf', title: 'Fases de mudança', text: 'Recomeços, escolhas e momentos em que o caminho parece menos claro do que você gostaria.' },
    { icon: 'sun', title: 'Um encontro com você', text: 'Um espaço para reconhecer sentimentos, compreender padrões e se conhecer com mais gentileza.' }
  ],
  temasPorNicho: {
    infantil: [
      { icon: 'heart', title: 'Emoções que ainda ganham nome', text: 'Um espaço para compreender sentimentos e formas de expressão na infância e na adolescência.' },
      { icon: 'leaf', title: 'Mudanças e desenvolvimento', text: 'Novas fases, adaptações e desafios que pedem atenção ao tempo de cada criança ou adolescente.' },
      { icon: 'ear', title: 'Família e vínculos', text: 'As relações e os contextos que fazem parte da história de quem está crescendo.' },
      { icon: 'sun', title: 'Escola e convivência', text: 'Experiências de pertencimento, relações com colegas e questões que aparecem no cotidiano escolar.' }
    ],
    relacionamentos: [
      { icon: 'ear', title: 'Comunicação e escuta', text: 'Um espaço para olhar para o que é dito, para o que fica guardado e para o que pede compreensão.' },
      { icon: 'heart', title: 'Vínculos e conflitos', text: 'Questões que se repetem nas relações e sentimentos que podem ser difíceis de compartilhar.' },
      { icon: 'leaf', title: 'Limites e individualidade', text: 'Reconhecer suas necessidades e compreender como elas se encontram com as de outras pessoas.' },
      { icon: 'sun', title: 'Escolhas e mudanças', text: 'Transições, separações e novas possibilidades que atravessam a vida afetiva.' }
    ],
    luto: [
      { icon: 'ear', title: 'Dar lugar aos sentimentos', text: 'Uma escuta para aquilo que aparece diante de uma perda, sem exigir uma forma certa de sentir.' },
      { icon: 'heart', title: 'Memórias e vínculos', text: 'Um espaço para falar de quem ou do que fez parte da sua história e continua tendo significado.' },
      { icon: 'leaf', title: 'Um tempo que é seu', text: 'Cada pessoa atravessa as perdas de um modo. Seu ritmo merece respeito.' },
      { icon: 'sun', title: 'A vida que se reorganiza', text: 'Olhar para o cotidiano, as relações e os caminhos possíveis diante de uma nova realidade.' }
    ]
  },
  perguntas: [
    ['Preciso saber exatamente o que dizer?', 'Não. Você pode começar pelo que faz sentido naquele momento, mesmo que seja difícil organizar em palavras. A conversa vai sendo construída com você.'],
    ['Como funciona a primeira sessão?', 'É um primeiro encontro para falar sobre sua busca e conhecer a forma de trabalho do profissional. Os próximos passos são combinados a partir dessa conversa.'],
    ['O atendimento é online ou presencial?', 'Converse pelo WhatsApp para confirmar as modalidades disponíveis e entender qual atende ao que você procura.'],
    ['Qual é o valor e a duração das sessões?', 'Essas informações são combinadas diretamente com o profissional. Pelo WhatsApp, você pode consultar valores, duração, frequência e horários antes de agendar.'],
    ['Quanto tempo dura a terapia?', 'Não existe um prazo único. O processo depende de cada pessoa e das questões trabalhadas. O andamento pode ser conversado ao longo do acompanhamento.']
  ]
};
