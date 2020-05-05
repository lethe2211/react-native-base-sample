import React from 'react';
import { StyleSheet } from 'react-native';
import { Form, Item, Input, Button, Text, View } from "native-base";

export default function AddToDo() {
    return (
        <Form>
            <Item>
                <Input placeholder="Input ToDo" />
            </Item>
            <Button style={styles.button}>
                <Text>Add</Text>
            </Button>
        </Form>
    );
}

const styles = StyleSheet.create({
    container: {},
    button: {
        justifyContent: 'center'
    }
});