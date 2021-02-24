<template>
    <div class="Tutorial_Layout_Main">
        <div class="Tutorial_Layout_Box" v-on:click="setTutorial(tutorial)" v-for="tutorial in topic.tutorials">
                <h2>{{tutorial.name}}</h2>
                <p>{{tutorial.description}}</p>
        </div>
        <button class="Tutorial_Layout_Button" v-if="isSet" v-on:click="unsetTutorial()">Zpet</button>
        <TutorialComponent v-if="isSet" :tutorial="selectedTutorial" />
    </div>
</template>
<script>
import Tutorials from '../content/topics.json'
export default {
    props: [
        'topic',
    ],
    data() {
        return {
            Tutorials,
            isSet: false,
            selectedTutorial: null
        }
    },
    methods: {
    setTutorial(tutorial){
        this.selectedTutorial = tutorial;
        this.isSet = true;
    },
    unsetTutorial(){
        this.isSet = false
    },
    }
}
</script>
<style lang="scss">
.Tutorial_Layout_Main{
    display: grid;
    justify-items: center;
    grid-template-columns: 25% 25% 25% 25%;
    .Tutorial_Layout_Nav{
        grid-column-start: 1;
        grid-column-end: 2;
        grid-row-start: 1;
        display: flex;
        flex-direction: column;
    }
    .Tutorial_Layout_Box{
        display: flex;
        flex-direction: column;
        justify-content: center;
        cursor: pointer;
        border: black 2px solid;
        @include wh(13rem,13rem);
        &:nth-child(n+5){
            margin-top: 1rem;
        }
    }
    .Tutorial_Layout_Button{
        position: absolute;
        background-color: orange;
        top: 0;
        left: 0;
        z-index: 10;
    }
}
</style>