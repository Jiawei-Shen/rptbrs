<div style="text-align: center;margin-bottom: 2rem;margin-top: 2rem">
    <img src="./images/welcome.png" class="welcome-image">
</div>

<div style="text-align: center;margin-bottom: 2rem;margin-top: 2rem">
    <img src="./images/washu_mainpage.png" class="mainpage-image">
</div>

<div class="box">
    Click outside me!
</div>

<!--<LayoutGrid>-->
<!--    <Cell span={12}>-->

<!--    </Cell>-->

<!--    <Cell span={12}>-->

<!--    </Cell>-->

<!--&lt;!&ndash;    <Cell span={12}>&ndash;&gt;-->
<!--&lt;!&ndash;        <h1>&ndash;&gt;-->
<!--&lt;!&ndash;            How to use this Browser:&ndash;&gt;-->
<!--&lt;!&ndash;        </h1>&ndash;&gt;-->
<!--&lt;!&ndash;        <p>&ndash;&gt;-->
<!--&lt;!&ndash;            blablablabalba....&ndash;&gt;-->
<!--&lt;!&ndash;        </p>&ndash;&gt;-->
<!--&lt;!&ndash;    </Cell>&ndash;&gt;-->

<!--</LayoutGrid>-->

<script lang="ts">
    import LayoutGrid, { Cell } from '@smui/layout-grid';
    import ImageList, {
        Item,
        ImageAspectContainer,
        Image,
        Supporting,
        Label,
    } from '@smui/image-list';
</script>

<style>
    .welcome-cell {
        height: 5rem;
        margin-bottom: auto;
        display: block;
        text-align: center;
        justify-content: center;
        align-items: center;
        background-color: #f7f7f7;
        color: var(--mdc-theme-secondary, #333);
    }

    .img-cell {
        height: 15rem;
        max-height: 15rem;
        display: block;
        text-align: center;
        justify-content: center;
        align-items: center;
        background-color: #f7f7f7;
        color: var(--mdc-theme-secondary, #333);
    }

    .intro-cell {
        height: 300px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #f7f7f7;
        color: var(--mdc-theme-secondary, #333);
    }

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

    .box {
        --width: 100px;
        --height: 100px;
        width: var(--width);
        height: var(--height);
        left: calc(50% - var(--width) / 2);
        top: calc(50% - var(--height) / 2);
        display: flex;
        align-items: center;
        padding: 8px;
        border-radius: 4px;
        background-color: #ff3e00;
        color: #fff;
        text-align: center;
        font-weight: bold;
    }
</style>
