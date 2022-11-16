<div style="text-align: center;margin-bottom: 2rem;margin-top: 2rem">
    <img src="./images/welcome.png" class="welcome-image">
</div>

<div style="text-align: center;margin-bottom: 2rem;margin-top: 2rem;margin-left: 30%;max-width: 40%">
    <img on:click="{() => navigate('/browser')}" style="cursor: pointer" src="./images/start_browsing.png" class="welcome-image">
</div>

<!--<div style="text-align: center;margin-bottom: 2rem;margin-top: 2rem;margin-left: 30%;max-width: 40%">-->
<!--    <img on:click={handleclick} style="cursor: pointer" src="./images/start_browsing.png" class="welcome-image">-->
<!--</div>-->

<div style="text-align: center;margin-bottom: 2rem;margin-top: 2rem;">
    <img src="./images/washu_mainpage.png" class="mainpage-image">
</div>


<script lang="ts">
    import LayoutGrid, { Cell } from '@smui/layout-grid';
    import ImageList, {
        Item,
        ImageAspectContainer,
        Image,
        Supporting,
        Label,
    } from '@smui/image-list';
    import { Router, Route, Link, navigate } from "svelte-navigator";
    import Browser from "../ui/Browser.svelte"
    // import { Body, classList, style } from "svelte-body";
    export let browse;

    function handleclick(event){
        browse =     {
            k: 4,
            icon: "toc",
            label: "Browser"
        };
    }
</script>

<style>
    .mainpage-image{
        max-width: 100%;
        text-align: center;
        display: inline;
    }

    .welcome-image{
        max-width: 50%;
        text-align: center;
        display: inline;
    }

    body{
        min-height: 150vh;
        margin: 0;
        background-attachment: fixed;
        background-color: hsl(209, 36%, 86%);
        background-size: 100vw 100vh;
        background-image: radial-gradient(
                50% 50% at 50% 50%,
                rgba(255, 255, 255, 0.75) 0%,
                rgba(255, 255, 255, 0) 100%
        ),
        linear-gradient(180deg, rgb(202, 216, 228) 0%, hsl(209, 36%, 86%) 15%, hsl(224, 44%, 95%) 50%);
    }


</style>
