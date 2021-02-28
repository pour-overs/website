<script context="module">

  export async function preload(page, session) {

    let showAll = false;
    if ("showAll" in page.query) {
      showAll = true;
    }

    const res = await this.fetch(`/api/sitemap.json${showAll ? "?showAll" : ""}`);
    const { wikis, guides } = await res.json();

    return { wikis, guides };
  }
</script>

<script>
  import ContentLayout from "@components/layouts/ContentLayout.svelte";
  export let wikis;
  export let guides;

</script>

<style>
  .muted {
    opacity: 0.5;
  }

</style>

<ContentLayout>
  <h1>Sitemap</h1>

  <h2>Guides</h2>
  <nav>
    <ul>
      {#each guides as guide}
        <li class:muted={!guide.isPublished}>
          <a href={`/guide/${guide.slug}`}>{guide.title}</a>
        </li>
      {:else}
        <li>
          <p>There are no published guides.</p>
        </li>
      {/each}
    </ul>
  </nav>

  <h2>Wiki Pages</h2>
  <nav>
    <ul>
      {#each wikis as wiki}
        <li class:muted={!wiki.isPublished}>
          <a href={`/wiki/${wiki.slug}`}>{wiki.title}</a>
        </li>
      {:else}
        <li>
          <p>There are no published wikis.</p>
        </li>
      {/each}
    </ul>
  </nav>
</ContentLayout>