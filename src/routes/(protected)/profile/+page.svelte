<script lang="ts">
  import {page} from '$app/stores'
	import { applyAction, enhance } from '$app/forms'
	import Avatar from '$lib/client/ui/Avatar.svelte'
	import TextInput from '$lib/client/ui/TextInput.svelte'
	import AvatarInput from '$lib/client/ui/AvatarInput.svelte'

	export let form

  console.log($page.data.user.avatar)

  $: displayName = $page.data.user.displayName
  $: avatar = $page.data.user.avatar
  $: username = $page.data.user.name
</script>

<h1>Edit Profile</h1>

<form action="?/updateAvatar" method="POST" use:enhance>
  <AvatarInput name="avatar" value={avatar} size={100} />
  <button type="submit">Update Avatar</button>
</form>

<form action="?/updateUsername" method="POST" use:enhance>
  <TextInput name="username" required placeholder={username} />
  <button type="submit">Update Username</button>
</form>

<form action="?/updateDisplayName" method="POST" use:enhance>
	<TextInput name="displayName" placeholder={displayName !== '' ? displayName : "Display Name"} required />
	<button type="submit">Update Display Name</button>
</form>


<style lang="scss">
  form {
    display: flex;
    gap: 16px;
  }
</style>