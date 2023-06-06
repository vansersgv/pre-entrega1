
import './CartWidget.css'



const CartWidget = () => {
    const imgcarrito = "https://cdn-icons-png.flaticon.com/512/107/107831.png";


    return (
        <div>
            <img className='imgcarrito' src={imgcarrito} alt="carrito" />
            <strong>7</strong>
        </div>
    )
}

export default CartWidget