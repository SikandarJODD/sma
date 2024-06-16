<script>
  import SinglePost from "$lib/components/posts/details/SinglePost.svelte";

  let { data } = $props();
  let postDetails = data.postDetails;
</script>

<SinglePost singlePost={postDetails} />
