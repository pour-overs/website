<script context="module">
    import { title as appTitle, slogan } from "@config/app.config.js";
</script>

<script>
    export let title = null;

    let pageTitle = title;
    if (title === null) {
        pageTitle = `${slogan} | ${appTitle}`;
    }
    else {
        pageTitle = `${title} | ${appTitle}`;
    }
</script>
    

<svelte:head>
    <title>{pageTitle}</title>
</svelte:head>