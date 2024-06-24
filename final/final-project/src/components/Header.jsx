import {Link} from "react-router-dom";

export default function Header(){
    return(
        <div className="header-container">
            <h1>Which Element Are You?</h1>
            <p>(Based on completely random things...)</p>
            <nav className="navbar">
                <div className="navbar-link"><Link to="/">Home</Link></div>
                <div className="navbar-link"><Link to="/quiz">Quiz</Link></div>
            </nav>
        </div>    
    )
}