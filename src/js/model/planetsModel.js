export const planets = [
  {
    canonical_name: 'Mercury',
    planet_name: 'Mercury',
    image: new URL('../../static/img/planets/mercury.jpg', import.meta.url)
      .href,
    catalog_name: 'sol_system',
    star_name: 'Sun',
    disposition: 'confirmed planet',
    category: 'rocky',

    Rp: 0.038, // Radius in Jupiter radii
    Mp: 0.00017, // Mass in Jupiter masses
    Tp: 440, // Temperature (K)
    orbital_period: 87.97, // Days
    orbital_distance: 0.39, // AU
    inclination: 7.0,
    constellation: 'Solar System',
    distance: 0, // pc — Sun is at 0pc
    transit_flag: false,

    // --- Star (Sun) data ---
    Rs: 1.0, // Solar radii
    Ms: 1.0, // Solar masses
    Teff: 5778, // K
    surface_gravity: 3.7,
  },

  {
    canonical_name: 'Venus',
    planet_name: 'Venus',
    image: new URL('../../static/img/planets/venus.jpg', import.meta.url).href,
    catalog_name: 'sol_system',
    star_name: 'Sun',
    disposition: 'confirmed planet',
    category: 'rocky',

    Rp: 0.095,
    Mp: 0.00256,
    Tp: 737,
    orbital_period: 224.7,
    orbital_distance: 0.72,
    inclination: 3.39,
    constellation: 'Solar System',
    distance: 0,
    transit_flag: false,

    Rs: 1.0,
    Ms: 1.0,
    Teff: 5778,
    surface_gravity: 8.87,
  },

  {
    canonical_name: 'Earth',
    planet_name: 'Earth',
    image: new URL('../../static/img/planets/earth.jpg', import.meta.url).href,
    catalog_name: 'sol_system',
    star_name: 'Sun',
    disposition: 'confirmed planet',
    category: 'rocky',

    Rp: 0.0892,
    Mp: 0.00315,
    Tp: 288,
    orbital_period: 365.25,
    orbital_distance: 1.0,
    inclination: 0,
    constellation: 'Solar System',
    distance: 0,
    transit_flag: false,

    Rs: 1.0,
    Ms: 1.0,
    Teff: 5778,

    surface_gravity: 9.81,
  },

  {
    canonical_name: 'Mars',
    planet_name: 'Mars',
    image: new URL('../../static/img/planets/mars.jpg', import.meta.url).href,
    catalog_name: 'sol_system',
    star_name: 'Sun',
    disposition: 'confirmed planet',
    category: 'rocky',

    Rp: 0.048,
    Mp: 0.00034,
    Tp: 210,
    orbital_period: 687,
    orbital_distance: 1.52,
    inclination: 1.85,
    constellation: 'Solar System',
    distance: 0,
    transit_flag: false,

    Rs: 1.0,
    Ms: 1.0,
    Teff: 5778,

    surface_gravity: 3.71,
  },

  {
    canonical_name: 'Jupiter',
    planet_name: 'Jupiter',
    image: new URL('../../static/img/planets/jupiter.jpg', import.meta.url)
      .href,
    catalog_name: 'sol_system',
    star_name: 'Sun',
    disposition: 'confirmed planet',
    category: 'gas_giant',

    Rp: 1.0,
    Mp: 1.0,
    Tp: 165,
    orbital_period: 4333,
    orbital_distance: 5.2,
    inclination: 1.3,
    constellation: 'Solar System',
    distance: 0,
    transit_flag: false,

    Rs: 1.0,
    Ms: 1.0,
    Teff: 5778,

    surface_gravity: 24.79,
  },

  {
    canonical_name: 'Saturn',
    planet_name: 'Saturn',
    image: new URL('../../static/img/planets/saturn.jpg', import.meta.url).href,
    catalog_name: 'sol_system',
    star_name: 'Sun',
    disposition: 'confirmed planet',
    category: 'gas_giant',

    Rp: 0.843,
    Mp: 0.299,
    Tp: 134,
    orbital_period: 10759,
    orbital_distance: 9.58,
    inclination: 2.49,
    constellation: 'Solar System',
    distance: 0,
    transit_flag: false,

    Rs: 1.0,
    Ms: 1.0,
    Teff: 5778,

    surface_gravity: 10.44,
  },

  {
    canonical_name: 'Uranus',
    planet_name: 'Uranus',
    image: new URL('../../static/img/planets/uranus.jpg', import.meta.url).href,
    catalog_name: 'sol_system',
    star_name: 'Sun',
    disposition: 'confirmed planet',
    category: 'ice_giant',

    Rp: 0.358,
    Mp: 0.0457,
    Tp: 76,
    orbital_period: 30687,
    orbital_distance: 19.2,
    inclination: 0.77,
    constellation: 'Solar System',
    distance: 0,
    transit_flag: false,

    Rs: 1.0,
    Ms: 1.0,
    Teff: 5778,

    surface_gravity: 8.69,
  },

  {
    canonical_name: 'Neptune',
    planet_name: 'Neptune',
    image: new URL('../../static/img/planets/neptune.jpg', import.meta.url)
      .href,
    catalog_name: 'sol_system',
    star_name: 'Sun',
    disposition: 'confirmed planet',
    category: 'ice_giant',

    Rp: 0.346,
    Mp: 0.0537,
    Tp: 72,
    orbital_period: 60190,
    orbital_distance: 30.07,
    inclination: 1.77,
    constellation: 'Solar System',
    distance: 0,
    transit_flag: false,

    Rs: 1.0,
    Ms: 1.0,
    Teff: 5778,

    surface_gravity: 11.15,
  },
];
