<script context="module">

  export async function preload(page, session) {

    const showAll = "showAll" in page.query;

    const res = await this.fetch(`/api/wikis.json${showAll ? "?showAll" : ""}`);
    const byTopic = await res.json();

    const wikis = byTopic[""] || [];

    delete byTopic[""];

    return { byTopic, wikis };
  }
</script>

<script>

  import { getWikiURL } from "@services/routes.js";
  export let wikis = [];
  export let byTopic = {};
  let hasAny = [...wikis, ...Object.values(byTopic)].length > 0;

</script>

<style>
  .muted {
    opacity: 0.5;
  }

  ul {
    margin-bottom: 2rem;
  }

</style>

<h1>Wiki</h1>

<nav>
  {#if hasAny}
    <ul>
      {#each wikis as wiki}
        <li class:muted={!wiki.isPublished}>
          <a href={getWikiURL(wiki)}>{wiki.title}</a>
        </li>
      {/each}
    </ul>

    {#each Object.keys(byTopic) as topic}
      <h4>{topic}</h4>
      <ul>
        {#each byTopic[topic] as wiki}
          <li class:muted={!wiki.isPublished}>
            <a href={getWikiURL(wiki)}>{wiki.title}</a>
          </li>
          {/each}
      </ul>
    {/each}
  {:else}
    <p>There are no published Wikis yet. Come back soon!</p>
  {/if}

</nav>