import Card from "./Card";

export default class Section {
  constructor({ renderer }, containerSelector) {
    this._container = document.querySelector(containerSelector);
    this._renderer = renderer;
  }

  // Свойство renderer — это функция, которая отвечает за создание и отрисовку данных на странице.
  renderer (data) {
    data.forEach((item) => {
      this._renderer(item);
    });
  }


  addItem (element, toAppend) {
    this._container[toAppend](element);
  }
}