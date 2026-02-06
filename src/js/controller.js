import * as model from './model.js';
import searchView from './view/searchView.js';
import planetView from './view/planetView.js';

const controlPlanet = async function (planet) {
  const query = searchView.getQuery(planet);
  if (!query) return;
  await model.loadPlanet(query);

  planetView.render(model.state.planet);
};
//controlPlanet('Earth');

const init = function () {
  searchView.addHandlerSearch(controlPlanet);
};

init();
