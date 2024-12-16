import {
	StyledDiv,
	StyledImg,
	StyledFlexUsers,
	StyledName,
	StyledUserName,
	StyledDivVerify,
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
			<StyledDivVerify>
				<StyledVerify $active={active}>
					{active ? 'Activo' : 'Desactivado'}
				</StyledVerify>
			</StyledDivVerify>
		</StyledDiv>
	);
};

export default PrintUser;
