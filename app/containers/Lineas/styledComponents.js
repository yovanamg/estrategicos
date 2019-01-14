import styled from 'styled-components';
import FlatButton from 'material-ui/FlatButton';
import CloseIcon from 'material-ui/svg-icons/navigation/close';
const font = 'Avenir';

export const MainDivStyled = styled.div`
  width: 100%;
  border-radius: 2px;
  background-color: #ffffff;
  box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.12);
  border-style: solid;
  border-width: 1px;
  border-imageSource: linear-gradient(to bottom, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.1) 5%, rgba(255, 255, 255, 0) 20%, rgba(255, 255, 255, 0));
  border-imageSlice: 1;
  margin: 0 auto;
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Number = styled.div`
  background-color: #006cb9 !important;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  text-align: center;
  color: white;
  margin-right: 25px;
`;

export const Title = styled.div`
  font-size: 20px;
  font-weight: 900;
  text-align: left;
  color: #555555;
`;

export const TitleQuestion = styled.div`
  margin: 15px 0 0 7.5%;
  font-size: 16px;
  font-weight: 500;
  text-align: left;
  color: #555555;
  width: 26%;
  float: left;
`;

export const LineasContainer = styled.div`
  background-color: #f3f3f3;
  width: 100%;
  min-height: calc(120vh - 220px);
  float: left;
  padding: 3% 120px 32px 120px;
`;

export const LoaderContainer = styled.div`
  float: left;
  width: 100%;
  text-align: center;
  margin-top: 50px;
`;

export const StyledFlatButton = styled(FlatButton)`
  margin-right: 8px;
`;

export const DialogTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
`;

export const DialogTitle = styled.div`
  font-size: 24px;
  margin-left: 7%;
  font-family: ${font};
  font-weight: 800;
  color: #494949;
`;

export const FormContainer = styled.div`
  display:flex;
  justify-content: space-between;
  margin: 10px 0 5px 50px;
  color: #006abb;
  line-height: 2.3;
`;

export const FormContainerLeftSide = styled.div`
  display:flex;
  justify-content: space-between;
  margin: 10px 0 0 49px;
  color: #006abb;
  width: 35%;
  float: left;
`;

export const FormContainerRightSide = styled.div`
  display:flex;
  justify-content: space-between;
  margin: 10px 0 0 0;
  color: #006abb;
  width: 50%;
  float: right;
`;

export const TwoItems = styled.div`
  width: 100%;
  display: inline-block;
`;

export const StyledClosedIcon = styled(CloseIcon)`
  cursor: pointer;
`;

export const MessageEmpty = styled.div`
  text-align: center;
  font-size: 25px;
  letter-spacing: 0.7px;
  padding-top: 3%;
  margin-bottom: 2%
`;

export const ImgEmpty = styled.img`
`;

export const ContainerEmpty = styled.div`
  text-align: center;
`;
