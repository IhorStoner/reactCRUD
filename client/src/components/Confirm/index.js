import React from 'react';
import { Button, Portal, Segment } from 'semantic-ui-react';

const Confirm = ({ onClose, open, msg }) => {
  return (
    <div>
      <Portal onClose={() => onClose('')} open={open}>
        <Segment
          style={{
            left: '40%',
            position: 'fixed',
            top: '50%',
            zIndex: 1000,
          }}
        >
          <p>{msg}</p>
          <Button content='OK' onClick={() => onClose('')} />
        </Segment>
      </Portal>
    </div>
  );
};

export default Confirm;
