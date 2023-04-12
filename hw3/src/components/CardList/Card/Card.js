import "./Card.scss";
import Button from "../../Button/Button";


const Card = (props) => {
	const {price, img, color, name,setModalActive} = props;
	console.log(setModalActive)

	return (
		<li>
			<img src={img} alt={name}
				 width="250px"
				 height="300px"/>
			<h2>{name}</h2>
			<p>Price: {price}</p>
			<p>Color: {color}</p>
			{/* <p onClick={() => setFavorites({ price, img, id, color, name })}>
				{isFavorite ? <StarGold /> : <StarBlack />}
			</p> */}
			<Button children="Додати у кошик" classes="btn btn__add-card"/>
		</li>
	);
};

export default Card;
