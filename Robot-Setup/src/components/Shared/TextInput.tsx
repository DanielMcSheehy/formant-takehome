import styled from 'styled-components';
import Color from './Color';

const TextInput = styled.input`
  width: 500px;
  box-sizing: border-box;
  padding: 0 15px;
  min-height: 27px;
  background: none;
  border: none;
  border-bottom: 1px solid ${Color.black};
  margin-bottom: 20px;
  padding-left: 0px;
  height: 34px;
  color: ${Color.black};
  line-height: 40px;
  font-size: 24px;

  &:focus, &:hover {
    outline: none;
    ::placeholder {
      Color: ${Color.black};
    }
  }
`;

export default TextInput;
