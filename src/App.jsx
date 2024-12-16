import { useState } from 'react';
import Container from './components/container/Container';
import ContainerOptions from './components/containeroptions/ContainerOptions';
import Input from './components/input/Input';

import { GlobalStyles } from './styles/GlobalStyles';
import UserMap from './components/usersMap/UserMap';
import Checkbox from './components/checkbox/Checkbox';
import SelectOptions from './components/select/Select';
import { USERS } from './constants/userInfo';

const App = () => {
	const [verifyUserName, setVerifyUserName] = useState('');
	const [verifyActiveUser, setVerifyActiveUser] = useState(false);
	const [selectOptionUser, setSelectOptionUser] = useState('');

	const filterUser = USERS.filter(user => {
		console.log('verificacion filtro', verifyActiveUser);
		const activeUser = verifyActiveUser ? user.active : true;

		return activeUser;
	});

	return (
		<>
			<GlobalStyles />
			<Container>
				<h1>Listado de usuarios</h1>
				<ContainerOptions>
					<Input
						type='text'
						text={event => {
							// console.log(event.target.value);
							setVerifyUserName(event.target.value);
						}}
					/>
					<Checkbox
						type='checkbox'
						checkbox={event => {
							// console.log(event.target.checked);
							setVerifyActiveUser(event.target.checked);
						}}
					/>
					<SelectOptions
						select={event => {
							// console.log(event.target.value);
							setSelectOptionUser(event.target.value);
						}}
					/>
				</ContainerOptions>
				<UserMap users={filterUser} />
			</Container>
		</>
	);
};

export default App;
