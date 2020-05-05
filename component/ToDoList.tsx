import React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import { View, Text, ListItem, Body, Left, Right, Icon } from 'native-base';

type ToDoListProp = {
    toDoList: [{
        id: string,
        title: string,
        isCompleted: boolean    
    }]
};
export default function ToDoList({ toDoList }: ToDoListProp) {
    return (
        <FlatList
            data={toDoList}
            renderItem={({ item, index }) => (
                <ListItem
                    onPress={() => {}}>
                    <Left>
                        <Icon name={(item.isCompleted)? "md-checkmark-circle" : "md-checkmark"} />
                    </Left>
                    <Body>
                        <Text>{item.title}</Text>
                    </Body>
                    <Right>
                        <Icon name="ios-close" />
                    </Right>
                </ListItem>
            )}
            keyExtractor={(item) => item.id}
        />
    );
}