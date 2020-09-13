<script context="module">

  export async function preload(page, session) {

    const { slug } = page.params;
    const res = await this.fetch(`/api/guide/${slug}.json`);
    let { guide, summary } = await res.json();

    return { guide, summary };
  }
</script>

<script>

  export let guide;
  export let summary;

  import Guide from "@components/guide/Guide.svelte";

</script>

<Guide {guide} {summary} />