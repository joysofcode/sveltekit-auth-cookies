<div class="settingsContainer">
  <nav>
    <a href="/settings/profile">Profile</a>
    <a href="/settings/sessions">Sessions</a>
  </nav>
  <main>
    <slot />
  </main>
</div>

<style lang='scss'>
  .settingsContainer {
    position: relative;
    display: flex;
    nav {
      padding: 0px;
      display: flex;
      gap: 32px;
      width: 150px;
      flex-direction: column;
      align-items: flex-start;
    }
  }
</style>