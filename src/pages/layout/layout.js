import {Link} from "react-router-dom";
import Home from "../home/home";

const Layout=()=> {
    return <div>
        <header>
            <Link className="site-logo" to="/">#VanLife</Link>
            <nav>
        <Link to='/home'>Home</Link>
        <Link to='/about'>About Van</Link>
            </nav>
        </header>
        <Home/>
    </div>
}

export default Layout