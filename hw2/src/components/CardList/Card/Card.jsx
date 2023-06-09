import React, { Component } from "react";
import "./Card.scss";
import Button from "../../Button/Button";
import { ReactComponent as StarBlack } from "../../../assets/img/star-black.svg";
import { ReactComponent as StarGold } from "../../../assets/img/star-gold.svg";

class Card extends Component {
  render() {
    const {
      price,
      img,
      id,
      color,
      name,
      setFavorites,
      isFavorite,
      handleOpenModal,
    } = this.props;

    return (
      <li>
        <img src={img} alt={name} />
        <h2>{name}</h2>
        <p>Price: {price}</p>
        <p>Color: {color}</p>
        <p onClick={() => setFavorites({ price, img, id, color, name })}>
          {isFavorite ? <StarGold /> : <StarBlack />}
        </p>
        <Button text="Додати у кошик" classes="btn btn__add-card" />
      </li>
    );
  }
}

export default Card;
