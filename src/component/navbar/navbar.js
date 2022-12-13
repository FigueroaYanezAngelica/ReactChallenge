import "./navbar.css";
import Logo from "../../assets/images/Logo.svg";
import Fletch from "../../assets/images/Fletch.svg";
const navbar = () => {
    return (
        <div class="navbar" className="navbar">
            <div class="nav-brand" className="nav-brand">
                <img src={Logo} alt="brand" />
            </div>

            <div class="nav-logo" className="nav-logo">
                <img src={Fletch} alt="logo" />
            </div>
        </div>
    );
};

export default navbar;
