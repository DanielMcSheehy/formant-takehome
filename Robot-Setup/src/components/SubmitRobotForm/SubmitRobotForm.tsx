import React, { useState } from 'react';
import styled from 'styled-components';
import { Form, TextInput, Button, FlexColumn } from '../Shared';
import { SubmitRobotFormInput } from '../../../../Webserver/types';
import ConfirmationPopup from './ConfirmationPopup';
import axios from 'axios';

const SubmitRobotForm: React.FC = () => {
  //! import the type from the web server.
  const [inputs, setInputs] = useState<SubmitRobotFormInput>({} as SubmitRobotFormInput);
  const [success, setSuccess] = useState<boolean>(false);
  const [failure, setFailure] = useState<boolean>(false);
  
  const messageType = success ? "success" : "failure";
  const message = success ? "Sucessfully Submitted" : "Error Submitting"
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    e.preventDefault();
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.SyntheticEvent): void => {
    e.preventDefault();
    
    // post
    try {
      await axios.post(
        `${import.meta.env.VITE_REACT_APP_API_URL}/v1/setup`,
        inputs,
      );
    } catch (error) {
      console.log(error) 
      setFailure(true)
      setSuccess(false)
    }
    setSuccess(true)
    setFailure(false)
  };

  return (
    <FormWrapper>
      <Form onSubmit={handleSubmit}>
        <TextInput
          title="Robot Name"
          onChange={(e: React.ChangeEvent<HTMLInputElement>): void => handleInputChange(e)}
          name="robotName"
          type="text"
          placeholder="Enter your robot's name"
          value={inputs.robotName}
          required
        />
       <TextInput
          title="Arm Count"
          onChange={(e: React.ChangeEvent<HTMLInputElement>): void => handleInputChange(e)}
          name="armCount"
          type="text"
          placeholder="Enter how many arms your robot has"
          value={inputs.armCount}
          required
        />
        <TextInput
          title="Camera Count"
          onChange={(e: React.ChangeEvent<HTMLInputElement>): void => handleInputChange(e)}
          name="cameraCount"
          type="text"
          placeholder="Enter how many cameras your robot has"
          value={inputs.cameraCount}
          required
        />
        <FlexColumn>
          <FormButton type="submit">
            Submit
          </FormButton>
        </FlexColumn>
        <ConfirmationPopup 
          show={success || failure}
          messageType={messageType}
          message={message}
        />
      </Form>
    </FormWrapper>
  );
};

export default SubmitRobotForm;

const FormWrapper = styled(FlexColumn)`
  height: 100%;
  width: 100%;
  position: absolute;

  ${Form} {
    width: 500px;
  }
`;

const FormButton = styled(Button)`
  margin-top: 12px;
`;