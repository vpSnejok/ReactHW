import { Component } from "react";
import "./App.css";
import Container from "./components/Container/Container";
import Button from "./components/Button/Button";
import Modal from "./components/Modal/Modal";
import KeysList from "./components/KeysList/KeysList";

class App extends Component {
  state = {
    keys: [],
    favorites: [],
    isModalOpenFirst: false,
    isModalOpenSecond: false
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
    // console.log(target);
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
      <Container>
        <Button
          text="opene frist modal"
          action={() => this.handleOpenModal("isModalOpenFirst")}
          classes="btn btn__green"
        />
        <Button
          text="opene second modal"
          classes="btn btn__red"
          action={() => this.handleOpenModal("isModalOpenSecond")}
        />
        <KeysList
          keys={this.state.keys}
          setFavorites={this.setFavorites}
          favorites={this.state.favorites}
        />
        {this.state.isModalOpenFirst && (
          <Modal
            closeModal={this.handleCloseModal}
            title="Do you want to delete this file?"
            text="Are you want do delete it?"
            closeBtn={true}
          />
        )}
        {this.state.isModalOpenSecond && (
          <Modal
            closeModal={this.handleCloseModal}
            title="modal2"
            text="modalText 2"
            closeBtn={false}
          />
        )}
      </Container>
    );
  }
}

export default App;
