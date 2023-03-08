import "../assets/css/form.css";

// import des composants
import Input from "./Input";

const Form = ({ email, password, setEmail, setPassword }) => {
	return (
		<form className="form">
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
				name={"password"}
				state={password}
				setState={setPassword}
				autoComplete={password}
			/>
		</form>
	);
};

export default Form;
