<script>
  import SinglePost from "$lib/components/posts/details/SinglePost.svelte";

  let { data } = $props();
  let postDetails = data.postDetails;
</script>

<!-- SEO Single Post -->
<svelte:head>
  <title>
    {postDetails.title}
  </title>
  <meta
    name="description"
    content="Post is created by {postDetails.social_name}"
  />

  <meta property="og:title" content={postDetails.title} />
  <meta property="og:image" content={postDetails.image} />
  <meta property="og:site_name" content="Social-Site" />
  <meta property="og:url" content="https://social-site-buddy.vercel.app" />
  <meta
    property="og:description"
    content="Post is created by {postDetails.social_name}"
  />

  <!-- Twitter SEO -->
  <meta property="twitter:image" content={postDetails.image} />
  <meta property="twitter:card" content="summary_large_image" />
  <meta property="twitter:title" content={postDetails.title} />
  <meta
    property="twitter:description"
    content="Post is created by {postDetails.social_name}"
  />
</svelte:head>
<SinglePost singlePost={postDetails} />
