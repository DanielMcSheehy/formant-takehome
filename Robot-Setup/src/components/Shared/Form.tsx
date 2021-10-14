import styled from 'styled-components';
import Button from './Button';

const Form = styled.form`
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  ${Button} {
    margin-bottom: 8px;
    margin-top: 14px;
  }
`;

export default Form;
