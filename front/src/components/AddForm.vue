<template>
    <div>
        <h2 class="title">投稿フォーム</h2>
        <input v-model="title" placeholder="どんなことを聞きたいですか？">
        <textarea v-model="question" placeholder="もう少し詳しく教えてください">
        </textarea><button v-on:click="add()">追加</button>
    </div>
</template>

<script>
export default {
    name: 'AddForm',
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
    }
}
</script>

<style scoped>
</style>
