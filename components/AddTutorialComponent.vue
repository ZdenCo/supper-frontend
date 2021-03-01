<template>
    <div class="Admin_Main">
        <TutorialCreateComponent v-if="this.nextPage == true" v-on:goBack="toggleNext()"/>
        <main v-if="this.nextPage == false">
            <form action="POST">
                <div class="Problem_Row">
                    <label for="Topics">Choose a topic:</label>
                    <select name="Topics">
                        <option  v-for="topic in Topics.topics" :value="topic">{{topic.name}}</option>
                        <option value="New">Add new topic</option>
                    </select>
                </div>
               <div class="Problem_Row">
                   <label for="ProblemName">Problem name:</label>
                    <input name="ProblemName" type="text" maxlength="50" >
               </div>
               <div class="Problem_Row">
                   <label for="ProblemDesc">Describe the problem</label>
                    <textarea name="ProblemDesc" type="text" maxlength="60"></textarea>
               </div>
                <div class="Problem_Row">
                    <div class="Problem_Checkbox">
                        <div v-for="role in Company.Roles">
                        <input type="checkbox" :name="role.name" :value="role.name">
                        <label :for="role.name">{{role.name}}</label>
                    </div>
                    </div>
                    <button type="button" v-on:click="toggleNext()">Next</button>
                </div>
                
            </form>
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
    data() {
        return {
            Topics,
            Company,
            nextPage: false
        }
        
    },
    methods:{
        toggleNext(){
            this.nextPage===true ? this.nextPage=false : this.nextPage=true;
        }
    }

}
</script>

<style lang="scss">
.Admin_Main{
    display: flex;
    flex-direction: column;
    main{
        display: flex;
        height: 100vh;
        background-color:red;
        justify-content: center;
    }
    form{
        
        overflow: auto;
        flex-direction: column;
        background-color:black;
        width: 100%;
        height: 100%;
        text-align: left;
        padding: 2rem 5rem;
        justify-content: center;
        .Problem_Row{
            margin: 1rem 0;
            display: flex;
            justify-content: space-between;
            input{
                width:18rem;
            }
            textarea{
                width:18rem;
            }
            .Problem_Checkbox{
                input{
                    width: auto;
                }
            }
        }
    }
}
</style>
