<script lang="ts">
  import { session } from '$app/stores'
</script>

<svelte:head>
  <title>SvelteKit Auth</title>
</svelte:head>

<nav>
  <a href="/">Home</a>

  {#if !$session.user}
    <a href="/auth/login">Login</a>
    <a href="/auth/register">Register</a>
  {/if}

  {#if $session.user}
    <a href="/protected">Admin</a>
    <a href="/auth/logout">Log out</a>
  {/if}
</nav>

<slot />
