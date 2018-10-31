var ex1 =  new Vue({
  el: '#example-1',
  data: {
    message: "Big Bang"
  },
  computed: {
    reversedMessage: function () {
      return this.message.split('').reverse().join('');
    }
  }
});

var ex2 = new Vue({
  el: "#example-2",
  data: {
    firstName : '',
    lastName : ''
  },
  computed: {
    fullName: {
      get: function () {
        return this.firstName + ' ' + this.lastName;
      },
      set: function (value) {
        var names = value.split(' ');

        this.firstName = names[0];
        this.lastName = names[1];
      }
    }
  }
});

var ex3 = new Vue({
  el: "#example-3",
  data: {
    question: '',
    answer: 'Eu não consigo responer a não ser que você faça uma pergunta!'
  },
  watch: {
    question: function (newQuestion, oldQuestion) {
      this.answer = "Esperando você concluir a pergunta";
      this.debouncedGetAnswer();
    }
  },
  created: function () {
    this.debouncedGetAnswer = _.debounce(this.getAnswer, 500)
  },
  methods: {
    getAnswer: function () {
      if (this.question.indexOf('?') === -1) {
        this.answer = 'É uma pergunta?';
        return;
      }

      this.answer = 'Pensando...';

      var vm = this;

      axios.get('https://yesno.wtf/api')
        .then(function (response) {
          vm.answer = _.capitalize(response.data.answer);
        })
        .catch(function (error) {
          vm.answer = 'Puts, não consegui pegar a resposa =/ <br><br> Erro: ' + error;
        });
    }
  }
});


var ex4 = new Vue({
  el: "#example-4",
  data: {
    loginType: "username"
  },
  methods: {
    toggle: function () {
      this.loginType = this.loginType === 'username' ? 'email' : 'username';
    }
  }
});

var ex5 = new Vue({
  el: "#example-5",
  data: {
    number: 1
  },
  computed: {
    isOdd : function () {
      return this.number % 2 !== 0 ? true : false;
    }
  },
  methods: {
    next: function () {
      ++this.number;
    }
  }
});

Vue.component('todo-item', {
  template: `
    <li>
      {{id}} - {{title}}
      <button type="button" v-on:click="$emit('remove')">Remove</button>
    </li>
  `,
  props: ['id', 'title']
});

var ex6 = new Vue({
  el: '#example-6',
  data: {
    newTodoText: '',
    todos: [
      {
        id: 1,
        title: 'Do the dishes'
      },
      {
        id: 2,
        title: 'Take out the trash'
      },
      {
        id: 3,
        title: 'Mow the lawn'
      }
    ],
    nextTodoId: 4
  },
  methods: {
    addNewTodo: function () {
      this.todos.push({
        id: this.nextTodoId++,
        title: this.newTodoText
      });
      this.newTodoText = '';
    }
  }
})

var ex7 = new Vue({
  el: '#example-7',
  methods: {
    al: function (message) {
      alert(message);
    }
  }
});

var ex8 = new Vue({
  el: '#example-8',
  data: {
    checked: ''
  }
})

var ex9 = new Vue({
  el: '#example-9',
  data: {
    pick: {}
  }
})
