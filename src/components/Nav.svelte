<script>
  export let segment;
  import { title } from "@config/app.config.js";
  import routes from "@config/nav.config.js";
  import Icon from "@components/Icon.svelte";

  const defaultSegment = routes[0].segment;
  const landingPageSegment = ".";
  const isActive = (current, route) => current === route;

  export let isOpen = false;

  function toggle() {
    isOpen = !isOpen;
  }

  $: {
    segment;
    isOpen = false;
  }

</script>

<style>

  nav {
    background-color: var(--color2);
    color: #000;
  }

  nav.open {
    position: fixed;
    width: 100%;
    height: 100vh;
    overflow-y: auto;
  }

  header {
    padding-bottom: 0.5rem;
    display: grid;
    grid-template-columns: 3rem auto;
    padding: 1em 1rem;
  }

  .logo {
    /* font-weight: 600; */
    padding: 0.5rem 1rem;
  }

  .toggle-menu {
    background: transparent;
    color: var(--body-color);
    border: 1px solid transparent;
  }

  .nav-items {
    display: none;
  }

  .open .nav-items {
    display: block;
  }



  [aria-current] {
    position: relative;
    display: inline-block;
  }

  [aria-current]::after {
    position: absolute;
    content: "";
    width: calc(100% - 2em);
    height: 2px;
    background-color: #ccc;
    display: block;
    bottom: -1px;
  }

  a {
    width: auto;
    text-decoration: none;
    padding: 1rem 2rem;
    display: block;
  }

  @media screen and (min-width: 40rem) {

    nav {
      display: grid;
      grid-template-columns: 1fr 2fr;
      padding: 1em 0rem;
      position: sticky;
      top: 0rem;
      z-index: 2;
    }

    header {
      display: block;
      padding: 0 0;
    }


  .toggle-menu {
    display: none;
  }

  .nav-items {
    display: flex;
    flex-flow: row wrap;
    list-style: none;
    justify-content: center;
    padding: 0 0;
  }

  a {
    padding: 0.5rem 1rem;
  }

  }
</style>

<nav class:open={isOpen}>
    <header>
      <button type="button" aria-labelledby="Toggle Navigation Menu" class="toggle-menu" on:click|preventDefault={toggle}>
        <Icon name={ isOpen ? "close" : "menu"} />
      </button>
      <a href={landingPageSegment} class="logo">{title}</a>
    </header>
    <ul class="nav-items">
      {#key segment}
        {#each routes as route}
          <li>
            <a aria-current={isActive(segment || landingPageSegment, route.segment) ? 'page' : undefined} href={route.segment}>
              {route.label}
            </a>
          </li>
        {/each}
      {/key}
    </ul>
</nav>
