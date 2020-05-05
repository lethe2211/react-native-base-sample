import React from "react";
import { Container, Left, Title, Body, Right, Content, Header, Text } from "native-base";
import AddToDo from "./AddToDo";
import ToDoList from "./ToDoList";

export default function HomeScreen() {
    const toDoList = [
        {id: "1", title: "ToDo 1", isCompleted: false},
        {id: "2", title: "ToDo 2", isCompleted: true}
    ];

    return (
        <Container>
            <Header>
                <Left />
            <Body>
                <Title>ToDo</Title>
            </Body>
            <Right />
            </Header>
            <Content>
                <AddToDo />
                <ToDoList toDoList={toDoList} />
            </Content>
        </Container>
    );    
}
