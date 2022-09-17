<script lang="ts">
	import { enhance } from '$app/forms'
	import type { ActionData } from './$types'

	export let form: ActionData
</script>

<h1>Register</h1>

<form method="POST" use:enhance>
	<div>
		<label for="username">Username</label>
		<input id="username" name="username" type="text" required />
	</div>

	<div>
		<label for="password">Password</label>
		<input id="password" name="password" type="password" required />
	</div>

	{#if form?.user}
		<p class="error">Username is taken.</p>
	{/if}

	<button type="submit">Register</button>
</form>
