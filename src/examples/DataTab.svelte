<head>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css">
    <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"></script>
</head>

<script lang="ts">
    import Modal from '../ui/Modal.svelte';
    import PivotTable from '../components/data-view/PivotTable.svelte';
    import _data from "../json/main.json";
    import defaultData from '../json/zarr_data_1027.json';
    import CardStats from "../components/CardStats.svelte";
    import IconButton from '@smui/icon-button';
    import Button, { Label } from '@smui/button';
    import Card, {
        Content,
        Actions,
    } from '@smui/card';
    import Button, { Label } from '@smui/button';
    import Textfield from '@smui/textfield';
    import Paper, { Title, Content } from '@smui/paper';
    import HelperText from '@smui/textfield/helper-text';
    import IconButton, { Icon } from '@smui/icon-button';
    import LayoutGrid, { Cell } from '@smui/layout-grid';
    import VirtualList from 'svelte-tiny-virtual-list';

    import {Cart} from "../stores/CartStore";
    import {onDestroy, onMount} from "svelte";
    import defaultData from "../json/default_cart_data.json";
    import {getZarrParameters} from '../api/inputdata';

    import type, { MenuComponentDev } from '@smui/menu';

    let menu: MenuComponentDev;
    let clicked = 'nothing yet';
    let upload_active = false;

    let cartData;
    let cartRepeats;

    let tmp_url='';
    let zarr_url;

    let files;

    let valueA=0;

    // $: if (files) {
    //     update_data();
    // }

    async function update_data(){
        const file = files[0]
        const json_content = await file.text().then(d => {
            const {data, repeats} = JSON.parse(d);
            Cart.addDataItems(data);
            Cart.addRepeats(repeats);
            alert(`The files and repeats Updated.`);
        });
    }

    const unsubscribe = Cart.subscribe(async store => {
        const { data, repeats } = store;
        cartData = data;
        cartRepeats = repeats;
    });

    function handleClick(data) {
        alert(`${data.id} (${data.Assay}) Uploaded.`)
    }

    async function setUn() {
        zarr_url = tmp_url;
        const data_json = await getZarrParameters(zarr_url).then(data => {
            handleClick(data);
            Cart.addDataItems([...new Set([...$Cart.data, data])]);
        });
    }

    // let upload_files;
    // $: if (upload_files) {
    //     // Note that `files` is of type `FileList`, not an Array:
    //     // https://developer.mozilla.org/en-US/docs/Web/API/FileList
    //     console.log(upload_files);
    //
    //     for (const file of upload_files) {
    //         console.log(`${file.name}: ${file.size} bytes`);
    //         console.log(`${file}`);
    //     }
    // }

    onMount(() => {
        unsubscribe();
    });

    let itemSize = 100;
    export let mode;
</script>


<div class="bg-red-500 md:pt-32 pb-32 pt-12">
    <div class="px-4 md:px-10 mx-auto w-full">
        <div>
            <!-- Card stats -->
            <div class="flex flex-wrap">
                <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
                    <CardStats
                            statSubtitle="TRAFFIC"
                            statTitle="350,897"
                            statArrow="up"
                            statPercent="3.48"
                            statPercentColor="text-emerald-500"
                            statDescripiron="Since last month"
                            statIconName="far fa-chart-bar"
                            statIconColor="bg-red-500"
                    />
                </div>
                <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
                    <CardStats
                            statSubtitle="NEW USERS"
                            statTitle="2,356"
                            statArrow="down"
                            statPercent="3.48"
                            statPercentColor="text-red-500"
                            statDescripiron="Since last week"
                            statIconName="fas fa-chart-pie"
                            statIconColor="bg-orange-500"
                    />
                </div>
                <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
                    <CardStats
                            statSubtitle="SALES"
                            statTitle="924"
                            statArrow="down"
                            statPercent="1.10"
                            statPercentColor="text-orange-500"
                            statDescripiron="Since yesterday"
                            statIconName="fas fa-users"
                            statIconColor="bg-pink-500"
                    />
                </div>
                <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
                    <CardStats
                            statSubtitle="PERFORMANCE"
                            statTitle="49,65%"
                            statArrow="up"
                            statPercent="12"
                            statPercentColor="text-emerald-500"
                            statDescripiron="Since last month"
                            statIconName="fas fa-percent"
                            statIconColor="bg-emerald-500"
                    />
                </div>
            </div>
        </div>
    </div>
</div>


<div style="display: flex;align-items: center;justify-content: center;flex-direction: column;margin-top: -6rem;" id="dataGuidence">
    <Paper square color="secondary">
        <Title>Select Files</Title>
        <Content>
            By <b>Selecting our prcoessed data</b>, or <b>uploading user processed data(zarr)</b>, or <b>uploading the session json file</b>.
        </Content>
    </Paper>
    <hr>
</div>



<div style="width:80%; margin-left: 10%; margin-right: 10%; display:inline">
    <Modal>
        <h3>Files Selection: </h3>
        <PivotTable DATA={_data[mode]}/>
    </Modal>
</div>

<hr>
<h3>Files Upload: </h3>
<LayoutGrid>
    <Cell span={6}>
        <Card style="height: 25vh;">
            <Content>
                Zarr File Uploading:
            </Content>
            <Textfield
                    class="shaped-outlined"
                    style="width: 50%;margin-left: 10%;"
                    variant="outlined"
                    bind:value={tmp_url}
                    label="URL"
            >
                <HelperText style="margin-left: 10%;" slot="helper">Enter the Zarr URL.</HelperText>
            </Textfield>

            <Actions fullBleed>
                <Button on:click={setUn}>
                    <Label>Upload</Label>
                    <i class="material-icons" aria-hidden="true">arrow_forward</i>
                </Button>
            </Actions>
        </Card>
    </Cell>

    <Cell span={6}>
        <Card style="height: 25vh;">
            <Content>
                Json File Uploading:
            </Content>
            <input style="width: 50%; margin-left: 10%;height: 10vh;"
                   bind:files
                   id="many"
                   type="file"
            />

            <Actions fullBleed>
                <Button on:click={update_data}>
                    <Label>Upload</Label>
                    <i class="material-icons" aria-hidden="true">arrow_forward</i>
                </Button>
            </Actions>
        </Card>
    </Cell>
</LayoutGrid>
<hr>

<div style="margin-left: 35%; margin-right: 35%">
    <Button on:click={() => {
        Cart.addDataItems(defaultData.data);
        Cart.addRepeats(defaultData.repeats);
    }}
            touch variant="raised">
        <Label>Reset datasets and repeats as default</Label>
    </Button>
</div>



<style>
    IconButton{
        float: right;
    }


    /*:global(body), :global(html) {*/
    /*    height: 100%;*/
    /*    margin: 0;*/
    /*    background-color: rgb(249, 249, 249);*/
    /*}*/


    .actions label {
        padding: 10px 0;
        font-size: 18px;
        color: #999;
        font-family: -apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif;
    }
</style>
