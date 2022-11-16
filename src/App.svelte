<script lang="ts">
  import { Router, Route, Link } from "svelte-navigator"
  import Myapp from "./myapp"
  import Browser from "./ui/Browser.svelte"

</script>

<Router>
  <main>
    <Route path="/">
      <Myapp />
    </Route>

    <Route path="browser">
      <Browser />
    </Route>

  </main>
</Router>