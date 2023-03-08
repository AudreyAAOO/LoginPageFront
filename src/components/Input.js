

const Input = ({ name, state, setState, email, password }) => {

    return (
        <label htmlFor={name}>{name}
            <input
                required
                type={password ? "password" : email ? "email" : "text"}
                placeholder={name}
                id={name}
                value={state}
                autoComplete={password ? 'off' : 'on'}
                minLength={password && "8"}
                onChange={(event) => {
                    setState(event.target.value);
                }}
            />
        </label>
    )
}
export default Input;

