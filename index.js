//CONTADOR DAS PERSONALIDADES PARA O GRAFICO E RESPOSTA FINAL
let contadores = [poupadorCompulsivo = 0, gastadorCompulsivo = 0, moneyMaker = 0, indiferente = 0, economista = 0, apostador = 0, preocupado = 0]

//ARRAY DE OBJETOS COM AS RESPOSTAS FINAIS(NOME E DESCRIÇÃO)
let resposta = [
    {
        nomePers: 'Poupador Compulsivo',
        descPers: 'Você é tão frugal quanto eles veem! Pechinchar é o seu nome do meio, e você está sempre procurando economizar dinheiro porque, em sua mente, dinheiro significa estabilidade e segurança para o futuro. Ao mesmo tempo, seus hábitos de poupança extrema também podem levar à hesitação quando se trata de gastar dinheiro. Em casos extremos, você pode até optar por abrir mão de algo que precisa para aumentar suas economias. Aprender a praticar a moderação pode ajudá-lo a alcançar seus objetivos financeiros e aproveitar o dinheiro pelo qual trabalhou tanto!'
    },
    {
        nomePers: 'Gastador Compulsivo',
        descPers: 'Você vê. Você gosta disso. Você quer isso. Você compra isso. Você tende a ser um grande gastador, mesmo quando seus amigos e familiares podem considerar uma compra desnecessária. E você não tem medo de se tratar. No seu caso, parece que o dinheiro pode comprar felicidade, especialmente quando você está se sentindo para baixo e fazer um pedido on-line instantaneamente melhora seu humor. Mas as compras podem rapidamente se tornar sua kriptonita se você não for cuidadoso, e não estamos falando apenas do remorso do comprador por um pedido on-line que deu errado. Você pode estar propenso a acumular quantias extremas de dívida, o que pode ser muito difícil de pagar. O orçamento permite que você tenha mais equilíbrio entre economizar e gastar - e pode até mesmo ajudá-lo a entender exatamente quanto você pode gastar em coisas "divertidas" todos os meses. Dias sem gastos uma ou duas vezes por semana também podem ajudá-lo a reduzir gastos desnecessários e dar ao seu cartão de crédito uma pausa muito necessária.'
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

//ARRAY DE OBJETOS COM AS PERGUNTAS(TITULO E ALTERNATIVAS)
let perguntas = [
    {
        titulo: 'Quando se trata de orçamentar, qual das seguintes alternativas é mais compatível com você?',
        alternativas: ['Sigo o meu orçamento à risca.',
            'Gasto no que me faz feliz, sem me importar em fazer um orçamento dos meus gastos.',
            'Sempre pensei que gerenciar gastos fosse apenas para pessoas que não ganham muito dinheiro.',
            'Pensar sobre o orçamento de gastos faz os meus olhos revirarem.',
            'Orçamento de acordo com minhas necessidades, mas gasto de mais de qualquer forma.',
            'Não realizo orçamento por que eu não faço ideia de como começar e isto é o suficiente para me desencorajar.',
            'Para mim os planejamentos de gastos são restritos, e eu prefiro ser livre para usar o meu dinheiro quando uma oportunidade aparece.'],
        respostas: [0, 1, 2, 3, 4, 5, 6]
    },
    {
        titulo: 'Quando se trata de gerenciar seu dinheiro, qual das seguintes opções você tem mais probabilidade de fazer?',
        alternativas: ['Economizo o máximo que posso porque me sinto culpado quando gasto.',
            'Prefere se presentear ou comprar um belo presente para outra pessoa.',
            'Usa-o para iniciar uma atividade secundária que pode me render ainda mais dinheiro.',
            'Apenas compro o necessário.',
            'Economizo a maior parte, mas provavelmente irei gastar tudo em algumas semanas.',
            'Invisto em algo que pode me dar um grande retorno.',
            'Economizo o máximo que posso, pois não sei quando uma emergência vai acontecer.'],
        respostas: [0, 1, 2, 3, 4, 5, 6]
    },
    {
        titulo: 'Viva! Você acabou de ganhar 1.000 R$ em um jogo de raspadinha. O que você faz com o dinheiro?',
        alternativas: ['Guardo tudo sem motivo específico.',
            'Saio para jantar com os amigos e pago a conta.',
            'Uso alguns dos meus ganhos para comprar outro jogo de raspadinha para tentar ganhar mais.',
            'Economizo o dinheiro ou invisto metade e doou o restante para caridade.',
            'Pouparia por um tempo, mas acabaria gastando em algo nas semanas seguintes.',
            'Uso para comprar alguma ação ou criptomoeda.',
            'Guardo o dinheiro na esperança de que seja útil para uma futura emergência.'],
        respostas: [0, 1, 2, 3, 4, 5, 6]
    },
    {
        titulo: 'Qual destes você está mais propenso a comprar?',
        alternativas: ['Um produto chamativo que viu em um anúncio do Instagram.',
            'Um curso on-line que pode te ensinar uma habilidade para ganhar mais dinheiro.',
            'Alguns produtos de diferentes lojas, porque uma vez que começo a comprar é difícil parar.',
            'Nada porque cada real conta em uma emergência.',
            'Algo pequeno que já tinha visto ou planejado.',
            'O que sentir vontade de comprar no momento.',
            'Algo mais seguro como ações ou uma propriedade de investimento.',
            'Uma propriedade de investimento.'],
        respostas: [0, 1, 2, 3, 4, 5, 6]
    },
    {
        titulo: 'Com que frequência você se preocupa com dinheiro?',
        alternativas: ['Não com muita frequência, mas adoraria economizar mais.',
            'Nunca me preocupo com dinheiro.',
            'Não me preocupo muito, pois tenho mais de uma fonte de renda.',
            'Não me preocupo com dinheiro, mas já me disseram que devo evitar gastar demais.',
            'Só começo a me preocupar, quando eu gasto minhas economias em algo que acabo não gostando.',
            'Me preocupo constantemente e espero ter o suficiente para toda a minha vida.',
            'Me preocupo bastante quando perco dinheiro.'],
        respostas: [0, 1, 2, 3, 4, 5, 6]
    },
    {
        titulo: 'Em caso de emergência financeira...',
        alternativas: ['...Usaria parte do dinheiro que economizei para cobrir quaisquer custos.',
            '...Provavelmente contaria com a família para cobrir o custo ou fazer um empréstimo pessoal.',
            '...Provavelmente poderia usar uma das minhas fontes de renda para cobrir a emergência.',
            '...Teria que evitar fazer grandes compras por um tempo.',
            '...Provavelmente teria o suficiente para cobrir a emergência, mas caso não, pediria emprestado a algum amigo.',
            '...Provavelmente teria algum dinheiro para cobrir uma emergência, mas prefere arriscar em investir algo para dobrar seu dinheiro.',
            '...Não saberia se teria dinheiro suficiente para uma emergência.'],
        respostas: [0, 1, 2, 3, 4, 5, 6]
    },
    {
        titulo: 'Qual é a coisa mais importante para você quando se trata de seu futuro financeiro?',
        alternativas: ['Ter dinheiro suficiente economizado para que me sinta seguro.',
            'Não penso frequentemente sobre isso.',
            'Sempre ser capaz de ganhar mais dinheiro.',
            'Ter o suficiente para cobrir minhas necessidades básicas, e é isso.',
            'Ter o suficiente para cobrir minhas necessidades, mas também o suficiente para gastar com o que desejo.',
            'Sempre possuir uma relação positiva com o dinheiro.',
            'Espero possuir dinheiro suficiente para me cuidar na aposentadoria ou em emergências.'],
        respostas: [0, 1, 2, 3, 4, 5, 6]
    },
    {
        titulo: 'E, em geral, o que você pensa sobre dinheiro?',
        alternativas: ['Penso que é uma ferramenta que pode ajudar a alcançar a liberdade financeira se usada com cuidado.',
            'Ele pode oferecer coisas que podem me tornar mais feliz e me aproximar de amigos e familiares.',
            'É uma ferramenta que pode se acumular e me tornar mais rico se usado de maneira correta.',
            'É uma ferramenta que me ajuda a satisfazer minhas necessidades básicas.',
            'É uma “mão-na-roda”, especialmente quando se aposenta e ainda precisa de uma renda.',
            'Pode render dividendos se investir sabiamente; grande risco = grande recompensa.',
            'É ótimo poupar, mas também usaria para comprar o que desejo.'],
        respostas: [0, 1, 2, 3, 4, 5, 6]
    }
]

//FUNÇÃO QUE CAPTURA AS ALTERNATIVAS DA PERGUNTA
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

const title = document.getElementById('titulo')

//FUNÇÃO PARA EXIBIR O RESULTADO FINAL
function resultado(nome, descrição){
    const main = document.querySelector('main')
    title.innerText = `Sua Personalidade é:`

    const h4 = document.createElement('h4')
    h4.classList.add('h4')
    h4.innerText = `${nome}`
    main.appendChild(h4)

    const lista = document.querySelector('ul')
    main.removeChild(lista)

    const p = document.createElement('p')
    p.classList.add('resposta')
    p.innerText = `${descrição}`
    main.appendChild(p)

    const btn = document.createElement('button')
    btn.classList.add('btnFinal')
    btn.innerText = 'Voltar ao inicio'
    btn.addEventListener('click', function(){
        window.location.href = "index.html"
    })
    main.appendChild(btn)
}

//FUNÇÇÃO PARA CALCULAR O RESULTADO FINAL
function respostaFinal() {
    if (atualPos == perguntas.length) {
        if(Math.max.apply(null, contadores) == contadores[0]) {
            resultado(resposta[0].nomePers, resposta[0].descPers)
        } else if (Math.max.apply(null, contadores) == contadores[1]) {
            resultado(resposta[1].nomePers, resposta[1].descPers)
        } else if (Math.max.apply(null, contadores) == contadores[2]) {
            resultado(resposta[2].nomePers, resposta[2].descPers)
        } else if (Math.max.apply(null, contadores) == contadores[3]) {
            resultado(resposta[3].nomePers, resposta[3].descPers)
        } else if (Math.max.apply(null, contadores) == contadores[4]) {
            resultado(resposta[4].nomePers, resposta[4].descPers)
        } else if (Math.max.apply(null, contadores) == contadores[5]) {
            resultado(resposta[5].nomePers, resposta[5].descPers)
        } else if (Math.max.apply(null, contadores) == contadores[6]) {
            resultado(resposta[6].nomePers, resposta[6].descPers)
        }
    }
}

//FUNÇÃO QUE CHECA QUAL A RESPOSTA DO USUÁRIO NAS ALTERNATIVAS  
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

//FUNÇÃO PARA CRIAR A PERGUNTA 
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

comecar()
