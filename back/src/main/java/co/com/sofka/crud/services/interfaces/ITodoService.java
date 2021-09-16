package co.com.sofka.crud.services.interfaces;

import co.com.sofka.crud.dtos.TodoDto;

public interface ITodoService {

    public Iterable<TodoDto> list();
    public TodoDto save(TodoDto todoDto);
    public void delete(Long id);
    public TodoDto get(Long id);

}
