import React, { Component } from "react";
import Button from "../Button/Button";

import "./Modal.scss";

class Modal extends Component {
  closeModalFun = (event) => {
    if (event.target === event.currentTarget) this.props.closeModal();
  };
  render() {
    const { title, text, closeBtn, closeModal } = this.props;

    return (
      <div className="modal" onClick={this.closeModalFun}>
        <div
          className="modal__content"
          // onClick={(event) => event.stopPropagation()}
        >
          <h2 className="modal__title">{title}</h2>
          <p className="modal__text">{text}</p>
          <Button text="ok" />
          <Button text="cancel" action={closeModal} />
          {closeBtn && (
            <button onClick={closeModal} className="modal__close">
              x
            </button>
          )}
          {/* Оператора & Обработать */}
        </div>
      </div>
    );
  }
}

export default Modal;
