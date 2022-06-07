// CONTADOR DAS PERSONALIDADES PARA O GRAFICO E RESPOSTA FINAL
let economizador = 0;
let gastador = 0;
let moneyMaker = 0;
let indiferente = 0;
let economista = 0;
let apostador = 0;
let preocupado = 0;

//ARRAY DE OBJETOS COM AS PERGUNTAS(TITULO E ALTERNATIVAS)
let perguntas = [
    {
        titulo: 'Quando se trata de orçamentar, qual das seguintes alternativas é mais compativel com você?',
        alternativas: ['Segue o seu orçamento à risca.',
            'Você gasta no que te faz feliz, sem se importar em fazer um orçamento dos seus gastos. ',
            'Você sempre pensou que orçamentar fosse apenas para pessoas que não ganham muito dinheiro.',
            'Pensar sobre orçamento de gastos faz os seus olhos revirar.',
            'Você orçamenta para suas necessidades mas gasta de mais de qualquer jeito.',
            'Você não realiza orçamento porquê você não sabe como começa e isto é o suficiente para desencoraja-lo.', 'Para você orçamentos são restrigentes, e você quer ser livre para usar o seu dinheiro quando um oportunidade aparece.']
    },
    {
        titulo: 'Quando se trata de gerenciar seu dinheiro, qual das seguintes opções você tem mais probabilidade de fazer? ',
        alternativas: ['Economiza o máximo que puder porque se sente culpado quando gasta.',
        'Mima-se ou compra um belo presente para outra pessoa.',
        'Usa-o para iniciar uma atividade secundária que pode lhe render ainda mais dinheiro.', 
        'Apenas compra o necessário.', 
        'Economize a maior parte, mas provavelmente gasta tudo em algumas semanas.',
        'Invista em algo que pode lhe dar um grande retorno.',
        'Economize o máximo que pode, pois você não sabe quando uma emergência vai acontecer.']
    },
    {
        titulo: 'Viva! Você acabou de ganhar $ 1.000 em um jogo de raspadinha. O que você faz com o dinheiro?',
        alternativas: ['Salve tudo sem motivo específico.',
        'Saia para jantar com seus amigos e pague a conta.',
        'Use alguns de seus ganhos para comprar outro jogo de raspadinha para tentar ganhar mais.',
        'Economize ou invista metade e doe o restante para caridade.',
        'Você o salvaria hoje apenas para acabar comprando algo com ele em algumas semanas.',
        'Use-o para comprar ainda mais criptomoedas.',
        'Salve-o e espere que seja útil para uma emergência.']
    },
    {
        titulo: 'Qual destes você está mais propenso a comprar?',
        alternativas: ['Um novo produto caro que você viu em um anúncio do Instagram.',
        'Um curso on-line que pode ensinar uma habilidade que o ajudará a ganhar mais dinheiro.',
        'Alguns itens diferentes de lojas diferentes, porque uma vez que você começa, é difícil parar.',
        'Nada porque cada real conta em uma emergência.',
        'Algo pequeno que você já planejou.',
        'O que você sentir vontade de comprar no momento.',
        'Uma propriedade de investimento.']
    },
    {
        titulo: 'Com que frequência você se preocupa com dinheiro?',
        alternativas: ['Não com muita frequência, mas você adoraria economizar mais.',
        'Você nunca se preocupa com dinheiro.',
        'Você não se preocupe porque você tem muitas fontes de renda.',
        'Você não se preocupa com dinheiro, mas lhe disseram que você deve evitar gastar demais.',
        'Você só começa a se preocupar quando gasta suas economias em algo que acaba não gostando.',
        'Você se preocupa constantemente e espera ter o suficiente para toda a sua vida.',
        'Você se preocupa muito quando perde dinheiro.']
    },
    {
        titulo: 'Em caso de emergência financeira...',
        alternativas: ['...você poderia usar parte do dinheiro que economizou para cobrir quaisquer custos.',
        '...você provavelmente contaria com a família para cobrir o custo ou fazer um empréstimo pessoal.',
        '...você provavelmente poderia usar uma de suas fontes de renda para cobrir a emergência.',
        '...você teria que evitar fazer grandes compras por um tempo.',
        '...você provavelmente teria o suficiente para cobrir a emergência, mas se não, você descobriria algo.',
        '...você provavelmente teria algum dinheiro para cobrir uma emergência, mas prefere arriscar em investir para dobrar seu dinheiro.',
        '...você não sabe se tem dinheiro suficiente para uma emergência, mas espera que isso ajude.']
    },
    {
        titulo: 'Qual é a coisa mais importante para você quando se trata de seu futuro financeiro?',
        alternativas: ['Ter dinheiro suficiente economizado para que você se sinta seguro.',
        'Você nunca realmente pensou sobre isso.',
        'Sempre ser capaz de ganhar mais dinheiro.',
        'Ter o suficiente para cobrir suas necessidades básicas, e é isso.',
        'Ter o suficiente para cobrir suas necessidades, mas também o suficiente para gastar com o que deseja.',
        'Sempre em uma situação positiva com seu dinheiro.',
        'Espera que seu dinheiro seja suficiente para cuidar de você na aposentadoria e emergências.']
    },
    {
        titulo: 'E, em geral, o que você pensa sobre dinheiro?',
        alternativas: ['É uma ferramenta que pode ajudá-lo a alcançar a liberdade financeira se usada com cuidado.',
        'Ele oferece coisas que podem torná-lo mais feliz e aproximá-lo de amigos e familiares.',
        'É uma ferramenta que pode se acumular e torná-lo mais rico se você souber como usá-la.',
        'Ele ajuda você a satisfazer suas necessidades básicas.',
        'É uma almofada necessária, especialmente quando você se aposenta e ainda precisa de uma renda.',
        'Pode render dividendos se você investir sabiamente; grande risco = grande recompensa.',
        'É ótimo poupá-lo, mas você também deve usá-lo para comprar o que deseja.']
    }
]

function comecar() {
    atualPos = 0;
    let altPergunta = document.querySelectorAll('.alternativa')
    altPergunta.forEach((element) => {
        element.addEventListener('click', () => {
            checarReposta()
        })
    })
    criaPergunta(perguntas[atualPos])
}
//FUNÇÃO PARA PASSAR PARA A PROXIMA PERGUNTA COM O CLICK
function proximaPerg() {
    atualPos++;
    if (atualPos == perguntas.length) {
        atualPos = 0;
    }
}

function checarReposta() {
    proximaPerg()
    criaPergunta(perguntas[atualPos])
}

function criaPergunta(q) {
    //ADICIONANDO O TITULO
    qatual = 0
    let tituloPergunta = document.getElementById('titulo')
    tituloPergunta.textContent = q.titulo
    //ADICIONANDO AS ALTERNATIVAS
    let altPergunta = document.querySelectorAll('.alternativa')
    altPergunta.forEach(function(element, index){
        element.textContent = q.alternativas[index];
    })
}

comecar()
