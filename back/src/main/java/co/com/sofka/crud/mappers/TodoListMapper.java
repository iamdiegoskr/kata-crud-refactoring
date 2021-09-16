package co.com.sofka.crud.mappers;


import co.com.sofka.crud.dtos.TodoListDto;
import co.com.sofka.crud.entities.TodoListEntity;
import org.mapstruct.InheritInverseConfiguration;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface TodoListMapper {

    TodoListDto toTodoListDto(TodoListEntity todoListEntity);
    List<TodoListDto> toTodoListsDto(List<TodoListEntity> todoListEntities);

    @InheritInverseConfiguration
    TodoListEntity toTodoListEntity(TodoListDto todoListDto);
}
