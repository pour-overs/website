<script context="module">

  export async function preload(page, session) {

    const displayUnpublished = true;

    const res = await this.fetch(`/api/sitemap.json`);
    const sitemap = await res.json();

    if (!displayUnpublished) {
      sitemap.guides = sitemap.guides.filter( guide => guide.isPublished);
    }

    return { sitemap };
  }
</script>

<script>

  export let sitemap;

</script>

<style>
  .muted {
    opacity: 0.5;
  }

  nav ul {
    list-style: none;
    padding: 0 0;
    margin: 0 0;
  }

</style>

<h1>Sitemap</h1>

<nav>
  <ul>
    {#each sitemap.guides as guide}
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