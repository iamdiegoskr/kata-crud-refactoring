package co.com.sofka.crud.controllers;

import co.com.sofka.crud.entities.TodoListEntity;
import co.com.sofka.crud.services.TodoListService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("api/task")
public class TodoListController {

    @Autowired
    private TodoListService service;

    @GetMapping()
    public List<TodoListEntity> getAllList(){
        return service.getAllListTask();
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity<TodoListEntity> getListById(@PathVariable() Long id){
        return service.getListById(id).map(todoListEntity -> {
            return new ResponseEntity<>(todoListEntity, HttpStatus.OK);
        }).orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @PostMapping(value = "/create")
    public ResponseEntity<TodoListEntity> saveList(@RequestBody TodoListEntity todoListEntity){
        return new ResponseEntity<>(service.saveList(todoListEntity),HttpStatus.CREATED);
    }

    @DeleteMapping(value = "delete/{id}")
    public ResponseEntity deleteList(@PathVariable() Long id){

        if(service.deleteList(id)){
            return new ResponseEntity<>(HttpStatus.OK);
        }
        return new ResponseEntity(HttpStatus.NOT_FOUND);
    }
}
