import React, { Component } from "react";
import Button from "../../Button/Button";
import "./Key.scss";
import { ReactComponent as StarBlack } from "../../../assets/img/star-black.svg";
import { ReactComponent as StarGold } from "../../../assets/img/star-gold.svg";

class Key extends Component {
  componentDidMount() {}

  render() {
    const { price, img, id, color, name, setFavorites, isFavorite } =
      this.props;

    return (
      <li>
        <img src={img} alt={name} />
        <h2>{name}</h2>
        <p>Price: {price}</p>
        <p>Color: {color}</p>
        <p>Article: {id}</p>
        <Button text="add to card" classes="btn btn__add-card" />
        <span onClick={() => setFavorites({ price, img, id, color, name })}>
          {isFavorite ? <StarGold /> : <StarBlack />}
        </span>
      </li>
    );
  }
}

export default Key;
