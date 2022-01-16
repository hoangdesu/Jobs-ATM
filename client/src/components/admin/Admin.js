import React, { useState, useEffect, useRef } from 'react';

import NavBar from '../navbar/NavBar';
import { Table, Button } from 'react-bootstrap';
import UserRow from './UserRow';
import axios from 'axios';

// List<User> sampleJobs = List.of(
//     new User(1L, "admin", "Ho Chi Minh city", "Jobs ATM company", "Fullstack developer", "admin"),
//         new User(1L, "admin", "Ho Chi Minh city", "Jobs ATM company", "Fullstack developer", "admin"),
//         new User(2L, "Hoang Nguyen", "Ho Chi Minh city", "National Bank Australia", "React developer", "employee"),
//         new User(3L, "Student recruiter", "Hanoi", "RMIT University", "Human resource", "employer"),
//         new User(4L, "Nguyen Tan Huy", "Danang", "Pro League", "IT manager", "employee"),
//         new User(2L, "Netto Pro", "Nghe An", "Netcompanry", "Tourism", "employee"),
//         new User(5L, "Somebody", "Hue", "Some company in Hue idk", "Digital design", "employer")
// );

const userData = [
    {
        id: 1,
        name: 'admin',
        location: 'Ho Chi Minh city',
        company: 'Jobs ATM company',
        specialization: 'Fullstack developer',
        role: 'admin',
    },
    {
        id: 2,
        name: 'Hoang Nguyen',
        location: 'Ho Chi Minh city',
        company: 'National Bank Australia',
        specialization: 'React developer',
        role: 'employee',
    },
    {
        id: 3,
        name: 'Nguyen Tan Huy',
        location: 'Da Nang',
        company: 'Pro League',
        specialization: 'IT manager',
        role: 'employee',
    },
    {
        id: 4,
        name: 'Student recruiter',
        location: 'Hanoi',
        company: 'RMIT University',
        specialization: 'Human resource',
        role: 'employer',
    },
    {
        id: 5,
        name: 'Kevin Nguyen',
        location: 'Vung Tau',
        company: 'Ba Ria tourist',
        specialization: 'Tourism',
        role: 'employee',
    },
    {
        id: 6,
        name: 'Doroke',
        location: 'remote',
        company: 'Rito Games',
        specialization: 'Pro gamer',
        role: 'employee',
    }
];

const Admin = () => {
    const [userList, setUserList] = useState([]);

    useEffect(() => {
        // axios
        //     .get('http://localhost:8910/v1/api/user/all')
        //     .then((res) => {
        //         //
        //     })
        //     .catch((e) => console.log(e));
        setUserList(userData);
    }, []);

    const editUser = () => {};

    const deleteUser = (id) => {
        // console.log(id);
        // const filteredList = userList.filter(user => {
        //     if (user.id !== id) return user;
        //     else return null;
        // })
        // console.log(filteredList)
        // setUserList(filteredList);
        setUserList(userList.filter((user) => (user.id !== id ? user : null)));
    };

    return (
        <div>
            <NavBar />
            <div className="container">
                <h1 className="mt-4 mb-4">Admin section</h1>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Location</th>
                            <th>Company</th>
                            <th>Specialization</th>
                            <th>Role</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {userList.map((user) => (
                            <UserRow
                                key={user.id}
                                user={user}
                                deleteUser={deleteUser}
                            />
                        ))}
                    </tbody>
                </Table>
            </div>
        </div>
    );
};

export default Admin;
