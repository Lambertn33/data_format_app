<template>
  <div class="header-container">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item" v-for="link in csvFileLinks" :key="link.to">
          <router-link :to="link.to" active-class="active">{{ link.label }}</router-link>
        </li>
      </ol>
    </nav>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        csvFileLinks: [
          {
            to: "/files/csv/table",
            label: "View in table format"
          },
          {
            to: "/files/csv/json",
            label: "View in json format"
          },  
        ]
      }
    }
  }
</script>

<style scoped>
  nav {
    padding: 0;
  }
  .header-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;
    text-align: center;
    width: 100%;
  }
  .breadcrumb-item {
    font-weight: bold;
  }
  .breadcrumb-item a {
    text-decoration: none;
  }

  .router-link-exact-active {
    color: black;
  }
</style>