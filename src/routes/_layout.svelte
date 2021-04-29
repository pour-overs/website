<script context="module">
  import PageTitle from "@components/PageTitle.svelte";
</script>

<script>
  import Nav from "@components/Nav.svelte";
  import Footer from "@components/Footer.svelte";
  import ContentLayout from "@components/layouts/ContentLayout.svelte";
  export let segment;
</script>

<style>
  main {
    min-height: 85vh;
  }
</style>

<PageTitle />
<Nav {segment} />

<ContentLayout>

  <main>
    <slot />
  </main>

  <Footer />

</ContentLayout>
