<template>
  <div>
    <b-button v-b-toggle.collapse-1 variant="info">Archived Items</b-button>
    <b-collapse id="collapse-1" class="mt-2">
      <b-card v-for="(item,inx) in archiveItems" :key="index.id">
        <p class="card-text">Order number :{{ item.orderNumber }}</p>
        <b-button v-b-toggle.collapse-1-inner size="sm">View Details</b-button>
        <b-button
          v-b-toggle.collapse-1-inner
          size="sm"
          class="ml-3"
          variant="outline-primary"
          @click="archiveProducts(item.id)"
          >Undo</b-button
        >
        <b-button
          v-b-toggle.collapse-1-inner
          size="sm"
          class="ml-3"
          variant="danger"
          @click="deleteOrder(item.id)"
          >Delete</b-button
        >
        <b-collapse
          id="collapse-1-inner"
          class="mt-2"
          v-for="subitem in item.orderFromUser"
          :key="subitem"
        >
          <b-card>{{ subitem.title }} </b-card>
        </b-collapse>
      </b-card>
    </b-collapse>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Archived",
  props: ["archive"],
  data() {
    return {};
  },

  computed: {
    ...mapGetters(["archiveItems"]),
  },
 /*  beforeCreate() {
    this.$store.dispatch("setOrderItems");
  }, */

  methods: {
    statusChange(id) {
      this.$store.commit("statusChange", id);
    },
    archiveProducts(id) {
      this.boxTwo = "";
      this.$bvModal
        .msgBoxConfirm("Are you sure you want to undo ?", {
          title: "Please Confirm",
          size: "sm",
          buttonSize: "sm",
          okVariant: "danger",
          okTitle: "Confirm",
          cancelTitle: "Decline",
          footerClass: "p-2",
          hideHeaderClose: false,
          centered: true,
        })
        .then((value) => {
          this.boxTwo = value;
          if (value == true) {
            this.$store.commit("undoArchive", id);
            this.boxThree = "";
            this.$bvModal
              .msgBoxOk("Your product was returned !")
              .then((value) => {
                this.boxThree = value;
              })
              .catch((err) => {
                console.log(err);
              });
          }
        });
    },
    deleteOrder(id) {
      this.boxOne = "";
      this.$bvModal
        .msgBoxConfirm(`Are you sure you want to delete ${id}`, {
          title: "Please Confirm",
          size: "sm",
          buttonSize: "sm",
          okVariant: "danger",
          okTitle: "Confirm",
          cancelTitle: "Decline",
          footerClass: "p-2",
          hideHeaderClose: false,
          centered: true,
        })
        .then((value) => {
          this.boxOne = value;
          if (value == true) {
            this.$store.dispatch("deleteOrder", id);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
