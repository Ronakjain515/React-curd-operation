import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import {Row, Col, ListGroupItem} from "reactstrap";

import classes from "./user.css";


const User = (props) => {

    return (
        <ListGroupItem>
            <Row>
                <Col>
                    {props.user.name}
                </Col>
                <Col>
                    {props.user.phone}
                </Col>
                <Col>
                    {props.user.email}
                </Col>
                <Col className="delete-button">
                    <Button
                        variant="contained"
                        color="secondary"
                        onClick={() => props.deleteItem(props.user.id)}
                        startIcon={<DeleteIcon />}
                    >
                        Delete
                    </Button>
                </Col>
            </Row>
        </ListGroupItem>
    );
}

export default User;
