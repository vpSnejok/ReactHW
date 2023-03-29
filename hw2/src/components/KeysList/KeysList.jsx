import React, { Component } from "react";
import Key from "./Key/Key";
import "./KeysList.scss";

class KeysList extends Component {
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
            <Key
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

export default KeysList;
