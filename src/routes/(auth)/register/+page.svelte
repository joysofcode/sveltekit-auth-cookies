<script lang="ts">
	import { enhance } from '$app/forms'
	import TextInput from '$lib/client/ui/TextInput.svelte'

	export let form
</script>

<h1>Register</h1>

<form action="?/register" method="POST" use:enhance>
	{#if form?.user}
		<p class="error">Username is taken.</p>
	{/if}

	{#if form?.passwordInequality}
		<p class="error">Passwords do not match!</p>
	{/if}
	<TextInput name="username" placeholder="Username" required />

	<TextInput name="password" placeholder="Password" type="password" required />

	<TextInput name="confirm-password" placeholder="Confirm Password" type="password" required />
	<button type="submit">Register</button>
</form>
