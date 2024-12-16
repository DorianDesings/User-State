import styled from 'styled-components';

const StyledDiv = styled.div`
	display: flex;
	border-radius: 20px;
	border: 2px solid orange;
	margin-top: 50px;
	width: 500px;
	box-shadow: orange 0px 0px 30px 0px;
`;

const StyledImg = styled.img`
	border-radius: 100px;
	height: 100px;
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

const StyledDivVerify = styled.div`
	display: flex;
	align-items: center;
	margin-left: auto;
	padding-right: 50px;
`;

const StyledVerify = styled.span`
	font-size: 20px;
	color: ${props => (props.$active ? 'green' : 'red')};
`;
export {
	StyledDiv,
	StyledImg,
	StyledFlexUsers,
	StyledName,
	StyledUserName,
	StyledDivVerify,
	StyledVerify
};
