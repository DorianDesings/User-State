import { StyledDiv } from './Checkbox.styles';

const Checkbox = ({ checkbox }) => {
	return (
		<StyledDiv>
			<label htmlFor=''>Sólo activos</label>
			<input type='checkbox' onChange={e => checkbox(e)} />
		</StyledDiv>
	);
};

export default Checkbox;
