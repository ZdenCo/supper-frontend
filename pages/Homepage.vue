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
                    <input type="text" class="searchBar" v-model="searchBar" />
                </div>
                
            <div class="Home_Topic" v-for="topic in filteredTopics" v-on:click="setTopic(topic)">
                    <h3>{{topic.name}}</h3>
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
        },
        onChildClick(value) {
        this.authUser = value;
        this.isSigned=true;
        },
        onChildLogOut(){
            this.authUser = null;
            this.isSigned = false;
        }
    }
}
</script>

<style scoped lang="scss">
.Home_Main{
    height: 100vh;
}
.Home_Content{
    height: 100%;
    background-color: rgba($color: #000000, $alpha: .9);
    display: grid;
    transition: 2s all;
    grid-template-columns: 20% auto;
    grid-template-rows: 10% auto;
    .stretch{
        position: absolute;
        width: 5rem;
        background-color: black;
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
        background: red;
    }
    .Home_Topic-wrapper{
        background-color: royalblue;
        display: flex;
        position: relative;
        flex-direction: column;
        grid-column-start: 1;
        grid-column-end: 2;
        grid-row-start: 2;
        grid-row-end: 3;
        overflow: scroll;
        scrollbar-width: thin;
        .search{
            height: 2rem;
            display: flex;
            flex-direction: row;
            .searchBar{
                width: 100%;
            }
        }
        
    }
    .Home_Topic{
        display: flex;
        justify-content: center;
        text-align: center;
        cursor: pointer;
        transition: all .3s;
        @include wh(100%, 4rem);
        h3{
            transition: all .3s;
            line-height: 4rem;
        }
        &:nth-child(2n){
            background-color: rgba($color: #000000, $alpha: .4)
        }
        &:hover{
            height: 5rem;
            box-shadow: inset 0 0 10px rgba($color: #000000, $alpha: .8);
            h3{
                line-height: 5rem;
            }
        }
    }
}
</style>
