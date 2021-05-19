<template>
    <div class="Tutorial_Create_Main">
        <main>
            <button type="button" class="back" v-on:click="emitBack()">X</button>
            <form action="POST">
                <h2>{{Topic.name}}</h2>
               <div class="Problem_Row Flex_Row">
                   <div class="Flex_Column left">
                        <h3 for="name">Název problému:</h3>
                        <input type="text">
                        <h3 for="name">Krátký popis problému:</h3>
                        <input type="text">
                   </div>
                   <div class="Flex_Column right">
                       <h3>Kdo uvidí tento návod:</h3>
                       <div class="Flex_Row">
                           <input type="checkbox">
                           <label for="">Jen já</label>
                       </div>
                       <div class="Flex_Row">
                           <input type="checkbox">
                           <label for="">Manager</label>
                       </div>
                       <div class="Flex_Row">
                           <input type="checkbox">
                           <label for="">IT Administrátor</label>
                       </div>
                   </div>
               </div>
               
               <div v-for="step in this.Steps">
                   <div class="Problem_Row">
                        <h4 for="ProblemStep">{{step}}. krok</h4>
                        <textarea name="ProblemStep" type="text" ></textarea>
                    </div>
               </div>
               <div class="Tutorial_Create_Bottom">
                   <div>
                    <button type="button" v-on:click="Steps++">Přidat krok</button>
                   <button type="button" v-on:click="Steps--">Odebrat krok</button>
                    </div>
                    <div>
                        <button type="button" class="apply" v-on:click="">Potvrdit</button>
                    </div>
               </div>
            </form>
        </main>
    </div>
</template>
<script>
export default {
    props:[
        'Topic'
    ],
    data() {
        return {
            Steps: 2
        }
    },
    computed:{
    },
    methods:{
        emitBack(){
            this.$emit('goBack');
        }
    }
}
</script>
<style lang="scss">
.Problem_Row{
    justify-content: space-between;
    width: 50rem;
    margin: auto;
    .left{
        text-align: left;
        width: 50%;
        
        input{
            width: 70%;
            margin: .5rem 0;
        }
    }
    .right{
        text-align: left;
        width: 50%;
        .Flex_Row{
            line-height: 1.5rem;
            input{
                height: 1.5rem;
            }
        }
    }
}
    .Tutorial_Create_Main{
        padding: 3rem 0;
        height: 100%;
        width: 100%;
        position: absolute;
        z-index: 100;
        left: 0;
        top: 0;
        background-color: $grey-color;
        overflow: auto;
        .back{
            position: absolute;
            top: 2rem;
            background-color: $red-color;
            border: 1px solid white;
            right: 10%;
            color: white;
        }
        h2{
            text-align: center;
            width: 100%;
            margin-bottom: 2rem;
        }
        h4{
            text-align: left;
        }
        textarea{
            height: 8rem;
            width: 50rem !important;
             width: 100%;
            padding: 12px 20px;
            box-sizing: border-box;
            border: 2px solid #ccc;
            border-radius: 4px;
            background-color: #f8f8f8;
            font-size: 16px;
            resize: none;
        }
        .Tutorial_Create_Bottom{
            display: flex;
            width: 50rem;
            flex-direction: row;
            justify-content: space-between;
            margin:auto;
            .apply{
                align-self: flex-end;
            }
        }
    }
</style>