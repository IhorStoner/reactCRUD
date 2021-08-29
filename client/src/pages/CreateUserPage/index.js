import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { reset } from 'redux-form';
import Header from '../../components/Header';
import { NewUserForm } from '../../components/UserForm';
import axios from '../../axios';
import Confirm from '../../components/Confirm';

const CreateUserPage = () => {
  const [confirmMsg, setConfirmMsg] = useState('');
  const dispatch = useDispatch();

  const onSubmit = useCallback(async (values) => {
    const val = values.dateOfBirthday.split('.');
    const dateOfBirhtday = new Date(`${val[1]}.${val[0]}.${val[2]}`);

    await axios
      .post(`/api/users`, {
        ...values,
        dateOfBirthday: dateOfBirhtday,
      })
      .then((res) => {
        setConfirmMsg('User has been created!');
        dispatch(reset('newUserForm'));
      })
      .catch((err) => {
        setConfirmMsg('The user was not created. Please enter correct data');
      });
  }, []);

  return (
    <div>
      <Header />
      <NewUserForm onSubmit={onSubmit} />
      <Confirm msg={confirmMsg} onClose={setConfirmMsg} open={confirmMsg} />
    </div>
  );
};

export default CreateUserPage;
