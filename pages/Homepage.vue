<template>
    <div class="Home_Main">
        <LoginComponent v-if="!isSigned" v-on:childToParent="onChildClick" />
        <main id="Home_Content" class="Home_Content" :style="gridTemplateColumns=gridSize" v-if="isSigned">
                <HeaderComponent v-if="isSigned"
                :company="Company.companyName"
                :firstname="authUser.firstname"
                :lastname="authUser.lastname"
                :role="authUser.role" 
                v-on:childToParentLogOut="onChildLogOut" />
            <div id="Topics" class="Home_Topic-wrapper">
                <div class="search">
                    <input type="text" class="searchBar" placeholder="Vyhledat okruh" v-model="searchBar" />
                </div>
                <div class="Home_Topic">
                    <div class="Home_Topic_Add">
                    <input type="text" placeholder="Nazev noveho okruhu">
                    <input type="text" placeholder="Popis noveho okruhu">
                </div>
                <button>+</button>
            </div>
            <div class="Home_Topic Flex_Row" v-for="topic in filteredTopics" v-on:click="setTopic(topic)">
                    <h3>{{topic.name}}</h3>
                    <div class="Flex_Row">
                    <button class="delete">X</button>
                    <button class="modify">:</button>
                    </div>
            </div>
            
            </div>
                <div class="Home_Tutorial">
                <TutorialLayout v-if="selectedTopic != null" :topic="selectedTopic"/>
                </div>
            </main>
        
    </div>
</template>
<script>
import LoginComponent from '../components/LoginComponent.vue'
import User from "../content/user.json";
import Topics from '../content/topics.json'
import Company from '../content/companies.json'
import HeaderComponent from '../components/HeaderComponent.vue'
export default {
  components: { HeaderComponent, LoginComponent },
    data() {
        return {
            Topics,
            Company,
            User,
            authUser:null,
            isSigned:false,
            gridSize:100,
            stretched: false,
            selectedTopic:null,
            searchBar: '',
        }
        
    },
    computed:{
        filteredTopics(){
            return this.Topics.topics.filter(topic => {
                return topic.name.toLowerCase().includes(this.searchBar.toLowerCase())
            })
        }
    },
    methods: {
        setTopic(topic){
            this.$store.commit('topicStore/setTopic', topic.name);
            this.selectedTopic = topic;
            var el = document.getElementById('tutorial')
            if (el != null) {
                el.style.display = "none";
                document.getElementById('tutorialBtn').style.display = "none";
            }
        },
        onChildClick(value) {
        this.authUser = value;
        this.isSigned=true;
        },
        onChildLogOut(){
            this.authUser = null;
            this.isSigned = false;
        },
    }
}
</script>

<style scoped lang="scss">
.Home_Main{
    height: 100vh;

    button{
        background-color: $orange-color;
        font-size: 2rem;
        width: 3.5rem;
        color: white;
        font-weight: bold;
        border: none;
        
    }
    .delete{
        background-color: $red-color;
        color: $white-color;
        font-size: 1.5rem;
        font-weight: normal;
        height: 100%;
        width: 1.75rem;
    }
    .modify{
        color: $white-color;
        width: 1.75rem;
        font-weight: bold;
        font-size: 1.5rem;
        background-color: $orange-color;
        height: 100%;
    }
}
.Home_Topic_Add{
    display: flex;
    justify-content: center;
    flex-direction: column;
    input{
        
        border-radius: 5rem;
        height: 1.2rem;
        padding-left: .3rem;
        margin:0.3rem;
        margin: .3rem 0 .3rem .8rem;
    }
    
}
.Home_Content{
    height: 100%;
    background-color: $grey-color;
    display: grid;
    transition: 2s all;
    grid-template-columns: 20% auto;
    grid-template-rows: 10% auto;
    .stretch{
        position: absolute;
        width: 5rem;
        background-color: $grey-color;
        bottom: 1rem;
        right: calc(50% - 2.5rem);
        
        
    }
    .Header_Main{
        grid-column-start: 1;
        grid-column-end: 3;
        grid-row-start: 1;
        grid-row-end: 2;
    }
    .Home_Tutorial{
        position: relative;
        padding: 1rem;
        grid-column-start: 2;
        grid-column-end: 3;
        grid-row-start: 2;
        grid-row-end: 3;
        background: #2c2e2c;
        overflow: auto;
    }
    .Home_Topic-wrapper{
        background-color: $grey-color;
        display: flex;
        color: white;;
        position: relative;
        flex-direction: column;
        grid-column-start: 1;
        grid-column-end: 2;
        grid-row-start: 2;
        grid-row-end: 3;
        overflow: auto;
        border-right: 1px solid white;
        scrollbar-width: thin;
        .search{
        margin: 1rem 0.8rem;
        
    }
        
    }
    .Home_New_Button{
        position: absolute;
        background-color: $grey-color;
        bottom: 5rem;
        right: 5rem;
    }
    .Home_Topic{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        border-bottom: 1px white solid;
        text-align: left;
        cursor: pointer;
        transition: all .3s;
        @include wh(100%, 4rem);
        &:nth-child(2){
            border-top: 1px solid white;
            
        }
        h3{
            transition: all .3s;
            line-height: 4rem;
            padding-left: 1rem;
        }
        button{
                // height: 3rem;
                // width: 3rem;
                // margin: 0.5rem;
                // border-radius: 5rem;
               
        }
        &:hover{
            box-shadow: inset 0 0 10px rgba($color: #000000, $alpha: .3);
        }
    }
}
</style>
