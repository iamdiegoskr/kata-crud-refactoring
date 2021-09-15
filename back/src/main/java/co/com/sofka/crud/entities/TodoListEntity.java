package co.com.sofka.crud.entities;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name = "todo_list")
public class TodoListEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String name;

    @Column()
    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER)//Una lista puede tener muchas tareas
    @JoinColumn(name = "listId")
    private Set<TodoEntity> todos;

    public TodoListEntity() {
    }

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
