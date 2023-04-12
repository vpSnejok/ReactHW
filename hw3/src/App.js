import "./App.css";

import Modal from "./components/Modal/Modal";
import {useEffect, useState} from "react";
import Header from "./components/Header/Header";
import CardList from "./components/CardList/CardList";
import Container from "./components/Container/Container";


const App = () => {
	const [modalActive, setModalActive] = useState(false);
	const [cards, setCards] = useState([]);

	useEffect(() => {
		const items = fetch("./data.json")
			.then((res) => res.json())
			.then((card) => setCards(card));
	}, []);

	return (
		<>
			<Header/>
			<Container children={CardList}>
				<CardList cards={cards} active={modalActive} setActive={setModalActive}/>

			</Container>
			<Modal active={modalActive} setActive={setModalActive}>
				<p>test</p>
			</Modal>
		</>
	);
};

export default App;
