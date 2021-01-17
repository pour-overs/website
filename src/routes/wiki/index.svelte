<script context="module">

  export async function preload(page, session) {

    const showAll = "showAll" in page.query;

    const res = await this.fetch(`/api/wikis.json${showAll ? "?showAll" : ""}`);
    let wikis = await res.json();

    return { wikis };
  }
</script>

<script>
  import { getWikiURL } from "@services/routes.js";
  export let wikis = [];

</script>

<style>
  .muted {
    opacity: 0.5;
  }

</style>

<h1>Wikis</h1>

<nav>
  <ul>
    {#each wikis as wiki}
      <li class:muted={!wiki.isPublished}>
        <a href={getWikiURL(wiki)}>{wiki.title}</a>
      </li>
    {:else}
      <li>
        <p>There are no published Wikis yet. Come back soon!</p>
      </li>
    {/each}
  </ul>
</nav>