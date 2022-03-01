import React, { useState, useRef } from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
import Wrapper from '../Helpers/Helper';
import classes from './AddUser.module.css';


const AddUser = props => {
    const nameInputRef = useRef();
    const ageInputRef = useRef();

    const [error, setError] = useState();

    const addUserHandler = (event) => {
        event.preventDefault();
        const enteredName = nameInputRef.current.value;
        const enteredUserAge = ageInputRef.current.value;

        if(enteredName.trim().length === 0 || enteredUserAge.trim().length === 0) {
            setError({
                title: 'Invalid input!!',
                msg: 'Please enter a valid name and age (non-empty values)'
            });
            return;
        }
        if (+enteredUserAge < 1) {
            setError({
                title: 'Invalid age !!',
                msg: 'Please enter a valid age (greater than 1)'
            });
            return;
        }
        props.onAddUser(enteredName, enteredUserAge);
        // Rarely use refs to manipulate the dom, this is not advised. You can use useState solution
        // by setting up state, using setstate to empty values
        nameInputRef.current.value = '';
        ageInputRef.current.value = '';
    };

    const errorHandler = () => {
        setError(null);
    };


    return(
        <Wrapper>
            {error &&
                <ErrorModal
                    title={error.title}
                    msg={error.msg}
                    onConfirm={errorHandler}>
                </ErrorModal>}
            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor='username'>UserName:</label>
                    <input id="username" type="text" ref={nameInputRef}/>
                    <label htmlFor='age'>Age(Years):</label>
                    <input id="age" type="number" ref={ageInputRef}/>
                    <Button type='submit'>Add User</Button>
                </form>
            </Card>
        </Wrapper>
    );
};

export default AddUser;