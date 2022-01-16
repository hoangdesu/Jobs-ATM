import React, { useState, useRef } from 'react';
import { Button } from 'react-bootstrap';

const UserRow = (props) => {
    const { id, name, location, company, specialization, role } = props.user;
    const [inEditMode, setEditMode] = useState(false);
    const [nameInp, setNameInp] = useState(name);
    const [locationInp, setLocationInp] = useState(location);
    const [companyInp, setCompanyInp] = useState(company);
    const [specializationInp, setSpecializationInp] = useState(specialization);
    const [roleInp, setRoleInp] = useState(role);

    // const locationRef = useRef(null);
    // const companyRef = useRef(null);
    // const specializationRef = useRef(null);
    // const roleRef = useRef(null);
    
    const toggleEditMode = () => {
        // console.log(nameRef.current.value);
        if (inEditMode) setEditMode(false);
        else setEditMode(true);
    };
    
    const onDeleteHandler = () => {
        // return id;
        // console.log(props.deleteUser);
        props.deleteUser(id);

    };

    return (
        <tr>
            <td>{id}</td>
            <td>{!inEditMode ? nameInp : <input type="text" value={nameInp} onChange={(e) => setNameInp(e.target.value)} />}</td>
            <td>{!inEditMode ? locationInp : <input type="text" value={locationInp} onChange={(e) => setLocationInp(e.target.value)} />}</td>
            <td>{!inEditMode ? companyInp : <input type="text" value={companyInp} onChange={(e) => setCompanyInp(e.target.value)} />}</td>
            <td>{!inEditMode ? specializationInp : <input type="text" value={specializationInp} onChange={(e) => setSpecializationInp(e.target.value)} />}</td>
            <td>{!inEditMode ? roleInp : <input type="text" value={roleInp} onChange={(e) => setRoleInp(e.target.value)} />}</td>
            <td>
                <Button variant="secondary" onClick={toggleEditMode}>{!inEditMode ? 'Edit' : 'Save'}</Button>{' '}
                <Button variant="danger" onClick={onDeleteHandler}>Delete</Button>
            </td>
        </tr>
    );
};

export default UserRow;
