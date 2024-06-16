<script lang="ts">
  //   let { navs } = $props<{ navs: { name: string; url: string }[] }>();
</script>

<div class="navbar bg-base-100 md:px-20">
  <div class="navbar-start">
    <div class="dropdown">
      <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          ><path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h8m-8 6h16"
          /></svg
        >
      </div>
      <!-- svelte-ignore a11y_no_noninteractive_tabindex -->
      <ul
        tabindex="0"
        class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
      >
        <li><a href="/">Home</a></li>
        <li><a href="/posts">Posts</a></li>
      </ul>
    </div>
    <a class="btn btn-ghost text-xl" href="/">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="1.75"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="lucide lucide-wand-sparkles"
        ><path
          d="m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72"
        /><path d="m14 7 3 3" /><path d="M5 6v4" /><path d="M19 14v4" /><path
          d="M10 2v2"
        /><path d="M7 8H3" /><path d="M21 16h-4" /><path d="M11 3H9" /></svg
      >
      Social-Site</a
    >
  </div>
  <div class="navbar-center hidden lg:flex">
    <ul class="menu menu-horizontal px-1">
      <li><a href="/">Home</a></li>
      <li><a href="/posts">Posts</a></li>
    </ul>
  </div>
  <div class="navbar-end gap-1">
    <a class="btn btn-sm" href="/">Register</a>
    <a class="btn btn-sm btn-outline" href="/">Login</a>
  </div>
</div>
