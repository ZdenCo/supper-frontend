<template>

<div class="Login_Main" >
    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAwFBMVEX///8EPYACrvAAqu8AqO8ArPAAO38AOX4AMnsAK3gANn0ALXkANXwAJXYAOn8AInUAKHcAMHoAIHRFu/Lf5OwYsfHz+/6HmLePnrvCytmvus6hrsbm6vDU2uXy+v73+fuo3PjG6PrR7Pvk9P1bwfO14fmL0fbv8vZQa5q7xNVqgKcgS4h3yvU4WpDJ6fuh2fhBYJRXcZ1je6RRvvNzh6wdSYcsUouAzfWns8lqxvQ1t/KWo71SbZuImbcAG3Pb8fyNr1R8AAAMfklEQVR4nO2de1fqOhPGpVfaUqEiAiICIohXEBEV995+/291KIjcWvJMOgHPWv39d9Z5D/V5k8xMJsnM0VFKSkpKSkpKSkpKSkpKyp64qN++V0bD3uBxPL4fPw56w1G5dl4/bRz6D2Pg9Lby/Or5BS/I5lzXtq3jY8u2bTeXDTzHL2R65fP6/1Zno1oZ5H0v6x5bmTgsO+sVTl5H56eH/mvJ1CvjvJO1Y6WtcZzzfPvu/OLQfzTO7TAooOp+RtP1/HGlfug/HaE6zHsuTd2Pyqyf+fvL5+tpOetIyluIzI9rN4eWEcvtIJ9NIu9bZPDv89BKImnUbIe49uIoVA8tJoJGxfPinQKR4NBqIqg4AZe8TCY3OrScLWpewDZ+Uwq/zWdUMx6jvKmlyRxa0ToXPf+YVWAmqBxa0xqVk0TuL4qT3xS91e95J2iIPTi0qhX+njA5wFW880PL+uFizD+AUzvjRG8XL/esbsq5r2AAp87wLvpz5tt+5R0d3fmcLnBJjDNs6vpkr8N4c88QYkdh2dEfLGmaprf2J7DOFWNvkf0b+cGWPlWoGd19CXw/kZmhlpsLAs9xnEKI43hBmJ2y1n/Kj94AF7UZ+vV+BJbzRGlhusl3x8PR5/t5tVqfUa3evtfKd73XwC94Wfdb5/F95Be/DO1b4l4W451DGrig4IUpw/h9+039vPL8mi8EOSsTRO99H8xvhZqptVXp+qGHe0Er5/jPNSzx0qi/37mFf9H/Y11bol9xqolgABtR1/FGxM16PdoZNlcVaoZak/oICrSy+d4t10cnmrY3iaBAK3DKfDuEK0PbkNhh++1NwCnq2TXOr36Y2qZEVaPYg5IxQcCq7+hscwhDiU+sn1gwRATa/8rMZ0l9fVuhZnzxfmRGGfGD3pg9K1+KEDh1Gvx+8d0X67NO+HMsT1FDGHLG/KHqiVigm1WQB9y2M3PMCe93LoARzI4VHKlcRtiZb4kfrB96FW+XAiUppH7MEIbWps/4naHYEWZ7jN9bEm1nviXyhai1glBgTk0SMNbOzCcql7U5FVsZ+5XpWxtcx0/SUGGR6TOv4i29oyZRHW9n5ug8S3EkXoR5RWeaO+zM91LkiG2q4qRFVtWJ3y47M6fE8BVbOEfjUoCJ2W1n5vM0ef4NmKO+qnP33Xbme54mDVDr4jmq7LQoat+0TdLo7V4czCi7OiG0M/N52kz0kZp4y3SsyBUidmYuMck3GgWxK8yqut+zlZ+JU/iQ4COAmcnkVZ1KP0CTVEtkbC6A/H1MIp4Bsav4xpQ/zhjmxAqzZUZRq3RghfKbjFPkCMZRZUmLsEBNk43An5GbJHl4Y9/u9N+uX4qTSWkyKb5cP3T7zdZX7FlSG7QzSQYR2DRNIzbQV1y+aYZu6kvjYU7/Qdd1Q59cdzsR8XMXn6TTH3uRUoiswoz7DP1WR4//g81QZ7HbWR9Ogj5Nco+BGFLU0HTFU24qs/TQ+bH7LcoQSprTMnRIEbwDP9UB15S5VPmCOsNvZHwidiMWMaVnpCU1U4nGMz9I7KLesbNe5DLoA23GzVYm8b+QiU7vsfsWPhCzUcdDCp16qFgHktwzhWJ3+LUXhWSvP0JcRThLxWdpX/QpJwPV1qA302OuEq6xnzEk2poqemkGUUiJMBNAS7sN0cvNwCyl7BKSQAtOHfTmmo+caYPpiISQpik8SRFbujdrSpmmqCVFn39c7WWeUsJv/H4suAFuT/ag0cTPaVB3nyFcre8axFhaAtzp1/B3Wln49kW7qHw16vBVnh7+EMYdwv+/HXU0xVMVvwlOeEqIZjHm9CU2DRSFqL+oi4/tl+CZqBldXeVyRBfiO+W5pEfMJja6CscR3STewd4wI/Xis2+q0qiDHvGV9KIwS1Y41ajI5oAnbQ3aawO548NOSYVGEzuGIhkamr9YpVVUEANgB8LnxFd3UPAdxdeHwT2QBvRhLFG6JMHp0yW3YcVSGdCBzAqW9CCGNFkXpA5dAKeZ0kz8q0iQzoQvYMWMKXLktM5JwrvBT2xBORS33eBbpwVW4pPuK6ZxhC4On9KcxYwg+VH3E88eGXEXeI5mBY7LiSybKyRXQ3WHcwocd04Y8gBI7E3Y4K9gZzieyrSLSYdRBy5Gf8qVmnHHDAqnMXlCi2MAz2ipIc2CHI/EdinRTEUyiniudFPiPc+bro8kw4jsEEn73zXcDM8Vt2YCicgz4Tv5ijM201XTL1N6piIK4WOnKJger51Ju38k9E6kMOMNeJ53vUhKVK8w4zo8JXQ+5CQiCuUtzRyrMGAxOOQ7KnOFwDqU9hbLYfRZVuObjEREoazHXx3GwOIoNyAziog/rHAU17EKY4YXs9d0iUiiRi7y3sLO/0n+rJt+AQCJS+V2TxG4+WFSjfQLAMjeospXpMw9eU6okXRTOMQEfpSY8hZozD8nW4/UeYrs8ZGH6RSN/iBJsPpEnKfQCSI9m7gbu3CfIMxBXugtwR7pJ/b4W1ie+ym7dyS9SgDPuQcKirFZgT+SNDqk0Aa7R5s8bIvUmMsPpAId7J3lQiF0e4/J5W9jO8efEnurLmElIg5fMiWMYWX9Idl7UK76Y1cVsKcksrj+mGpZ4YeI8HUTJetwie1kkGcoS/CbjTpY5bSnqrLlAsvJkIwOPknBJwks+6fdHPs9gs2BvT56X1+hqVniFvDlCMffSNwdInFGKoHlw4fj6FV4/AUb+CIoKXDdJdTU4JeEGVI1ENlH7O8RlalZgFf+3MtCDAmwF6joqxt0GR4dNbg3ULH4mGcEBRLqm6nYXkRiYf1IJmJ5Gu2BnrLgewvsDAB7OYWF3XPUhqarYPepXiCFpEo1431NU6ysBvTumVb4S/K6Ah2rwKaQMkn3OE1BhcgkJT6TfdzTNMVmKWJLqdWU2HL7AjBLg+SFkXz+Gvn9xKYOtFEEYhp6OVNCxi1XCGTnNObxkXQbvYALUKhtIXB0UeudOFmZQf8HZfyR9+4SZdtgWzN/Rlotj32PqNL6h4WlwP5QpmrbLXgGtewidnNbJnQfDQ9RwWwNsMfHtxUrZLABWX9jOesgW/By4nqStv+I3tkQh6WmVIFIsLpJRBex0/PRozeds7nY4bSD/COcbmsAk1Su3i60quy4ffrF7efdYy5fcLwg54bdjme4bi7syfJYIZzTiJchmifdpIYMouCpc+O0el4pD5//9HqDweNg8GdY/rwlJvbFk9SQLZksXkzTuFJ502nxCaLcKgx5F+drZF+uERAfW0iuwhDxAyH1fV/FAU2SitBVUW5YWQnhJcAZcJKfF6WklNWF/EGcK03WdkZUWTCmixgjcd0fliQsJFzemc5QV2F3gbhwW+Ji0Me7PAZz05wIhHtfWWe/ZGdJdmJBBTrimJuhKPuO3ha2mp4WS4A5ytDjohEf2Sjv+yrSp/G0J41toqM8YhOnSTkaBxzF29OEL5yFiBchW2OrmBy/4ohNXPWUqYHHlJvIhIYlU/MDpyUWyNiWNNJlxPR9ZUIskGsRzqlE7KPyKiM2oDBv4mBmnT9bXjE2fcEBUFqZvc/jePPBl0e7nEYCeErC0H5lg5sNx29BNSGluAKKgei8XddmXKz3ulCXvngATil0rl5Wa6zXGlTlDJtImSzu1oALqisnboqcIVY+yixxt3dcUP33I1GFM7yES4Cp6869DML5e690ruGqGCrbjy+CGzdyZyjtgs86HzpabtBUKjA8OD2OtTNnRumtRV4hZ63uBJYXrkHVDeRPw/PB5ZnhKk193sOheQXKbLf6HyWDVO5LV2RFV7l5zcX0sf/esIYdObTiQ7fZumpfbmk9u2x/PXWa3Y9iyTB0avEEXa4ZCZWBdxIVz6yn38MWK7oxG6BSaTKjVJo16jDCfyNX5NNQEMlEMoq8+Kq+MDlr99jdRCYRaS8FJcCL6KqB1IlEArPE34qbhuJJurclGI/SSWqSW5AoQOUQ6hPVbh5A4SQ192hDdyA+55NFLx7axMxRVt75N6zAEGIXMRTTSNKCkxXCS1YCxgvXwURyVAyhMYFq5u6HNn8JcmNy4CBtk86Eszy3aRR/mb6Qq2uu8tym8fF71t8al10teXMHU9e6vyCCiaWFp5Si5ekfv3B6rtPoTGerlEhTN146yi9z8tB50IgqTdPQPn5J9ALy1b82wTTadOz0l/4vtS27aXfeJsZ6G+DNkdMNY/LQ/F+q+6Hd6r+9lMJxWmP6j6WXh37rd+wbODhrfz21Os0Znc7TVVvV8VFKSkpKSkpKSkpKSkpKShT/AZvjGxEMIIHHAAAAAElFTkSuQmCC" alt="">
        <form action="">
            <input class="Login_Input" id="username" v-model="username" placeholder="username">
            <input class="Login_Input" id="password" v-model="password" type="password" placeholder="password">
        </form>
        <button class="Login_Button" v-on:click="setId">Login</button>
        <nuxt-link to="/" class="button">Go back ></nuxt-link>
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
        .Login_Button{
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