<script>
  import { beforeUpdate, createEventDispatcher } from "svelte";
  import { PivotData } from "./Utilities";
  import { spanSize } from "./helper";
  import { formatCellInfo, getFiltered } from './data-helper';
  import DataTable, { Head, Body, Row, Cell } from '@smui/data-table';
  import Card, { Content } from '@smui/card';
  // import LayoutGrid from '@smui/layout-grid';
  // import Tabulator from 'tabulator-tables';


  const dispatch = createEventDispatcher();
  export let data;

  let pivotData = new PivotData(data);
  let colAttrs = pivotData.props.cols;
  let rowAttrs = pivotData.props.rows;
  let rowKeys = pivotData.getRowKeys();
  let colKeys = pivotData.getColKeys();

  beforeUpdate(() => {
    pivotData = new PivotData(data);
    colAttrs = pivotData.props.cols;
    rowAttrs = pivotData.props.rows;
    rowKeys = pivotData.getRowKeys();
    colKeys = pivotData.getColKeys();

    console.log(rowKeys)
  });

  function handleCellClick(input) {
      let filteredResults = getFiltered(data.data, input);
      dispatch('cell-click', filteredResults);
  }

</script>

<style>
  table.pvtTable {
    font-size: 15px;
    border: 1px solid #1C6EA4;
    background-color: #EEEEEE;
    width: 100%;
    text-align: center;
    border-collapse: collapse;
  }
  table.pvtTable td, table.pvtTable th {
    border: 1px solid #AAAAAA;
    padding: 3px 2px;
  }
  table.pvtTable tbody td {
    font-size: 16px;
  }
  table.pvtTable tr:nth-child(even) {
    background: #D0E4F5;
  }
  table.pvtTable thead {
    background: #1C6EA4;
    background: -moz-linear-gradient(top, #5592bb 0%, #327cad 66%, #1C6EA4 100%);
    background: -webkit-linear-gradient(top, #5592bb 0%, #327cad 66%, #1C6EA4 100%);
    background: linear-gradient(to bottom, #5592bb 0%, #327cad 66%, #1C6EA4 100%);
    border-bottom: 2px solid #444444;
  }
  table.pvtTable thead th {
    font-size: 18px;
    font-weight: bold;
    color: #FFFFFF;
    border-left: 2px solid #D0E4F5;
  }
  table.pvtTable thead th:first-child {
    border-left: none;
  }
</style>

<DataTable table$aria-label="File list" style="width: 100%;">
  <Head>
    <Row>
      {#each rowAttrs as rattr, count_r}
        <Cell style="width: 35%;font-size: 1.6em">{rattr}</Cell>
      {/each}
      {#each colAttrs as cattr, count_a}
        {#each colKeys as ckey, count_k}
          <Cell style="font-size: 1.6em;">{ckey[count_a]}</Cell>
        {/each}
      {/each}
    </Row>
  </Head>

  <Body>
  {#each rowKeys as rowKey, i}
    <Row>
    {#each rowKey as txt, j}
      <Cell style="font-size: 1.4em;">{txt}</Cell>
    {/each}

    {#each colKeys as colKey, j}
      <Cell style="font-size: 1.4em; cursor: pointer;"
            on:click={() => handleCellClick(formatCellInfo(rowAttrs, rowKey, colAttrs, colKey, pivotData
                    .getAggregator(rowKey, colKey)
                    .value()))}>
        <div style="display: flex;align-items: center;justify-content: center;flex-direction: column;">
          <Card padded style="width: 15vh; height: 5vh;">
            {pivotData
                  .getAggregator(rowKey, colKey)
                  .value() ? pivotData.getAggregator(rowKey, colKey).value() : ''}
          </Card>
        </div>
      </Cell>
    {/each}
    </Row>
  {/each}
  </Body>
</DataTable>

<!--<table class="pvtTable" align="center">-->
<!--  <thead>-->
<!--  {#each colAttrs as c, j}-->
<!--    <tr key={`colAttr${j}`}>-->

<!--      {#each rowAttrs as r, i}-->
<!--        <th class="pvtAxisLabel" key={`rowAttr${i}`}-->
<!--            rowspan="2">{r}</th> &lt;!&ndash; where 2 stands for rowAttrs and keys (1 + 1). &ndash;&gt;-->
<!--      {/each}-->

<!--      &lt;!&ndash;-->
<!--      {#if j === 0 && rowAttrs.length !== 0}-->
<!--        <th colSpan={rowAttrs.length} rowSpan={colAttrs.length} />-->
<!--      {/if}-->
<!--      &ndash;&gt;-->

<!--      <th colspan={colKeys.length} class="pvtAxisLabel">{c}</th>-->
<!--    </tr>-->

<!--    <tr>-->
<!--      {#each colKeys as colKey, i}-->
<!--        {#if spanSize(colKeys, i, j) !== -1}-->
<!--          <th-->
<!--                  class="pvtColLabel"-->
<!--                  key={`colKey${i}`}-->
<!--                  colSpan={spanSize(colKeys, i, j)}-->
<!--                  rowSpan={(j === colAttrs.length - 1) && (rowAttrs.length !== 0) ? 2 : 1}>-->
<!--            {colKey[j]}-->
<!--            &lt;!&ndash; {#if colAttrs.length > 1 && colAttrs.length - 1 === j}-->
<!--              <div class="rotate text-xs">{colKey[j]}</div>-->
<!--            {:else}{colKey[j]}{/if} &ndash;&gt;-->
<!--          </th>-->
<!--        {/if}-->
<!--      {/each}-->
<!--    </tr>-->
<!--  {/each}-->
<!--  </thead>-->


<!--  <tbody>-->
<!--  {#each rowKeys as rowKey, i}-->
<!--    <tr key={`rowKeyRow${i}`}>-->

<!--      {#each rowKey as txt, j}-->
<!--        {#if spanSize(rowKeys, i, j) !== -1}-->
<!--          <th-->
<!--                  key={`rowKeyLabel${i}-${j}`}-->
<!--                  class="pvtRowLabel"-->
<!--                  rowSpan={spanSize(rowKeys, i, j)}>-->
<!--            &lt;!&ndash; colSpan={j === rowAttrs.length - 1 && colAttrs.length !== 0 ? 1 : 2} &ndash;&gt;-->
<!--            {#if rowAttrs.length !== 1 && spanSize(rowKeys, i, j) > 3}-->
<!--              <div>{txt}</div>-->
<!--            {:else}{txt}{/if}-->
<!--          </th>-->
<!--        {/if}-->
<!--      {/each}-->
<!--      {#each colKeys as colKey, j}-->
<!--        <td-->
<!--                class={`pvtVal pvtValue`}-->
<!--                key={`pvtVal${i}-${j}`}-->
<!--                on:click={() => handleCellClick(formatCellInfo(rowAttrs, rowKey, colAttrs, colKey, pivotData-->
<!--                    .getAggregator(rowKey, colKey)-->
<!--                    .value()))}>-->

<!--          {pivotData-->
<!--                  .getAggregator(rowKey, colKey)-->
<!--                  .value() ? pivotData.getAggregator(rowKey, colKey).value() : ''}-->
<!--        </td>-->
<!--      {/each}-->
<!--    </tr>-->
<!--  {/each}-->
<!--  </tbody>-->
<!--</table>-->