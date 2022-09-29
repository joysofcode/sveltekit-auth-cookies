<script lang="ts">
	import { applyAction, enhance } from '$app/forms'
	import { invalidateAll } from '$app/navigation'
	import type { ActionData } from './$types'

	export let form: ActionData
</script>

<h1>Login</h1>

<form
	action="?/login"
	method="POST"
	use:enhance={() => {
		return async ({ result }) => {
			// rerun the `load` function for the page
			// https://kit.svelte.dev/docs/modules#$app-navigation-invalidateall
			invalidateAll()

			// since we're customizing the default behaviour
			// we don't want to reimplement what `use:enhance` does
			// so we can use `applyResult` and pass the `result`
			await applyAction(result)
		}
	}}
>
	<div>
		<label for="username">Username</label>
		<input id="username" name="username" type="text" required />
	</div>

	<div>
		<label for="password">Password</label>
		<input id="password" name="password" type="password" required />
	</div>

	{#if form?.invalid}
		<p class="error">Username and password is required.</p>
	{/if}

	{#if form?.credentials}
		<p class="error">You have entered the wrong credentials.</p>
	{/if}

	<button type="submit">Log in</button>
</form>
