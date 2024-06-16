<script>
  import { fade, fly, scale, blur } from "svelte/transition";
  import Navbar from "$lib/components/Navbar.svelte";
  import "../app.css";
  let { data } = $props();
</script>

<Navbar />
{#key data.url}
  <div in:fly={{ duration: 400 }}>
    <slot />
  </div>
{/key}
