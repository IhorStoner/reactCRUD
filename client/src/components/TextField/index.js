import { Form } from 'semantic-ui-react';
import './style.scss';
const TextField = ({ input, label, type, meta: { asyncValidating, touched, error, warning }, ...rest }) => {
  const message = error || warning;

  return (
    <Form.Field style={{ position: 'relative', margin: '0 auto', width: '100%' }}>
      <Form.Input
        type={type}
        label={label}
        fluid
        loading={asyncValidating}
        {...input}
        {...rest}
        error={
          touched &&
          message && {
            content: message,
            pointing: 'left',
          }
        }
      />
    </Form.Field>
  );
};

export default TextField;
