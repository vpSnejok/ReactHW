import React, { Component } from "react";
import "./Header.scss";
import {ReactComponent as FavoriteIcon} from './icons/favorite.svg'
import {ReactComponent as CartIcon} from './icons/cart.svg'
import PropTypes from "prop-types";

class Header extends Component {
  render() {
    const { counterCart, counterFavorite } = this.props;
    return (
      <div className="wrapper-header">
        <img
          src="https://static.wixstatic.com/media/ac1ee9_562e167c6f864819a7497fdfe9f0ff67~mv2.png/v1/crop/x_0,y_4,w_812,h_402/fill/w_164,h_81,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/%D0%97%D0%BD%D1%96%D0%BC%D0%BE%D0%BA%20%D0%B5%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202023-03-31%20%D0%BE%2020_33_17.png"
          alt="Ofiska"
        />
        <div className="wrapper-counter">
          <span className="counter-header">{counterFavorite}</span>
          <FavoriteIcon/>
        </div>
        <div className="wrapper-counter">
          <span className="counter-header">{counterCart}</span>
          <CartIcon/>
        </div>
      </div>
    );
  }
}

Header.propTypes = {
  counterCart: PropTypes.number,
  counterFavorite: PropTypes.number,
};

Header.defaultProps = {
  counterCart: 0,
  counterFavorite: 0,
};

export default Header;
