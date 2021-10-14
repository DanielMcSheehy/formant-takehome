import styled from 'styled-components';
import Color from './Color';

const Button = styled.button`
    padding: 12px 40px;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    cursor: pointer;
    position: relative;

    background: ${Color.black};
    color: ${Color.white};
    font-weight: 700;

    &:focus {
    outline: none;
    }
`;

export default Button;