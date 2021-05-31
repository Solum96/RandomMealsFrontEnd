export const GetFoodItemsFromApi = async () => {
  console.log('api anrop skett');
  return await fetch(
    'GET',
    'https://localhost:5001/api/dishitems'
  )
    .then((resp) => resp.json())
    .then((json) => json)
    .catch(console.log('big sad'));
};

export const GetFoodItemById = async (id) => {
  console.log('hämtar enskild entity');
  return fetch(
    `https://localhost:5001/api/dishitems/${id}`
  ).then((resp) => resp.json());
};
