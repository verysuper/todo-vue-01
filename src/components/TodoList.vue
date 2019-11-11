<template>
  <div>
    <input type="text"
           class="todo-input"
           placeholder="what needs to be done"
           v-model="newTodo"
           @keyup.enter="addTodo"
    >
    <div v-for="todo in todos" :key="todo.id" class="todo-item">
      {{ todo.title }}
    </div>
  </div>
</template>

<script>
    export default {
        name: "todo-list",
        data(){
            return{
                newTodo:'',
                idForTodo:3,
                todos: [
                    {
                        'id': 1,
                        'title': 'Finish Vue Screencast',
                        'completed': false,
                        'editing': false,
                    },
                    {
                        'id': 2,
                        'title': 'Take over world',
                        'completed': false,
                        'editing': false,
                    },
                ]
            }
        },
        methods:{
            addTodo(){
                if (this.newTodo.trim().length == 0) {
                    return
                }
                this.todos.push({
                    'id': this.idForTodo,
                    'title': this.newTodo,
                    'completed': false,
                });
                this.newTodo = '';
                this.idForTodo++;
            }
        }
    }
</script>

<style lang="scss">
  .todo-input {
    width: 100%;
    padding: 10px 18px;
    font-size: 18px;
    margin-bottom: 16px;

    &:focus {
      outline: 0;
    }
  }
</style>
