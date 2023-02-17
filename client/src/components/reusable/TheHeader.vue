<template>
  <div class="header-container">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item" v-for="link in renderLinks" :key="link.to">
          <router-link :to="link.to" active-class="active">{{ link.label }}</router-link>
        </li>
      </ol>
    </nav>
  </div>
</template>

<script>
import filesConstants from '@/constants/files.constants';

  export default {
    props: {
      linkType: String
    },

    data() {
      return {
        csvFileLinks: [
          {
            to: "/files/csv/table",
            label: "View Csv File in table format"
          },
          {
            to: "/files/csv/json",
            label: "View Csv File in json format"
          },  
        ],
        prnFileLinks: [
          {
            to: "/files/prn/table",
            label: "View PRN in table format"
          },
          {
            to: "/files/prn/json",
            label: "View PRN in json format"
          },  
        ]
      }
    },
    computed: {
      renderLinks() {
         return this.linkType === filesConstants.csv ?
          this.csvFileLinks : this.prnFileLinks;
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