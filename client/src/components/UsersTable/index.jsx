import React from 'react';
import PropTypes from 'prop-types';
import { Button, Icon, Segment, Table } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { useUsersActions } from '../../redux/actions';
import { parseDate, parseDateWithMinutes } from '../../helpers/parseDate';

const UsersTable = ({ users, isUsersLoading, fetchUsers, children }) => {
  const { deleteUser } = useUsersActions();
  const titles = ['Name', 'Surname', 'Phone', 'Email', 'Date of Birthday', 'Updated At', 'Actions'];

  const handleDeleteUser = async (id) => {
    await deleteUser(id);
    fetchUsers();
  };

  return (
    <Segment loading={isUsersLoading}>
      <Table celled>
        <Table.Header>
          <Table.Row>
            {titles.map((title) => (
              <Table.HeaderCell key={title}>{title}</Table.HeaderCell>
            ))}
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {users.map((user) => (
            <Table.Row key={user._id}>
              <Table.Cell>{user.name}</Table.Cell>
              <Table.Cell>{user.surname}</Table.Cell>
              <Table.Cell>{user.phone}</Table.Cell>
              <Table.Cell>{user.email}</Table.Cell>
              <Table.Cell>{parseDate(user.dateOfBirthday)}</Table.Cell>
              <Table.Cell>{parseDateWithMinutes(user.updatedAt)}</Table.Cell>
              <Table.Cell textAlign='center'>
                <Link to={`/update/${user._id}`}>
                  <Button icon>
                    <Icon name='sync' />
                  </Button>
                </Link>
                <Button icon onClick={() => handleDeleteUser(user._id)}>
                  <Icon name='user delete' />
                </Button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan='7'>{children}</Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
    </Segment>
  );
};

UsersTable.propTypes = {
  users: PropTypes.array,
  isUsersLoading: PropTypes.bool,
  fetchUsers: PropTypes.func,
  children: PropTypes.any,
};

export default UsersTable;
