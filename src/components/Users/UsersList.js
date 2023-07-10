import classes from './UsersList.module.css'
import React from 'react'
import Card from '../UI/Card'


const UserList = (props) => {
    return <Card classname={classes.users}>
        <ul>
            {props.users.map(user =>
        
             <li key ={user.id}> {user.name} ({user.age} years old) </li>)}

        </ul>
    </Card>
}
export default UserList;
