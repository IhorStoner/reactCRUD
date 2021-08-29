import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../components/Header';
import { UpdateUserForm } from '../../components/UserForm';
import axios from '../../axios';
import Confirm from '../../components/Confirm';
import { useUsersActions } from '../../redux/actions';

const UpdateUserPage = () => {
  const [confirmMsg, setConfirmMsg] = useState('');
  const { id } = useParams();
  const { fetchSelectedUser } = useUsersActions();

  useEffect(() => {
    fetchSelectedUser(id);
  }, [id]);

  const onSubmit = useCallback(
    async (values) => {
      await axios
        .put(`/api/users/${id}`, {
          ...values,
          updatedAt: Date.now(),
        })
        .then((res) => {
          setConfirmMsg('User has been updated!');
        })
        .catch((err) => {
          setConfirmMsg('The user was not updated. Please enter correct data');
        });
    },
    [id]
  );

  return (
    <>
      <Header />
      <UpdateUserForm onSubmit={onSubmit} />
      <Confirm msg={confirmMsg} onClose={setConfirmMsg} open={confirmMsg} />
    </>
  );
};

export default UpdateUserPage;
