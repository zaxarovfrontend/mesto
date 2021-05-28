import Card from "./Card";

export default class Section {
  constructor({ renderer }, containerSelector) {
    this._container = document.querySelector(containerSelector);
    this._renderer = renderer;
  }

  // рендер карточек (перебор массива с карточками)
  renderer (data) {
    data.forEach((item) => {
      this._renderer(item);
    });
  }


  addItem (element, toAppend) {
    this._container[toAppend](element);
  }
}