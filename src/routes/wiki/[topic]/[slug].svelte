<script context="module">
  import WikiPage, { preload as preloadWikiPage } from "../_wikipage.svelte";

  export const preload = preloadWikiPage;
</script>

<script>
  export let wiki;
</script>

<WikiPage {wiki} />