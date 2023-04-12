import "./Header.scss"
import {ReactComponent as Favorite} from "./icon/favorite.svg"
import {ReactComponent as Basket} from "./icon/basket.svg"


const Header = () => {
	return (
		<div className="wrapper__header">
			<img
				src="https://static.wixstatic.com/media/ac1ee9_562e167c6f864819a7497fdfe9f0ff67~mv2.png/v1/crop/x_0,y_4,w_812,h_402/fill/w_164,h_81,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/%D0%97%D0%BD%D1%96%D0%BC%D0%BE%D0%BA%20%D0%B5%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202023-03-31%20%D0%BE%2020_33_17.png"
				alt="logo"/>

			<div className="wrapper__counter">
				<Favorite/>
			</div>
			<div className="wrapper__counter">
				<Basket/>
			</div>

		</div>
	)
}

export default Header
