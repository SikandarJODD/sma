<script lang="ts">
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
</script>

<div class="p-3 md:px-20 md:mt-10">
  <div
    class="grid grid-cols-2 md:grid-cols-3 gap-2 sm:gap-4 lg:grid-cols-4 lg:gap-8"
  >
    {#each posts as item}
      <Post {item} />
    {/each}
  </div>
</div>
