package co.com.sofka.crud.services;

import co.com.sofka.crud.dtos.TodoListDto;
import co.com.sofka.crud.entities.TodoListEntity;
import co.com.sofka.crud.mappers.TodoListMapper;
import co.com.sofka.crud.repositories.TodoListRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TodoListService {

    @Autowired
    private TodoListRepository todoListRepository;

    @Autowired
    private TodoListMapper mapper;

    public List<TodoListDto> getAllListTask(){
        return mapper.toTodoListsDto((List<TodoListEntity>) todoListRepository.findAll());
    }

    public Optional<TodoListDto> getListById(Long id){
        return todoListRepository.findById(id).map(todoListEntity -> mapper.toTodoListDto(todoListEntity));
    }

    public TodoListDto saveList(TodoListDto todoListDto){
        TodoListEntity todoListEntity = mapper.toTodoListEntity(todoListDto);
        return mapper.toTodoListDto(todoListRepository.save(todoListEntity));
    }

    public Boolean deleteList(Long id){
        return getListById(id).map(list ->{
            todoListRepository.deleteById(id);
            return true;
        }).orElse(false);
    }

}
