<template>
  <div class="cart-page">
    <div class="container py-4">
      <div class="line-bottom heading-text mb-4">
        <h1 class="main_title"><span>Cart</span></h1>
      </div>
      <div class="row justify-content-between">
        <div class="col-12 col-sm-12 col-md-9">
          <div class="cart-contain">
            <div class="row header-cart justify-content-between mt-4 mb-3">
              <div class="col-12 col-sm-2">
                <div class="item-name">
                  <span></span>
                </div>
              </div>
              <div class="col-12 col-sm-2">
                <div class="counter do">
                  <span>Product</span>
                </div>
              </div>
              <div class="col-12 col-sm-2">
                <div class="item-name text-center">
                  <span>Name</span>
                </div>
              </div>
              <div class="col-12 col-sm-2">
                <div class="item-categ text-center">Category</div>
              </div>
              <div class="col-12 col-sm-2">
                <div class="text-center">
                  <span>Price</span>
                </div>
              </div>
              <div class="col-12 col-sm-2">
                <div class="item-name justify-content-end d-flex">
                  <span>Remove</span>
                </div>
              </div>
            </div>

            <div class="row text-center body-cart justify-content-center">
              <div class="col-12 mt-5" v-if="!cartObjects.length">
                This cart is empty! In order to order you need to fill it up!
              </div>

              <CartItem
                v-for="item in cartObjects"
                :key="item.id"
                :item="item"
                class="item-cart col-12"
              />
            </div>

            <div class="routing-back mt-5">
              <div class="row">
                <div class="col-12">
                  <router-link to="/" class="back-nav">
                    Go back to products !
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-sm-12 col-md-3">
          <div class="cart-contain">
            <h1>Overview</h1>
            <CartTotal v-if="cartObjects.length > 0" />
          </div>
        </div>
      </div>
    </div>
    <b-toast id="complete-toast" variant="success" solid>
      <template #toast-title>
        <div class="d-flex flex-grow-1 align-items-baseline">
          <b-img blank blank-color="#ff5555" class="mr-2" width="12" height="12"></b-img>
          <strong class="mr-auto">Success!</strong>
          <small class="text-muted mr-2">2 seconds ago</small>
        </div>
      </template>
      Order Success !
    </b-toast>
  </div>
</template>

<script>
import CartItem from "@/components/Cart/CartItem.vue";
import CartTotal from "@/components/Cart/CartTotal.vue";
import { mapGetters } from "vuex";
export default {
  name: "Cart",

  components: {
    CartItem,
    CartTotal,
  },
  computed: {
    ...mapGetters(["cartObjects"]),
  },
};
</script>

<style lang="scss" scoped></style>
