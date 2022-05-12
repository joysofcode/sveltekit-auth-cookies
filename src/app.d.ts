/// <reference types="@sveltejs/kit" />

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare namespace App {
  interface Locals {
    user?: { username: string }
  }
  // interface Platform {}
  interface Session {
    user?: { username: string }
  }
  // interface Stuff {}
}
