import styled from 'styled-components';

const StyledDiv = styled.div`
	display: flex;
	border-radius: 20px;
	border: 2px solid brown;

	margin-top: 50px;
`;

const StyledImg = styled.img`
	border-radius: 100px;
`;

const StyledFlexUsers = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding-left: 30px;
`;

const StyledName = styled.p`
	font-size: 20px;
	margin: 0;
	margin-bottom: 10px;
`;
const StyledUserName = styled.p`
	font-size: 20px;
	margin: 0;
`;

const StyledVerify = styled.span`
	font-size: 20px;
`;
export {
	StyledDiv,
	StyledImg,
	StyledFlexUsers,
	StyledName,
	StyledUserName,
	StyledVerify
};
