<script>
  import Nav from "@components/Nav.svelte";
  import Footer from "@components/Footer.svelte";
  export let segment;
</script>

<style>
  main {
    max-width: 56em;
    margin: auto auto;
    padding: 2rem 2rem;
    min-height: 90vh;
  }
</style>

<Nav {segment}/>

<main>
  <slot></slot>
</main>

<Footer />