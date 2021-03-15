<template>
    <div class="Tutorial_Layout_Main">
        <TutorialCreateComponent v-on:goBack="toggleAdd" v-if="addTutorial===true" :Topic="topic"/>
        <div class="Tutorial_Layout_Box" v-on:click="toggleAdd()">
                <h2>Přidat návod</h2>
        </div>
        <div class="Tutorial_Layout_Box" v-on:click="setTutorial(tutorial)" v-for="tutorial in topic.tutorials">
                <h2>{{tutorial.name}}</h2>
                <p>{{tutorial.description}}</p>
                <div class="buttons Flex_Row">
                    <button class="modify">:</button>
                    <button class="delete">X</button>
                </div>
                
        </div>
        
        <button id="tutorialBtn" class="Tutorial_Layout_Button" v-if="isSet" v-on:click="unsetTutorial()">X</button>
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
            selectedTutorial: null,
            addTutorial:false,
        }
    },
    methods: {
    setTutorial(tutorial){
        this.selectedTutorial = tutorial;
        this.isSet = true;
        var el = document.getElementById('tutorial')
            if (el != null) {
                el.style.display = "block"
                document.getElementById('tutorialBtn').style.display = "block";
            }
    },
    unsetTutorial(){
        this.isSet = false
    },
    toggleAdd(){
        this.addTutorial===false ? this.addTutorial=true : this.addTutorial=false;
    }
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
        position: relative;
        flex-direction: column;
        justify-content: center;
        cursor: pointer;
        color: white;
        border: white 2px solid;
        border-radius: 15%;
        padding: .5rem;
        background-color: $grey-color;
        box-shadow: 6px 8px 4px rgba($color: #000000, $alpha: .25);
        @include wh(13rem,13rem);
        &:nth-child(n+5){
            margin-top: 1rem;
        }
        .buttons{
            position: absolute;
            top: 1rem;
            right: 1rem;
            width: 3rem;
            button{
                width: 1.5rem;
                background-color: transparent;
                border: none;
                font-weight: bold;
                font-size: 1.3rem;
                
            }
            .delete{
                    color: $red-color;
                }
                .modify{
                    color: $orange-color;
                }
        }
    }
    .Tutorial_Layout_Button{
        position: absolute;
        background-color: $red-color;
        border: 1px white solid;
        color: white;
        
        top: 2rem;
        right: 2rem;
        z-index: 10;
    }
}
</style>