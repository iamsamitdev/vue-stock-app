<template>
 <div>
      <h1>Product List</h1>
        <div class="row">
          <div class="col-md-10"></div>
          <div class="col-md-2 text-right">
            <router-link :to="{ name: 'create' }" class="btn btn-success">Add Product</router-link>
          </div>
        </div><br />

        <table class="table table-hover">
            <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Category</th>
              <th>Date</th>
              <th>Time</th>
              <th>Manage</th>
            </tr>
            </thead>
            <tbody>
                <tr v-for="product in products" :key="product.id">
                  <td><img :src="product.imgurl" class="rounded" width="50"></td>
                  <td>{{ product.name }}</td>
                  <td>{{ product.price }}</td>
                  <td>{{ product.category }}</td>
                  <td>{{ product.date }}</td>
                  <td>{{ product.time }}</td>
                  <td>
                    <router-link :to="{name: 'edit', params: { id: product.id }}" class="btn btn-primary">Edit</router-link>&nbsp;&nbsp;
                    <button class="btn btn-danger">Delete</button>
                  </td>
                </tr>
            </tbody>
        </table>
  </div>
</template>

<script>
  export default {
      data() {
        return {
          products: []
        }
      },
      created() {
        let uri = 'http://localhost:3000/products';
        this.axios.get(uri).then(response => {
          this.products = response.data;
        });
    }
  }
</script>

<style  scoped>

</style>

