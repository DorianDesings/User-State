import { USERS } from '../../constants/userInfo';
import PrintUser from '../printuser/PrintUser';

const UserMap = () => {
	return (
		<>
			{USERS.map(userInfo => {
				return (
					<PrintUser
						key={userInfo.id}
						img={userInfo.profileImage}
						name={userInfo.name}
						username={userInfo.username}
						active={userInfo.active}
					/>
				);
			})}
		</>
	);
};
export default UserMap;
