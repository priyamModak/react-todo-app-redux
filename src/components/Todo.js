import React from "react";
import { connect } from "react-redux";
import { ListGroup, ListGroupItem } from "reactstrap";
import { FaCheckDouble } from "react-icons/fa";
import { removeTodo } from "../action/todo";


const Todo = ({todos, markComplete}) => {

    return (
        <ListGroup className="mt-5 mb-2">
            {
                todos.map(todo => (
                    <ListGroupItem key={todo.id}>
                        {todo.title}
                        <span className="float-right" onClick={() => markComplete(todo.id)}>
                            <FaCheckDouble/>
                        </span>
                    </ListGroupItem>
                ))
            }
        </ListGroup>
    )
}

const mapStateToProps = state => ({
    todos: state.todos
})

const matDispatchToProps = dispatch => ({
    markComplete: id => {
        dispatch(removeTodo(id))
    }
})

export default connect(mapStateToProps, matDispatchToProps)(Todo);