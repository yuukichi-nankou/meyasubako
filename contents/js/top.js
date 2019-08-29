Vue.component('add-form', {
    data: function () {
        return {
            title: "",
            question: "",
        }
    },
    methods: {
        add: function(){
            this.$emit('post', {
                title : this.title,
                question : this.question,
                count : 0,
            })
        }
    },
    template: `
<div>
    <h2 class="title">投稿フォーム</h2>
    <input v-model="title" placeholder="どんなことを聞きたいですか？">
    <textarea v-model="question" placeholder="もう少し詳しく教えてください">
    </textarea><button v-on:click="add()">追加</button>
</div>
`,
})

Vue.component('question', {
    props: ['data'],
    methods: {
        up: function(){
            this.$emit('up')
        }
    },
    template: `
<div>
    <div>{{data.title}}</div>
    <div>{{data.contents}}</div>
    <button v-on:click="up()">👍🏽</button>
    <div>{{data.count}}</div>
</div>
`,
})

window.onload = function() {
    var main = new Vue({
        el: '#main',
        data: function () {
            return {
                questions: []
            }
        },
        methods: {
            post(data) {
                console.log(data);
                this.questions.push(data);
            },
            up(key) {
                console.log(key);
                this.questions[key].count++;
            },
        }
    });
};
