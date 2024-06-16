<script lang="ts">
  let { item } = $props<{
    item: {
      created_at: string;
      id: string;
      title: string;
      image: string;
      social_name: string;
    };
  }>();
</script>

<!-- <a href="/posts/{item.id}"> -->
<div
  class="card bordered shadow-lg hover:-translate-y-1 group transition-all duration-150"
>
  <figure>
    <img
      src={item.image}
      alt={item.title}
      class="w-full h-40 md:h-64 object-cover object-center"
    />
  </figure>
  <div class="card-body p-4">
    <h2 class="card-title group-hover:text-white">{item.title}</h2>
    <p class="text-xs text-neutral-content">
      Uploaded by <span class="text-primary"> {item.social_name}</span>
    </p>
  </div>
</div>
<!-- </a> -->
