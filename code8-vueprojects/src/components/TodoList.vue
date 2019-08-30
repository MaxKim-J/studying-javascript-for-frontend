<template>
    <section>
        <ul>
            <li v-for="(todoItem, index) in todoItems" v-bind:key="todoItem" class="shadow">
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
    data(){
        return{
            todoItems: []
        }
    },
    //created 라이프 사이클 훅
    created(){
        if (localStorage.length>0) {
            for (var i=0; i < localStorage.length; i++){
                this.todoItems.push(localStorage.key(i));
                //push를 통해 로컬 스토리지의 모든 데이터를 todoitems에 넣는다
                //push = append
            }
        }
    },
    methods: {
        removeTodo(todoItem, index){
            // 삭제버튼 눌렀을때 인덱스와 함께 키값 삭제함
            localStorage.removeItem(todoItem);  //로컬스토리지 배열에서 삭제하고
            this.todoItems.splice(index,1);     // 가져왔던 배열에서도 삭제(for로 표시가 xx)
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