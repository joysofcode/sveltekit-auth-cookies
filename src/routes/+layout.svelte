<script lang="ts">
	import { enhance } from '$app/forms'
	import { page } from '$app/stores'
	import '../styles/app.css'

	let { children } = $props()
</script>

<svelte:head>
	<title>SvelteKit Auth</title>
</svelte:head>

<nav>
	{#if !$page.data.user}
		<a href="/login">Login</a>
		<a href="/register">Register</a>
	{/if}

	{#if $page.data.user}
		<a href="/admin">Admin</a>

		<form class="logout" action="/logout" method="POST" use:enhance>
			<button type="submit">Log out</button>
		</form>
	{/if}
</nav>

<main>
	{@render children?.()}
</main>
