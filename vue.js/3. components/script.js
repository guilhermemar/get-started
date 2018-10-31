Vue.component('button-counter', {
  data: function () {
    return {
      count: 0
    }
  },
  template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
});

new Vue({el: '#app1'});

Vue.component('blog-post-simple', {
  props: ['title'],
  template: `
    <div class="blog-post">
      <h3>{{title }}</h3>
    </div>
  `
});

new Vue({el: '#app2'});



Vue.component('blog-post', {
  props: ['post'],
  template: `
    <div class="blog-post">
      <h3>{{ post.title }}</h3>
      <div v-html="post.content"></div>
    </div>
  `
});

new Vue({
  el: '#app3',
  data: {
    posts: [
      {id: 1, title: "Uma jornada com Vue em um v-for"},
      {id: 2, title: "Um segundo título"},
      {id: 3, title: "E é tri quando funciona"}
    ]
  }
})



Vue.component('blog-post-emit', {
  props: ['post'],
  template: `
    <div class="blog-post">
      <h3>{{ post.title }}</h3>
      <button type="button" v-on:click="$emit('enlarge-text', 0.1)">Enlarge text</button>
      <div v-html="post.content"></div>
    </div>
  `
});

new Vue({
  el: '#app4',
  data: {
    posts: [
      {id: 1, title: "Post 1"},
      {id: 2, title: "Post 2"},
    ],
    postFontSize: 1
  },
  methods: {
    onEnlargeText: function (enlargeAmount) {
      this.postFontSize += enlargeAmount;
    }
  }
});



Vue.component('custom-input', {
  props: ['value'],
  template: `
    <input
      v-bind:value="value"
      v-on:input="$emit('input', $event.target.value)"
    >
  `
});

new Vue({
  el: '#app5',
  data: {
    searchText: ''
  }
});



Vue.component('alert-box', {
  template: `
    <div style="color: red">
      <strong>Error!</strong>
      <slot></slot>
    </div>
  `
});

new Vue({
  el: '#app6'
});
