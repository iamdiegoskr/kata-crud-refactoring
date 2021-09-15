package co.com.sofka.crud.repositories;

import co.com.sofka.crud.entities.TodoEntity;
import org.springframework.data.repository.CrudRepository;

import java.util.List;
import java.util.Optional;

public interface TodoRepository extends CrudRepository<TodoEntity, Long> {

    // get todos by id List Query Methods
    //Optional<List<TodoEntity>> findByIdCategory(int idCategory);

}
