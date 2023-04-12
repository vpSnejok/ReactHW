import { Component } from "react";
import "./App.css";
import Container from "./components/Container/Container";
// import Button from "./components/Button/Button";
// import Modal from "./components/Modal/Modal";

import CardList from "./components/CardList/CardList";
import Header from "./components/Header/Header";

class App extends Component {
  state = {
    keys: [],
    favorites: [],
    isModalOpenFirst: false,
    isModalOpenSecond: false,
  };

  setFavorites = (key) => {
    if (this.state.favorites.find((el) => el.id === key.id)) {
      this.setState(
        (prev) =>
          (prev.favorites = this.state.favorites.filter(
            (el) => el.id !== key.id
          ))
      );
    } else {
      this.setState(
        (prev) => (prev.favorites = [...this.state.favorites, key])
      );
    }
  };

  componentDidMount() {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => {
        this.setState((prev) => (prev.keys = data));
      });
  }

  handleOpenModal = (target) => {
    this.setState((prev) => (prev[target] = true));
    // this.setState((prev) => ({ ...prev, isModalOpen: !prev.isModalOpen }));
  };

  handleCloseModal = () => {
    this.setState(() => ({
      isModalOpenFirst: false,
      isModalOpenSecond: false,
    }));
    // this.setState((prev) => ({ ...prev, isModalOpen: !prev.isModalOpen }));
  };

  render() {
    console.log(this.state.favorites);
    return (
      <>
        <Header />
        <Container>
          <CardList
            keys={this.state.keys}
            setFavorites={this.setFavorites}
            favorites={this.state.favorites}
          />
        </Container>
      </>

    );
  }
}

export default App;
