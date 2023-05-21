<script lang="ts">
	import { enhance } from '$app/forms'
	import { page } from '$app/stores'
	import Avatar from '$lib/client/ui/Avatar.svelte'

	let modalVisible = false

	const toggleModalVisibility = () => {
		modalVisible = !modalVisible
	}

	import '../styles/global.scss'
</script>

<svelte:head>
	<title>SvelteKit Auth</title>
</svelte:head>

<nav>
	{#if !$page.data.user}
		<a href="/">Home</a>
		<div class="auth">
			<a href="/login">Login</a>
			<a href="/register">Register</a>
		</div>
	{/if}
	
	{#if $page.data.user}
		<a href="/">Home</a>
		
		<div class="settingsContainer">
			<button on:click={() => toggleModalVisibility()} on:mouseenter={() => modalVisible = true} on:mouseleave={() => modalVisible = false}>
				<Avatar src={$page.data.user.avatar} size={50} />
			</button>
			<div class="modal" class:visible={modalVisible} on:mouseenter={() => modalVisible = true} on:mouseleave={() => modalVisible = false}>
				{#if $page.data.user.role === 'ADMIN'}
					<a href="/admin">Admin</a>
				{/if}
				<a href="/settings">Settings</a>
				<form class="logout" action="/logout" method="POST">
					<button type="submit">Log out</button>
				</form>
			</div>
		</div>
	{/if}
</nav>

<main>
	<slot />
</main>

<style lang="scss">
	nav {
		display: flex;
		justify-content: space-between;
		align-items: center;
		.auth {
			display: flex;
			gap: 16px;
		}
		.settingsContainer {
			position: relative;
			button {
				margin: 0px;
				border: none;
				background: none;
				padding: none;
			}
			.modal {
				z-index: 5;
				background-color: var(--modalBg);
				width: 200px;
				transform: translateX(calc(-50% - 2rem));
				position: absolute;
				display: none;
				flex-direction: column;
				&.visible{
					display: flex;
					gap: 8px;
					padding: 16px;
				}
			}
			&:focus {
				.modal {
					display: flex;
					gap: 8px;
					padding: 16px;
				}
			}
		}
	}
</style>