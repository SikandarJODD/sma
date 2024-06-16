<script>
  import { fly } from "svelte/transition";

  let loaded = $state(false);
  $effect(() => {
    loaded = true;
  });
</script>

{#if loaded}
  <div class="px-20 mt-4" in:fly={{ y: -30, duration: 700 }}>
    <div class="flex justify-between">
      <div>
        <input
          type="text"
          placeholder="Search..."
          class="input input-bordered w-full sm:w-64"
        />
      </div>
      <div>
        <a href="/create" class="btn btn-primary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-image-plus"
            ><path
              d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7"
            /><line x1="16" x2="22" y1="5" y2="5" /><line
              x1="19"
              x2="19"
              y1="2"
              y2="8"
            /><circle cx="9" cy="9" r="2" /><path
              d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"
            /></svg
          >
          Create</a
        >
      </div>
    </div>
  </div>
{/if}
