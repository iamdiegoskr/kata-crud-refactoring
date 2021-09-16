package co.com.sofka.crud.services;

import co.com.sofka.crud.dtos.TodoDto;
import co.com.sofka.crud.entities.TodoEntity;
import co.com.sofka.crud.mappers.TodoMapper;
import co.com.sofka.crud.repositories.TodoRepository;
import co.com.sofka.crud.services.interfaces.ITodoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class TodoService implements ITodoService {

    @Autowired
    private TodoRepository repository;

    @Autowired
    private TodoMapper mapper;

    @Override
    public Iterable<TodoDto> list(){
        List<TodoEntity> todos = (List<TodoEntity>) repository.findAll();
        return mapper.toTodosDto(todos);
    }

    @Override
    public TodoDto save(TodoDto todoDto){

        TodoEntity todoEntity = mapper.toTodoEntity(todoDto);
        return mapper.toTodoDto(repository.save(todoEntity));
    }

    @Override
    public void delete(Long id){
        TodoEntity todoEntity = mapper.toTodoEntity(get(id));
        repository.delete(todoEntity);
    }

    @Override
    public TodoDto get(Long id){
        return repository.findById(id)
                .map(todoEntity -> mapper.toTodoDto(todoEntity))
                .orElseThrow();
    }

}
