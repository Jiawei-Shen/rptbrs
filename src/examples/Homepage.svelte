<script>
    import LayoutGrid, { Cell } from '@smui/layout-grid';
    import ImageList, {
        Item,
        ImageAspectContainer,
        Image,
        Supporting,
        Label,
    } from '@smui/image-list';
    // import { Router, Route, Link, navigate } from "svelte-navigator";
    import Fab from '@smui/fab';
    import Browser from "../ui/Browser.svelte"
    const patternVue = "/assets/img/pattern_svelte.png";
    import { link, navigate } from "svelte-routing";
    // import { Tour, TourTip, run, TourItem} from 'svelte-tour';
    import {onMount} from "svelte";

    import introJS from "intro.js"
    import {startTour, bootstrapTour} from "../api/toursteps";
    // import { Body, classList, style } from "svelte-body";
    export let browse;
    // onMount(()=>{})
</script>

<!--<Tour TourTip={TourTip} />-->

<!--<TourItem message="This is a button I want to include in the tour.">-->
<!--    <button>Click here</button>-->
<!--</TourItem>-->



<section class="header relative pt-16 items-center flex h-screen max-h-860-px">
    <div class="container mx-auto items-center flex flex-wrap">
        <div class="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
            <div class="pt-32 sm:pt-0">
                <h2 class="font-semibold text-4xl text-blueGray-600">
                    WashU Repeat Browser - <br>An useful tool to analyse repeats.
                </h2>
                <p class="mt-4 text-lg leading-relaxed text-blueGray-500">
                    WashU Repeat Browser is Free and Open Source. you can access it from the
                    <a
                            href="https://github.com/Jiawei-Shen/rptbrs"
                            class="text-blueGray-600"
                            target="_blank"
                    >
                        Github repo.
                    </a>
                    It features three different data plots and it comes with ENCODE (The Encyclopedia of DNA Elements).
                </p>
                <div class="mt-12">
                    <a
                            use:link
                            href="browser"
                            class="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-red-400 active:bg-red-500 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                    >
                       Start Browsing!
                    </a>
                </div>
            </div>
        </div>
    </div>
    <img
            class="absolute top-0 b-auto right-0 pt-16 sm:w-6/12 -mt-48 sm:mt-0 w-10/12 max-h-860-px"
            src="{patternVue}"
            alt="..."
    />
</section>

<div style="text-align: center;margin-bottom: 2rem;margin-top: 2rem" id="img1" data-intro="hello world!">
    <img src="./images/welcome.png" class="welcome-image">
</div>

<!--<div style="text-align: center;margin-bottom: 2rem;margin-top: 2rem;margin-left: 30%;max-width: 40%">-->
<!--    <img on:click="{() => navigate('/browser')}" style="cursor: pointer" src="./images/start_browsing.png" class="welcome-image">-->
<!--</div>-->

<div style="display: flex;align-items: center;justify-content: center;flex-direction: column;">
    <Fab
            on:click={bootstrapTour}
            target="_blank"
            extended
            style="width:40vh;height: 16vh;"
    >
        <Label style="font-size: 30px">Start Browsing!</Label>
    </Fab>
</div>

<!--<div style="text-align: center;margin-bottom: 2rem;margin-top: 2rem;margin-left: 30%;max-width: 40%">-->
<!--    <img on:click={handleclick} style="cursor: pointer" src="./images/start_browsing.png" class="welcome-image">-->
<!--</div>-->

<div style="text-align: center;margin-bottom: 2rem;margin-top: 2rem;" id="img2">
    <img src="./images/washu_mainpage.png" class="mainpage-image">
</div>

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
