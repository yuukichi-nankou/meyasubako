<template>
    <div>
        <div>{{data.title}}</div>
        <div>{{data.question}}</div>
        <button v-on:click="up()">👍🏽</button>
        <div>{{data.count}}</div>
    </div>
</template>

<script>
export default {
    name: 'Question',
    props: {
        'data': {}
    },
    methods: {
        up: function(){
            this.$emit('up')
        }
    },
}
</script>

<style scoped>
</style>
