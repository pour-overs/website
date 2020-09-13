<script>
  export let guide;
  export let summary;
</script>

<h2>Instructions</h2>

{#if guide.steps.length > 0}
<ol>
  {#each guide.steps as step}
    <li>
      <h3>{step.title}</h3>
      <p>
        {step.description}
      </p>
    </li>
  {/each}
</ol>
{:else}
  <p>This guide is missing instructions.</p>
{/if}
