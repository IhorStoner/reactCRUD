import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Header from '../../components/Header';
import { useUsersActions } from '../../redux/actions';
import { getCountPages, getUsers, getUsersLoading } from '../../redux/selectors/usersSelectors';
import UsersTable from '../../components/UsersTable';
import { Pagination } from 'semantic-ui-react';

const HomePage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 10;

  const { fetchUsers } = useUsersActions();

  const users = useSelector(getUsers);
  const isUsersLoading = useSelector(getUsersLoading);
  const totalPages = useSelector(getCountPages);

  useEffect(() => {
    fetchUsers({ currentPage, perPage });
  }, [currentPage]);

  return (
    <>
      <Header />
      <UsersTable users={users} isUsersLoading={isUsersLoading} fetchUsers={() => fetchUsers({ currentPage, perPage })}>
        <Pagination defaultActivePage={currentPage} totalPages={totalPages} onPageChange={(e, data) => setCurrentPage(data.activePage)} />
      </UsersTable>
    </>
  );
};

export default HomePage;
