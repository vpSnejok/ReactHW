import React, { Component } from "react";
import "./CardList.scss"

import Card from "./Card/Card";

class CardList extends Component {
  render() {
    const { keys, setFavorites, favorites } = this.props;
    return (
      <ul>
        {keys.map((key) => {
          let isFavorite = false;

          favorites.forEach((el) => {
            if (el.id === key.id) {
              isFavorite = true;
            }
          });

          return (
            <Card
              key={key.id}
              {...key}
              isFavorite={isFavorite}
              setFavorites={setFavorites}
            />
          ); //возвращаем компонент обычный key
        })}
      </ul>
    );
  }
}

export default CardList;
