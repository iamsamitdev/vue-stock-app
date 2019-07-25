<template>
  <div>
    <h4 class="mb-5">Add new product</h4>
    <form @submit.prevent="checkForm">

       <p v-if="errors.length">
        <b>Please correct the following error(s):</b>
        <ul>
          <li v-for="error in errors" :key="error">{{ error }}</li>
        </ul>
     </p>

      <div class="form-group row">
        <label for="panme" class="col-md-4 col-form-label">Name</label>
        <div class="col-md-8">
          <input type="text" class="form-control" name="panme" id="panme" v-model="product.name">
        </div>
      </div>

       <div class="form-group row">
        <label for="pdesc" class="col-md-4 col-form-label">Description</label>
        <div class="col-md-8">
          <textarea class="form-control" v-model="product.description"  name="pdesc" id="pdesc" rows="5"></textarea>
        </div>
      </div>

       <div class="form-group row">
        <label for="pprice" class="col-md-4 col-form-label">Price</label>
        <div class="col-md-8">
          <input type="number" step="0.01" class="form-control" name="pprice" id="pprice" v-model="product.price">
        </div>
      </div>

      <div class="form-group row">
        <label for="imgurl" class="col-md-4 col-form-label">Image URL</label>
        <div class="col-md-8">
          <input type="text" class="form-control" name="pimgurl" id="pimgurl" v-model="product.imgurl">
        </div>
      </div>

      <div class="form-group row">
        <label for="category" class="col-md-4 col-form-label">Category</label>
        <div class="col-md-8">
          <input type="text" class="form-control" name="category" id="category" v-model="product.category">
        </div>
      </div>

      <div class="form-group row">
        <label for="date" class="col-md-4 col-form-label">Date</label>
        <div class="col-md-8">
          <input type="text" class="form-control" name="date" id="date" v-model="product.date">
        </div>
      </div>

      <div class="form-group row">
        <label for="time" class="col-md-4 col-form-label">Time</label>
        <div class="col-md-8">
          <input type="text" class="form-control" name="time" id="time" v-model="product.time">
        </div>
      </div>

      <div class="form-group row">
        <label for="pdesc" class="col-md-4 col-form-label"></label>
        <div class="col-md-8">
           <button class="btn btn-primary">Add to stock</button>
        </div>
      </div>

    </form>
  </div>
</template>

<script>
export default {
  data(){
      return {
        product:{},
        errors: [],
      }
  },
  methods: {

    addPost(){
      let uri = 'http://localhost:3000/products';
      this.axios.post(uri, this.product).then(() => {
        this.$router.push({name: 'posts'});
      });
    },

    checkForm: function (e) {
      if (this.product.name && this.product.category) {
        return true;
      }

      this.errors = [];

      if (!this.product.name) {
        this.errors.push('Product name required.');
      }
      if (!this.product.category) {
        this.errors.push('Product category required.');
      }

      e.preventDefault();
    }

    }
}
</script>

<style  scoped>

</style>
