<template>
  <tbody>
    <tr>
      <td>{{ game.title }}</td>
      <td>{{ game.subtitle }}</td>
      <td>{{ game.category }}</td>

      <td>${{ game.price }}</td>
      <td>{{ game.count }}x</td>
      <td>
        <b-button variant="info" @click="edit">Edit</b-button>
      </td>
    </tr>
  </tbody>
</template>

<script>
export default {
  props: ["game"],
  methods: {
    edit() {
      this.$router.push({
        name: "EditProduct",
        params: { gameid: this.game.gameID },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>