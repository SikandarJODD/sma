<script lang="ts">
  import { page } from "$app/stores";

  let { singlePost } = $props<{
    singlePost: {
      created_at: string;
      id: string;
      title: string;
      image: string;
      social_name: string;
    };
  }>();
  let sharePost = async () => {
    let shareData = { url: $page.url.toString(), title: singlePost.title };
    if (navigator.canShare && navigator.canShare(shareData)) {
      await navigator.share(shareData);
    } else {
      await navigator.clipboard.writeText($page.url.toString());
    }
  };
</script>

<div class="px-5 py-0 md:hidden">
  <div class="text-sm breadcrumbs">
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/posts">Posts</a></li>
      <li>{singlePost.title}</li>
    </ul>
  </div>
</div>
<div class="flex flex-col md:flex-row md:mx-20 mb-4 md:mt-6">
  <div class="w-full md:w-1/3 p-4 md:p-0 flex items-center flex-col gap-2">
    <img
      src={singlePost.image}
      class="md:w-96 md:h-[480px] w-80 h-80 rounded-lg md:rounded-2xl shadow-md object-cover object-center"
      alt={singlePost.title}
    />
    <div class="mt-2 mx-2 flex gap-2">
      <button class="btn btn-circle btn-sm btn-outline btn-accent"
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-heart"
          ><path
            d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"
          /></svg
        ></button
      >
      <button
        class="btn btn-circle btn-sm btn-outline btn-accent"
        onclick={sharePost}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-share-2"
          ><circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle
            cx="18"
            cy="19"
            r="3"
          /><line x1="8.59" x2="15.42" y1="13.51" y2="17.49" /><line
            x1="15.41"
            x2="8.59"
            y1="6.51"
            y2="10.49"
          /></svg
        >
      </button>
    </div>
  </div>
  <div class="w-full md:w-2/3">
    <div
      class="mx-6 md:mx-4 p-3 border border-gray-700 rounded-xl bg-gray-900/30 flex flex-col gap-1.5"
    >
      <h1 class="text-xl md:text-2xl font-semibold">{singlePost.title}</h1>
      <p class="text-neutral-content text-md">
        Posted by <span class="text-primary">{singlePost.social_name}</span>
      </p>
      <p>Created at : {new Date(singlePost.created_at).toDateString()}</p>
    </div>
  </div>
</div>
