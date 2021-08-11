import React from 'react'

import {ReactComponent as ShoppngIcon} from '../../assets/shopping-bag.svg'
import {connect} from 'react-redux'
import {toggleCartHidden} from '../../redux/cart/cart.actions' 
import './cart-icon.styles.scss'

const CartIcon = ({toggleCartHidden}) => (
    <div className="cart-icon" onClick={toggleCartHidden}>
        <ShoppngIcon className='shopping-icon'/>
        <span className="item-count">0</span>
    </div>
)

const mapDispatchToProps = (dispatch) => {
    return{
        toggleCartHidden : () => dispatch(toggleCartHidden())
    }
}
export default connect(null,mapDispatchToProps)(CartIcon)