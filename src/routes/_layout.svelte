<script>
  import Nav from "@components/Nav.svelte";
  import Footer from "@components/Footer.svelte";
  import ContentLayout from "@components/layouts/ContentLayout.svelte";
  export let segment;
</script>

<style>
  main {
    min-height: 90vh;
  }
</style>

<Nav {segment} />

<ContentLayout>

  <main>
    <slot />
  </main>

  <Footer />

</ContentLayout>
