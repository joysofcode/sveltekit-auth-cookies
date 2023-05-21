<script lang="ts">
  import { page } from '$app/stores'
</script>
<h1>Home</h1>

{#if $page.data.user}
  <p>Welcome {$page.data.user.displayName}! 👋</p>
{:else}
  <p>Welcome! 👋</p>
{/if}
