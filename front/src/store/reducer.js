
export function reducer(state, action) {
  switch (action.type) {
    case 'update-item':
      const todoUpItem = state.todo;
      const listUpdateEdit = todoUpItem.list.map((item) => {
        if (item.id === action.item.id) {
          return action.item;
        }
        return item;
      });
      todoUpItem.list = listUpdateEdit;
      todoUpItem.item = {};
      return { ...state, todo: todoUpItem };
    case 'delete-item':

      //
      console.log(state.todo.list); //Arreglo de listas
      console.log(action); //Id del elemento a eliminar

      //const arrayTask = state.todo.list;

      //arrayTask = {id:1,nameList:"leer":todos:[]}
      // const updateTask = arrayTask.filter((task)=>{
      //   return task.
      // })

      //
      const todoUpDelete = state.todo;
      const listUpdate = todoUpDelete.list.filter((item) => {
        return item.id !== action.id;
      });
      todoUpDelete.list = listUpdate;
      return { ...state, todo: todoUpDelete };


    case 'update-list':
      const todoUpList = state.todo;
      todoUpList.list = action.list;
      return { ...state, todo: todoUpList };
    case 'edit-item':
      const todoUpEdit = state.todo;
      todoUpEdit.item = action.item;
      return { ...state, todo: todoUpEdit };
    case 'add-item':
      const todoUp = state.todo.list;
      todoUp.push(action.item);
      return { ...state, todo: { list: todoUp, item: {} } };

    case 'add-category':
        const newListCategory = state.todo.list;
        newListCategory.push(action.item);
        return { ...state, list: newListCategory }

    case 'update-list-category':
        return { ...state, todo : {list: action.list} }

    case 'delete-category':
      const tasktUpdates = state.todo.list.filter((task) => {
          return task.id !== action.id;
      });
      return { ...state, todo : {list: tasktUpdates} }
    default:
      return state;
  }
}
