<template>
  <div>
    <h2></h2>
    <div class="row">
      <div class="container">
        <div>
          <h2>{{ inputSection.title }}</h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["inputSection"],
  name: "Box",
  components: {},
};
</script>
