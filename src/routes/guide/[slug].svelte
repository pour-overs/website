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

  const baseYoutubeLength = "https://youtube.com/watch?".length;
  let hasYoutubeUrl = (guide.youtubeUrl || "").length > 0 && guide.youtubeUrl.length > baseYoutubeLength;

  console.log({ guide, summary });

</script>

<style>
  section {
    margin-bottom: 1rem;
    border: 1px solid #eee;
    padding: 1rem 1rem;
  }
</style>

<header>
  <h1>{guide.title}</h1>
  <h2>{guide.description}</h2>
  <h3>{guide.steps.length} steps</h3>

</header>

<section class="introduction">
  <h3>About this guide</h3>
  <div>
    {guide.introduction.content}
  </div>

  {#if hasYoutubeUrl}
    <div>
      <!-- TODO: embed youtube video -->
      <a href={guide.youtubeUrl}>Watch instructions on Youtube</a>
    </div>
  {/if}
</section>

<section class="coffee">
  <h2>Coffee</h2>
</section>

<section class="steps">
  <h2>Instructions</h2>
</section>
