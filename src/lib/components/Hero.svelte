<div class="hero h-[70vh] md:min-h-[90vh] bg_color">
  <div class="hero-content text-center">
    <div class="max-w-lg">
      <h1 class="text-5xl font-bold text-white">Social-Site for Buddy</h1>
      <p class="pt-6">
        Simple Social Media Site with SvelteKit and Supabase, includes CRUD
        Operations for Post
      </p>
      <div class="my-4 badge badge-outline badge-secondary p-4">
        Build for Buddy
      </div>

      <div class="md:mt-2 flex justify-center gap-2">
        <a
          href="https://github.com/SikandarJODD/sma"
          target="_blank"
          class="btn btn-primary"
        >
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
            class="lucide lucide-github"
            ><path
              d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"
            /><path d="M9 18c-4.51 2-5-2-7-2" /></svg
          >Github</a
        >
        <a href="/posts" class="btn btn-primary btn-outline">
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
            class="lucide lucide-image"
            ><rect width="18" height="18" x="3" y="3" rx="2" ry="2" /><circle
              cx="9"
              cy="9"
              r="2"
            /><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" /></svg
          >Posts</a
        >
      </div>
    </div>
  </div>
</div>

<style>
  @media (min-width: 500px) {
    .bg_color {
      background: rgba(1, 6, 42, 0.89);
      background: radial-gradient(
        circle,
        rgba(1, 6, 42, 0.629) 0%,
        rgba(19, 14, 15, 1) 52%,
        rgba(19, 14, 15, 1) 100%
      );
    }
  }
</style>
