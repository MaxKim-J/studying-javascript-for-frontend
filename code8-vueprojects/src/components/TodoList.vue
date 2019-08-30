<template>
    <section>
        <ul>
            <li v-for="(todoItem, index) in propsdata" v-bind:key="todoItem" class="shadow">
            <i class="checkBtn fa fa-check" aria-hidden="true"></i>
            <span>{{ todoItem }}</span>
            <span class="removeBtn" type="button" @click="removeTodo(todoItem, index)">
                <i class="fas fa-trash-alt" aria-hidden="true"></i>
            </span>
            </li>
        </ul>
    </section>
</template>

<script>
export default {
    props:['propsdata'],
    //created 라이프 사이클 훅
    methods: {
        removeTodo(todoItem, index){
            this.$emit('removeTodo', todoItem, index)
        }
    }
}
</script>

<style scope>

    span{
        margin: auto 0;
    }

    ul{
        list-style-type: none;
        padding-left: 0px;
        margin-top: 0px;
        text-align: left;
    }

    li{
        display:flex;
        min-height: 50px;
        height: 50px;
        margin: 20px 0;
        padding: 0 0.9rem;
        background: white;
        border-radius: 5px;
    }

    .checkBtn{
        line-height: 45px;
        color: #62acde;
        margin-right: 5px;
    }

    .removeBtn{
        margin-left: auto;
        color: #de4343;
    }
</style>