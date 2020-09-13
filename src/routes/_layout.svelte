<script>
  import Nav from '../components/Nav.svelte';
  export let segment;
</script>

<style>
  main {
    max-width: 56em;
    margin: auto auto;
    padding: 2rem 2rem;
  }
</style>

<Nav {segment}/>

<main>
  <slot></slot>
</main>