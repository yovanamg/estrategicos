import styled from 'styled-components';
import FlatButton from 'material-ui/FlatButton';

export const Container = styled.div`
  height: 100vh;
  background: #003a8e !important;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Form = styled.div`
  height: 350px;
  width: 450px;
  background: #ffffff;
  padding: 25px 40px 10px 40px;
  border-radius: 25px;
  display: flex;
  flex-direction: column;
`;

export const Titulo = styled.div`
  font-size: 22px;
  color: #555555;
  height: 17%;
  text-align: center;
`;

export const Logo = styled.div`
  text-align: center;
`;

export const Content = styled.div`
  height: 40%;
  margin: 0 15% 0 15%;
`;

export const DivButton = styled.div`
  textAlign: right;
`;

export const ActionButton = styled(FlatButton)`
  display: flex;
  border-radius: 26px !important;
  &:hover ${ActionButton}{
    backgroundColor: #ffffff !important;
    box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.07); !important;
  }
`;

export const ImgLogo = styled.img`
  width: 50%;
`;
