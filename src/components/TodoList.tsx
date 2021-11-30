import * as React from "react";
import {Button, Checkbox, Flex, Heading, Input} from "@chakra-ui/react";
import {useStore} from "effector-react";
import {$store, remove, toggle, update} from "../store";

function TodoListItems() {
  const store = useStore($store);

  return (
    <>
      {store.todos.map(({id, done, text}) => (
        <Flex pt={2} key={id}>
          <Checkbox checked={done} onClick={() => toggle(id)}/>
          <Input mx={2} value={text} onChange={(e) => update({id, text: e.target.value})}/>
          <Button onClick={() => remove(id)}>Delete</Button>
        </Flex>
      ))}
    </>
  );
}

function TodoList() {
  return (
    <>
      <Heading>Todo List</Heading>
      <TodoListItems />
    </>
  );
}

export default TodoList;
