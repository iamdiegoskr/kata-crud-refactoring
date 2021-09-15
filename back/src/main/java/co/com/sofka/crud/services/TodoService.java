package co.com.sofka.crud.services;

import co.com.sofka.crud.entities.TodoEntity;
import co.com.sofka.crud.repositories.TodoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TodoService {

    @Autowired
    private TodoRepository repository;

    public Iterable<TodoEntity> list(){
        return repository.findAll();
    }

    public TodoEntity save(TodoEntity todoEntity){
        return repository.save(todoEntity);
    }

    public void delete(Long id){
        repository.delete(get(id));
    }

    public TodoEntity get(Long id){
         return repository.findById(id).orElseThrow();
    }

}
