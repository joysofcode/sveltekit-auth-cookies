<script lang="ts">
	import { page } from '$app/stores'
</script>

<h1>Admin</h1>

{#if $page.data.user}
	<p>Welcome {$page.data.user}!</p>
{/if}
