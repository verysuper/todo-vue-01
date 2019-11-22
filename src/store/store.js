import Vue from 'vue'
import Vuex from 'vuex'
import db from '../firebase'

Vue.use(Vuex);
Vue.use(db);

export const store = new Vuex.Store({
  state:{
    filter: 'all',
    todos: []
  },
  getters:{ //reonly
    remaining(state){
      return state.todos.filter(todo => !todo.completed).length;
    },
    anyRemaining(state,getters) {
      return getters.remaining != 0
    },
    todosFiltered(state) {
      if (state.filter == 'all') {
        return state.todos
      } else if (state.filter == 'active') {
        return state.todos.filter(todo => !todo.completed)
      } else if (state.filter == 'completed') {
        return state.todos.filter(todo => todo.completed)
      }

      return state.todos
    },
    showClearCompletedButton(state) {
      return state.todos.filter(todo => todo.completed).length > 0
    },
  },
  mutations:{
    addTodo (state, todo) {
      state.todos.push(todo);
    },
    updateTodo(state,todo) {
      const index = state.todos.findIndex((item) => item.id == todo.id);
      state.todos.splice(index, 1, todo)
    },
    deleteTodo(state,id) {
      const index = state.todos.findIndex((item) => item.id == id)
      state.todos.splice(index, 1);
    },
    allChecked(state,checked) {
      state.todos.forEach((todo) => todo.completed = checked)
    },
    updateFilter(state, filter) {
      state.filter = filter
    },
    clearCompleted(state) {
      state.todos = state.todos.filter(todo => !todo.completed)
    },
    retrieveTodos(state,todos) {
      state.todos = todos
    },
  },
  actions:{
    retrieveTodos(context){
      let tempTodos = [];
      db.collection('todos').get()
        .then(querySnapshot=>{
          querySnapshot.forEach(doc=>{
            const data = {
              id: doc.id,
              title: doc.data().title,
              completed: doc.data().completed,
              timestamp: doc.data().timestamp,
            };
            tempTodos.push(data)
          })
        });
      context.commit('retrieveTodos',tempTodos);
    },
    addTodo (context, todo) {
      setTimeout(() => {
        context.commit('addTodo', todo)
      }, 1000)
    },
    updateTodo(context,todo) {
      setTimeout(() => {
        context.commit('updateTodo',todo);
      }, 1000)
    },
    deleteTodo(context,id) {
      setTimeout(() => {
        context.commit('deleteTodo',id);
      }, 1000)
    },
    allChecked(context,checked) {
      setTimeout(() => {
        context.commit('allChecked',checked);
      }, 1000)
    },
    updateFilter(context, filter) {
      setTimeout(() => {
        context.commit('updateFilter',filter);
      }, 1000)
    },
    clearCompleted(context) {
      setTimeout(() => {
        context.commit('clearCompleted');
      }, 1000)
    }
  }
});
