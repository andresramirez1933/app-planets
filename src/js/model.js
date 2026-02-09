import { isSolarSystemPlanet } from './helpers/helpers.js';
import { planets } from './model/planetsModel.js';
import { EXOPLANET_NAME_FIX } from './model/exoplanetNameMap.js';
import { EXOPLANET_IMAGES } from './model/exoplanetsModel.js';
import { JUPITER_TO_EARTH } from './model/unitConversions.js';

export const state = {
  planet: {},
  search: {
    query: '',
  },
};

export const loadPlanet = async function (planet) {
  try {
    if (isSolarSystemPlanet(planet)) {
      const solarPlanet = getPlanetInfo(planet);

      if (!solarPlanet) {
        state.planet = undefined;
        return;
      }

      state.planet = normalizeSolarPlanet(solarPlanet);
      return;
    }
    const exoplanet = await loadExoplanet(planet);

    if (!exoplanet) {
      state.planet = undefined;
      return;
    }
    exoplanet.category = classifyExoplanet(exoplanet);
    exoplanet.image = getExoplanetImage(exoplanet.category);

    state.planet = normalizeExoplanet(exoplanet);
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
    state.planet = undefined;
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

function normalizeSolarPlanet(planet) {
  return {
    ...planet,

    Rp: planet.Rp * JUPITER_TO_EARTH.radius,
    Mp: planet.Mp * JUPITER_TO_EARTH.mass,

    units: {
      Rp: 'R⊕',
      Mp: 'M⊕',
      orbital_distance: 'AU',
      orbital_period: 'days',
      Tp: 'K',
      surface_gravity: 'm/s²',
    },
  };
}

function normalizeExoplanet(exo) {
  return {
    ...exo,

    // Convert Jupiter → Earth
    Rp: exo.Rp ? exo.Rp * JUPITER_TO_EARTH.radius : null,
    Mp: exo.Mp ? exo.Mp * JUPITER_TO_EARTH.mass : null,

    orbital_period: exo.orbital_period ?? null,
    orbital_distance: exo.orbital_distance ?? null,
    Tp: exo.Tp ?? null,
    surface_gravity: exo.surface_gravity ?? null,

    units: {
      Rp: 'R⊕',
      Mp: 'M⊕',
      orbital_distance: 'AU',
      orbital_period: 'days',
      Tp: 'K',
      surface_gravity: 'm/s²',
    },
  };
}
