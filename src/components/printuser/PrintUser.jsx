import {
	StyledDiv,
	StyledImg,
	StyledFlexUsers,
	StyledName,
	StyledUserName,
	StyledVerify
} from './printuser.styles';

const PrintUser = ({ img, name, username, active }) => {
	return (
		<StyledDiv>
			<StyledImg src={img} />
			<StyledFlexUsers>
				<StyledName>{name}</StyledName>
				<StyledUserName>@{username}</StyledUserName>
			</StyledFlexUsers>
			<StyledVerify>{active ? 'Activo' : 'Desactivado'}</StyledVerify>
		</StyledDiv>
	);
};

export default PrintUser;
