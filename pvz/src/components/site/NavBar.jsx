import { Link } from "react-router-dom";


const NavBar = () => {

    return (
        <ul>
            <li><Link to="/">home</Link></li>
            <li><Link to="/stand">ledai</Link></li>
            <li><Link to="/pricelist">products</Link></li>
            <li><Link to="/test">test</Link></li>
            
        </ul>
    );
}

export default NavBar;