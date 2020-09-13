<script>

  export let guide;
  export let summary;

  import { onMount } from "svelte";
  import GuideIntroduction from "@components/guide/GuideIntroduction.svelte";
  import GuideCoffee from "@components/guide/GuideCoffee.svelte";
  import GuideSteps from "@components/guide/GuideSteps.svelte";

  onMount(() => console.log({ guide, summary }));


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


<section>
  <GuideIntroduction {guide} />
</section>
<section>
  <GuideCoffee {guide} />
</section>
<section>
  <GuideSteps {guide} {summary} />
</section>