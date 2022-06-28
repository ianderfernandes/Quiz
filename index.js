// CONTADOR DAS PERSONALIDADES PARA O GRAFICO E RESPOSTA FINAL
let contadores = [poupadorCompulsivo = 0, gastadorCompulsivo = 0, moneyMaker = 0, indiferente = 0, economista = 0, apostador = 0, preocupado = 0]
//ARRAY DE OBJETOS COM AS PERGUNTAS(TITULO E ALTERNATIVAS)

let resposta = [
    {
        nomePers: 'Poupador Compulsivo',
        descPers: 'Você é tão frugal quanto eles vêm! Pechinchar é o seu nome do meio, e você está sempre procurando economizar dinheiro porque, em sua mente, dinheiro significa estabilidade e segurança para o futuro. Ao mesmo tempo, seus hábitos de poupança extrema também podem levar à hesitação quando se trata de gastar dinheiro. Em casos extremos, você pode até optar por abrir mão de algo que precisa para aumentar suas economias. Aprender a praticar a moderação pode ajudá-lo a alcançar seus objetivos financeiros e aproveitar o dinheiro pelo qual trabalhou tanto!'
    },
    {
        nomePers: 'Gastador Compulsivo',
        descPers: 'Você vê. Você gosta disso. Você quer isso. Você compra isso. Você tende a ser um grande gastador, mesmo quando seus amigos e familiares podem considerar uma compra desnecessária. E você não tem medo de se tratar. No seu caso, parece que o dinheiro pode comprar felicidade, especialmente quando você está se sentindo para baixo e fazer um pedido on-line instantaneamente melhora seu humor. Mas as compras podem rapidamente se tornar sua kriptonita se você não for cuidadoso - e não estamos falando apenas do remorso do comprador por um pedido on-line que deu errado. Você pode estar propenso a acumular quantias extremas de dívida, o que pode ser muito difícil de pagar. O orçamento permite que você tenha mais equilíbrio entre economizar e gastar - e pode até mesmo ajudá-lo a entender exatamente quanto você pode gastar em coisas "divertidas" todos os meses. Dias sem gastos uma ou duas vezes por semana também podem ajudá-lo a reduzir gastos desnecessários e dar ao seu cartão de crédito uma pausa muito necessária.'
    },
    {
        nomePers: '"MoneyMaker" Fazedor de dinheiro compulsivo',
        descPers: 'Para você, ganhar mais dinheiro = construir mais riqueza, e você certamente faz de ambos uma prioridade. Sua atitude em relação aos ganhos pode colocá-lo em um caminho muito forte (e lucrativo) para o sucesso financeiro. Mas você também dá um passo adiante e também pode acreditar que ganhar mais dinheiro é uma parte fundamental para ser feliz. Mas quando você chega a um ponto em que está um pouco envolvido demais na construção de sua riqueza, pode inadvertidamente negligenciar seus relacionamentos. Lembrar-se de que você está indo bem pode aliviar um pouco da pressão que você coloca em si mesmo para ganhar mais. O dinheiro é uma importante ferramenta de construção de riqueza, mas você também pode considerar usá-lo para reunir seus entes queridos - como, por meio de férias em família muito necessárias!'
    },
    {
        nomePers: 'Indiferente ao dinheiro',
        descPers: 'Você provavelmente não pensa muito em dinheiro - e quando pensa, pensar em tarefas como verificar sua pontuação de crédito ou investir só faz você torcer o nariz! Você pode até acreditar que o dinheiro não deve ser central para suas decisões na vida, e apenas uma quantia modesta é tudo o que você realmente precisa. Isso certamente pode ser uma mentalidade saudável, mas às vezes pode se tornar uma falta de cuidado quando se trata de gerenciamento básico de dinheiro – como não estar ciente de para onde seu dinheiro está indo ou quanto está sendo gasto. Começar pequeno, simplesmente anotando suas despesas mensais, suas dívidas e sua renda pode ajudá-lo a ter mais consciência de até onde sua renda pode levá-lo.'
    },
    {
        nomePers: 'Economista',
        descPers: 'Quando se trata de economizar dinheiro, você tende a ser bom em recortar os cupons, aplicar os códigos de desconto e guardar dinheiro em uma conta poupança. Mas às vezes, seu progresso é prejudicado quando você sente vontade de comprar, comprar, comprar! Você pode até ter notado que, quando faz uma compra compulsiva, muitas vezes acaba com itens com os quais realmente não se importa ou não são tão úteis quanto você pensou que seriam. Isso só deixa você se sentindo irritado ou até desapontado por ter atrapalhado seu progresso de salvamento. Quando você sentir vontade de fazer compras instantaneamente gratificantes, espere 24 horas antes de realmente clicar no botão de checkout. Você pode perceber que não quer mais o item, e isso impedirá que você continue a fazer ioiô entre economizar e gastar dinheiro.'
    },
    {
        nomePers: 'Apostador',
        descPers: 'Você é um tipo de pessoa de grande risco-grande-recompensa. Você tende a ser motivado pela emoção de assumir um risco (como em uma aposta ou investimento), mas também adora a ideia de lucrar com uma grande vitória. Em casos extremos, você pode até considerar pedir dinheiro emprestado de uma conta de aposentadoria ou um investimento apenas para arriscar em outra coisa. No entanto, quando o pêndulo oscila de ganhar para perder, você também pode ficar extremamente devastado se um grande risco não compensar. É importante perceber que você pode aproveitar as oportunidades e, ao mesmo tempo, estabelecer limites para si mesmo. Faça uma lista de itens não negociáveis (como sua conta de aposentadoria ou o fundo da faculdade do seu filho) e faça questão de nunca pedir emprestado contra eles.'
    },
    {
        nomePers: 'Preocupado',
        descPers: 'Você pode ter um ninho de ovos confortável guardado para si mesmo, mas também pode se preocupar muito com a possibilidade de perder seu dinheiro, muitas vezes em grau excessivo. Às vezes, você pode até não ter confiança quando se trata de gerenciar seu dinheiro. Pode ser útil para você ter conversas mais abertas e positivas sobre dinheiro com as pessoas em sua vida'
    }
]

let perguntas = [
    {
        titulo: 'Quando se trata de orçamentar, qual das seguintes alternativas é mais compativel com você?',
        alternativas: ['Segue o seu orçamento à risca.',
            'Você gasta no que te faz feliz, sem se importar em fazer um orçamento dos seus gastos. ',
            'Você sempre pensou que orçamentar fosse apenas para pessoas que não ganham muito dinheiro.',
            'Pensar sobre orçamento de gastos faz os seus olhos revirar.',
            'Você orçamenta para suas necessidades mas gasta de mais de qualquer jeito.',
            'Você não realiza orçamento porquê você não sabe como começa e isto é o suficiente para desencoraja-lo.', 'Para você orçamentos são restrigentes, e você quer ser livre para usar o seu dinheiro quando um oportunidade aparece.'],
        respostas: [0, 1, 2, 3, 4, 5, 6]
    },
    {
        titulo: 'Quando se trata de gerenciar seu dinheiro, qual das seguintes opções você tem mais probabilidade de fazer? ',
        alternativas: ['Economiza o máximo que puder porque se sente culpado quando gasta.',
            'Mima-se ou compra um belo presente para outra pessoa.',
            'Usa-o para iniciar uma atividade secundária que pode lhe render ainda mais dinheiro.',
            'Apenas compra o necessário.',
            'Economize a maior parte, mas provavelmente gasta tudo em algumas semanas.',
            'Invista em algo que pode lhe dar um grande retorno.',
            'Economize o máximo que pode, pois você não sabe quando uma emergência vai acontecer.'],
        respostas: [0, 1, 2, 3, 4, 5, 6]
    },
    {
        titulo: 'Viva! Você acabou de ganhar $ 1.000 em um jogo de raspadinha. O que você faz com o dinheiro?',
        alternativas: ['Salve tudo sem motivo específico.',
            'Saia para jantar com seus amigos e pague a conta.',
            'Use alguns de seus ganhos para comprar outro jogo de raspadinha para tentar ganhar mais.',
            'Economize ou invista metade e doe o restante para caridade.',
            'Você o salvaria hoje apenas para acabar comprando algo com ele em algumas semanas.',
            'Use-o para comprar ainda mais criptomoedas.',
            'Salve-o e espere que seja útil para uma emergência.'],
        respostas: [0, 1, 2, 3, 4, 5, 6]
    },
    {
        titulo: 'Qual destes você está mais propenso a comprar?',
        alternativas: ['Um novo produto caro que você viu em um anúncio do Instagram.',
            'Um curso on-line que pode ensinar uma habilidade que o ajudará a ganhar mais dinheiro.',
            'Alguns itens diferentes de lojas diferentes, porque uma vez que você começa, é difícil parar.',
            'Nada porque cada real conta em uma emergência.',
            'Algo pequeno que você já planejou.',
            'O que você sentir vontade de comprar no momento.',
            'Uma propriedade de investimento.'],
        respostas: [0, 1, 2, 3, 4, 5, 6]
    },
    {
        titulo: 'Com que frequência você se preocupa com dinheiro?',
        alternativas: ['Não com muita frequência, mas você adoraria economizar mais.',
            'Você nunca se preocupa com dinheiro.',
            'Você não se preocupe porque você tem muitas fontes de renda.',
            'Você não se preocupa com dinheiro, mas lhe disseram que você deve evitar gastar demais.',
            'Você só começa a se preocupar quando gasta suas economias em algo que acaba não gostando.',
            'Você se preocupa constantemente e espera ter o suficiente para toda a sua vida.',
            'Você se preocupa muito quando perde dinheiro.'],
        respostas: [0, 1, 2, 3, 4, 5, 6]
    },
    {
        titulo: 'Em caso de emergência financeira...',
        alternativas: ['...você poderia usar parte do dinheiro que economizou para cobrir quaisquer custos.',
            '...você provavelmente contaria com a família para cobrir o custo ou fazer um empréstimo pessoal.',
            '...você provavelmente poderia usar uma de suas fontes de renda para cobrir a emergência.',
            '...você teria que evitar fazer grandes compras por um tempo.',
            '...você provavelmente teria o suficiente para cobrir a emergência, mas se não, você descobriria algo.',
            '...você provavelmente teria algum dinheiro para cobrir uma emergência, mas prefere arriscar em investir para dobrar seu dinheiro.',
            '...você não sabe se tem dinheiro suficiente para uma emergência, mas espera que isso ajude.'],
        respostas: [0, 1, 2, 3, 4, 5, 6]
    },
    {
        titulo: 'Qual é a coisa mais importante para você quando se trata de seu futuro financeiro?',
        alternativas: ['Ter dinheiro suficiente economizado para que você se sinta seguro.',
            'Você nunca realmente pensou sobre isso.',
            'Sempre ser capaz de ganhar mais dinheiro.',
            'Ter o suficiente para cobrir suas necessidades básicas, e é isso.',
            'Ter o suficiente para cobrir suas necessidades, mas também o suficiente para gastar com o que deseja.',
            'Sempre em uma situação positiva com seu dinheiro.',
            'Espera que seu dinheiro seja suficiente para cuidar de você na aposentadoria e emergências.'],
        respostas: [0, 1, 2, 3, 4, 5, 6]
    },
    {
        titulo: 'E, em geral, o que você pensa sobre dinheiro?',
        alternativas: ['É uma ferramenta que pode ajudá-lo a alcançar a liberdade financeira se usada com cuidado.',
            'Ele oferece coisas que podem torná-lo mais feliz e aproximá-lo de amigos e familiares.',
            'É uma ferramenta que pode se acumular e torná-lo mais rico se você souber como usá-la.',
            'Ele ajuda você a satisfazer suas necessidades básicas.',
            'É uma almofada necessária, especialmente quando você se aposenta e ainda precisa de uma renda.',
            'Pode render dividendos se você investir sabiamente; grande risco = grande recompensa.',
            'É ótimo poupá-lo, mas você também deve usá-lo para comprar o que deseja.'],
        respostas: [0, 1, 2, 3, 4, 5, 6]
    }
]

function comecar() {
    atualPos = 0;
    let altPergunta = document.querySelectorAll('.alternativa')
    altPergunta.forEach((element, index) => {
        element.addEventListener('click', () => {
            checarResposta(index)
        })
    })
    criaPergunta(perguntas[atualPos])
}
//FUNÇÃO PARA PASSAR PARA A PROXIMA PERGUNTA
function proximaPerg() {
    atualPos++;
    respostaFinal()
}

function respostaFinal() {
    if (atualPos == perguntas.length) {
        if(Math.max.apply(null, contadores) == contadores[0]) {
            handleRes(resposta[0].nomePers, resposta[0].descPers)
        } else if (Math.max.apply(null, contadores) == contadores[1]) {
            console.log('Gastador Compulsivo')
        } else if (Math.max.apply(null, contadores) == contadores[2]) {
            console.log('Money Maker')
        } else if (Math.max.apply(null, contadores) == contadores[3]) {
            console.log('Indiferente')
        } else if (Math.max.apply(null, contadores) == contadores[4]) {
            console.log('Economista')
        } else if (Math.max.apply(null, contadores) == contadores[5]) {
            console.log('Apostador')
        } else if (Math.max.apply(null, contadores) == contadores[6]) {
            console.log('Preocupado')
        }
        console.log(Math.max.apply(null, contadores))
    }
}

function checarResposta(user) {
    qatual = perguntas[atualPos]
    if (qatual.respostas[0] == user) {
        contadores[0]++;
    } else if (qatual.respostas[1] == user) {
        contadores[1]++;
    } else if (qatual.respostas[2] == user) {
        contadores[2]++;
    } else if (qatual.respostas[3] == user) {
        contadores[3]++;
    } else if (qatual.respostas[4] == user) {
        contadores[4]++;
    } else if (qatual.respostas[5] == user) {
        contadores[5]++;
    } else if (qatual.respostas[6] == user) {
        contadores[6]++;
    }

    proximaPerg()
    criaPergunta(perguntas[atualPos])
}

const title = document.getElementById('titulo')

//CRIANDO A PERGUNTA 
function criaPergunta(q) {
    //ADICIONANDO O TITULO
    qatual = 0
    title.textContent = q.titulo
    //ADICIONANDO AS ALTERNATIVAS
    let altPergunta = document.querySelectorAll('.alternativa')
    altPergunta.forEach(function (element, index) {
        element.textContent = q.alternativas[index];
    })
}


function handleRes(nome, descrição){
    const main = document.querySelector('main')
    title.innerText = `Sua Personalidade é: ${nome}`


    const lista = document.querySelector('ul')
    main.removeChild(lista)

    const p = document.createElement('p')
    p.classList.add('resposta')
    p.innerText = `${descrição}`
    main.appendChild(p)
}




comecar()
