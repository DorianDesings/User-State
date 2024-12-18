import { useState } from 'react';
import Container from './components/container/Container';
import ContainerOptions from './components/containeroptions/ContainerOptions';
import Input from './components/input/Input';

import Checkbox from './components/checkbox/Checkbox';
import SelectOptions from './components/select/Select';
import UserMap from './components/usersMap/UserMap';
import { USERS } from './constants/userInfo';
import { GlobalStyles } from './styles/GlobalStyles';

const App = () => {
	const [searchUserName, setSearchUserName] = useState('');
	const [verifyActiveUser, setVerifyActiveUser] = useState(false);
	const [selectOptionUser, setSelectOptionUser] = useState('');

	let filteredUsers = filterByActive(USERS, verifyActiveUser);
	filteredUsers = filterByName(filteredUsers, searchUserName);
	filteredUsers = filterByUser(filteredUsers, selectOptionUser);

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
							setSearchUserName(event.target.value);
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
				<UserMap users={filteredUsers} />
			</Container>
		</>
	);
};

export default App;

const filterByActive = (users, onlyActive) => {
	if (!onlyActive) return users;
	const filteredUsers = users.filter(user => user.active);
	return filteredUsers;
};

const filterByName = (users, searchUserName) => {
	if (!searchUserName) return users;
	return users.filter(user =>
		user.name.toLowerCase().includes(searchUserName.toLocaleLowerCase())
	);
};

const filterByUser = (users, selectOptionUser) => {
	if (selectOptionUser === 'default') return users;

	const sortUsers = [...users].sort((a, b) => {
		if (selectOptionUser === 'name') {
			return a.name.localeCompare(b.name);
		}
	});

	return sortUsers;
};

// const searchUser = USERS.filter(user => {
// 	if (searchUserName) {
// 		return user.name
// 			.toLowerCase()
// 			.includes(searchUserName.toLocaleLowerCase());
// 	}
// 	return user;
// });

// const searchUser = searchUserName
// 	? USERS.filter(user =>
// 			user.name.toLowerCase().includes(searchUserName.toLowerCase())
// 		)
// 	: USERS;

/////

// const filterUser = USERS.filter(user => {
// 	// console.log('verify filter', verifyActiveUser);
// 	const activeUser = verifyActiveUser ? user.active : true;

// 	return activeUser;
// });

/////

/* const sortUser = [...USERS].sort((a, b) => {
		if (selectOptionUser === 'name') {
			return a.name.localeCompare(b.name);
		}
	}); */

// const sortUser =
// 	selectOptionUser === 'name'
// 		? [...USERS].sort((a, b) => a.name.localeCompare(b.name))
// 		: [...USERS];

// const filterUser = USERS.filter(user => {
// 	if (verifyActiveUser) {
// 		return user.active;
// 	}
// 	return user;
// });
