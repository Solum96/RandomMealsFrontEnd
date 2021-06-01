import axios from 'axios';

export const GetFoodItemsFromApi = () => {
  console.log('api anrop skett');
  return [
    {
      id: 1,
      name: 'Tomatsoppa med krutonger',
      ingredients: ['Tomat', 'krutonger', 'buljong'],
      instructions: [
        'hacka tomater',
        'koka soppa',
        'krutonga',
      ],
    },
    {
      id: 2,
      name: 'Potatismos med köttbullar och lingon',
      ingredients: [
        'Pulvermos',
        'Ikeas köttbullar',
        'Lingonsylt',
      ],
      instructions: [
        'Pulvermosa',
        'Stek köttbullar',
        'Servera med lingonsylt',
      ],
    },
    {
      id: 3,
      name: "Mac'n Cheese",
      ingredients: [
        'Makaroner',
        '3 sorters mild ost',
        'Ströbröd',
      ],
      instructions: [
        'Koka makaroner',
        'Gör ostsås',
        'gratinera med lite ströbröd i ugn tills den får färg.',
      ],
    },
    {
      id: 4,
      name: 'Ris och tofupanetter med vit sås ',
      ingredients: [
        'jasminris',
        'tofu',
        'ströbröd',
        'Vegansk yoghurt',
      ],
      instructions: [
        'koka ris enligt instruktion',
        'Dubbelpanera tofun i ströbröd, havregrädde och vetemjöl',
        'Vispa ihop en sås och servera på platt tallrik',
      ],
    },
    {
      id: 5,
      name: 'Hamburgare med Steakhouse Fries',
      ingredients: [
        'Formbar färs',
        'Lök',
        'Kryddor',
        'ströbröd',
        'Steakhouse Fries',
        'Ost',
        'Burgarbyggmaterial',
      ],
      instructions: [
        'blanda ihop ingredienserna till burgarna',
        'forma bollar av burgar smeten, tryck ut till burgare och stek på medelhög värme i ett par minuter på var sida.',
        'Sätt ugnen på 225* och stoppa in Steakhouse Fries.',
        ' Skär upp grönsaker och ta fram burgarbyggegrejer',
        'bygg burgare',
      ],
    },

    {
      id: 6,
      name: 'Spenatsoppa med kikärtor',
      ingredients: [
        'Fryst, hackad spenat',
        'Kikärtor',
        'havregrädde',
        'buljong',
        'Vatten',
        'Lök',
      ],
      instructions: [
        'hacka lök och stek den mjuk i en kastrul tillsammans med lite olja, i med spenaten och täck med vatten och buljong',
        'koka soppa dumsnut',
      ],
    },
    {
      id: 7,
      name: 'Ris med lycklingsås ',
      ingredients: [
        'jasminris',
        'Hälsans kök filébitar',
        'havregrädde',
        'Balsamico',
        'sparris',
      ],
      instructions: [
        'koka ris enligt instruktion',
        'Stek lycklingen och häll i sparrisen när lycklingen nästan är genomstekt',
        'Gör en gräddig sås med mycket peppar och smaka av med crema balsamico',
      ],
    },
    {
      id: 8,
      name: "Korv med brö'",
      ingredients: [
        "Körvbrö'",
        'Körv',
        'Valfria tillbehör',
        'rostad lök',
      ],
      instructions: [
        'Stek alt. koka korv',
        "Lägg körv i brö'",
        'toppa körven med goda saker',
      ],
    },
    {
      id: 9,
      name: 'Makaroner och Köttbullar',
      ingredients: [
        'Idealmakaroner',
        'Veganska köttbullar',
        'gurkstavar',
      ],
      instructions: [
        'koka Makaroner enligt instruktion',
        'Stek Vegbullarna på medelhög värme tills de är gneomvarma och fått en liten stekyta',
        'Servera med morotsstavar',
      ],
    },
    {
      id: 10,
      name: 'Pizza',
      ingredients: ['Foodora', 'Mobiltelefon'],
      instructions: [
        'Beställ på Pizza Master på Gråberget',
      ],
    },
  ];
};

export const GetFoodItemById = async (id) => {
  console.log('hämtar enskild entity');
  return fetch(
    `https://192.168.1.68:5001/api/dishitems/${id}`
  ).then((resp) => resp.json());
};

/* 
API CALL AGAINST ASP.NET REST API (currently doesn't work due to unknown error)

return await axios.get('https://10.0.2.2:5001/api/dishitems')
  .then((resp) => resp.json())
      .then((json) => json)
    .catch((e) => console.log(e)); 
    */
