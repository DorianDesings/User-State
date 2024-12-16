const SelectOptions = ({ select }) => {
	return (
		<select
			name=''
			onChange={value => {
				select(value);
			}}
		>
			<option value='default'>Por Defecto</option>
			<option value='name'>Por Nombre</option>
		</select>
	);
};

export default SelectOptions;
