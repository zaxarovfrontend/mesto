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
      this._renderer(item);
    });
  }


  addItem (element, toAppend) {
    this._container[toAppend](element);
  }
}