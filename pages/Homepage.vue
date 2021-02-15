<template>
    <div class="Home_main">
        <LoginComponent v-if="!isSigned" v-on:childToParent="onChildClick" />
        <HeaderComponent v-if="isSigned"
            :company="Company.companyName"
            :firstname="authUser.firstname"
            :lastname="authUser.lastname"
            :role="authUser.role" />
        <h1>Homepage</h1>
        <div v-for="topic in Topics.topics">
            <div>
                <h3>{{topic.name}}</h3>
                <p>{{topic.description}}</p>
            </div>
        </div>
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
        }
        
    },
    methods: {
    onChildClick(value) {
      this.authUser = value;
      console.log("this user has signed in : " + this.authUser.firstname);
      this.isSigned=true;
    },
}
}
</script>
<style lang="scss">
</style>