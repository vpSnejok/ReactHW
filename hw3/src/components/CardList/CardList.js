import Card from "./Card/Card";
import "./CardList.scss"


const CardList = ({cards}) => {


	return <ul>
		{cards.map((card) => {


			return (
				<Card
					key={card.id}
					{...card}


				/>
			);
		})}
	</ul>;
};

export default CardList;
