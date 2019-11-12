<template>
<div class="todo-item">
  <div class="todo-item-left">
    <input type="checkbox" v-model="completed">
    <div v-if="!editing"
         class="todo-item-label"
         @dblclick="editTodo"
         :class="{ completed : completed }"
    >
      {{ title }}
    </div>
    <input v-else
           type="text"
           v-model="title"
           class="todo-item-edit"
           @blur="doneEdit"
           @keyup.enter="doneEdit"
           @keyup.esc="cancelEdit"
           v-focus
    >
  </div>
  <div class="remove-item" @click="removeTodo(index)">
    &times;
  </div>
</div>
</template>

<script>
    export default {
        name: "todo-item",
        props:{
            todo:{
                type:Object,
                required:true,
            },
            index:{
                type: Number,
                required: true,
            }
        },
        data(){
            return {
                'id': this.todo.id,
                'title': this.todo.title,
                'completed': this.todo.completed,
                'editing': this.todo.editing,
                'beforeEditCache': '',
            }
        }
    }
</script>

<style scoped>

</style>
