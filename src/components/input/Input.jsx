import { StyledInputText } from './input.styles';

const Input = ({ text }) => {
	// console.log(Input);
	return (
		<StyledInputText
			type='text'
			placeholder='Verificación de usuario'
			onInput={e => text(e)}
		/>
	);
};
export default Input;
