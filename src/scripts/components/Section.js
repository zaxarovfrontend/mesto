import Card from "./Card";


export default class Section {
  constructor({ items, renderer }, containerSelector) {
    this._renderedItems = items;
    this._container = document.querySelector(containerSelector);
  }  

  // рендер карточек (перебор массива с карточками)
  renderer () {
    this._renderedItems.forEach((item) => {
      const cardElement = this.addItem(item);
      this._container.append(cardElement);
    });
  }

  // создание нового элеменита карточки
  addItem (item) {
    const card = new Card(item);
    const cardElement = card.generateCard();
    return cardElement; 
  }
}
