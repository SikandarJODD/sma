<script>
  // All the Posts will be render here
  let { data } = $props();
  $effect(() => {
    console.log(data);
  });
</script>
