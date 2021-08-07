/* eslint-disable linebreak-style */
import Feed from './Feed.js';
import Modal from './Modal.js';
import ModalInfo from './ModalInfo.js';

export default class AppController {
  constructor(container) {
    this.container = container;
  }

  init() {
    this.feedContainer = new Feed(this.container);
    this.modal = new Modal(this.container);
    this.modalInfo = new ModalInfo(this.container);

    this.feedContainer.init();
    this.modal.init();
    this.modalInfo.init();
  }
}
