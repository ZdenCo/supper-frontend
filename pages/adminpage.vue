<template>
    <div class="Admin_Main">
        <HeaderComponent :company="Company.companyName" />
       <div class="Admin_Main_Content">
           <div class="Admin_Roles">
               <div class="search">
                    <input type="text" class="searchBar" v-model="searchBar" />
                </div>
                <div class="Admin_Role create">
                    <input type="text" placeholder="add new role">
                    <button>+</button>
                </div>
               <div class="Admin_Role" v-for="role in filteredRoles" v-on:click="setRole(role)">
                    <h3>{{role.name}}</h3>
                    <p>></p>
                </div>
           </div>
           <div class="Admin_Users">
               <div class="Admin_Table">
                   <div class="Admin_Table-headwrapper">
                       <div class="Admin_Table-head">
                        <p>Id</p>
                        <p>Firstname</p>
                        <p>Lastname</p>
                        <p>Role</p>
                        <p>Number of topics</p>
                        <p>Number of solutions</p>
               </div>
                   </div>
                    <div class="Admin_Users-wrapper">
                        <div class="Admin_User" v-for="user in User">
                        <p>{{user.id}}</p>
                        <p>{{user.firstname}}</p>
                        <p>{{user.lastname}}</p>
                        <p>{{user.role}}</p>
                        <p>4</p>
                        <p>4</p>
                        <input type="checkbox">
                    </div> 
               </div>
               <div class="Admin_Users_Buttons">
                   <button v-on:click="toggleCreate">Add</button>
                    <button>Modify</button>
                    <button>Remove</button>
               </div>
               <div v-if="createUser === true" class="Admin_User_Create Flex_Column">
               <div class="Flex_Row">
                   <label for="username">Prihlasovaci jmeno : </label>
                    <input type="text" name="username">
               </div>
               <div class="Flex_Row">
                   <label for="username">Heslo : </label>
                    <input type="text" name="username">
               </div>
               <div  class="Flex_Row">
                   <label for="username">Jmeno : </label>
                    <input type="text" name="username">
               </div>
               <div class="Flex_Row">
                   <label for="username">Prijmeni : </label>
                    <input type="text" name="username">
               </div>
               <div class="Flex_Row">
                   <label for="role">Pracovni pozice : </label>
                   <select name="role" id="">
                       <option value="" v-for="role in Company.Roles">{{role.name}}</option>
                   </select>
               </div>
               <div class="Flex_Row Button">
                   <button v-on:click="toggleCreate">Vytvorit</button>
               </div>
           </div>
               </div>
           </div>
       </div>
    </div>
</template>
<script>
import User from "../content/user.json";
import Company from '../content/companies.json'
export default {
    data() {
        return {
            User,
            Company,
            nextPage: false,
            selectedRole: '',
            searchBar: '',
            createUser: false
        }
        
    },
    computed:{
        filteredRoles(){
            return this.Company.Roles.filter(role => {
                return role.name.toLowerCase().includes(this.searchBar.toLowerCase())
            })
        },
    },
    methods:{
        toggleCreate(){
            this.createUser === false ? this.createUser = true : this.createUser = false;
        },
        setRole(role){
            this.selectedRole = role;
        }
    }

}
</script>

<style lang="scss">
.Admin_Main{
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100vw;
    .Header_Main{
        height: 10vh;
    }
    .Admin_Users_Buttons{
                margin: 0 1.5rem;
                display: flex;
                flex-direction: row;
                justify-content: flex-end;
                button{
                    @include wh(4rem, 2rem);
                        margin-left: 0.5rem;
                        margin-top: .5rem;
                }
            }
    .Admin_Main_Content{
        display: flex;
        flex-direction: row;
        height: 90vh;
        .Admin_Roles{
            width: 25vw;
            display: flex;
            flex-direction: column;
            background-color: $grey-color;
            border-right: white solid 1px;
            .search{
                padding: .2rem 1rem;
                height: 2.5rem;
                margin-top: 1.2rem;
            }
            
            .Admin_Role{
                display: flex;
                justify-content: space-between;
                width: 100%;
                color: white;
                height: 2.5rem;
                padding: .2rem 1rem;
                line-height: 2.1rem;
                border-bottom: 1px solid black;
                text-align: left;
            }
            .create{
                padding: .5rem 1rem;
                input{
                    color: black;
                    border-radius: 5rem;
                    width: 15rem;
                }
                button{
                    border-radius: 5rem;
                }
            }
        }
        .Admin_User_Create{
            position: relative;
            background-color: #252525;
            justify-content: center;
            border: $orange-color 1px solid;
            margin: 1rem 3rem;
            overflow: visible;
            padding: 3rem 8rem;
            &:after{
                content: "";
                width: 0;
                height: 0;
                border-left: 1rem solid transparent;
                border-right: 1rem solid transparent;
                border-bottom: 1rem solid $orange-color;
                position: absolute;
                top: 0;
                right: 8.4rem;
                transform: translateY(-1.1rem);
                z-index: 15;
            }
            .Button{
                justify-content: flex-end !important;
            }
            input{
                background-color: white;
                border: none;
            }
            button{
                width: 8rem;
            }
            .Flex_Row{
                justify-content: space-between;
                margin-bottom: 1rem;
            }
        }
        .Admin_Users{
            flex-grow: 1;
            overflow-y: scroll;
            background-color: #2c2e2c;;
            padding: 1.5rem;
            .Admin_Table-headwrapper{
                padding: 0 1.5rem;
                height: 3rem;
                color: white;
                background-color: #3f3f3f;
                border: 1px solid white;
                box-shadow: 0 4px 4px rgba($color: #000000, $alpha: .25);
            }
            .Admin_Table-head{
                display: flex;
                flex-direction: row;
                text-align: left;
                
                p{
                    width: 15%;
                    display: flex;
                    align-items: center;
                    font-weight: bold;
                    padding-left: 1rem;
                }
            }
            .Admin_Table{
                display: flex;
                flex-direction: column;
                width: 100%;
                .Admin_Users-wrapper{
                    height: 30rem;
                    overflow: auto;
                    border: 1px solid black;
                    margin: 0 1.5rem;
                    background-color: #3f3f3f;
                }
                .Admin_User{
                    border-bottom: 1px black solid;
                    height: 2rem;
                    line-height: 2rem;
                    display: flex;
                    overflow:hidden;
                    flex-direction: row;
                    text-align: left;
                    p{
                        width: 15%;
                        padding-left: 1rem;
                    }
                    input{
                        height: 2rem;
                    }
                }
            }
        }
    }
    
}
</style>
