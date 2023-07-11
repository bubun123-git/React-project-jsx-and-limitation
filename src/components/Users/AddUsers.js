import React, { useState, useRef } from "react";
import Card from "../UI/Card";
import classes from './AddUser.module.css';
import Button from "../UI/Button";
import Wrapper from "../Helper/Wrapper";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
    const nameInputRef = useRef();
    const ageInputRef = useRef();

    // const [enteredUsername, setEnteredUsername] = useState('');
    // const [enteredAge, setEnteredAge] = useState('');
    const [error, setError] = useState();

    const addUserHandler = (event) => {
        event.preventDefault();
        const enteredname =nameInputRef.current.value;
        const entereduserage= ageInputRef.current.value;


        if (enteredname.trim().length === 0 || entereduserage.trim().length === 0) {
            setError({
                title: 'Invalid Input',
                message: "Please enter a valid name and age"
            })
            return;
        }
        if (+entereduserage < 1) {
            setError({
                title: 'Invalid Input',
                message: "Please enter a valid name and age"
            })
            return;
        }
        props.onAddUser(enteredname, entereduserage);
        nameInputRef.current.value=''
        ageInputRef.current.value=''
        
    }
    // const usernameChangeHandler = (event) => {
    //     setEnteredUsername(event.target.value)
    // }
    // const ageChangeHandler = (event) => {
    //     setEnteredAge(event.target.value)
    // }
    const errorHandler = () => {
        setError(null)
    }
    return (
        <Wrapper>
            {error && < ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}></ErrorModal>}
            <Card classname={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor='username'>Username</label>
                    <input id='username' type='text' ref={nameInputRef} />
                    <label htmlFor='age'>Age(Years)</label>
                    <input id='age' type='number'  ref={ageInputRef} />
                    <Button type='submit'>Add User</Button>
                </form>

            </Card>
        </Wrapper>
    );
}

export default AddUser;
