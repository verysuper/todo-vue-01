<template>
  <div>
    <button :class="{ active: filter == 'all' }" @click="changeFilter('all')">All</button>
    <button :class="{ active: filter == 'active' }" @click="changeFilter('active')">Active</button>
    <button :class="{ active: filter == 'completed' }" @click="changeFilter('completed')">Completed</button>
  </div>
</template>

<script>
    export default {
        name: 'todo-filtered',
        computed: {
            filter() {
                return this.$store.state.filter
            }
        },
        methods: {
            changeFilter(filter) {
                this.$store.dispatch('updateFilter',filter);
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
