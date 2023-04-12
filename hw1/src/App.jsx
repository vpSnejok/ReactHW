import {Component} from "react";
import "./App.css";
import Container from "./components/Container/Container";
import Button from "./components/Button/Button";
import Modal from "./components/Modal/Modal";

class App extends Component {
    state = {
        isModalOpenFirst: false,
        isModalOpenSecond: false,
    };

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
                        title="Do you want save file"
                        text="Lorem ipsum dolor sit amet."
                        closeBtn={false}
                    />
                )}
            </Container>
        );
    }
}

export default App;
