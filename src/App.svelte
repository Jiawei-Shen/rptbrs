<script>
  // import { Router, Route, Link } from "svelte-navigator"
  import { Router, Route } from "svelte-routing";
  import Myapp from "./myapp"
  import Browser from "./ui/Browser.svelte"

  export let url = "";
</script>

<!--<Router>-->
<!--  <main>-->
<!--    <Route path="/">-->
<!--      <Myapp />-->
<!--    </Route>-->

<!--    <Route path="browser">-->
<!--      <Browser />-->
<!--    </Route>-->

<!--  </main>-->
<!--</Router>-->

<Router url="{url}">
  <!-- admin layout -->
  <Route path="browser" component="{Browser}" />

  <Route path="/" component="{Myapp}" />
</Router>