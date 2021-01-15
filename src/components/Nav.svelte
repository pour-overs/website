<script>
  export let segment;
  import { title } from "@config/app.config.js";
  import routes from "@config/nav.config.js";

  const defaultSegment = routes[0].segment;
  const landingPageSegment = ".";
  const isActive = (current, route) => current === route;
</script>

<style>
  .logo {
    text-align: center;
    padding: 1em 2em;
    font-weight: 600;
  }

  .nav-items {
    display: flex;
    flex-flow: row wrap;
    list-style: none;
    margin: 0 auto;
    justify-content: center;
    padding: 0 0;
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
    background-color: rgb(255, 62, 0);
    display: block;
    bottom: -1px;
  }

  a {
    text-decoration: none;
    padding: 0.5em 1em;
    display: block;
  }
</style>

<nav>
  <a href={landingPageSegment} class="logo">{title}</a>
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
