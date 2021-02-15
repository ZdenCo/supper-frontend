<template>

<div class="Login_Main" >

        <form action="">
            <input class="Login_Input" id="username" v-model="username" placeholder="username">
            <input class="Login_Input" id="password" v-model="password" type="password" placeholder="password">
        </form>
        <!-- //predelat jmena trid a tu funkci  -->
        <h2>UserId: {{this.$store.state.userData.userId}}</h2>
        <button v-on:click="setId">increment you fuck</button>
        <p v-if="isAuth=false">authorized</p>
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
         authorizedUser: null
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
                    console.log("wrong pass or userame");
                }
        }
    }
  }
</script>
<style lang="scss">

    .Login_Main{
        position: absolute;
        top: 0%;
        transition: all $anim-time;
        background-color: red;
        left: 0%;
        @include flex(column,center);
        @include wh(100%,100%);
        .Login_Input{
            color: white;
            transition: all $anim-time;
            background: transparent;
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
        .Login_Btn{
            @include margin(tb,.5rem);
            @include wh(7rem,2rem);
            background-color: transparent;
            @include border(2px,$orange-color,5px);
            color: $orange-color;
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