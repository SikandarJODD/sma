<script lang="ts">
  import { fade, fly } from "svelte/transition";
  import Post from "./Post.svelte";

  let { posts } = $props<{
    posts: {
      created_at: string;
      id: string;
      title: string;
      image: string;
      social_name: string;
    }[];
  }>();
  let loaded = $state(false);
  $effect(() => {
    loaded = true;
  });
</script>

{#if loaded}
  <div class="p-3 md:px-20 md:mt-2" in:fly={{ y: -30, duration: 700 }}>
    <div
      class="grid grid-cols-2 md:grid-cols-3 gap-2 sm:gap-4 lg:grid-cols-4 lg:gap-8"
    >
      {#each posts as item}
        <Post {item} />
      {/each}
    </div>
  </div>
{/if}
