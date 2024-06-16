<script lang="ts">
  import AllGridPost from "$lib/components/posts/AllGridPost.svelte";
  import SearchandCreate from "$lib/components/posts/SearchandCreate.svelte";
  import SmallHeading from "$lib/components/posts/SmallHeading.svelte";
  import { filterPosts, social_posts } from "$lib/index.svelte.js";

  // All the Posts will be render here
  let { data } = $props();
  let posts: any = data.posts;
  posts.map((post) => {
    social_posts.push(post);
  });
</script>

<!-- SEO Heading -->
<svelte:head>
  <title>Social Posts</title>
  <meta name="description" content="Social Posts by Users" />
</svelte:head>

<SmallHeading />
<SearchandCreate />
{#if filterPosts.length > 0 && filterPosts[0].length > 0}
  <AllGridPost posts={filterPosts[0]} />
{:else}
  <AllGridPost {posts} />
{/if}
