import { SOLAR_SYSTEM_PLANETS } from '../config.js';

export function isSolarSystemPlanet(name) {
  if (typeof name !== 'string') return false;

  const normalized = name.trim().toLowerCase();
  if (!normalized) return false;

  return SOLAR_SYSTEM_PLANETS.includes(normalized);
}

export const getJSON = async function (url) {
  try {
    const response = await fetch(url);

    const data = await response.json();

    if (!response.ok) throw new Error(`${data.message} ${response.status}`);
    return data;
  } catch (err) {
    throw err;
  }
};
