package co.com.sofka.crud.controllers;

import co.com.sofka.crud.services.TodoService;
import co.com.sofka.crud.entities.TodoEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class TodoController {

    @Autowired
    private TodoService service;

    @GetMapping(value = "api/todos")
    public Iterable<TodoEntity> list(){
        return service.list();
    }
    
    @PostMapping(value = "api/todo")
    public TodoEntity save(@RequestBody TodoEntity todoEntity){
        return service.save(todoEntity);
    }

    @PutMapping(value = "api/todo")
    public TodoEntity update(@RequestBody TodoEntity todoEntity){
        if(todoEntity.getId() != null){
            return service.save(todoEntity);
        }
        throw new RuntimeException("No existe el id para actualziar");
    }

    @DeleteMapping(value = "api/{id}/todo")
    public void delete(@PathVariable("id")Long id){
        service.delete(id);
    }

    @GetMapping(value = "api/{id}/todo")
    public TodoEntity get(@PathVariable("id") Long id){
        return service.get(id);
    }

}
