<script lang="ts">
	import { applyAction, enhance } from '$app/forms'
	import TextInput from '$lib/client/ui/TextInput.svelte'

	export let form
</script>

<h1>Login</h1>

<form action="?/login" method="POST" use:enhance>
	{#if form?.invalid}
		<p class="error">Username and password is required.</p>
	{/if}

	{#if form?.credentials}
		<p class="error">You have entered the wrong credentials.</p>
	{/if}
	
	<TextInput name="username" placeholder="Username" required />

	<TextInput name="password" placeholder="Password" type="password" required />
	<button type="submit">Log in</button>
</form>
