<script>
  export let guide;
</script>

<h2>Coffee</h2>

{#if guide.coffee}
  <ul>
    <li>
      <strong>Device:</strong>
      {guide.coffee.device}
    </li>
    <li>
      <strong>Coffee:</strong>
      {guide.coffee.amount} grams
    </li>
    <li>
      <strong>Grind level:</strong>
      {guide.coffee.grind}
    </li>
  </ul>
{:else}
  <p>Coffee details are missing from this guide.</p>
{/if}
