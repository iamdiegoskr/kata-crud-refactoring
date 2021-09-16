package co.com.sofka.crud.services;

import co.com.sofka.crud.entities.TodoListEntity;
import co.com.sofka.crud.repositories.TodoListRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TodoListService {

    @Autowired
    private TodoListRepository todoListRepository;

    public List<TodoListEntity> getAllListTask(){
        return (List<TodoListEntity>) todoListRepository.findAll();
    }

    public Optional<TodoListEntity> getListById(Long id){
        return todoListRepository.findById(id);
    }

    public TodoListEntity saveList(TodoListEntity todoListEntity){
        return todoListRepository.save(todoListEntity);
    }

    public Boolean deleteList(Long id){
        return getListById(id).map(list ->{
            todoListRepository.deleteById(id);
            return true;
        }).orElse(false);
    }

}
