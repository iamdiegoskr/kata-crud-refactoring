package co.com.sofka.crud.dtos;

import co.com.sofka.crud.entities.TodoEntity;

import java.util.Set;

public class TodoListDto {

    private Long id;
    private String name;
    private Set<TodoEntity> todos;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Set<TodoEntity> getTodos() {
        return todos;
    }

    public void setTodos(Set<TodoEntity> todos) {
        this.todos = todos;
    }
}
