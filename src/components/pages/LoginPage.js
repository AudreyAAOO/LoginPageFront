import "../../assets/css/loginPage.css"
import { useState } from "react";

// import des composants
import Form from "../Form";



const LoginPage = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (<>
        
        <Form
            email={email}
            password={password}
            setEmail={setEmail}
            setPassword={setPassword} />
    </>)



}


export default LoginPage;