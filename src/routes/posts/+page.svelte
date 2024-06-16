<script lang="ts">
  import AllGridPost from "$lib/components/posts/AllGridPost.svelte";
  import SmallHeading from "$lib/components/posts/SmallHeading.svelte";

  // All the Posts will be render here
  let { data } = $props();
  let posts: any = $derived(data.posts);
</script>

<!-- SEO Heading -->
<svelte:head>
  <title>Social Posts</title>
  <meta name="description" content="Social Posts by Users" />
</svelte:head>

<SmallHeading />
<AllGridPost {posts} />
