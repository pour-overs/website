<script context="module">

  export async function preload(page, session) {

    const { slug } = page.params;
    const res = await this.fetch(`/api/wiki/${slug}.json`);
    const wiki = await res.json();

    return { wiki };
  }
</script>

<script>
  import PageTitle from "@components/PageTitle.svelte";
  export let wiki;
</script>

<PageTitle title={wiki.title} />

<h1>{wiki.title}</h1>

<article>
    {@html wiki.content}
</article>