import Card from "./Card";

export default class Section {
  constructor({ items, renderer }, containerSelector) {
    this._renderedItems = items;
    this._container = document.querySelector(containerSelector);
    this._renderer = renderer;
  }

  // рендер карточек (перебор массива с карточками)
  renderer () {
    this._renderedItems.forEach((item) => {
      const cardElement = this._renderer(item);
      this.addItem(cardElement);
    });
  }


  addItem (element) {
    this._container.append(element);
  }
}
