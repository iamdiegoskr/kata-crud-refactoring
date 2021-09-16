package co.com.sofka.crud.services.interfaces;

import co.com.sofka.crud.dtos.TodoListDto;

import java.util.List;
import java.util.Optional;

public interface ITodoListService {

    public List<TodoListDto> getAllListTask();
    public Optional<TodoListDto> getListById(Long id);
    public TodoListDto saveList(TodoListDto todoListDto);
    public boolean deleteList(Long id);
    public TodoListDto update(TodoListDto todoListDto);

}
