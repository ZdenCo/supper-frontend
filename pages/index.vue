<template>
    <div class="Index_Main">
        <header class="Index_Header">
                <div class="Index_Logo">
                    <Logo />
                    <h2 class="Index_Header-box">SUPPER</h2>
                </div>
                <div class="placeholder"></div>
                <nuxt-link class="Index_Header-link" to="contactpage">
                    <div class="Index_Header-box">
                        <h3>Contact us</h3>
                    </div>
                    </nuxt-link>
                <nuxt-link class="Index_Header-link" to="contactpage">
                    <div class="Index_Header-box">
                        <h3>Contact us</h3>
                    </div>
                    </nuxt-link>
                <nuxt-link class="Index_Header-button" to="contactpage">
                    <div class="Index_Header-box button">
                        <h3>Sign in</h3>
                    </div>
                    </nuxt-link>
                <nuxt-link class="Index_Header-button" to="homepage">
                    <div class="Index_Header-box button-active">
                        <h3>Log in</h3>
                    </div>
                    </nuxt-link>
            </header>
        <div class="Index_Background">
            <section class="Index_Content">
            <div class="Index_Step">
                <h2>ŠETŘÍTE ČAS</h2>
                <div class="placeholder" />
                <ul>
                    <li>jednoduche ovladani</li>
                    <li>snadna registrace</li>
                    <li>dalsi sracka</li>
                </ul>
            </div>
            <div class="Index_Step">
                <h2>ŠETŘÍTE ČAS</h2>
                <div class="placeholder" />
                <ul>
                    <li>jednoduche ovladani</li>
                    <li>snadna registrace</li>
                    <li>dalsi sracka</li>
                </ul>
            </div>
            <div class="Index_Step">
                <h2>ŠETŘÍTE ČAS</h2>
                <div class="placeholder" />
                <ul>
                    <li>jednoduche ovladani</li>
                    <li>snadna registrace</li>
                    <li>dalsi sracka</li>
                </ul>
            </div>
            <button class="Index_Button button-active">Price plan ></button>
        </section>
        
        </div>
        <FooterComponent />
    </div>
</template>
<script>
export default {
}
</script>
<style lang="scss">
.Index_Main{
    
    h3{
        color: white;
        font-weight: normal;
    }
    $header-line-height:3.5rem;
    display: flex;
    flex-direction: column;
    .Index_Background{
        margin-top: 5rem;
        position: relative;
        background-image: url('https://images.unsplash.com/photo-1514477917009-389c76a86b68?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=961&q=80');
        @include wh(100%,38rem);
        margin-bottom: 5vh;
        background-repeat: no-repeat;
        background-size: cover;
        align-items: flex-end;
    }
    header{
        display: flex;
        position: absolute;
        top: 0;
        right: 0%;
        flex-direction: row;
        @include wh(100%,5rem);
        background-color: rgba($color: #000000, $alpha: .6);
        justify-content: space-around;
        vertical-align: center;
        .Index_Logo{
            margin: 0 .4rem;
            line-height: $header-line-height;
            display: flex;
            flex-direction: row;
            .NuxtLogo{
                width: $header-line-height;
            }
        }
        .Index_Header-box{
            @include wh(7rem,$header-line-height);
            margin: calc((5rem - #{$header-line-height})/2) .5rem;
            transition: all .3s;
            h3{
                line-height: $header-line-height;
            }
        }
        
        .placeholder{
            width: 50%;
            height: 1rem;
            flex-shrink:  4;
        }
    }
    .Index_Content{
        padding: 3rem;
        margin: 3rem;
        align-items: center;
        display: flex;
        justify-content: space-evenly;
        flex-direction: row;
        border: 1px white solid;
        background-color: rgba($color: #000000, $alpha: .2);
        .Index_Step{
            padding: 2rem 1rem;
            display: flex;
            flex-direction: column;
            transition: all .3s;
            background-color: rgba($color: #000000, $alpha: .6);
            @include wh(18rem, 25rem );
            &:hover{
                transform: scale(1.05);
            }
            .placeholder{
                height: 30%;
            }
            h2{
                border: 1px white solid;
                height: 10%;
            }
            ul{
                text-align: left;
                li{
                    padding: .2rem 0;
                }
            }
        }
        .Index_Button{
            position: absolute;
            bottom: 5%;
            font-size: 1rem;
            right: 8%;
            @include wh(8rem, 4rem);
            border: 3px white solid;
            border-radius: 0;
            
            &:hover{
                border-radius: 5px;
                transform: translateX(5px);
            }
        }
    }

}
</style>