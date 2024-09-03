const data = [
    //INICIANTE
    {
      question: "Qual é o modificador de acesso mais restritivo em Java que permite que um membro da classe seja acessado apenas dentro da própria classe?",
      options: ["public", "protected", "private", "default"],
      answer: "private",
      level: "Iniciante",
    },
    {
      question: "O que é uma classe em Java?",
      options: ["Uma variável.", "Um método.", "Um conjunto de objetos com comportamentos comuns.", "Um loop."],
      answer: "Um conjunto de objetos com comportamentos comuns.",
      level: "Iniciante",
    },
    {
      question: "Qual estrutura de controle é usada para escolher uma entre várias opções?",
      options: ["if-else", "while", "switch", "for"],
      answer: "switch",
      level: "Iniciante",
    },
    {
      question: "Qual é o operador usado para comparação de igualdade em Java?",
      options: ["=", "==", "!=", "==="],
      answer: "==",
      level: "Iniciante",
    },
    {
      question: "Qual é o tipo de dado em Java usado para armazenar um único caractere?",
      options: ["String", "char", "boolean", "int"],
      answer: "char",
      level: "Iniciante",
    },

    //INTERMEDIÁRIO
    {
      question: "Em LPOO, o que é polimorfismo?",
      options: [
        "A habilidade de objetos de diferentes classes responderem ao mesmo método de diferentes formas",
        "O processo de esconder dados de um objeto",
        "A capacidade de uma classe ser herdada por várias classes",
        "A prática de criar métodos estáticos dentro de uma classe",
      ],
      answer: "A habilidade de objetos de diferentes classes responderem ao mesmo método de diferentes formas",
      level: "Intermediário",
    },
    {
      question: "O que é encapsulamento em orientação a objetos?",
      options: [
        "A habilidade de uma classe herdar métodos e atributos de outra classe", 
        "A capacidade de um objeto assumir várias formas", 
        "O conceito de esconder os detalhes de implementação de uma classe e expor apenas o necessário", 
        "A prática de reutilizar o código em várias partes de um programa"],
      answer: "O conceito de esconder os detalhes de implementação de uma classe e expor apenas o necessário",
      level: "Intermediário"
    },
    {
      question: "Em orientação a objetos, qual dos seguintes conceitos está mais relacionado à reutilização de código?",
      options: ["Herança", "Polimorfismo", "Abstração", "Encapsulamento"],
      answer: "Herança",
      level: "Intermediário",
    },
    {
      question: "O que é uma interface em Java?",
      options: [
        "Uma classe abstrata que permite herança múltipla", 
        "Um tipo de classe que pode ser instanciada diretamente", 
        "Um contrato que especifica métodos que uma classe deve implementar", 
        "Um método estático que pode ser usado por várias classes"
      ],
      answer: "Um contrato que especifica métodos que uma classe deve implementar",
      level: "Intermediário"
    },
    {
      question: "O que o operador `&&` representa em Java?",
      options: ["Ou lógico (OR)", "E lógico (AND)", "Negação lógica (NOT)", "Operador ternário"],
      answer: "E lógico (AND)",
      level: "Intermediário",
    },
    
    //AVANÇADO
    {
      question: "Qual é a diferença entre variáveis ​​estáticas e não estáticas?",
      options: ["Uma variável estática também é conhecida como variável local, enquanto uma variável é global", 
        "Uma variável estática também é conhecida como uma constante, que não pode ter valores diferentes de nulo", 
        "Uma variável estática também é conhecida como uma variável de apenas um tipo, enquanto uma variável pode ser resolvida dinamicamente para qualquer tipo durante a execução do programa.", 
        "Uma variável estática é associada à classe como um todo, em vez de a instâncias específicas de uma classe. Variáveis ​​não estáticas assumem valores únicos com cada instância de objeto."],
      answer: "Uma variável estática é associada à classe como um todo, em vez de a instâncias específicas de uma classe. Variáveis ​​não estáticas assumem valores únicos com cada instância de objeto.",
      level: "Avançado",
    },
    {
      question: "Qual é o impacto de definir um método como final em uma classe Java?",
      options: ["O método não pode ser sobrescrito por subclasses.", 
        "O método só pode ser chamado dentro da mesma classe.", 
        "O método não pode lançar exceções.", 
        "O método será executado uma única vez durante o ciclo de vida do objeto."],
      answer: "O método não pode ser sobrescrito por subclasses.",
      level: "Avançado",
    },
    {
      question: "Em que circunstâncias uma classe abstrata em Java pode ser instanciada diretamente?",
      options: ["Nunca, classes abstratas não podem ser instanciadas diretamente.", 
        "Quando todos os métodos abstratos foram implementados.", 
        "Quando a classe abstrata não contém nenhum método abstrato.", 
        "Quando a classe abstrata for herdada por outra classe concreta."],
      answer: "Nunca, classes abstratas não podem ser instanciadas diretamente.",
      level: "Avançado",
    },
    {
      question: "Qual desses pacotes contém classes e interfaces usadas para operações de entrada e saída de um programa?",
      options: ["Java.io", 
        "java.util", 
        "java.lang", 
        "Todos mencionados"],
      answer: "Java.io",
      level: "Avançado",
    },
    {
      question: "Qual das alternativas a seguir é uma coleção que não contém elementos duplicados?",
      options: ["Map", 
        "Deque", 
        "Set", 
        "ArrayList"],
      answer: "Set",
      level: "Avançado",
    },




  ];
  
  export default data;