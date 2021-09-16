package co.com.sofka.crud.repositories;

import co.com.sofka.crud.entities.TodoEntity;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.List;
import java.util.Optional;

public interface TodoRepository extends CrudRepository<TodoEntity, Long> {


}
