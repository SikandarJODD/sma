<script>
  import { enhance } from "$app/forms";
</script>

<div class="hero h-[50vh] md:h-[90vh] bg-base-200">
  <div class="hero-content flex-col lg:flex-row-reverse md:gap-20">
    <div class="text-center lg:text-left">
      <h1 class="text-5xl font-bold text-accent">Create Amazing Post</h1>
      <p class="py-6">
        Create your amazing post and share it with the world. You can also
        search for posts that you like.
      </p>
    </div>
    <div class="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form class="card-body" method="POST" use:enhance action="?/createPost">
        <div class="form-control">
          <label class="label" for="title">
            <span class="label-text">Title</span>
          </label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Enter Title of Post"
            class="input input-bordered input-accent"
            required
          />
        </div>
        <div class="form-control">
          <label class="label" for="image">
            <span class="label-text">Image URL</span>
          </label>
          <input
            type="url"
            id="image"
            name="image"
            placeholder="Enter Image URL"
            class="input input-bordered input-accent"
            required
          />
        </div>

        <div class="form-control mt-6">
          <button class="btn btn-primary" type="submit">
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
            Create</button
          >
        </div>
      </form>
    </div>
  </div>
</div>
