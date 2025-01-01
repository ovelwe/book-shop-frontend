export const categories = [
	{
		name: "Романы",
	},
	{
		name: "Триллеры",
	},
	{
		name: "Детективы",
	},
	{
		name: "Фэнтези",
	},
	{
		name: "Реализм",
	},
	{
		name: "Комиксы",
	},
	{
		name: "Психология",
	},
	{
		name: "Современная Проза",
	},
];

export const authors = [
	{
		name: "Элизабет Гилберт",
	},
	{
		name: "Ник Вуйчич",
	},
	{
		name: "Джаннетт Уоллс",
	},
	{
		name: "Дженнифер Уорф",
	},
	{
		name: "Мршавко Штапич",
	},
	{
		name: "Грегори Робертс",
	},
	{
		name: "Франческа Джанноне",
	},
	{
		name: "Грэм Робертс",
	},
	{
		name: "Иван Путилин",
	},
	{
		name: "Шон Байтелл",
	},
	{
		name: "Дэн Миллмэн",
	},
	{
		name: "Лиза Си",
	},
	{
		name: "Адриана Трижиани",
	},
	{
		name: "Тэнло Вэйчжи",
	},
	{
		name: "Кэтрин Стокетт",
	},
	{
		name: "Маркус Зусак",
	},
	{
		name: "Кристин Ханна",
	},
	{
		name: "Гарсиа Маркес Г.",
	},
	{
		name: "Кортасар Х.",
	},
].map((obj, index) => ({ id: index + 1, ...obj }));

export const books = [
	{
		name: "Шантарам",
		imageUrl:
			"https://content.img-gorod.ru/pim/products/images/36/28/018f5cba-155b-7131-af0f-af3bb4bd3628.jpg?width=200&height=280&fit=bounds",
		price: 1200,
		categoryId: 1,
		authorIds: [8, 6],
		description:
			"Представляем читателю один из самых поразительных романов начала XXI века. Эта преломленная в художественной форме исповедь человека, который сумел выбраться из бездны и уцелеть, протаранила все списки бестселлеров и заслужила восторженные сравнения с произведениями лучших писателей Нового времени, от Мелвилла до Хемингуэя. Подобно автору, герой этого романа много лет скрывался от закона. Лишенный после развода с женой родительских прав, он пристрастился к наркотикам, совершил ряд ограблений и был приговорен австралийским судом к девятнадцати годам заключения. Бежав на второй год из тюрьмы строгого режима, он добрался до Бомбея, где был фальшивомонетчиком и контрабандистом, торговал оружием и участвовал в разборках индийской мафии, а также нашел свою настоящую любовь, чтобы вновь потерять ее, чтобы снова найти...",
	},
	{
		name: "Почтальонша",
		imageUrl:
			"https://content.img-gorod.ru/pim/products/images/d6/9c/0193221c-3250-7527-9a2f-5dbcb7f7d69c.jpg?width=200&height=280&fit=bounds",
		price: 1500,
		categoryId: 8,
		authorIds: [7],
		description:
			"Роман основан на истории прабабушки автора, в нем рассказывается о жизни Анны — молодой женщины с севера Италии, в 1934 году переехавшей вместе с семьей на юг страны, на родину мужа. Став первой женщиной-почтальоном в Лиццанелло, Анна бросает вызов патриархальным устоям общества. Более 20 лет, сначала пешком, а затем на велосипеде, она доставляет жителям важную корреспонденцию — это и письма солдат с фронта, и открытки от тех, кто навсегда покинул Италию, и послания тайных любовников. Анна читает письма неграмотным и даже учит их читать и писать. Сама того не замечая, смелая «чужачка» с севера многое изменит в южном городке и серьезно повлияет на положение женщин в нем.",
	},
	{
		name: "Добро не оставляйте на потом",
		imageUrl:
			"https://content.img-gorod.ru/pim/products/images/80/72/01925450-e6f4-7bd6-a197-1742bcb88072.jpg?width=200&height=280&fit=bounds",
		price: 800,
		categoryId: 1,
		authorIds: [13],
		description:
			"Матильда, матриарх семьи Кабрелли, с юности была резкой и уверенной в себе. Но она никогда не рассказывала родным об истории своей матери. На закате жизни она понимает, что время пришло и история незаурядной женщины, какой была ее мать Доменика, не должна уйти в небытие...",
	},
	{
		name: "Светлый пепел луны. Книга 1",
		imageUrl:
			"https://content.img-gorod.ru/pim/products/images/b0/c7/019366f4-102d-78f1-b925-9e85c57cb0c7.jpg?width=200&height=280&fit=bounds",
		price: 850,
		categoryId: 1,
		authorIds: [14],
		description:
			"Во всех мирах царит хаос: жестокий повелитель демонов уничтожил небожителей и совершенствующихся, оставшиеся в живых вынуждены прятаться. Старейшины секты Хэнъян решают отправить в прошлое Ли Сусу — дочь главы, чтобы она нашла будущего повелителя демонов и уничтожила его. Девушка перемещается на пятьсот лет назад и занимает тело Е Сиу — любимой дочери прославленного генерала. Каково же было её удивление, когда оказалось, что будущий повелитель демонов, Таньтай Цзинь, — её муж! Какие страшные тайны его прошлого узнает Сусу?",
	},
	{
		name: "Смерть заберет с собой осень",
		imageUrl:
			"https://content.img-gorod.ru/pim/products/images/98/21/019342c7-b6be-7f3d-ace7-bc0ee07d9821.jpg?width=200&height=280&fit=bounds",
		price: 480,
		categoryId: 1,
		authorIds: [15],
		description:
			"Хагивара Акира, двадцатилетний студент Токийского университета, смертельно болен. У него есть учеба, друзья, любящие родители... и вечно преследующее его чувство безысходности. Когда он решает покончить со всем и отправляется на железнодорожную станцию, его спасает незнакомец. Но как только Акира пытается забыть этот инцидент, спаситель вновь появляется в его жизни — чтобы помочь принять себя и будущее. Акира не понимает, чем заслужил эту помощь. Особенно когда выясняет: спасший его зимним вечером незнакомец — вовсе не человек...",
	},
	{
		name: "Прислуга",
		imageUrl:
			"https://s1.livelib.ru/boocover/1001569364/200x305/bdff/boocover.jpg",
		price: 550,
		categoryId: 8,
		authorIds: [16],
		description:
			"Американский Юг, на дворе 1960-е годы. Скитер только-только закончила университет и возвращается домой, в сонный городок Джексон, где никогда ничего не происходит. Она мечтает стать писательницей, вырваться в большой мир. Но приличной девушке с Юга не пристало тешиться столь глупыми иллюзиями, приличной девушке следует выйти замуж и хлопотать по дому. Мудрая Эйбилин на тридцать лет старше Скитер, она прислуживает в домах белых всю свою жизнь, вынянчила семнадцать детей и давно уже ничего не ждет от жизни, ибо сердце ее разбито после смерти единственного сына. Минни - самая лучшая стряпуха во всем Джексоне, а еще она самая дерзкая служанка в городе. И острый язык не раз уже сослужил ей плохую службу. На одном месте Минни никогда подолгу не задерживается. Но с Минни лучше не связываться даже самым высокомерным белым дамочкам. Двух черных служанок и белую неопытную девушку объединяет одно - обостренное чувство справедливости и желание хоть как-то изменить порядок вещей. Смогут ли эти трое противостоять целому миру? Сумеют ли они выжить в этой борьбе? В 2011 году роман был экранизирован, и фильм Прислуга стал одним из главных событий киносезона 2011-2012, номинирован на 4 премии Оскар и очень тепло принят зрителями. Сценарий написала сама Кэтрин Стокетт, а снял фильм режиссер Тэйт Тейлор.",
	},
	{
		name: "Книжный вор",
		imageUrl:
			"https://s1.livelib.ru/boocover/1010774984/200x305/deea/boocover.jpg",
		price: 700,
		categoryId: 8,
		authorIds: [17],
		description:
			"Январь 1939 года. Германия. Страна, затаившая дыхание. Никогда еще у смерти не было столько работы. А будет еще больше. Мать везет девятилетнюю Лизель Мемингер и ее младшего брата к приемным родителям под Мюнхен, потому что их отца больше нет - его унесло дыханием чужого и странного слова коммунист, и в глазах матери девочка видит страх перед такой же судьбой. В дороге смерть навещает мальчика и впервые замечает Лизель. Так девочка оказывается на Химмель-штрассе - Небесной улице. Кто бы ни придумал это название, у него имелось здоровое чувство юмора. Не то чтобы там была сущая преисподняя. Нет. Но и никак не рай. Книжный вор - недлинная история, в которой, среди прочего, говорится: об одной девочке; о разных словах; об аккордианисте; о разных фанатичных немцах; о еврейском драчуне; и о множестве краж. Это книга о силе слов и способности книг вскармливать душу.",
	},
	{
		name: "Соловей",
		imageUrl:
			"https://s1.livelib.ru/boocover/1001514718/200x305/9b7b/boocover.jpg",
		price: 1900,
		categoryId: 8,
		authorIds: [17],
		description:
			"Главный мировой бестселлер 2015-2016. Франция, 1939. В уютной и сонной деревушке Карриво Вианна Мориак прощается с мужем, который уходит воевать с немцами. Она не верит, что нацисты вторгнутся во Францию.… Но уже вскоре они маршируют мимо ее дома, грохочут вереницы танков, небо едва видать от самолетов, сбрасывающих бомбы. Война пришла в тихую французскую глушь. Перед Вианной стоит выбор: или пустить на постой немецкого офицера, либо лишиться всего, возможно, и жизни. Изабель Мориак, мятежная и своенравная восемнадцатилетняя девчонка, полна решимости бороться с захватчиками. Безрассудная и рисковая, она готова на все, но отец вынуждает ее отправиться в деревню к старшей сестре. Угодив с остальными беженцами под немецкую бомбардировку, Изабель встречает посреди хаоса и смерти Гаэтона и влюбляется столь же безрассудно, как она делает все в этой жизни. Так начинается ее путь в Сопротивление. Она не оглядывается назад и не жалеет о своих поступках, снова и снова рискуя жизнью она спасает людей. Каждая из двух сестер, столь непохожие и характером, и судьбой, ведет собственную войну.",
	},
	{
		name: "Сто лет одиночества",
		imageUrl:
			"https://content.img-gorod.ru/pim/products/images/c4/10/018fa185-a611-7eea-8ee3-f9137877c410.jpg?width=608&height=867&fit=bounds",
		price: 2850,
		categoryId: 5,
		authorIds: [18],
		description:
			"«Сто лет одиночества» Габриэля Гарсия Маркеса – роман, сюжет которого нельзя пересказывать. Это произведение, которое нужно прочувствовать и пережить. Перед глазами читателя мелькают поколение за поколением из рода Буэндиа. Среди них – революционеры и лентяи, пылкие любовницы и скромные домохозяйки. Род Буэндиа разрастается вместе с небольшим городком Макондо и умирает вместе с ним. Книга Маркеса наполнена самыми разными событиями: военными действиями, инцестами, рождением детей, магией и чудесами. Этот динамичный калейдоскоп жизни порождает в читателе прямо противоположное ощущение плавного, неумолимого течения времени и чувство одиночества. Всеохватывающего и всепоглощающего одиночества, которым пронизана судьба каждого из героев.",
	},
	{
		name: "Игра в классики",
		imageUrl:
			"https://content.img-gorod.ru/pim/products/images/53/32/018fa155-fece-72e8-b408-a79b0b1b5332.jpg?width=608&height=867&fit=bounds",
		price: 1550,
		categoryId: 5,
		authorIds: [19],
		description:
			"Перед вами – Игра в классики. Книга, которую литературные критики традиционно сравнивают то с Игрой в бисер Германа Гессе, то с Улиссом Джеймса Джойса. Книга, считающаяся своеобразным эталоном магического реализма. Игра в классики. Текст в тексте. Роман, в котором мистические откровения подлежат жесткой классификации, а обычные события обретают глубинный, многоуровневый смысл. Книга, без которой не было бы не только Фаулза и Коэльо, но даже и позднего Маркеса!",
	},
];
