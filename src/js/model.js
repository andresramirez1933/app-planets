import { isSolarSystemPlanet } from './helpers/helpers.js';
import { planets } from './model/planetsModel.js';
import { EXOPLANET_NAME_FIX } from './model/exoplanetNameMap.js';
import { EXOPLANET_IMAGES } from './model/exoplanetsModel.js';

export const state = {
  planet: {},
  search: {
    query: '',
  },
};

export const loadPlanet = async function (planet) {
  try {
    if (isSolarSystemPlanet(planet)) {
      state.planet = getPlanetInfo(planet);
      console.log(state.planet);
      return;
    }

    const exoplanet = await loadExoplanet(planet);

    if (!exoplanet) {
      state.planet = undefined;
      return;
    }

    exoplanet.category = classifyExoplanet(exoplanet);

    exoplanet.image = getExoplanetImage(classifyExoplanet(exoplanet));

    state.planet = exoplanet;
  } catch (err) {
    console.error(err);
    state.planet = undefined;
  }
};

function getPlanetInfo(name) {
  try {
    if (isSolarSystemPlanet(name)) {
      return findPlanet(name);
    }
  } catch (err) {
    console.error(err);
  }
}

function findPlanet(name) {
  return planets.find(p => p.planet_name.toLowerCase() === name.toLowerCase());
}

async function loadExoplanet(name) {
  try {
    const normalizedName = normalizeExoplanetName(name);

    const res = await fetch(
      `/.netlify/functions/exoplanets?name=${encodeURIComponent(
        normalizedName,
      )}`,
    );
    const data = await res.json();

    return data[0];
  } catch (err) {
    console.error('Error obteniendo datos:', err);
  }
}

function normalizeExoplanetName(name) {
  const key = name.toLowerCase().trim();
  return EXOPLANET_NAME_FIX[key] || name;
}

function classifyExoplanet(data) {
  if (!data) return 'unknown';

  const radiusEarth = data.Rp * 11.2;

  if (radiusEarth > 8) return 'gas_giant';
  if (radiusEarth > 4) return 'mini_neptune';
  if (radiusEarth > 1.5) return 'earthlike';
  if (radiusEarth <= 1.5) return 'rocky';

  return 'unknown';
}

function getExoplanetImage(category) {
  const images = EXOPLANET_IMAGES[category] || EXOPLANET_IMAGES.unknown;

  return images[Math.floor(Math.random() * images.length)];
}
