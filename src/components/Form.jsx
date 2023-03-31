import React from "react";
import "../assets/css/form.css";
import { useState } from "react";

// import des composants
import Input from "./Input";

const Form = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = () => {
		let char = `${email.indexOf("@")}`;
		let result = `${email.substring(0, char)}`;
		alert("Bonjour " + result);
	};

	return (
		<form className="form" onSubmit={handleSubmit}>
			<h2>LOGIN</h2>
			<Input
				email={true}
				name={"email"}
				state={email}
				setState={setEmail}
				autoComplete={email}
			/>

			<Input
				password={true}
				name={"password (min 8 characters)"}
				state={password}
				setState={setPassword}
				autoComplete={password}
			/>
			<button>DONE</button>
		</form>
	);
};

export default Form;
