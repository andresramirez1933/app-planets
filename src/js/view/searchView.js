class SearchView {
  _parentEl = document.querySelector('.form-card');

  getQuery() {
    const query = this._parentEl.querySelector('.search__field').value;
    //this._clearInput();
    return query;
  }
  addHandlerSearch(handler) {
    this._parentEl.addEventListener('submit', function (e) {
      e.preventDefault();
      handler();
    });
  }
}

export default new SearchView();
