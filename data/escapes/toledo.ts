import type { Escape } from '@/types'

export const toledoEscape: Escape = {
  id: '1',
  slug: 'toledo',
  title: 'Toledo',
  subtitle: 'Una escapada muy fácil de hacer sin coche y de las que mejor aguantan un fin de semana corto',
  location: 'Toledo',
  departureCity: 'Madrid',
  alternativeDepartureCities: ['Barcelona', 'Valencia'],
  heroImage: '/images/escapadas/toledo/hero.png',
  heroImageAlt: 'Toledo - Vista panorámica de la ciudad medieval desde Mirador del Valle',
  category: 'cultura',
  tags: ['patrimonio', 'sin coche', 'tren', 'fin de semana', 'pareja', 'desde Madrid', 'escapada corta'],
  featured: true,
  shortDescription:
    'Toledo tiene una cosa muy buena: no te obliga a montar un viaje complicado para sentir que te has escapado de verdad. Llegas rápido, no necesitas coche y en poco espacio tienes una ciudad con bastante carácter, buenas vistas y suficiente fondo como para que una noche ya merezca la pena.',

  overview: {
    summary:
      'Toledo no necesita demasiada presentación, pero sí un pequeño aviso: no es una ciudad para ir corriendo. Funciona mejor cuando aceptas que no vas a verlo todo y te centras en hacer una versión buena del viaje. Tiene cuestas, el casco obliga a caminar y el gran error suele ser intentar meter demasiadas visitas como si fuera una excursión escolar con cronómetro.\n\nDicho eso, como escapada corta es muy difícil que decepcione. Desde Madrid sale casi sola, el tren lo pone muy fácil y la ciudad tiene el tamaño justo para que una noche ya sepa a viaje. Con dos noches es donde, para mí, realmente se disfruta. Y con tres solo la recomendaría si quieres tomártela con bastante calma o añadir un plan extra como Puy du Fou o una noche más tranquila de miradores, terraza y hotel con vistas.',
    bestFor: [
      'Parejas que quieren una escapada corta sin mucha logística',
      'Primera escapada sin coche desde Madrid',
      'Quien disfruta más paseando que tachando monumentos',
      'Viajes de 1 o 2 noches',
      'Gente que quiere un fin de semana fácil de organizar',
    ],
    lessRecommendedFor: [
      'Quien busque una ciudad plana y cómoda para caminar sin esfuerzo',
      'Quien quiera muchísima vida nocturna',
      'Quien prefiera un viaje muy centrado en compras o en hacer muchas cosas seguidas',
      'Quien se agobie si un casco histórico le obliga a caminar bastante',
    ],
    bestSeason:
      'Primavera y otoño son, sin darle muchas vueltas, las mejores épocas. Toledo es una ciudad que se vive mucho a pie y ahí el tiempo importa. En verano sigue siendo una escapada viable, pero el calor aprieta más de lo que parece sobre el papel y se nota en las cuestas, el empedrado y las horas centrales del día.',
    generalAdvice:
      'Yo no intentaría ver Toledo entera. Haría Catedral sí o sí, elegiría dos o tres visitas más como mucho y dejaría hueco para caminar sin rumbo fijo, asomarte a un mirador y cenar con calma. Es una ciudad que gana mucho cuando no la conviertes en una lista de tareas.',
  },

  quickSummary: {
    text:
      'Toledo es de las escapadas sin coche más fáciles y más agradecidas que puedes hacer desde Madrid. En una noche ya funciona, en dos noches está en su mejor versión y en tres solo compensa si quieres ir muy despacio o meter un plan adicional. La clave no es hacer más cosas, sino elegir mejor.',
    keys: [
      'Escapada muy buena para 1 o 2 noches',
      'Perfecta para hacer en tren',
      'Más disfrutable en primavera y otoño',
      'Dos noches es la duración más redonda',
    ],
  },

  durationVariants: [
    {
      nights: 1,
      title: 'Toledo en 1 noche: poco tiempo, pero suficiente para que merezca la pena',
      summary:
        'Toledo es una de esas pocas ciudades que se defienden muy bien incluso en 1 noche. No porque te dé tiempo a todo, sino porque la experiencia principal entra bien en ese formato: llegar, ver lo importante, pasear el casco, dormir dentro o muy cerca y disfrutar la ciudad cuando baja un poco el ritmo de la tarde. Si solo tienes una noche, no lo vería como un viaje recortado. Lo vería como una escapada corta, pero muy resultona.',
      forWhom: [
        'Quien sale desde Madrid y quiere algo fácil',
        'Quien solo tiene un finde muy apretado',
        'Quien quiere una ciudad bonita sin organizar demasiado',
        'Quien valora más el ambiente que acumular visitas',
      ],
      whatToDo:
        'Llegaría temprano, entraría en la Catedral, haría un paseo largo por el centro y la Judería, y dejaría la tarde para callejear sin demasiada obsesión. Si tienes energía, San Juan de los Reyes o Santo Tomé encajan muy bien. Si no, tampoco pasa nada: Toledo funciona incluso cuando la haces más ligera. La gracia está en que la ciudad se sienta completa, no en salir con la sensación de haber ganado una competición.',
      whatNotToDo:
        'No intentaría meter Alcázar, Catedral, pulsera, varios templos y miradores en el mismo día como si no hubiera cuestas ni colas. Tampoco mezclaría aquí un plan tipo Puy du Fou. En una noche, cuanto más limpio sea el viaje, mejor funciona.',
      verdict:
        'Una noche en Toledo da bastante juego. No es “la versión ideal”, pero sí una escapada muy defendible y de las que luego recuerdas mejor de lo que pensabas.',
      accommodations: [
        {
          name: 'Hotel Carlos V',
          description: 'Muy práctico si quieres llegar, dejar la maleta y estar ya dentro del plan.',
          whyItFits: 'Está junto al Alcázar y muy cerca de la Catedral, así que para una sola noche ahorra pasos y tiempo.',
          affiliateUrl: '#',
        },
        {
          name: 'Hotel Santa Isabel',
          description: 'Sencillo, agradable y con el plus de una terraza muy agradecida.',
          whyItFits: 'Funciona muy bien si buscas ubicación y un hotel sin complicaciones, pero con un punto especial.',
          affiliateUrl: '#',
        },
        {
          name: 'Hotel San Juan de los Reyes',
          description: 'Buena opción si prefieres dormir en la parte más agradable de la Judería.',
          whyItFits: 'La zona es muy buena para pasear y se siente algo más tranquila al final del día.',
          affiliateUrl: '#',
        },
      ],
      tip:
        'Si vas una sola noche, paga por estar bien situado. En Toledo eso suele compensar más que subir categoría de hotel.',
      ctaText: 'Ver alojamientos para 1 noche en Toledo',
    },
    {
      nights: 2,
      title: 'Toledo en 2 noches: la opción más equilibrada y, seguramente, la mejor',
      summary:
        'Si tuviera que recomendar una sola duración sin matices, diría dos noches. Ahí Toledo deja de sentirse como excursión con hotel y empieza a funcionar como escapada de verdad. Puedes entrar en varios sitios sin ir con la lengua fuera, comer con calma, salir de noche, repetir una zona que te haya gustado y volver con la sensación de haberla visto bastante bien sin llegar saturado.',
      forWhom: [
        'Primera visita a Toledo',
        'Parejas que quieren una escapada completa',
        'Quien quiere ver la ciudad sin correr',
        'Quien disfruta combinando paseos, patrimonio y un hotel bien elegido',
      ],
      whatToDo:
        'Primer día: llegada, Catedral, primeras vueltas por el casco y cena tranquila. Segundo día: Judería, San Juan de los Reyes, Santo Tomé o Santa María la Blanca según lo que más te apetezca, y hueco para miradores o una visita menos obvia. La iglesia de los Jesuitas encaja muy bien aquí por las vistas. Tercer medio día: desayuno largo, paseo corto y vuelta sin necesidad de salir disparado.',
      whatNotToDo:
        'No llenaría los dos días de entradas cerradas. Dos noches en Toledo funcionan precisamente porque te dejan margen para improvisar un poco, parar más de la cuenta o repetir una calle que te haya gustado. Si conviertes eso en un itinerario militar, pierde parte de la gracia.',
      verdict:
        'Para mí, esta es la duración buena. No porque sea la más larga razonable, sino porque es la que mejor equilibra tiempo, coste y sensación de viaje bien hecho.',
      accommodations: [
        {
          name: 'Hotel San Juan de los Reyes',
          description: 'Muy buena base para una Toledo más completa y más agradable de caminar.',
          whyItFits: 'Está en pleno antiguo barrio judío, bien conectado con lo más interesante y con una ubicación muy agradecida.',
          affiliateUrl: '#',
        },
        {
          name: 'Hacienda del Cardenal',
          description: 'Una opción más relajada, con más aire de escapada y menos sensación de hotel de paso.',
          whyItFits: 'Es una buena elección si quieres un punto más tranquilo sin irte demasiado lejos del casco.',
          affiliateUrl: '#',
        },
        {
          name: 'Hotel Santa Isabel',
          description: 'Sigue siendo una apuesta muy sensata si quieres centro y sencillez.',
          whyItFits: 'Su ubicación, la terraza y el tipo de estancia que ofrece encajan muy bien para dos noches.',
          affiliateUrl: '#',
        },
      ],
      tip:
        'Si vas dos noches, ya tiene sentido pagar entradas con más intención y seleccionar tres o cuatro visitas buenas en vez de una sola imprescindible.',
      ctaText: 'Ver escapadas de 2 noches en Toledo',
    },
    {
      nights: 3,
      title: 'Toledo en 3 noches: solo si quieres ir despacio o darle una segunda capa al viaje',
      summary:
        'Tres noches no son una mala idea, pero sí una idea más específica. No se las recomendaría a todo el mundo porque Toledo no necesita tanto tiempo para justificar el viaje. Ahora bien, si quieres bajar el ritmo de verdad, meter miradores, comidas largas, terrazas, hotel con vistas o incluso añadir Puy du Fou, entonces sí tiene sentido. Ya no estarías haciendo “más Toledo”, sino una escapada más calmada alrededor de Toledo.',
      forWhom: [
        'Quien quiere un viaje muy tranquilo',
        'Quien prefiere menos cambios y más tiempo en el hotel',
        'Quien quiere combinar Toledo ciudad con un plan adicional',
        'Quien valora más la experiencia completa que exprimir cada hora',
      ],
      whatToDo:
        'Día 1: llegada y primer contacto sin prisa. Día 2: casco histórico y monumentos principales. Día 3: ciudad con otro ritmo, miradores, compras pequeñas, algún museo menos típico o plan extra. Día 4: vuelta tranquila. En este formato sí me parece buena idea elegir mejor el hotel y darle más peso a la estancia, porque ya no todo gira en torno a exprimir el centro.',
      whatNotToDo:
        'No reservaría tres noches simplemente por pensar que “más siempre es mejor”. Si no vas a tomártelo con calma o a meter un plan añadido, probablemente acabarás con la sensación de que dos habrían bastado.',
      verdict:
        'Tres noches solo tienen sentido si buscas una versión más descansada del viaje o quieres sumar algo más a la ciudad. Si no, dos siguen siendo mejor compra.',
      accommodations: [
        {
          name: 'Parador de Toledo',
          description: 'La opción clara si quieres vistas y una estancia con más sensación de escapada.',
          whyItFits: 'Está fuera del casco y eso aquí es una ventaja si priorizas panorámica, terraza y una experiencia más reposada.',
          affiliateUrl: '#',
        },
        {
          name: 'Hacienda del Cardenal',
          description: 'Muy buena para una escapada con más calma sin renunciar del todo a la ciudad.',
          whyItFits: 'Tiene más aire de retiro corto y menos sensación de hotel puramente funcional.',
          affiliateUrl: '#',
        },
        {
          name: 'Eugenia de Montijo',
          description: 'Buena elección si buscas una estancia más cuidada dentro del centro.',
          whyItFits: 'Encaja cuando quieres dormir bien colocado sin que el hotel se sienta demasiado básico.',
          affiliateUrl: '#',
        },
      ],
      tip:
        'Si eliges tres noches, intenta que una parte del viaje la marque el hotel, las vistas o un plan complementario. Si no, el tercer día puede quedarse un poco flotando.',
      ctaText: 'Ver alojamientos para 3 noches en Toledo',
    },
  ],

  practical: {
    intro:
      'Toledo es cómoda de organizar, pero no tanto de recorrer como parece en un mapa. Ahí está la diferencia. La logística para llegar es fácil; moverse por el casco exige asumir cuestas, calles estrechas y un ritmo más lento del que imaginas cuando miras una ruta en pantalla.',
    items: [
      { label: 'Mejor salida habitual', value: 'Madrid' },
      { label: 'Transporte recomendado', value: 'Tren' },
      { label: 'Duración ideal', value: '2 noches' },
      { label: 'Tipo de viaje', value: 'Cultural, urbano y de paseo' },
      { label: 'Nivel de esfuerzo', value: 'Medio' },
      { label: 'Coche', value: 'No hace falta' },
    ],
    howToGetThere:
      'Desde Madrid, el tren es la forma más cómoda de hacer Toledo. Es rápido, sencillo y encaja especialmente bien con un viaje de 1 o 2 noches. El bus puede valer si buscas otra opción, pero en este destino el tren juega claramente a favor de la experiencia.',
    howToGetThereExtra:
      'Una vez allí, tocará caminar bastante. El centro se hace mejor andando y eso forma parte del encanto, pero conviene ir con calzado cómodo y no planear el día como si todo estuviera a cinco minutos reales. Hay buses urbanos para apoyar trayectos concretos, pero el viaje se vive sobre todo a pie.',
    budgetIntro:
      'Toledo no tiene por qué salir caro, pero tampoco es una escapada que convenga reservar a la ligera. El precio cambia bastante según dónde duermas y según si pagas entradas con cabeza o por impulso. En este destino, una mala reserva se nota más que en otros.',
    budgets: [
      {
        nights: 1,
        label: '1 noche',
        items: [
          { concept: 'Transporte', level: 'Bajo o medio' },
          { concept: 'Hotel', level: 'Medio' },
          { concept: 'Comidas', level: 'Medio' },
          { concept: 'Entradas', level: 'Bajo o medio' },
        ],
        summary: 'Es una escapada bastante asumible si reservas con algo de margen y no te pasas con el hotel.',
      },
      {
        nights: 2,
        label: '2 noches',
        items: [
          { concept: 'Transporte', level: 'Bajo o medio' },
          { concept: 'Hotel', level: 'Medio' },
          { concept: 'Comidas', level: 'Medio' },
          { concept: 'Entradas', level: 'Medio' },
        ],
        summary: 'Aquí es donde mejor se justifica el gasto porque el viaje ya se siente completo.',
      },
      {
        nights: 3,
        label: '3 noches',
        items: [
          { concept: 'Transporte', level: 'Sigue siendo sencillo' },
          { concept: 'Hotel', level: 'Puede subir bastante' },
          { concept: 'Comidas y extras', level: 'Medio o medio-alto' },
          { concept: 'Entradas', level: 'Variable' },
        ],
        summary: 'El presupuesto sube sobre todo si conviertes la escapada en algo más caprichoso o metes planes extra.',
      },
    ],
    ticketsText:
      'La Catedral es una visita muy recomendable y conviene tratarla como entrada aparte. Con la pulsera turística yo haría algo simple: si vas a entrar en varios monumentos, sí; si vas con el tiempo justo o solo quieres dos visitas fuertes, probablemente no.',
    ticketsTip:
      'La pulsera turística incluye siete monumentos y el ahorro aparece de verdad cuando haces varias entradas. Para una noche, no siempre compensa. Para dos, muchas veces sí.',
  },

  realExperience: {
    title: 'Lo que hace especial a Toledo',
    intro:
      'Toledo funciona por densidad histórica, no por tamaño. En pocas calles concentra capas romana, visigoda, islámica, judía, cristiana e imperial, con el Tajo, las murallas y el perfil monumental como hilo conductor de toda la visita.',
    officialReading:
      'La lectura institucional presenta Toledo como ciudad Patrimonio de la Humanidad y gran síntesis de más de dos milenios de historia, con un casco histórico muy amplio y una oferta monumental excepcional.',
    realTravelerReading:
      'El viajero suele disfrutar más cuando combina un gran interior, una ruta legible por la Judería o el entorno catedralicio y un cierre panorámico o gastronómico. Intentar verlo todo en una sola jornada rebaja mucho la experiencia.',
    honestVerdict:
      'Toledo merece muchísimo la pena, pero exige selección. Un día vale para una primera toma de contacto; una noche suele ser la fórmula óptima; dos noches solo compensan si pesan gastronomía, hotel, exposiciones o planes complementarios; tres noches no deben venderse como estándar.',
  },

  detailedItinerary: {
    title: 'Cómo organizar Toledo sin correr',
    intro:
      'Ritmo base recomendado: elegir 1 gran icono, 2 o 3 interiores secundarios como máximo y dejar espacio para caminar, comer y entender la topografía.',
    oneDayFromMadrid: {
      title: 'Si vas en el día',
      plan:
        'Salir temprano desde Madrid en tren, entrar al casco por el eje Zocodover-catedral, visitar un gran interior, bajar después hacia Judería con un segundo espacio elegido y rematar con comida y paseo exterior o mirador. Si quieres optimizar presupuesto, usar franjas gratuitas de museo o la Pulsera Turística en monumentos incluidos.',
      warning:
        'No intentes meter en el mismo día catedral, alcázar, dos sinagogas, museo, mirador, comida larga y compras. Toledo parece compacto, pero el desnivel, las colas y la fatiga visual penalizan mucho.',
    },
    oneNight: {
      title: 'Si duermes 1 noche',
      plan:
        'Día 1 para el núcleo monumental principal y una primera cena con calma. Día 2 para Judería, museo o mirador y salida sin prisa. Es la fórmula más equilibrada para una primera escapada cultural.',
      whyItWorks:
        'Añade una noche y una mañana útil sin inflar el número de entradas. Mejora mucho la experiencia respecto al viaje en el día porque elimina el reloj del regreso.',
    },
    twoNights: {
      title: 'Si duermes 2 noches',
      plan:
        'Usar el segundo día para una comida larga, una ruta temática, una exposición temporal, un buen restaurante o un plan complementario como Puy du Fou. Mantener la tercera mañana solo como cierre suave.',
      whyItWorks:
        'La segunda noche compensa cuando el viaje no es solo ver monumentos, sino disfrutar de gastronomía, hotel, temporada o un ritmo pausado.',
    },
    threeNights: {
      title: 'Si duermes 3 noches',
      plan:
        'Solo tiene sentido si el hotel, el descanso, la alta gastronomía, el VIII Centenario, Puy du Fou o un enfoque temático justifican convertir Toledo en base y no en simple escapada express.',
      warning:
        'No vender 3 noches como estándar. Para una primera visita generalista suele sobrar, salvo que el descanso o la agenda especial pesen tanto como el patrimonio.',
    },
  },

  foodAndRestaurants: {
    title: 'Dónde comer en Toledo',
    intro:
      'La comida suma valor real cuando marca el ritmo de la escapada y ayuda a leer la ciudad por zonas, no cuando se convierte en una lista de locales sin criterio.',
    foodIdentity:
      'Producto y cocina con influencia de Montes de Toledo y La Mancha: carcamusas, perdiz a la toledana, cocido de tres vuelcos, cochifrito, vinos, aceites, azafrán y mazapán de Toledo con IGP.',
    areas: [
      {
        name: 'Zocodover y centro comercial histórico',
        description:
          'Zona táctica para la primera comida de una escapada corta. Buena para tapeo, carcamusas y una pausa rápida entre llegadas y monumentos centrales.',
      },
      {
        name: 'Judería, Santo Tomé y Tránsito',
        description:
          'La mejor zona para sentarse con más calma entre museos y patrimonio. Encaja bien en viajes de una o dos noches.',
      },
      {
        name: 'Cigarrales, San Martín y valle',
        description:
          'Área para comidas o cenas con vistas. Encaja sobre todo si duermes en la ciudad o quieres que el paisaje forme parte de la experiencia.',
      },
      {
        name: 'Bisagra, Recaredo y borde exterior del casco',
        description:
          'Zona menos romántica pero más práctica para llegadas en coche, hoteles con parking o comidas previas a salir de Toledo.',
      },
    ],
    recommendedRestaurants: [
      {
        name: 'Iván Cerdeño - Cigarral del Ángel',
        type: 'Alta cocina de memoria y entorno',
        priceFeeling: 'alto',
        whyItFits:
          'Convierte Toledo en destino gastronómico y no solo patrimonial. Tiene sentido cuando la cena es uno de los motivos del viaje.',
        caution:
          'No es una elección táctica para una escapada rápida. Requiere reserva y tiempo.',
      },
      {
        name: 'La Cábala',
        type: 'Cocina contemporánea con menús degustación',
        priceFeeling: 'medio-alto',
        whyItFits:
          'Muy buen encaje para una cena trabajada en una escapada de una o dos noches sin entrar en el formato más solemne de la alta cocina de destino.',
        caution:
          'Conviene reservar; no encaja bien si el día ya viene muy cargado de monumentos.',
      },
      {
        name: 'Restaurante del Parador de Toledo',
        type: 'Cocina regional con valor panorámico',
        priceFeeling: 'medio-alto',
        whyItFits:
          'La vista suma tanto como el plato. Funciona muy bien para una comida o cena escénica.',
        caution:
          'La localización no es la más cómoda si te mueves solo a pie por el casco.',
      },
      {
        name: 'Mercado de San Agustín',
        type: 'Mercado gastronómico y raciones',
        priceFeeling: 'medio',
        whyItFits:
          'Resuelve bien grupos mixtos o viajeros cansados que quieren flexibilidad y formato para compartir.',
        caution:
          'No debe presentarse como experiencia toledana clásica de mantel; funciona mejor como solución versátil.',
      },
      {
        name: 'Bu Terraza',
        type: 'Terraza panorámica y comida ligera',
        priceFeeling: 'medio',
        whyItFits:
          'Suma mucho al atardecer y en noches templadas, cuando el paisaje importa casi tanto como el plato.',
        caution:
          'En temporada alta conviene reservar y asumir que aquí el contexto pesa mucho.',
      },
    ],
    editorialTip:
      'Presentar este bloque como ayuda de decisión: dónde conviene sentarse según zona, ritmo y noches. Evitar el enfoque de guía infinita.',
  },

  seasonalPlans: {
    title: 'Planes de temporada en Toledo',
    intro:
      'Toledo cambia bastante con la liturgia, el calendario cultural y el calor. En 2026, el VIII Centenario de la catedral es el gran factor diferencial.',
    plans: [
      {
        name: 'Semana Santa patrimonial',
        when: 'Marzo-abril, según calendario móvil',
        whyItFits:
          'Refuerza la lectura histórica y litúrgica del casco y da valor real a la noche',
        idealFor: 'Viajeros de patrimonio religioso o cultura procesional',
        caution: 'Afecta movilidad, descanso y horarios de visita',
      },
      {
        name: 'Corpus Christi',
        when: 'Finales de mayo o primer tercio de junio, según programa oficial 2026',
        whyItFits:
          'Es la gran semana festiva de la ciudad y transforma el centro histórico',
        idealFor: 'Quien quiera ver Toledo ceremonial y muy vivo',
        caution:
          'La programación definitiva debe revisarse en fuente oficial porque la información pública consultada mostraba aún material 2025 y una fecha errónea',
      },
      {
        name: 'Exposición Primada del VIII Centenario',
        when: 'Del 25 de mayo al 14 de octubre de 2026',
        whyItFits:
          'Aporta un motivo potente para dormir una o dos noches y recentra la visita en la catedral',
        idealFor: 'Viajeros culturales y repetidores',
        caution: 'Puede alterar recorridos internos y elevar demanda en alojamiento',
      },
      {
        name: 'Puy du Fou + ciudad',
        when: 'Primavera a otoño, según apertura del parque',
        whyItFits:
          'Da sentido a una segunda noche y mezcla patrimonio urbano con espectáculo histórico',
        idealFor: 'Familias, grupos y quien ya conoce el casco',
        caution:
          'No es un plan peatonal desde el centro; exige coche, taxi o bus específico',
      },
      {
        name: 'Patrimonio menos visible y aperturas especiales',
        when: 'Según agenda del Consorcio y del Ayuntamiento',
        whyItFits:
          'Permite descubrir conventos, restauraciones y rutas fuera del circuito más obvio',
        idealFor: 'Repetidores y viajeros temáticos',
        caution: 'Muy dependiente de aforo y programación puntual',
      },
    ],
  },

  hotelDecisionGuide: {
    title: 'Dónde dormir según el tipo de viaje',
    intro:
      'En Toledo importa tanto la categoría como la logística. La decisión real es elegir entre centro, descanso, parking, spa, vistas y facilidad de acceso.',
    options: [
      {
        hotel: 'Parador de Toledo',
        bestFor: 'Escapadas románticas, coche, vistas, dos noches con ritmo pausado',
        realWhy: 'El skyline de Toledo forma parte de la estancia y no solo de la visita',
        caution:
          'Menos práctico para entrar y salir andando del casco varias veces',
      },
      {
        hotel: 'Hotel San Juan de los Reyes',
        bestFor: 'Primera noche en Toledo con todo a pie',
        realWhy:
          'Combina localización muy buena en la Judería con un formato de hotel cómodo y claro',
        caution:
          'Parking limitado y acceso en coche menos simple que en hoteles exteriores',
      },
      {
        hotel: 'Hotel Pintor El Greco',
        bestFor: 'Viajeros culturales que quieren dormir dentro del casco con encanto',
        realWhy:
          'Ubicación excelente para Judería, museo y paseo histórico',
        caution:
          'No es la mejor opción si priorizas piscina, vistas o hotel como destino',
      },
      {
        hotel: 'Eugenia de Montijo, Autograph Collection',
        bestFor: 'Escapada premium muy céntrica',
        realWhy: 'Suma palacio histórico, centro total y componente spa',
        caution:
          'Precio alto y acceso más delicado por la densidad del casco',
      },
      {
        hotel: 'Eurostars Palacio Buenavista',
        bestFor: 'Viajes de descanso, spa y coche o taxi',
        realWhy:
          'Permite vivir Toledo con base más relajada y hotelera',
        caution:
          'Pierdes parte de la inmersión inmediata de dormir dentro del casco histórico',
      },
    ],
    verdict:
      'Para la mayoría de usuarios: casco o Judería si solo duermes una noche y quieres hacerlo casi todo a pie; cigarrales o hotel exterior si pasas dos noches, vas en coche o el descanso pesa más que la centralidad.',
  },

  honestWarnings: {
    title: 'Lo que conviene saber antes de ir',
    items: [
      {
        title: 'Toledo desgasta más de lo que parece',
        text:
          'El desnivel, el empedrado y la fatiga visual hacen que un plan sobrecargado salga peor de lo esperado.',
      },
      {
        title: 'La accesibilidad no es uniforme',
        text:
          'Hay recursos concretos adaptados, pero el casco histórico no permite dar por hecha una experiencia barrera-cero. Conviene verificar monumento por monumento.',
      },
      {
        title: 'Los horarios cambian por culto, temporada y eventos',
        text:
          'No fijes una agenda cerrada sin revisar cada web oficial el mismo día o la víspera.',
      },
      {
        title: 'Dormir en el centro no siempre implica descansar mejor',
        text:
          'La centralidad reduce caminatas, pero puede penalizar con ruido, acceso y precio en semanas fuertes.',
      },
      {
        title: 'Puy du Fou no es una prolongación peatonal del casco',
        text:
          'Si lo incluyes, necesita logística propia y casi siempre empuja hacia dos noches.',
      },
    ],
  },

  seoBlocks: {
    whatToSee: {
      title: 'Qué ver en Toledo en una escapada corta',
      text:
        'Lo más sensato en una escapada corta es combinar un gran icono monumental, un tramo de Judería y un cierre panorámico o de museo ligero, en lugar de intentar verlo todo.',
    },
    howToArrive: {
      title: 'Cómo llegar a Toledo sin coche',
      text:
        'Desde Madrid, el tren Avant suele ser la opción más eficiente para una escapada corta, mientras que el autobús es una alternativa válida cuando pesan más el horario o el precio que el tiempo de viaje.',
    },
    whereToEat: {
      title: 'Dónde comer en Toledo',
      text:
        'Conviene elegir zona según el momento del viaje: centro para una comida táctica, Judería para comer con más calma y cigarrales o valle para una mesa con vistas.',
    },
    isItWorthSleeping: {
      title: '¿Merece la pena dormir en Toledo?',
      text:
        'Sí: una noche mejora mucho la experiencia porque elimina el reloj del regreso, permite cenar bien y añade una mañana útil. Dos noches solo compensan si pesan gastronomía, hotel o planes de temporada.',
    },
  },

  editorial: {
    accommodationIntro:
      'En Toledo la ubicación pesa mucho, pero no siempre de la misma manera. En una noche manda el centro puro. En dos noches ya puedes equilibrar ubicación y confort. En tres, tiene sentido dormir por vistas o por experiencia.',
    commonMistakes: [
      'Pensar que se ve rápido porque el casco parece pequeño',
      'Querer hacer demasiados monumentos el primer día',
      'Comprar entradas antes de decidir el ritmo del viaje',
      'No dejar tiempo para simplemente caminar por la ciudad',
      'Subestimar el calor si vas en meses fuertes',
      'Elegir hotel pensando más en estrellas que en zona',
      'Reservar tres noches sin tener claro para qué quieres esa tercera noche',
    ],
    weatherIntro:
      'Toledo cambia bastante con el tiempo. Con calor fuerte se vuelve más exigente. Con lluvia sigue teniendo encanto, pero el plan deja de ser tan callejero. No es un drama en ninguno de los dos casos, pero sí conviene ajustar expectativas.',
    weatherHot: [
      'Entrar antes en interiores',
      'Madrugar de verdad',
      'Reservar lo más duro para última hora',
      'No insistir con miradores al mediodía',
    ],
    weatherRainy: [
      'Dar más peso a monumentos y menos al paseo largo',
      'Dormir muy bien situado',
      'Evitar un plan demasiado disperso',
      'Elegir pocas visitas, pero buenas',
    ],
    firstTimeAdvice: {
      title: 'Mi recomendación si no has estado nunca',
      text:
        'Yo reservaría dos noches, dormiría céntrico y haría una Toledo bastante limpia: Catedral, dos o tres visitas más, paseo largo por la Judería y tiempo real para comer y mirar la ciudad sin prisas. No intentaría ver el “Toledo completo”. Haría el Toledo que de verdad se disfruta.',
    },
    quickWeekendAdvice: {
      title: 'Si solo quieres un finde fácil',
      text:
        'Tren, hotel bien colocado, una noche si vas justo o dos si quieres hacerlo bien, Catedral, callejeo, cena tranquila y vuelta sin inventar demasiado. Toledo funciona precisamente porque no te obliga a complicarte.',
    },
    closing: {
      title: 'La mejor forma de hacer Toledo',
      text:
        'Toledo no necesita un itinerario perfecto. Necesita una buena decisión de tiempo, una o dos visitas muy bien elegidas y un hotel que juegue a favor del viaje. Una noche sorprende. Dos noches es la mejor compra. Tres solo compensa si buscas bajar mucho el ritmo o darle una segunda capa a la escapada.',
    },
  },

  faq: [
    {
      question: '¿Merece la pena Toledo para una sola noche?',
      answer:
        'Sí. No como versión exhaustiva de la ciudad, pero sí como escapada corta muy buena y muy fácil de defender desde Madrid.',
    },
    {
      question: '¿Hace falta coche?',
      answer:
        'No. Para este viaje no hace falta. De hecho, buena parte del atractivo está en lo fácil que resulta hacerlo en tren.',
    },
    {
      question: '¿Compensa dormir dentro del casco?',
      answer:
        'Para una noche, casi siempre sí. Para dos depende del hotel. Para tres ya puedes valorar más las vistas o el tipo de estancia.',
    },
    {
      question: '¿Compensa la pulsera turística?',
      answer:
        'Sí si vas a entrar en varios monumentos. Si solo quieres ver Catedral y una o dos cosas más, no siempre.',
    },
    {
      question: '¿Dos noches o tres?',
      answer:
        'Dos, salvo que tengas claro que quieres ir muy despacio o sumar un plan adicional.',
    },
    {
      question: '¿Es una escapada para ir corriendo?',
      answer:
        'No. Cuanto más la conviertas en un viaje con prisas, peor te va a salir.',
    },
  ],

  affiliateLinks: {
    hotelUrl: '#',
    activityUrl: '#',
    transportUrl: '#',
  },
}
