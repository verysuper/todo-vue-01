<template>
<div>
  <button v-if="showClearCompletedButton" @click="clearCompleted">Clear Completed</button>
</div>
</template>

<script>
    export default {
        name: 'todo-clear-completed',
        computed:{
            showClearCompletedButton(){
                return this.$store.getters.showClearCompletedButton
            }
        },
        methods: {
            clearCompleted() {
                this.$store.dispatch('clearCompleted');
            }
        }
    }
</script>

<style lang="scss" scoped>
  button {
    font-size: 14px;
    background-color: white;
    appearance: none;
    padding: 4px;

    &:hover {
      background: lightgreen;
    }

    &:focus {
      outline: none;
    }
  }
</style>
