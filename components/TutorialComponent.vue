<template>
    <div id="tutorial" class="Tutorial_Main">
        <h2 class="Tutorial_Name" >{{tutorial.name}}</h2>
        <h3 class="Tutorial_Description">{{tutorial.description}}</h3>
        <ol>
            <div class="Tutorial_Text" v-for="Text in tutorial.Texts">
                    <li>{{Text.text}}</li>
                    <img src="~/assets/images/tutorialImage.png" alt="" >
            </div>
        </ol>
    </div>
</template>
<script>
export default {
    props: [
        'tutorial'
    ],
}
</script>
<style lang="scss">
    .Tutorial_Main{
        position: absolute;
        left: 0;
        top: 0;
        overflow: auto;
        background: $grey-color;
        @include wh(100%,100%);
        display: flex;
        flex-direction: column;
        padding: 2rem;
        text-align: left;
        .Tutorial_Text{
            color: $white-color;
            font-weight: bold;
            display: flex;
            background-color: rgba($color: $white-color, $alpha: .0);
            flex-direction: column;
            border: 3px solid $orange-color;
            padding: 1rem;
            margin-top: 1rem;
            li{
                margin: 1rem 1.5rem;

            }
        }

        
    }
</style>