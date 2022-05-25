import { Link } from "react-router-dom";

export function Home () {

    return <>

    <h1>Välkommen till nyhetsbrev!</h1>

    <nav>
        <ul>
            <li><Link to="/register">REGISTRERA DIG</Link></li>
            <li><Link to="/loggin">LOGGA IN</Link></li>
        </ul>
    </nav>
    
    </>
}