package co.com.sofka.crud.services;

import co.com.sofka.crud.dtos.TodoListDto;
import co.com.sofka.crud.entities.TodoListEntity;
import co.com.sofka.crud.mappers.TodoListMapper;
import co.com.sofka.crud.repositories.TodoListRepository;
import co.com.sofka.crud.services.interfaces.ITodoListService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TodoListService implements ITodoListService {

    @Autowired
    private TodoListRepository todoListRepository;

    @Autowired
    private TodoListMapper mapper;

    @Override
    public List<TodoListDto> getAllListTask(){
        return mapper.toTodoListsDto((List<TodoListEntity>) todoListRepository.findAll());
    }

    @Override
    public Optional<TodoListDto> getListById(Long id){
        return todoListRepository.findById(id).map(todoListEntity -> mapper.toTodoListDto(todoListEntity));
    }

    @Override
    public TodoListDto saveList(TodoListDto todoListDto){
        TodoListEntity todoListEntity = mapper.toTodoListEntity(todoListDto);
        return mapper.toTodoListDto(todoListRepository.save(todoListEntity));
    }

    @Override
    public boolean deleteList(Long id){
        return getListById(id).map(list ->{
            todoListRepository.deleteById(id);
            return true;
        }).orElse(false);
    }

    @Override
    public TodoListDto update(TodoListDto todoListDto) {

        Optional<TodoListEntity> todoListEntity = todoListRepository.findById(todoListDto.getId());

        if(todoListEntity.isPresent()){

            todoListEntity.get().setId(todoListDto.getId());
            todoListEntity.get().setName(todoListDto.getName());

            return mapper.toTodoListDto(todoListRepository.save(todoListEntity.get()));

        }

        throw new RuntimeException("No existe el id para actualziar");

    }

}
