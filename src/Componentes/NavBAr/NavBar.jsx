import CartWidget from '../CartWidget/CartWidget'
import './NavBAr.css'

const NavBar = () => {
    return (
        <header>
            <h1>Cerdeco</h1>
            <nav>
                <ul>
                    <li>Platos</li>
                    <li>Tazas</li>
                    <li>Cuencos</li>
                    <li>Jarrones</li>
                    <li>Mates</li>
                </ul>
            </nav>
            <CartWidget />
        </header>
    )
}



export default NavBar