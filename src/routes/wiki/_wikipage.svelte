<script context="module">

  export async function preload(page, session) {

    const { slug, topic } = page.params;
    let topicQuery = "";

    if (topic) {
      topicQuery = `?topic=${topic}`;
    }

    const res = await this.fetch(`/api/wiki/${slug}.json${topicQuery}`);

    if (res.ok && res.status === 200) {

      const wiki = await res.json();

      return { wiki };
    }

    return this.error(404, "Wiki page not found");
  }
</script>

<script>
  import PageTitle from "@components/PageTitle.svelte";
  export let wiki;
</script>

<style>
  .topic {
    color: var(--body-color);
    font-size: 1rem;
    font-weight: 400;
    margin: 0.5rem 0;
  }

</style>

<PageTitle title={wiki.title} />

{#if wiki.topic}
  <h2 class="topic">{wiki.topic}</h2>
{/if}
<h1>{wiki.title}</h1>

<article>
    {@html wiki.html}
</article>