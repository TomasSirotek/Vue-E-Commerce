<template>
  <div class="table">
    <div class="card shadow mb-4">
      <div class="card-body">
        <div class="table-responsive">
          <table
            class="table table-bordered"
            id="dataTable"
            width="100%"
            cellspacing="0"
          >
            <thead>
              <tr>
                <th>Order number</th>
                <th>Products</th>
                <th>Price $</th>
                <th>Quantity</th>
                <th>Status</th>
                <th>Put Back</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="item in archive.orderFromUser"
                :key="item.id"
               
              >
             

                <td>
                  <p v-for="item in archive.orderFromUser" :key="item.id">
                    {{ item.title }}
                  </p>
                </td>
                <td>
                  <p v-for="item in archive.orderFromUser" :key="item.id">
                    {{ item.price }}
                  </p>
                </td>
                <td>
                  <p v-for="item in archive.orderFromUser" :key="item.id">
                    {{ item.quantity }}
                  </p>
                </td>

              
                <td>
                  <b-button variant="info" @click="archiveProducts(item.id)"
                    >UNDO</b-button
                  >
                </td>
                <td>
                  <b-button variant="danger" @click="deleteOrder(item.id)"
                    >DELETE</b-button
                  >
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
   
  </div>
</template>

<script>
import {mapGetters } from 'vuex';

export default {
  name: "SoldTable",
  props:["archive"],
  data() {
    return {
    };
  },

  computed: {
   
    ...mapGetters(['archiveItems',"getOrderItems"]),
  },
  beforeCreate() {
    this.$store.dispatch("setOrderItems");
  },
  /* completePrice() {
    return this.subitem.price.reduce((a, b) => a + b.subitem.price);
  }, */
  methods: {
    statusChange(id) {
      this.$store.commit("statusChange", id);
    },
    archiveProducts(id) {
      this.boxTwo = "";
      this.$bvModal
        .msgBoxConfirm(
          "Mark as complete ?",
          {
            title: "Please Confirm",
            size: "sm",
            buttonSize: "sm",
            okVariant: "danger",
            okTitle: "Confirm",
            cancelTitle: "Decline",
            footerClass: "p-2",
            hideHeaderClose: false,
            centered: true,
          }
        )
        .then((value) => {
          this.boxTwo = value;
          if (value == true) {
            this.$store.commit("archiveProducts", id);
            this.boxThree = "";
            this.$bvModal
              .msgBoxOk("Your product was archived")
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
        .msgBoxConfirm(`Are you sure you want to delete ${ id }`, {
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
