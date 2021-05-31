import {
  GetFoodItemsFromApi,
  GetFoodItemById,
} from './GetFoodItems';

let menu = [];

export const foodScrambler = async () => {
  console.log('foodscramble startar');
  let idArr = [];
  let allItems = await GetFoodItemsFromApi();
  let itemIndexes = allItems.length;

  console.log('krasch här?');
  for (let i = 0; i < 7; i++) {
    let dishId = Math.floor(Math.random() * itemIndexes);
    if (!idArr.includes(dishId)) {
      idArr.push(dishId);
      menu.push(allItems[dishId]);
    } else {
      i--;
    }
  }
  console.log('foodscramble klar');
  console.log(JSON.stringify(menu));
};

export const WeekMenu = () => {
  if (menu.length > 0) {
    return menu;
  } else {
    return (menu = [
      {
        id: 1,
        name: 'körv med mooooos',
        ingredients: ['bröl', 'kröl'],
        instructions: ['bröla krölet', 'servera med klafs'],
      },
      {
        id: 2,
        name: 'bröl med kröl',
        ingredients: ['bröl', 'kröl'],
        instructions: ['bröla krölet', 'servera med klafs'],
      },
      {
        id: 3,
        name: 'bröl med kröl2',
        ingredients: ['bröl', 'kröl'],
        instructions: ['bröla krölet', 'servera med klafs'],
      },
      {
        id: 4,
        name: 'bröl med kröl3',
        ingredients: ['bröl', 'kröl'],
        instructions: ['bröla krölet', 'servera med klafs'],
      },
      {
        id: 5,
        name: 'bröl med kröl4',
        ingredients: ['bröl', 'kröl'],
        instructions: ['bröla krölet', 'servera med klafs'],
      },
      {
        id: 6,
        name: 'bröl med kröl5',
        ingredients: ['bröl', 'kröl'],
        instructions: ['bröla krölet', 'servera med klafs'],
      },
      {
        id: 7,
        name: 'bröl med kröl6',
        ingredients: ['bröl', 'kröl'],
        instructions: ['bröla krölet', 'servera med klafs'],
      },
    ]);
  }
};
export default WeekMenu;
