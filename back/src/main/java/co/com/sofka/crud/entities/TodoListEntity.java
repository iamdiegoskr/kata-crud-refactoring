package co.com.sofka.crud.entities;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name = "todo_list")
public class TodoListEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idList;

    @Column
    private String nameList;

    @Column()
    @OneToMany(mappedBy = "groupListId") //Una lista puede tener muchas tareas
    private Set<TodoEntity> todos;

    public TodoListEntity() {
    }

    public Long getIdList() {
        return idList;
    }

    public void setIdList(Long idList) {
        this.idList = idList;
    }

    public String getNameList() {
        return nameList;
    }

    public void setNameList(String nameList) {
        this.nameList = nameList;
    }

    public Set<TodoEntity> getTodos() {
        return todos;
    }

    public void setTodos(Set<TodoEntity> todos) {
        this.todos = todos;
    }
}
