import React from 'react';
import styled from 'styled-components';
import { Color } from '../Shared';

interface IFlexRowProps {
    backgroundColor: string;
}

interface IConfirmationPopupProps {
    show: boolean;
    messageType: "success" | "failure";
    message: string;
}

const ConfirmationPopup: React.FC<IConfirmationPopupProps> = (props: IConfirmationPopupProps ): JSX.Element | null => {
  const {show, messageType, message} = props;
  if (!show) return null;

  const bgColor = messageType == 'success' ? Color.lime : Color.chili;
  return (
    <FlexRow backgroundColor={bgColor}>
        <p>{message}</p>
    </FlexRow>
  );
};

export default ConfirmationPopup;

const FlexRow = styled.div.attrs((props: IFlexRowProps) => ({
    backgroundColor: props.backgroundColor || Color.chili,
  }))`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${(p: IFlexRowProps): string => p.backgroundColor};
    color: ${Color.white};
    height: 50px;
    width: 200px;
    border-radius: 4px;
    margin-top: 20px;
`;
