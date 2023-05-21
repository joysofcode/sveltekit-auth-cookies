<script lang="ts">
  export let src: string;
  export let size: number = 100;
</script>

<!-- svelte-ignore a11y-img-redundant-alt -->
<img src={src} alt="User Profile" style={`height: ${size}px; width: ${size}px`}>

<style lang="scss">
  img {
    border-radius: 50%;
    object-fit: cover;
  }
</style>