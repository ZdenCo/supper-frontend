<template>

<div class="Login_Main" >
    <img src="~/assets/images/logo.jpg" alt="">
        <form action="">
            <input class="Login_Input" id="username" v-model="username" placeholder="uživatelské jméno">
            <input class="Login_Input" id="password" v-model="password" type="password" placeholder="heslo">
            <div class="Login_Buttons">
            <nuxt-link to="adminpage"><button class="Login_Button">Přihlásit jako administrátor</button></nuxt-link>
            <button class="Login_Button" v-on:click="setId">Přihásit</button>
        </div>
        </form>
        
    </div>
</template>
<script>
import Users from "../content/user.json"
export default {
    data(){
     return {
         username: null,
         password: null,
         Users,
         authorizedUser: null,
     }
    },
    mounted() {

    },
    methods: {
        emitUser(event) {
            this.$emit('childToParent', this.authorizedUser)
        },
        setId(){
            Users.forEach(user => {
                if(this.username === user.username){
                    if(this.password === user.password){
                        this.authorizedUser = user;
                        console.log("you are authorized for user with id: " + user.id);
                        this.$store.commit('userData/setUserId', user.id)
                        this.emitUser();
                        
                    }
                }
                
            });
            if(this.authorizedUser === null){
                    window.alert("Wrong password or username")
                }
        }
    }
  }
</script>
<style lang="scss">

    .Login_Main{
        justify-content: center;
        transition: all $anim-time;
        background-color: transparent;
        @include flex(column,center);
        @include wh(100%,100%);
        form{
            @include margin(b,.5rem);
            @include margin(t,1rem);
        }
        .Login_Input{
            color: white;
            transition: all $anim-time;
            background: rgba($color: #000000, $alpha: .7);
            @include margin(tb,.5rem);
            @include text(center);
            @include wh(100%, 2rem);
            @include border(2px,$orange-color,20px);
            &:focus{
                outline: none;
                @include wh(100%, 2.6rem);
                @include margin(tb,.2rem);
            }
            &::placeholder{
                color: white;
                opacity: .5;
            }

        }
        .Login_Buttons{
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            a{
                flex-grow: 1;
                padding-right: 2rem;
                .Login_Button{
                    width: 100%;
                }
            }
        }
        .Login_Button{
            @include margin(tb,.5rem);
            @include wh(7rem,2rem);
            background-color: $orange-color;
            color: white;
            @include border(2px,$orange-color,5px);
            font-weight: 700;
            transition: all $anim-time;
            &:hover{
                @include wh(7.6rem,2.6rem);
                @include margin(tb,.2rem);
                cursor: pointer;
            }
            &:focus{
                border-color: white;
            }
        }
        .Login_H{
            @include margin(tb,.5rem);
        }
        .Login_A{
            text-decoration: underline;
            @include margin(tb,.5rem);
        }
        
    }
    
</style>