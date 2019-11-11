<template>
  <div>
    <input type="text"
           class="todo-input"
           placeholder="what needs to be done"
           v-model="newTodo"
    >
    {{ newTodo }}
  </div>
</template>

<script>
    export default {
        name: "todo-list",
        data(){
            return{
                newTodo:'',
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
