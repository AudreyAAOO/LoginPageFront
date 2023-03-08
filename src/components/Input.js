

const Input = ({ name, state, setState, email, password }) => {

    return (
        <label htmlFor={name}>{name}
            <input
                setState={setState}
                type={password ? "password" : email ? "email" : "text"}
                placeholder={name}
                id={name}
                value={state}
                autoComplete={password ? 'off' : 'on'}
                onChange={(event) => {
                    console.log(event.target.value);
                    setState(event.target.value);

                }}
            />
        </label>
    )
}
export default Input;

