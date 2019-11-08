<template>
    <div id="main">
        <h1>目安箱 サンプル</h1>
        <AddForm  @post="post($event)"></AddForm>
        <h2 class="title">投稿一覧</h2>
        <Question v-for="(question, key) in questions" :key='key' v-bind:data="question" @up="up(key)"></Question>
    </div>
</template>

<script>
import AddForm from './components/AddForm.vue'
import Question from './components/Question.vue'
export default {
  name: 'app',
  components: {
    AddForm,
    Question
  },
  data: function () {
      return {
          questions: []
      }
  },
  methods: {
      post(data) {
          this.questions.push(data);
      },
      up(key) {
          this.questions[key].count++;
      },
  }
}
</script>

<style>
#main {
    color: #c0392b
}
</style>
