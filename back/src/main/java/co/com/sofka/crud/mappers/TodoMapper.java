package co.com.sofka.crud.mappers;

import co.com.sofka.crud.dtos.TodoDto;
import co.com.sofka.crud.entities.TodoEntity;
import org.mapstruct.InheritInverseConfiguration;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface TodoMapper {


    TodoDto toTodoDto(TodoEntity todoEntity);
    List<TodoDto> toTodosDto(List<TodoEntity> todoEntities);

    @InheritInverseConfiguration
    TodoEntity toTodoEntity(TodoDto todoDto);
}
