import React, { Component } from 'react';
import {ListGroup} from "reactstrap";

import classes from "./users.css";
import Title from "./title/title";
import user_data from "./user-data.json";
import User from "./user/user";


class Users extends Component {
    state = { 
        "user_data": user_data
    }

    deleteItem = (userId) => {
        const users = [...this.state.user_data]
        const index = users.findIndex(user => user.id === userId);
        users.splice([index], 1);
        if (users.length === 0) {
            delete users[index];
        }
        this.setState({
            "user_data": users
        });
    }


    render() { 
        return ( 
            <div className="main-contain">
                <Title />
                <div className="list-container">
                    <ListGroup>
                        {
                            this.state.user_data.map((user, index) => 
                                <User 
                                    user={user}
                                    key={user.id}
                                    deleteItem={this.deleteItem} />)
                        }
                    </ListGroup>
                </div>
            </div>
         );
    }
}

export default Users;
