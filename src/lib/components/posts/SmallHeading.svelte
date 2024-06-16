<script>
  let {
    heading = "All Posts",
    subheading = "List of all posts, simple search and add new post button for creating posts",
  } = $props();
</script>

<div
  class="text-center md:text-start m-2 md:mx-20 p-2.5 md:p-4 rounded-lg mt-4 shadow-md bg-base-300"
>
  <h2 class="text-2xl font-bold text-primary">{heading}</h2>
  <p class="text-neutral-content mt-2">{subheading}</p>
</div>
