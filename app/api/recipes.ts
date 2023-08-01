export interface Recipe {
	id: number
	category: string[]
	title: string
	ingredients: string[]
	instructions: string[]
	imageUrl: string
}
export const recipes: Recipe[] = [
    {
        id: 1,
        category: ["Receitas Básicas"],
        title: "Bolo de Chocolate",
        ingredients: [
            "3 ovos",
            "2 xícaras de farinha de trigo",
            "1 xícara de açúcar",
            "1 xícara de leite",
            "1/2 xícara de cacau em pó",
            "1 colher de sopa de fermento em pó",
            "1 colher de chá de essência de baunilha"
        ],
        instructions: [
            "Pré-aqueça o forno a 180°C e unte uma forma redonda.",
            "Em uma tigela, bata os ovos e o açúcar até obter uma mistura homogênea.",
            "Adicione o leite e a essência de baunilha, e continue batendo.",
            "Incorpore a farinha de trigo, o cacau em pó e o fermento em pó, misturando bem.",
            "Despeje a massa na forma e leve ao forno por aproximadamente 40 minutos.",
            "Espere esfriar, desenforme e sirva!"
        ],
        imageUrl: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.tudogostoso.com.br%2Freceita%2F309779-bolo-de-chocolate-simples.html&psig=AOvVaw3nzAqansOC2n8pc-wlGMrc&ust=1690663296185000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCMDFs92hsoADFQAAAAAdAAAAABAD"
    },
    {
        id: 2,
        category: ["Receitas Básicas"],
        title: "Arroz Branco",
        ingredients: [
            "1 xícara de arroz",
            "2 xícaras de água",
            "1 colher de sopa de óleo",
            "Sal a gosto"
        ],
        instructions: [
            "Lave o arroz em água corrente e escorra.",
            "Em uma panela, aqueça o óleo e adicione o arroz, refogando por alguns minutos.",
            "Adicione a água fervente e o sal, mexendo rapidamente.",
            "Abaixe o fogo, tampe a panela e cozinhe por cerca de 15 minutos ou até a água secar.",
            "Desligue o fogo, deixe a panela tampada por mais alguns minutos e depois solte o arroz com um garfo.",
            "Seu arroz branco está pronto para ser servido!"
        ],
        imageUrl: "https://static.itdg.com.br/images/1200-630/21fd76be3b29c3290859eda5220e0e32/323683-original.jpg"
    },
    {
        id: 3,
        category: ["Bolos"],
        title: "Bolo de Cenoura",
        ingredients: [
            "3 cenouras médias",
            "3 ovos",
            "1 xícara de óleo",
            "2 xícaras de açúcar",
            "2 xícaras de farinha de trigo",
            "1 colher de sopa de fermento em pó"
        ],
        instructions: [
            "Pré-aqueça o forno a 180°C e unte uma forma retangular.",
            "No liquidificador, bata as cenouras, os ovos e o óleo até obter uma mistura homogênea.",
            "Em uma tigela, misture o açúcar, a farinha de trigo e o fermento em pó.",
            "Adicione a mistura do liquidificador aos ingredientes secos, mexendo bem até formar uma massa uniforme.",
            "Despeje a massa na forma e leve ao forno por aproximadamente 40 minutos.",
            "Espere esfriar, corte em pedaços e sirva."
        ],
        imageUrl: "https://www.google.com/url?sa=i&url=https%3A%2F%2Faquelareceita.com.br%2Fbolo-de-cenoura&psig=AOvVaw1yg5WzWqfWm22D-8EgnWtL&ust=1690662960278000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCOD4yLugsoADFQAAAAAdAAAAABAD"
    },
    {
        id: 4,
        category: ["Bolos"],
        title: "Bolo de Laranja",
        ingredients: [
            "3 laranjas médias",
            "3 ovos",
            "1 xícara de óleo",
            "2 xícaras de açúcar",
            "2 xícaras de farinha de trigo",
            "1 colher de sopa de fermento em pó"
        ],
        instructions: [
            "Pré-aqueça o forno a 180°C e unte uma forma redonda.",
            "No liquidificador, bata as laranjas (com casca e sem sementes), os ovos e o óleo até obter uma mistura homogênea.",
            "Em uma tigela, misture o açúcar, a farinha de trigo e o fermento em pó.",
            "Adicione a mistura do liquidificador aos ingredientes secos, mexendo bem até formar uma massa uniforme.",
            "Despeje a massa na forma e leve ao forno por aproximadamente 40 minutos.",
            "Espere esfriar, desenforme e sirva este delicioso bolo de laranja!"
        ],
        imageUrl: "https://s2-receitas.glbimg.com/F9dgqtXN9uu_YJvp8uV48PEnhBU=/0x0:1280x800/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_1f540e0b94d8437dbbc39d567a1dee68/internal_photos/bs/2021/N/d/zEcoFRSqGbrt3F6uWpBQ/bolo-de-laranja-com-calda.jpg"
    },
    {
        id: 5,
        category: ["Sobremesas"],
        title: "Pudim de Leite Condensado",
        ingredients: [
            "1 lata de leite condensado",
            "2 latas de leite (utilize a lata de leite condensado como medida)",
            "3 ovos",
            "1 colher de chá de essência de baunilha",
            "1 xícara de açúcar para a calda"
        ],
        instructions: [
            "Preaqueça o forno a 180°C.",
            "Para a calda, em uma forma de pudim, derreta o açúcar em fogo baixo até caramelizar.",
            "Espalhe a calda caramelizada por toda a forma.",
            "No liquidificador, bata o leite condensado, o leite, os ovos e a essência de baunilha até obter uma mistura homogênea.",
            "Despeje a mistura na forma caramelizada.",
            "Cubra a forma com papel-alumínio e leve ao forno em banho-maria por aproximadamente 1 hora.",
            "Após assar, deixe o pudim esfriar completamente antes de desenformar.",
            "Leve à geladeira por algumas horas antes de servir.",
            "Desenforme e sirva o delicioso pudim de leite condensado!"
        ],
        imageUrl: "https://s2-receitas.glbimg.com/HctHo16M3HQO8TT7sL3fwFcniwM=/0x0:984x765/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_1f540e0b94d8437dbbc39d567a1dee68/internal_photos/bs/2020/D/m/r8XAmWTcuRAzTRMBJZ1A/pudim-de-leite-condensado.jpg"
    },
    {
        id: 6,
        category: ["Sobremesas"],
        title: "Torta de Limão",
        ingredients: [
            "1 pacote de bolacha maisena",
            "100g de manteiga derretida",
            "1 lata de leite condensado",
            "1 caixa de creme de leite",
            "Suco de 3 limões",
            "Raspas de limão para decorar"
        ],
        instructions: [
            "No liquidificador, triture a bolacha maisena até formar uma farofa.",
            "Em uma tigela, misture a bolacha triturada com a manteiga derretida até obter uma massa homogênea.",
            "Forre o fundo de uma forma de torta com a massa, pressionando bem para compactar.",
            "Leve à geladeira por 15 minutos para a massa firmar.",
            "Enquanto isso, no liquidificador, bata o leite condensado, o creme de leite e o suco de limão até formar um creme.",
            "Despeje o creme sobre a massa na forma.",
            "Leve à geladeira por pelo menos 2 horas para a torta ganhar consistência.",
            "Antes de servir, decore a torta com raspas de limão.",
            "Sua irresistível torta de limão está pronta para ser saboreada!"
        ],
        imageUrl: "https://s2-receitas.glbimg.com/y75X43YL0a3rJz3Pguil8rlSAaM=/0x0:1280x800/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_1f540e0b94d8437dbbc39d567a1dee68/internal_photos/bs/2021/S/L/J3y2iFRNigmIEYBd1awA/torta-de-limao-receita-2.jpg"
    },
    {
        id: 7,
        category: ["Carnes"],
        title: "Strogonoff de Frango",
        ingredients: [
            "500g de peito de frango em cubos",
            "1 cebola picada",
            "2 dentes de alho picados",
            "1 colher de sopa de manteiga",
            "1 colher de sopa de óleo",
            "1 lata de creme de leite",
            "1 colher de sopa de mostarda",
            "1 colher de sopa de ketchup",
            "Sal e pimenta a gosto"
        ],
        instructions: [
            "Em uma panela, aqueça a manteiga e o óleo e refogue a cebola e o alho até dourarem.",
            "Adicione o frango e refogue até ficar bem cozido.",
            "Tempere com sal e pimenta a gosto.",
            "Acrescente a mostarda e o ketchup, mexendo bem.",
            "Desligue o fogo e adicione o creme de leite, misturando até incorporar.",
            "Sirva o strogonoff de frango acompanhado de arroz branco e batata palha.",
            "Bom apetite!"
        ],
        imageUrl: "https://cdn0.tudoreceitas.com/pt/posts/6/8/8/strogonoff_de_frango_simples_9886_600.webp"
    },
    {
        id: 8,
        category: ["Carnes"],
        title: "Carne de Panela com Batatas",
        ingredients: [
            "500g de carne bovina (coxão mole, patinho, etc.) em cubos",
            "2 batatas grandes cortadas em rodelas",
            "1 cebola picada",
            "2 dentes de alho picados",
            "2 tomates picados",
            "2 colheres de sopa de óleo",
            "2 colheres de sopa de extrato de tomate",
            "2 xícaras de água quente",
            "Sal e pimenta a gosto",
            "Salsinha picada para decorar"
        ],
        instructions: [
            "Em uma panela de pressão, aqueça o óleo e refogue a cebola e o alho até dourarem.",
            "Acrescente a carne e deixe dourar por alguns minutos.",
            "Adicione os tomates, o extrato de tomate, o sal e a pimenta, mexendo bem.",
            "Coloque a água quente na panela, tampe e cozinhe por cerca de 20 minutos após pegar pressão.",
            "Desligue o fogo, aguarde sair toda a pressão e abra a panela.",
            "Adicione as batatas em rodelas à carne na panela e cozinhe por mais 10 minutos ou até as batatas ficarem macias.",
            "Transfira a carne de panela com batatas para um prato de servir e decore com salsinha picada.",
            "Sirva acompanhado de arroz branco e salada verde.",
            "Bom apetite!"
        ],
        imageUrl: "https://img.cybercook.com.br/receitas/477/carne-de-panela-com-batata-1-840x480.jpeg?q=75"
    },
    {
        id: 9,
        category: ["Legumes"],
        title: "Sopa de Abóbora",
        ingredients: [
            "1 abóbora média descascada e cortada em cubos",
            "1 cebola picada",
            "2 dentes de alho picados",
            "2 batatas médias descascadas e cortadas em cubos",
            "4 xícaras de caldo de legumes",
            "1 xícara de leite de coco",
            "1 colher de sopa de azeite",
            "Sal e pimenta a gosto",
            "Coentro ou salsinha picada para decorar"
        ],
        instructions: [
            "Em uma panela grande, aqueça o azeite e refogue a cebola e o alho até dourarem.",
            "Adicione a abóbora e as batatas, e refogue por alguns minutos.",
            "Despeje o caldo de legumes na panela e deixe cozinhar até que os legumes fiquem macios.",
            "Use um liquidificador ou mixer de mão para bater os legumes até obter um creme.",
            "Volte o creme à panela, adicione o leite de coco e mexa bem.",
            "Tempere com sal e pimenta a gosto.",
            "Aqueça a sopa por mais alguns minutos.",
            "Sirva a sopa de abóbora em tigelas individuais e decore com coentro ou salsinha picada.",
            "Bom apetite!"
        ],
        imageUrl: "https://i.panelinha.com.br/i1/64-bk-2040-sopa-de-abobora.webp"
    },
    {
        id: 10,
        category: ["Legumes"],
        title: "Legumes Assados com Ervas",
        ingredients: [
            "2 cenouras cortadas em rodelas",
            "2 abobrinhas cortadas em cubos",
            "1 pimentão vermelho cortado em tiras",
            "1 pimentão amarelo cortado em tiras",
            "1 cebola roxa cortada em gomos",
            "3 colheres de sopa de azeite",
            "2 colheres de sopa de ervas frescas picadas (salsa, tomilho, alecrim, etc.)",
            "Sal e pimenta a gosto"
        ],
        instructions: [
            "Pré-aqueça o forno a 200°C.",
            "Em uma tigela grande, misture todos os legumes com o azeite e as ervas frescas.",
            "Tempere com sal e pimenta a gosto e misture bem.",
            "Espalhe os legumes em uma assadeira grande.",
            "Asse no forno por cerca de 30 minutos ou até que fiquem dourados e macios.",
            "Retire do forno e sirva os legumes assados como acompanhamento ou prato principal.",
            "Bom apetite!"
        ],
        imageUrl: "https://www.comidaereceitas.com.br/wp-content/uploads/2010/04/Legumes-assados-com-ervas-freepik-780x517.jpg"
    },
    {
        id: 11,
        category: ["Saladas"],
        title: "Salada Caprese",
        ingredients: [
            "3 tomates maduros em rodelas",
            "200g de queijo mussarela de búfala em rodelas",
            "Folhas de manjericão fresco",
            "Azeite de oliva extravirgem",
            "Vinagre balsâmico reduzido",
            "Sal e pimenta a gosto"
        ],
        instructions: [
            "Em um prato de servir, alterne as rodelas de tomate e de queijo mussarela.",
            "Disponha as folhas de manjericão fresco por cima da salada.",
            "Regue com azeite de oliva extravirgem e vinagre balsâmico reduzido a gosto.",
            "Tempere com sal e pimenta a gosto.",
            "Deixe a salada descansar por alguns minutos antes de servir.",
            "Sirva a deliciosa salada Caprese como entrada ou acompanhamento.",
            "Bom apetite!"
        ],
        imageUrl: "https://img.cybercook.com.br/receitas/210/salada-caprese-2-840x480.jpeg?q=75"
    },
    {
        id: 12,
        category: ["Saladas"],
        title: "Salada de Grão de Bico com Tomate e Pepino",
        ingredients: [
            "1 lata de grão de bico cozido",
            "1 pepino em cubos",
            "2 tomates médios em cubos",
            "1/2 cebola roxa em fatias finas",
            "1/4 de xícara de azeitonas pretas fatiadas",
            "2 colheres de sopa de suco de limão",
            "3 colheres de sopa de azeite",
            "1 dente de alho picado",
            "1 colher de chá de cominho em pó",
            "Salsinha picada a gosto",
            "Sal e pimenta a gosto"
        ],
        instructions: [
            "Em uma tigela grande, misture o grão de bico, o pepino, o tomate, a cebola e as azeitonas.",
            "Em um pote com tampa, misture o suco de limão, o azeite, o alho picado, o cominho, o sal e a pimenta.",
            "Tampe o pote e agite bem para formar o molho.",
            "Regue a salada com o molho e misture bem para incorporar os sabores.",
            "Polvilhe salsinha picada por cima da salada.",
            "Sirva a salada de grão de bico com tomate e pepino como acompanhamento ou prato principal.",
            "Bom apetite!"
        ],
        imageUrl: "https://claudia.abril.com.br/wp-content/uploads/2020/02/salada-grao-de-bico.jpg?quality=85"
    },
    {
        id: 13,
        category: ["Sopas"],
        title: "Caldo Verde",
        ingredients: [
            "4 batatas grandes em rodelas",
            "1 cebola picada",
            "2 dentes de alho picados",
            "1 linguiça calabresa em rodelas finas",
            "1 maço de couve fatiada",
            "2 colheres de sopa de azeite",
            "1 litro de caldo de legumes",
            "Sal a gosto"
        ],
        instructions: [
            "Em uma panela grande, aqueça o azeite e refogue a cebola e o alho até dourarem.",
            "Adicione as batatas e refogue por alguns minutos.",
            "Despeje o caldo de legumes na panela e deixe as batatas cozinharem até ficarem macias.",
            "Com um mixer de mão ou liquidificador, bata as batatas e o caldo até obter um creme.",
            "Volte o creme à panela e acrescente a linguiça calabresa.",
            "Deixe cozinhar por mais alguns minutos.",
            "Adicione a couve fatiada à sopa e deixe cozinhar por mais 5 minutos.",
            "Tempere com sal a gosto.",
            "Sirva o delicioso caldo verde bem quente.",
            "Bom apetite!"
        ],
        imageUrl: "https://vovopalmirinha.com.br/wp-content/uploads/2019/06/receitas-vovo-palmirinha-caldo-verde-702x336.jpg"
    },
    {
        id: 14,
        category: ["Sopas"],
        title: "Sopa de Tomate com Manjericão",
        ingredients: [
            "1 kg de tomates maduros sem pele e sementes",
            "1 cebola picada",
            "2 dentes de alho picados",
            "2 colheres de sopa de azeite",
            "1 litro de caldo de legumes",
            "1 maço de manjericão fresco",
            "1 colher de sopa de açúcar",
            "Sal e pimenta a gosto"
        ],
        instructions: [
            "Em uma panela grande, aqueça o azeite e refogue a cebola e o alho até dourarem.",
            "Adicione os tomates picados e refogue por alguns minutos.",
            "Despeje o caldo de legumes na panela e deixe os tomates cozinharem até ficarem bem macios.",
            "Com um mixer de mão ou liquidificador, bata os tomates e o caldo até obter um creme.",
            "Volte o creme à panela e adicione as folhas de manjericão.",
            "Tempere com açúcar, sal e pimenta a gosto.",
            "Deixe a sopa cozinhar por mais alguns minutos.",
            "Sirva a sopa de tomate com manjericão bem quente.",
            "Bom apetite!"
        ],
        imageUrl: "https://img.cybercook.com.br/receitas/997/sopa-de-tomate-com-manjericao-2-840x480.jpeg?q=75"
    },
    {
        id: 15,
        category: ["Ovos e Laticínios"],
        title: "Omelete de Queijo e Tomate",
        ingredients: [
            "3 ovos",
            "2 colheres de sopa de leite",
            "1/2 xícara de queijo muçarela ralado",
            "1 tomate picado",
            "1 colher de sopa de manteiga",
            "Sal e pimenta a gosto",
            "Salsinha picada para decorar"
        ],
        instructions: [
            "Em uma tigela, bata os ovos com o leite e tempere com sal e pimenta a gosto.",
            "Aqueça a manteiga em uma frigideira antiaderente.",
            "Despeje os ovos batidos na frigideira e espalhe bem.",
            "Quando a omelete começar a firmar, adicione o queijo e o tomate picado em uma das metades.",
            "Dobre a omelete ao meio, cobrindo o recheio de queijo e tomate.",
            "Deixe cozinhar por mais alguns minutos até o queijo derreter.",
            "Polvilhe salsinha picada por cima da omelete antes de servir.",
            "Sirva a omelete de queijo e tomate quentinha e deliciosa!",
            "Bom apetite!"
        ],
        imageUrl: "https://www.kitano.com.br/wp-content/uploads/2019/07/SSP_1993-Omelete-de-pizza-mussarela-ore%E2%95%A0%C3%BCgano-e-tomate.jpg"
    },
    {
        id: 16,
        category: ["Ovos e Laticínios"],
        title: "Panquecas Americanas",
        ingredients: [
            "1 xícara de farinha de trigo",
            "1 colher de sopa de açúcar",
            "1 colher de chá de fermento em pó",
            "1/2 colher de chá de bicarbonato de sódio",
            "1/4 colher de chá de sal",
            "3/4 de xícara de leite",
            "1 ovo",
            "2 colheres de sopa de manteiga derretida",
            "Óleo para untar a frigideira"
        ],
        instructions: [
            "Em uma tigela, misture a farinha, o açúcar, o fermento, o bicarbonato e o sal.",
            "Em outra tigela, bata o leite, o ovo e a manteiga derretida.",
            "Despeje a mistura líquida sobre a mistura de ingredientes secos e mexa até obter uma massa homogênea.",
            "Aqueça uma frigideira antiaderente untada com um pouco de óleo.",
            "Com uma concha, despeje pequenas porções da massa na frigideira.",
            "Cozinhe cada panqueca por cerca de 2 minutos de cada lado, ou até dourar.",
            "Repita o processo até terminar toda a massa.",
            "Sirva as panquecas americanas ainda quentinhas com mel, maple syrup, ou a cobertura de sua preferência.",
            "Bom apetite!"
        ],
        imageUrl: "https://panelaterapia.com/wp-content/uploads/2016/11/panqueca.png"
    },
    {
        id: 17,
        category: ["Cereais"],
        title: "Granola Caseira",
        ingredients: [
            "2 xícaras de aveia em flocos",
            "1/2 xícara de amêndoas picadas",
            "1/2 xícara de castanha de caju picada",
            "1/2 xícara de coco ralado",
            "1/4 de xícara de mel",
            "2 colheres de sopa de óleo de coco derretido",
            "1 colher de chá de extrato de baunilha",
            "1/2 xícara de frutas secas (uvas-passas, cranberries, etc.)"
        ],
        instructions: [
            "Pré-aqueça o forno a 160°C.",
            "Em uma tigela grande, misture a aveia, as amêndoas, as castanhas de caju e o coco ralado.",
            "Em uma outra tigela, misture o mel, o óleo de coco e o extrato de baunilha.",
            "Despeje a mistura líquida sobre os ingredientes secos e mexa bem para que todos os ingredientes fiquem bem incorporados.",
            "Espalhe a granola em uma assadeira forrada com papel manteiga.",
            "Asse a granola no forno por cerca de 25 a 30 minutos, mexendo ocasionalmente para dourar por igual.",
            "Retire do forno e deixe esfriar completamente.",
            "Adicione as frutas secas à granola e misture.",
            "Guarde a granola caseira em um recipiente hermético para manter a crocância.",
            "Sirva com iogurte, leite ou frutas frescas.",
            "Bom apetite!"
        ],
        imageUrl: "https://www.plantte.com/wp-content/uploads/2021/02/granola-caseira-2-1152x1536.jpg"
    },
    {
        id: 18,
        category: ["Cereais"],
        title: "Cereal Matinal Caseiro",
        ingredients: [
            "2 xícaras de flocos de milho",
            "1/2 xícara de flocos de arroz",
            "1/4 de xícara de amêndoas",
            "1/4 de xícara de castanha-do-pará",
            "1/4 de xícara de coco ralado",
            "1/4 de xícara de passas",
            "1/4 de xícara de cranberries secas",
            "2 colheres de sopa de mel",
            "1 colher de sopa de óleo de coco",
            "1 colher de chá de canela em pó",
            "1 colher de chá de essência de baunilha"
        ],
        instructions: [
            "Pré-aqueça o forno a 160°C.",
            "Em uma tigela grande, misture os flocos de milho, os flocos de arroz, as amêndoas, as castanhas-do-pará e o coco ralado.",
            "Em uma panela pequena, aqueça o mel e o óleo de coco até ficarem bem misturados.",
            "Adicione a canela e a essência de baunilha ao mel e misture bem.",
            "Despeje a mistura líquida sobre os ingredientes secos na tigela e mexa bem para que todos os ingredientes fiquem bem envolvidos no mel.",
            "Espalhe o cereal em uma assadeira forrada com papel manteiga.",
            "Asse o cereal no forno por cerca de 20 a 25 minutos, mexendo ocasionalmente para dourar por igual.",
            "Retire do forno e deixe esfriar completamente.",
            "Adicione as passas e as cranberries secas ao cereal e misture.",
            "Armazene o cereal matinal caseiro em um recipiente hermético.",
            "Sirva com leite, iogurte ou frutas frescas.",
            "Bom apetite!"
        ],
        imageUrl: "https://www.wikihow.com/images/thumb/e/ed/Make-Your-Own-Homemade-Cereal-Step-2-Version-2.jpg/v4-728px-Make-Your-Own-Homemade-Cereal-Step-2-Version-2.jpg"
    }
=======
	{
		id: 1,
		category: ['Receitas Básicas'],
		title: 'Bolo de Chocolate',
		ingredients: [
			'3 ovos',
			'2 xícaras de farinha de trigo',
			'1 xícara de açúcar',
			'1 xícara de leite',
			'1/2 xícara de cacau em pó',
			'1 colher de sopa de fermento em pó',
			'1 colher de chá de essência de baunilha',
		],
		instructions: [
			'Pré-aqueça o forno a 180°C e unte uma forma redonda.',
			'Em uma tigela, bata os ovos e o açúcar até obter uma mistura homogênea.',
			'Adicione o leite e a essência de baunilha, e continue batendo.',
			'Incorpore a farinha de trigo, o cacau em pó e o fermento em pó, misturando bem.',
			'Despeje a massa na forma e leve ao forno por aproximadamente 40 minutos.',
			'Espere esfriar, desenforme e sirva!',
		],
		imageUrl:
			'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.tudogostoso.com.br%2Freceita%2F309779-bolo-de-chocolate-simples.html&psig=AOvVaw3nzAqansOC2n8pc-wlGMrc&ust=1690663296185000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCMDFs92hsoADFQAAAAAdAAAAABAD',
	},
	{
		id: 2,
		category: ['Receitas Básicas'],
		title: 'Arroz Branco',
		ingredients: [
			'1 xícara de arroz',
			'2 xícaras de água',
			'1 colher de sopa de óleo',
			'Sal a gosto',
		],
		instructions: [
			'Lave o arroz em água corrente e escorra.',
			'Em uma panela, aqueça o óleo e adicione o arroz, refogando por alguns minutos.',
			'Adicione a água fervente e o sal, mexendo rapidamente.',
			'Abaixe o fogo, tampe a panela e cozinhe por cerca de 15 minutos ou até a água secar.',
			'Desligue o fogo, deixe a panela tampada por mais alguns minutos e depois solte o arroz com um garfo.',
			'Seu arroz branco está pronto para ser servido!',
		],
		imageUrl:
			'https://static.itdg.com.br/images/1200-630/21fd76be3b29c3290859eda5220e0e32/323683-original.jpg',
	},
	{
		id: 3,
		category: ['Bolos'],
		title: 'Bolo de Cenoura',
		ingredients: [
			'3 cenouras médias',
			'3 ovos',
			'1 xícara de óleo',
			'2 xícaras de açúcar',
			'2 xícaras de farinha de trigo',
			'1 colher de sopa de fermento em pó',
		],
		instructions: [
			'Pré-aqueça o forno a 180°C e unte uma forma retangular.',
			'No liquidificador, bata as cenouras, os ovos e o óleo até obter uma mistura homogênea.',
			'Em uma tigela, misture o açúcar, a farinha de trigo e o fermento em pó.',
			'Adicione a mistura do liquidificador aos ingredientes secos, mexendo bem até formar uma massa uniforme.',
			'Despeje a massa na forma e leve ao forno por aproximadamente 40 minutos.',
			'Espere esfriar, corte em pedaços e sirva.',
		],
		imageUrl:
			'https://www.google.com/url?sa=i&url=https%3A%2F%2Faquelareceita.com.br%2Fbolo-de-cenoura&psig=AOvVaw1yg5WzWqfWm22D-8EgnWtL&ust=1690662960278000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCOD4yLugsoADFQAAAAAdAAAAABAD',
	},
	{
		id: 4,
		category: ['Bolos'],
		title: 'Bolo de Laranja',
		ingredients: [
			'3 laranjas médias',
			'3 ovos',
			'1 xícara de óleo',
			'2 xícaras de açúcar',
			'2 xícaras de farinha de trigo',
			'1 colher de sopa de fermento em pó',
		],
		instructions: [
			'Pré-aqueça o forno a 180°C e unte uma forma redonda.',
			'No liquidificador, bata as laranjas (com casca e sem sementes), os ovos e o óleo até obter uma mistura homogênea.',
			'Em uma tigela, misture o açúcar, a farinha de trigo e o fermento em pó.',
			'Adicione a mistura do liquidificador aos ingredientes secos, mexendo bem até formar uma massa uniforme.',
			'Despeje a massa na forma e leve ao forno por aproximadamente 40 minutos.',
			'Espere esfriar, desenforme e sirva este delicioso bolo de laranja!',
		],
		imageUrl:
			'https://s2-receitas.glbimg.com/F9dgqtXN9uu_YJvp8uV48PEnhBU=/0x0:1280x800/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_1f540e0b94d8437dbbc39d567a1dee68/internal_photos/bs/2021/N/d/zEcoFRSqGbrt3F6uWpBQ/bolo-de-laranja-com-calda.jpg',
	},
	{
		id: 5,
		category: ['Sobremesas'],
		title: 'Pudim de Leite Condensado',
		ingredients: [
			'1 lata de leite condensado',
			'2 latas de leite (utilize a lata de leite condensado como medida)',
			'3 ovos',
			'1 colher de chá de essência de baunilha',
			'1 xícara de açúcar para a calda',
		],
		instructions: [
			'Preaqueça o forno a 180°C.',
			'Para a calda, em uma forma de pudim, derreta o açúcar em fogo baixo até caramelizar.',
			'Espalhe a calda caramelizada por toda a forma.',
			'No liquidificador, bata o leite condensado, o leite, os ovos e a essência de baunilha até obter uma mistura homogênea.',
			'Despeje a mistura na forma caramelizada.',
			'Cubra a forma com papel-alumínio e leve ao forno em banho-maria por aproximadamente 1 hora.',
			'Após assar, deixe o pudim esfriar completamente antes de desenformar.',
			'Leve à geladeira por algumas horas antes de servir.',
			'Desenforme e sirva o delicioso pudim de leite condensado!',
		],
		imageUrl:
			'https://s2-receitas.glbimg.com/HctHo16M3HQO8TT7sL3fwFcniwM=/0x0:984x765/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_1f540e0b94d8437dbbc39d567a1dee68/internal_photos/bs/2020/D/m/r8XAmWTcuRAzTRMBJZ1A/pudim-de-leite-condensado.jpg',
	},
	{
		id: 6,
		category: ['Sobremesas'],
		title: 'Torta de Limão',
		ingredients: [
			'1 pacote de bolacha maisena',
			'100g de manteiga derretida',
			'1 lata de leite condensado',
			'1 caixa de creme de leite',
			'Suco de 3 limões',
			'Raspas de limão para decorar',
		],
		instructions: [
			'No liquidificador, triture a bolacha maisena até formar uma farofa.',
			'Em uma tigela, misture a bolacha triturada com a manteiga derretida até obter uma massa homogênea.',
			'Forre o fundo de uma forma de torta com a massa, pressionando bem para compactar.',
			'Leve à geladeira por 15 minutos para a massa firmar.',
			'Enquanto isso, no liquidificador, bata o leite condensado, o creme de leite e o suco de limão até formar um creme.',
			'Despeje o creme sobre a massa na forma.',
			'Leve à geladeira por pelo menos 2 horas para a torta ganhar consistência.',
			'Antes de servir, decore a torta com raspas de limão.',
			'Sua irresistível torta de limão está pronta para ser saboreada!',
		],
		imageUrl:
			'https://s2-receitas.glbimg.com/y75X43YL0a3rJz3Pguil8rlSAaM=/0x0:1280x800/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_1f540e0b94d8437dbbc39d567a1dee68/internal_photos/bs/2021/S/L/J3y2iFRNigmIEYBd1awA/torta-de-limao-receita-2.jpg',
	},
	{
		id: 7,
		category: ['Carnes'],
		title: 'Strogonoff de Frango',
		ingredients: [
			'500g de peito de frango em cubos',
			'1 cebola picada',
			'2 dentes de alho picados',
			'1 colher de sopa de manteiga',
			'1 colher de sopa de óleo',
			'1 lata de creme de leite',
			'1 colher de sopa de mostarda',
			'1 colher de sopa de ketchup',
			'Sal e pimenta a gosto',
		],
		instructions: [
			'Em uma panela, aqueça a manteiga e o óleo e refogue a cebola e o alho até dourarem.',
			'Adicione o frango e refogue até ficar bem cozido.',
			'Tempere com sal e pimenta a gosto.',
			'Acrescente a mostarda e o ketchup, mexendo bem.',
			'Desligue o fogo e adicione o creme de leite, misturando até incorporar.',
			'Sirva o strogonoff de frango acompanhado de arroz branco e batata palha.',
			'Bom apetite!',
		],
		imageUrl:
			'https://cdn0.tudoreceitas.com/pt/posts/6/8/8/strogonoff_de_frango_simples_9886_600.webp',
	},
	{
		id: 8,
		category: ['Carnes'],
		title: 'Carne de Panela com Batatas',
		ingredients: [
			'500g de carne bovina (coxão mole, patinho, etc.) em cubos',
			'2 batatas grandes cortadas em rodelas',
			'1 cebola picada',
			'2 dentes de alho picados',
			'2 tomates picados',
			'2 colheres de sopa de óleo',
			'2 colheres de sopa de extrato de tomate',
			'2 xícaras de água quente',
			'Sal e pimenta a gosto',
			'Salsinha picada para decorar',
		],
		instructions: [
			'Em uma panela de pressão, aqueça o óleo e refogue a cebola e o alho até dourarem.',
			'Acrescente a carne e deixe dourar por alguns minutos.',
			'Adicione os tomates, o extrato de tomate, o sal e a pimenta, mexendo bem.',
			'Coloque a água quente na panela, tampe e cozinhe por cerca de 20 minutos após pegar pressão.',
			'Desligue o fogo, aguarde sair toda a pressão e abra a panela.',
			'Adicione as batatas em rodelas à carne na panela e cozinhe por mais 10 minutos ou até as batatas ficarem macias.',
			'Transfira a carne de panela com batatas para um prato de servir e decore com salsinha picada.',
			'Sirva acompanhado de arroz branco e salada verde.',
			'Bom apetite!',
		],
		imageUrl:
			'https://img.cybercook.com.br/receitas/477/carne-de-panela-com-batata-1-840x480.jpeg?q=75',
	},
	{
		id: 9,
		category: ['Legumes'],
		title: 'Sopa de Abóbora',
		ingredients: [
			'1 abóbora média descascada e cortada em cubos',
			'1 cebola picada',
			'2 dentes de alho picados',
			'2 batatas médias descascadas e cortadas em cubos',
			'4 xícaras de caldo de legumes',
			'1 xícara de leite de coco',
			'1 colher de sopa de azeite',
			'Sal e pimenta a gosto',
			'Coentro ou salsinha picada para decorar',
		],
		instructions: [
			'Em uma panela grande, aqueça o azeite e refogue a cebola e o alho até dourarem.',
			'Adicione a abóbora e as batatas, e refogue por alguns minutos.',
			'Despeje o caldo de legumes na panela e deixe cozinhar até que os legumes fiquem macios.',
			'Use um liquidificador ou mixer de mão para bater os legumes até obter um creme.',
			'Volte o creme à panela, adicione o leite de coco e mexa bem.',
			'Tempere com sal e pimenta a gosto.',
			'Aqueça a sopa por mais alguns minutos.',
			'Sirva a sopa de abóbora em tigelas individuais e decore com coentro ou salsinha picada.',
			'Bom apetite!',
		],
		imageUrl: 'https://i.panelinha.com.br/i1/64-bk-2040-sopa-de-abobora.webp',
	},
	{
		id: 10,
		category: ['Legumes'],
		title: 'Legumes Assados com Ervas',
		ingredients: [
			'2 cenouras cortadas em rodelas',
			'2 abobrinhas cortadas em cubos',
			'1 pimentão vermelho cortado em tiras',
			'1 pimentão amarelo cortado em tiras',
			'1 cebola roxa cortada em gomos',
			'3 colheres de sopa de azeite',
			'2 colheres de sopa de ervas frescas picadas (salsa, tomilho, alecrim, etc.)',
			'Sal e pimenta a gosto',
		],
		instructions: [
			'Pré-aqueça o forno a 200°C.',
			'Em uma tigela grande, misture todos os legumes com o azeite e as ervas frescas.',
			'Tempere com sal e pimenta a gosto e misture bem.',
			'Espalhe os legumes em uma assadeira grande.',
			'Asse no forno por cerca de 30 minutos ou até que fiquem dourados e macios.',
			'Retire do forno e sirva os legumes assados como acompanhamento ou prato principal.',
			'Bom apetite!',
		],
		imageUrl:
			'https://www.comidaereceitas.com.br/wp-content/uploads/2010/04/Legumes-assados-com-ervas-freepik-780x517.jpg',
	},
	{
		id: 11,
		category: ['Saladas'],
		title: 'Salada Caprese',
		ingredients: [
			'3 tomates maduros em rodelas',
			'200g de queijo mussarela de búfala em rodelas',
			'Folhas de manjericão fresco',
			'Azeite de oliva extravirgem',
			'Vinagre balsâmico reduzido',
			'Sal e pimenta a gosto',
		],
		instructions: [
			'Em um prato de servir, alterne as rodelas de tomate e de queijo mussarela.',
			'Disponha as folhas de manjericão fresco por cima da salada.',
			'Regue com azeite de oliva extravirgem e vinagre balsâmico reduzido a gosto.',
			'Tempere com sal e pimenta a gosto.',
			'Deixe a salada descansar por alguns minutos antes de servir.',
			'Sirva a deliciosa salada Caprese como entrada ou acompanhamento.',
			'Bom apetite!',
		],
		imageUrl:
			'https://img.cybercook.com.br/receitas/210/salada-caprese-2-840x480.jpeg?q=75',
	},
	{
		id: 12,
		category: ['Saladas'],
		title: 'Salada de Grão de Bico com Tomate e Pepino',
		ingredients: [
			'1 lata de grão de bico cozido',
			'1 pepino em cubos',
			'2 tomates médios em cubos',
			'1/2 cebola roxa em fatias finas',
			'1/4 de xícara de azeitonas pretas fatiadas',
			'2 colheres de sopa de suco de limão',
			'3 colheres de sopa de azeite',
			'1 dente de alho picado',
			'1 colher de chá de cominho em pó',
			'Salsinha picada a gosto',
			'Sal e pimenta a gosto',
		],
		instructions: [
			'Em uma tigela grande, misture o grão de bico, o pepino, o tomate, a cebola e as azeitonas.',
			'Em um pote com tampa, misture o suco de limão, o azeite, o alho picado, o cominho, o sal e a pimenta.',
			'Tampe o pote e agite bem para formar o molho.',
			'Regue a salada com o molho e misture bem para incorporar os sabores.',
			'Polvilhe salsinha picada por cima da salada.',
			'Sirva a salada de grão de bico com tomate e pepino como acompanhamento ou prato principal.',
			'Bom apetite!',
		],
		imageUrl:
			'https://claudia.abril.com.br/wp-content/uploads/2020/02/salada-grao-de-bico.jpg?quality=85',
	},
	{
		id: 13,
		category: ['Sopas'],
		title: 'Caldo Verde',
		ingredients: [
			'4 batatas grandes em rodelas',
			'1 cebola picada',
			'2 dentes de alho picados',
			'1 linguiça calabresa em rodelas finas',
			'1 maço de couve fatiada',
			'2 colheres de sopa de azeite',
			'1 litro de caldo de legumes',
			'Sal a gosto',
		],
		instructions: [
			'Em uma panela grande, aqueça o azeite e refogue a cebola e o alho até dourarem.',
			'Adicione as batatas e refogue por alguns minutos.',
			'Despeje o caldo de legumes na panela e deixe as batatas cozinharem até ficarem macias.',
			'Com um mixer de mão ou liquidificador, bata as batatas e o caldo até obter um creme.',
			'Volte o creme à panela e acrescente a linguiça calabresa.',
			'Deixe cozinhar por mais alguns minutos.',
			'Adicione a couve fatiada à sopa e deixe cozinhar por mais 5 minutos.',
			'Tempere com sal a gosto.',
			'Sirva o delicioso caldo verde bem quente.',
			'Bom apetite!',
		],
		imageUrl:
			'https://vovopalmirinha.com.br/wp-content/uploads/2019/06/receitas-vovo-palmirinha-caldo-verde-702x336.jpg',
	},
	{
		id: 14,
		category: ['Sopas'],
		title: 'Sopa de Tomate com Manjericão',
		ingredients: [
			'1 kg de tomates maduros sem pele e sementes',
			'1 cebola picada',
			'2 dentes de alho picados',
			'2 colheres de sopa de azeite',
			'1 litro de caldo de legumes',
			'1 maço de manjericão fresco',
			'1 colher de sopa de açúcar',
			'Sal e pimenta a gosto',
		],
		instructions: [
			'Em uma panela grande, aqueça o azeite e refogue a cebola e o alho até dourarem.',
			'Adicione os tomates picados e refogue por alguns minutos.',
			'Despeje o caldo de legumes na panela e deixe os tomates cozinharem até ficarem bem macios.',
			'Com um mixer de mão ou liquidificador, bata os tomates e o caldo até obter um creme.',
			'Volte o creme à panela e adicione as folhas de manjericão.',
			'Tempere com açúcar, sal e pimenta a gosto.',
			'Deixe a sopa cozinhar por mais alguns minutos.',
			'Sirva a sopa de tomate com manjericão bem quente.',
			'Bom apetite!',
		],
		imageUrl:
			'https://img.cybercook.com.br/receitas/997/sopa-de-tomate-com-manjericao-2-840x480.jpeg?q=75',
	},
	{
		id: 15,
		category: ['Ovos e Laticínios'],
		title: 'Omelete de Queijo e Tomate',
		ingredients: [
			'3 ovos',
			'2 colheres de sopa de leite',
			'1/2 xícara de queijo muçarela ralado',
			'1 tomate picado',
			'1 colher de sopa de manteiga',
			'Sal e pimenta a gosto',
			'Salsinha picada para decorar',
		],
		instructions: [
			'Em uma tigela, bata os ovos com o leite e tempere com sal e pimenta a gosto.',
			'Aqueça a manteiga em uma frigideira antiaderente.',
			'Despeje os ovos batidos na frigideira e espalhe bem.',
			'Quando a omelete começar a firmar, adicione o queijo e o tomate picado em uma das metades.',
			'Dobre a omelete ao meio, cobrindo o recheio de queijo e tomate.',
			'Deixe cozinhar por mais alguns minutos até o queijo derreter.',
			'Polvilhe salsinha picada por cima da omelete antes de servir.',
			'Sirva a omelete de queijo e tomate quentinha e deliciosa!',
			'Bom apetite!',
		],
		imageUrl:
			'https://www.kitano.com.br/wp-content/uploads/2019/07/SSP_1993-Omelete-de-pizza-mussarela-ore%E2%95%A0%C3%BCgano-e-tomate.jpg',
	},
	{
		id: 16,
		category: ['Ovos e Laticínios'],
		title: 'Panquecas Americanas',
		ingredients: [
			'1 xícara de farinha de trigo',
			'1 colher de sopa de açúcar',
			'1 colher de chá de fermento em pó',
			'1/2 colher de chá de bicarbonato de sódio',
			'1/4 colher de chá de sal',
			'3/4 de xícara de leite',
			'1 ovo',
			'2 colheres de sopa de manteiga derretida',
			'Óleo para untar a frigideira',
		],
		instructions: [
			'Em uma tigela, misture a farinha, o açúcar, o fermento, o bicarbonato e o sal.',
			'Em outra tigela, bata o leite, o ovo e a manteiga derretida.',
			'Despeje a mistura líquida sobre a mistura de ingredientes secos e mexa até obter uma massa homogênea.',
			'Aqueça uma frigideira antiaderente untada com um pouco de óleo.',
			'Com uma concha, despeje pequenas porções da massa na frigideira.',
			'Cozinhe cada panqueca por cerca de 2 minutos de cada lado, ou até dourar.',
			'Repita o processo até terminar toda a massa.',
			'Sirva as panquecas americanas ainda quentinhas com mel, maple syrup, ou a cobertura de sua preferência.',
			'Bom apetite!',
		],
		imageUrl:
			'https://panelaterapia.com/wp-content/uploads/2016/11/panqueca.png',
	},
	{
		id: 17,
		category: ['Cereais'],
		title: 'Granola Caseira',
		ingredients: [
			'2 xícaras de aveia em flocos',
			'1/2 xícara de amêndoas picadas',
			'1/2 xícara de castanha de caju picada',
			'1/2 xícara de coco ralado',
			'1/4 de xícara de mel',
			'2 colheres de sopa de óleo de coco derretido',
			'1 colher de chá de extrato de baunilha',
			'1/2 xícara de frutas secas (uvas-passas, cranberries, etc.)',
		],
		instructions: [
			'Pré-aqueça o forno a 160°C.',
			'Em uma tigela grande, misture a aveia, as amêndoas, as castanhas de caju e o coco ralado.',
			'Em uma outra tigela, misture o mel, o óleo de coco e o extrato de baunilha.',
			'Despeje a mistura líquida sobre os ingredientes secos e mexa bem para que todos os ingredientes fiquem bem incorporados.',
			'Espalhe a granola em uma assadeira forrada com papel manteiga.',
			'Asse a granola no forno por cerca de 25 a 30 minutos, mexendo ocasionalmente para dourar por igual.',
			'Retire do forno e deixe esfriar completamente.',
			'Adicione as frutas secas à granola e misture.',
			'Guarde a granola caseira em um recipiente hermético para manter a crocância.',
			'Sirva com iogurte, leite ou frutas frescas.',
			'Bom apetite!',
		],
		imageUrl:
			'https://www.plantte.com/wp-content/uploads/2021/02/granola-caseira-2-1152x1536.jpg',
	},
	{
		id: 18,
		category: ['Cereais'],
		title: 'Cereal Matinal Caseiro',
		ingredients: [
			'2 xícaras de flocos de milho',
			'1/2 xícara de flocos de arroz',
			'1/4 de xícara de amêndoas',
			'1/4 de xícara de castanha-do-pará',
			'1/4 de xícara de coco ralado',
			'1/4 de xícara de passas',
			'1/4 de xícara de cranberries secas',
			'2 colheres de sopa de mel',
			'1 colher de sopa de óleo de coco',
			'1 colher de chá de canela em pó',
			'1 colher de chá de essência de baunilha',
		],
		instructions: [
			'Pré-aqueça o forno a 160°C.',
			'Em uma tigela grande, misture os flocos de milho, os flocos de arroz, as amêndoas, as castanhas-do-pará e o coco ralado.',
			'Em uma panela pequena, aqueça o mel e o óleo de coco até ficarem bem misturados.',
			'Adicione a canela e a essência de baunilha ao mel e misture bem.',
			'Despeje a mistura líquida sobre os ingredientes secos na tigela e mexa bem para que todos os ingredientes fiquem bem envolvidos no mel.',
			'Espalhe o cereal em uma assadeira forrada com papel manteiga.',
			'Asse o cereal no forno por cerca de 20 a 25 minutos, mexendo ocasionalmente para dourar por igual.',
			'Retire do forno e deixe esfriar completamente.',
			'Adicione as passas e as cranberries secas ao cereal e misture.',
			'Armazene o cereal matinal caseiro em um recipiente hermético.',
			'Sirva com leite, iogurte ou frutas frescas.',
			'Bom apetite!',
		],
		imageUrl:
			'https://www.wikihow.com/images/thumb/e/ed/Make-Your-Own-Homemade-Cereal-Step-2-Version-2.jpg/v4-728px-Make-Your-Own-Homemade-Cereal-Step-2-Version-2.jpg',
	}
]
