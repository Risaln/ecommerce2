import React, { useEffect, useState } from 'react';
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';

function User() {
    const [users, setUsers] = useState();

    const fetchUsers = async () => {
        const response = await fetch('https://api.escuelajs.co/api/v1/users');
        const data = await response.json();

        // Generate random rating for each user
        const usersWithRating = data.map(user => ({
            ...user,
            rating: Math.floor(Math.random() * 5) + 1 // Generates a random rating between 1 and 5
        }));

        setUsers(usersWithRating);
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    console.log(users);

    return (
        <div className='m-5'>
            <MDBTable align='middle'>
                <MDBTableHead>
                    <tr>
                        <th scope='col'>Name</th>
                        <th scope='col'>Email</th>
                        <th scope='col'>Rating</th>
                    </tr>
                </MDBTableHead>
                <MDBTableBody>
                    {users ? (
                        users.map(user => (
                            <tr key={user.id}>
                                <td>
                                    <div className='d-flex align-items-center'>
                                        <img
                                            src={user.avatar}
                                            alt=''
                                            style={{ width: '45px', height: '45px' }}
                                            className='rounded-circle'
                                        />
                                        <div className='ms-3'>
                                            <p className='fw-bold mb-1'>{user.name}</p>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <p className='fw-normal mb-1'>{user.email}</p>
                                </td>
                                <td>
                                    <MDBBadge color='info'>{user.rating}⭐</MDBBadge>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan='3'>Loading...</td>
                        </tr>
                    )}
                </MDBTableBody>
            </MDBTable>
        </div>
    );
}

export default User;
