<template>
    <div class="Home_Main">
        <LoginComponent v-if="!isSigned" v-on:childToParent="onChildClick" />
        <main id="Home_Content" class="Home_Content" :style="gridTemplateColumns=gridSize" v-if="isSigned">
            <HeaderComponent v-if="isSigned"
            :company="Company.companyName"
            :firstname="authUser.firstname"
            :lastname="authUser.lastname"
            :role="authUser.role" />
        <div id="Topics" class="Home_Topic-wrapper">
            <div class="search">
                <input type="" />
                <button>search</button>
            </div>
            
        <div class="Home_Topic" v-for="topic in Topics.topics">
            <div>
                <h3>{{topic.name}}</h3>
            </div>
        </div>
        <button id="stretch" class="stretch button" v-on:click="changeGrid">go for it</button>
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
            gridSize:20,
            stretched: false,
        }
        
    },
    methods: {
    onChildClick(value) {
      this.authUser = value;
      console.log("this user has signed in : " + this.authUser.firstname);
      this.isSigned=true;
    },
    //predelat na vue
    changeGrid(){
        var el = document.getElementById('Home_Content');
        var grid = document.getElementById('Topics');
        if (this.gridSize == 20) {
            this.gridSize = 100;
            this.stretched = true;
            grid.classList.add('stretchGrid');

        }else{
            this.gridSize = 20;
            grid.classList.remove('stretchGrid');
            this.stretched=false;
        }
        el.style.gridTemplateColumns =  this.gridSize + "% " + (100-this.gridSize) + "%";
    }
}
}
</script>

<style scoped lang="scss">
body{
    padding-top: 0;
}
.Home_Content{
    background-color: rgba($color: #000000, $alpha: .9);
    display: grid;
    transition: 2s all;
    grid-template-columns: 20% auto;
    grid-template-rows: 10% 35rem auto 5vh;
    .stretch{
        position: absolute;
        width: 5rem;
        background-color: black;
        bottom: 1rem;
        right: calc(50% - 2.5rem);
        
        
    }
    .stretchGrid{
        display: grid !important;
        justify-items: center;
        grid-template-columns: 33.333% 33.333% 33.333%;
        grid-template-rows: 10rem;
        .search{
            align-self: center;
            grid-column-start: 1;
            grid-column-end: 4;
            grid-row-start: 1;
            grid-row-end: 2;
            width: 50%;
            input{
                width: 80%
            }
            button{
                width: 19%
            }
        }
        .Home_Topic{
        @include wh(100%, 100%);
        line-height: 10rem;
        &:hover{
            filter: brightness(1.5);
        }
        }
        
    }
    .Header_Main{
        grid-column-start: 1;
        grid-column-end: 3;
        grid-row-start: 1;
        grid-row-end: 2;
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
        .search{
            display: flex;
            flex-direction: row;
            input{
                width: 80%
            }
            button{
                width: 20%
            }
        }
        
    }
    .Home_Topic{
        @include wh(100%, 2rem);
        
        &:nth-child(2){
            background-color: red;
        }
        
    }
}
</style>