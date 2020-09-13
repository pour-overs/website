<script>
  export let guide;

  const baseYoutubeLength = "https://youtube.com/watch?".length;
  let hasYoutubeUrl =
    (guide.youtubeUrl || "").length > 0 &&
    guide.youtubeUrl.length > baseYoutubeLength;
</script>

<h3>About this guide</h3>
<div>{guide.introduction.content}</div>

{#if hasYoutubeUrl}
  <div>
    <!-- TODO: embed youtube video -->
    <a href={guide.youtubeUrl}>Watch instructions on Youtube</a>
  </div>
{/if}
