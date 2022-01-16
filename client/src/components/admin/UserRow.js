import React from 'react';
import { Button } from 'react-bootstrap';

const UserRow = (props) => {
    const { id, name, location, company, specialization, role } = props.user;
    
    const onEditHandler = () => {
        
    };
    
    const onDeleteHandler = () => {
        // return id;
        // console.log(props.deleteUser);
        props.deleteUser(id);

    };

    return (
        <tr>
            <th>{id}</th>
            <th>{name}</th>
            <th>{location}</th>
            <th>{company}</th>
            <th>{specialization}</th>
            <th>{role}</th>
            <th>
                <Button variant="secondary" onClick={onEditHandler}>Edit</Button>{' '}
                <Button variant="danger" onClick={onDeleteHandler}>Delete</Button>
            </th>
        </tr>
    );
};

export default UserRow;
