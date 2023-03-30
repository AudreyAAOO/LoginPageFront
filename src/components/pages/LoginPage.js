import { Link } from "react-router-dom";
import "../../assets/css/loginPage.css"

// import des composants
import Form from "../Form.jsx";


const LoginPage = ({ visible, setVisible, visible2, setVisible2, visible3, setVisible3 }) => {

    return (<>
        <div className="container_loginPage">

            <Form />
            <button
                onClick={() => {
                    setVisible(!visible); // on inverse la valeur de `visible` à chaque click
                }}
            >  Afficher/Masquer Modal n°1
            </button>
            <button
                onClick={() => {
                    setVisible2(!visible2); // on inverse la valeur de `visible2` à chaque click
                }}
            >  Afficher/Masquer Modal n°2
            </button>
            <button
                onClick={() => {
                    setVisible3(!visible3);
                }}
            >  Afficher/Masquer Modal n°3
            </button>
            <Link to={'/'}>RETOUR</Link>
        </div>
    </>)
}


export default LoginPage;