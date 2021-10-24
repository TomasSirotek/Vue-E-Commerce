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
                <th>Archive</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="item in all"
                :key="item.id"
                v-show="item.storeOrders == false"
              >
                <td>{{ item.orderNumber }}</td>

                <td>
                  <p v-for="subitem in item.orderFromUser" :key="subitem.id">
                    {{ subitem.title }}
                    
                  </p>
                
                </td>
                <td>
                  <p v-for="subitem in item.orderFromUser" :key="subitem.id">
                    {{ subitem.price }}
                    
                  </p>
                  {{ totalRevenue(report.values) }}
                </td>
                <td>
                  <p v-for="subitem in item.orderFromUser" :key="subitem.id">
                    {{ subitem.quantity }}
                  </p>
                </td>

                <td>
                  <b-button
                    v-bind:class="item.status"
                    @click="statusChange(item.id)"
                    variant="warning"
                    >{{ item.status }}</b-button
                  >
                </td>
                <td>
                  <b-button variant="info" @click="archiveProducts(item.id)"
                    >ARCHIVE</b-button
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
export default {
  name: "SoldTable",
  data() {
    return {
     
    };
  },
  


  computed: {
    all() {
      return this.$store.getters.getOrderItems;
    },
    
    
  
  },
  beforeCreate() {
    this.$store.dispatch("setOrderItems");
  },
  completePrice() {
    return this.subitem.price.reduce((a, b) => a + b.subitem.price);
  },
  methods: {
     totalOrders: function(price) {
         return price.reduce((acc, val) => {
            return acc + parseInt(val.orders);
         }, 0);
      },


    statusChange(id) {
      this.$store.commit("statusChange", id);
    },
    archiveProducts(id) {
      this.boxTwo = "";
      this.$bvModal
        .msgBoxConfirm(
          "Please confirm that you want to Archive this ordered.",
          {
            title: "Please Confirm",
            size: "sm",
            buttonSize: "sm",
            okVariant: "danger",
            okTitle: "YES",
            cancelTitle: "NO",
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
        .msgBoxConfirm("Please confirm that you want to really delete this", {
          title: "Please Confirm",
          size: "sm",
          buttonSize: "sm",
          okVariant: "danger",
          okTitle: "YES",
          cancelTitle: "NO",
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
ul,
li {
  list-style-type: none;
  text-decoration: none;
}
</style>
