import React from 'react';
import { Button, Segment } from 'semantic-ui-react';
import { reduxForm, Field } from 'redux-form';
import axios from '../../axios';
import TextField from '../TextField';
import Form from 'semantic-ui-react/dist/commonjs/collections/Form';
import { connect } from 'react-redux';
import { parseDate } from '../../helpers/parseDate';

const UserForm = ({ handleSubmit, valid, submitting }) => {
  return (
    <Segment padded>
      <Form
        data-testid='form'
        width={5}
        onSubmit={handleSubmit}
        style={{ maxWidth: '500px', margin: '0 auto', display: 'flex', justifyContent: 'center', flexDirection: 'column' }}
      >
        <Field name='name' id='name' label='Name' component={TextField} placeholder='Name' />
        <Field name='surname' id='surname' label='Surname' component={TextField} placeholder='Surname' />
        <Field name='dateOfBirthday' id='dateOfBirthday' label='Date of birthday' component={TextField} placeholder='dd.mm.yyyy' />
        <Field name='phone' type='tel' id='phone' label='Phone' maxLength={10} component={TextField} placeholder='0XXYYYYYYY' />
        <Field name='email' id='email' label='Email' component={TextField} placeholder='Email' />
        <Button type='submit' color='green' disabled={!valid && !submitting} style={{ maxWidth: '100%', margin: '10px auto' }}>
          Submit
        </Button>
      </Form>
    </Segment>
  );
};

const validate = (values) => {
  const errors = {};

  if (!values.name) {
    errors.name = 'Required';
  }

  if (!values.surname) {
    errors.surname = 'Required';
  }

  const regDate = /^\d{2}[./-]\d{2}[./-]\d{4}$/;
  if (!regDate.test(values.dateOfBirthday)) {
    errors.dateOfBirthday = 'Wrong date!';
  }

  if (new Date(values.dateOfBirthday) > new Date(Date.now())) {
    errors.dateOfBirthday = 'Date is greater than current';
  }

  if (!values.dateOfBirthday) {
    errors.dateOfBirthday = 'Required';
  }

  const regExpPhone = new RegExp('^\\+?[0-9]{3}-?([0-9]{7}|[0-9]-[0-9]{2}-[0-9]{2}-[0-9]{2}|[0-9]{3}-[0-9]{2}-[0-9]-[0-9])$');
  if (!regExpPhone.test(values.phone) || values.phone.length !== 10) {
    errors.phone = 'Wrong phone format!';
  }

  if (!values.phone) {
    errors.phone = 'Required';
  }

  if (!values.email) {
    errors.email = 'Required';
  }

  const regExpEmail = new RegExp(
    "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$"
  );
  if (!regExpEmail.test(values.email)) {
    errors.email = 'Wrong email format!';
  }
  return errors;
};

const asyncValidate = async (values) => {
  if (!values.email) return;
  const response = await axios.get(`/api/users/is_exist?email=${values.email}`);

  if (response.data.is_exist) {
    throw { email: 'This email is already taken' };
  }
};

const updateUserAsyncValidate = async (values) => {
  if (!values.email || values.email === values.oldEmail) return;
  const response = await axios.get(`/api/users/is_exist?email=${values.email}`);

  if (response.data.is_exist) {
    throw { email: 'This email is already taken' };
  }
};

export const NewUserForm = reduxForm({
  form: 'newUserForm',
  validate,
  asyncValidate,
  asyncBlurFields: ['email'],
})(UserForm);

export let UpdateUserForm = reduxForm({
  form: 'updateUserForm',
  validate,
  updateUserAsyncValidate,
  asyncBlurFields: ['email'],
})(UserForm);

UpdateUserForm = connect((state) => ({
  initialValues: {
    name: state.users.selectedUser.name,
    surname: state.users.selectedUser.surname,
    phone: state.users.selectedUser.phone,
    email: state.users.selectedUser.email,
    dateOfBirthday: parseDate(state.users.selectedUser.dateOfBirthday),
    oldEmail: state.users.selectedUser.email,
  },
  enableReinitialize: true,
}))(UpdateUserForm);
