package co.com.sofka.crud.controllers;

import co.com.sofka.crud.dtos.TodoListDto;
import co.com.sofka.crud.services.interfaces.ITodoListService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("api/task")
public class TodoListController {

    @Autowired
    private ITodoListService service;

    @GetMapping()
    public List<TodoListDto> getAllList(){
        return service.getAllListTask();
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity<TodoListDto> getListById(@PathVariable() Long id){
        return service.getListById(id)
                .map(todoListDto -> new ResponseEntity<>(todoListDto, HttpStatus.OK))
                .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @PostMapping(value = "/create")
    public ResponseEntity<TodoListDto> saveList(@RequestBody TodoListDto todoListDto){
        return new ResponseEntity<>(service.saveList(todoListDto),HttpStatus.CREATED);
    }

    @DeleteMapping(value = "delete/{id}")
    public ResponseEntity deleteList(@PathVariable() Long id){

        if(service.deleteList(id)){
            return new ResponseEntity<>(HttpStatus.OK);
        }
        return new ResponseEntity(HttpStatus.NOT_FOUND);
    }
}
