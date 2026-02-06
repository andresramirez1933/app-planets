import { CATEGORY_LABELS } from '../model/categoryLabels.js';

class PlanetView {
  _parentElement = document.querySelector('.result');
  _data;

  render(data) {
    if (!data || (Array.isArray(data) && data.length === 0))
      return this.renderError();

    this._data = data;
    const markup = this._generateMarkup();

    this._clear();

    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  _generateMarkup() {
    return `    <section class="planet-card">
      <!-- INFO GRID -->
      <div class="planet-info">
        <div class="col">
  <p><span class="label">Name:</span> <span class="value">${
    this._data.canonical_name
  }</span></p>
  <p><span class="label">System:</span> <span class="value">${
    this._data.star_name
  }</span></p>
  <p><span class="label">Category:</span> <span class="value">${
    CATEGORY_LABELS[this._data.category] ?? 'Unknown'
  }</span></p>
  <p><span class="label">Constellation:</span> <span class="value">${
    this._data.constellation
  }</span></p>
  <p><span class="label">Radius:</span> <span class="value">${
    this._data.Rp
  }</span></p>
</div>

<div class="col">
  <p><span class="label">Mass:</span> <span class="value">${
    this._data.Mp
  }</span></p>
  <p><span class="label">Temperature:</span> <span class="value">${
    this._data.Tp
  }</span></p>
  <p><span class="label">Period:</span> <span class="value">${
    this._data.orbital_period
  } days</span></p>
  <p><span class="label">Distance:</span> <span class="value">${
    this._data.orbital_distance
  }</span></p>
  <p><span class="label">Gravity:</span> <span class="value">${Number(
    this._data.surface_gravity.toFixed(2),
  )} m/s²</span></p>
</div>
      </div>
      <!-- IMAGE -->
      <div class="planet-image">
        <img src="${this._data.image}" alt="Proxima Cen b" />
      </div>
    </section>`;
  }

  _clear() {
    this._parentElement.innerHTML = '';
  }

  renderError() {
    const markup = `
    <div class="error-card">
      <div class="error-icon">🪐</div>
      <h3 class="error-title">Lost in Space</h3>
      <p class="error-text">
        We couldn't find any planet matching your search.<br />
        Try another name or explore the Solar System.
      </p>
    </div>
  `;

    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }
}

export default new PlanetView();
