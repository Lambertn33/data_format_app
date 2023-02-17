<template>
  <div class="row py-4">
     <the-spinner v-if="isFetching"/>
     <div class="col-md-12" v-else>
       <the-header :linkType="filesConstants.prn"/>
       <router-view />
       <h2>Table format</h2>
     </div>
  </div>
 </template>
 
 <script>
   import filesConstants from '@/constants/files.constants';
   
   export default {
     data() {
       return {
         isFetching: false,
         csvFileContents: [],
         filesConstants: filesConstants,
         csvTableHeaders: [
           '#', 'Name', 'Address', 'Post code', 'Phone', 'Credit Limit', 'Birthday'
         ]
       }
     },
 
     methods: {
        async fetchCsvFileContent() {
          this.isFetching = true;
          await this.$store.dispatch('fetchFileContents', filesConstants.csv);
          this.isFetching = false;
        }, 
      },
  
      mounted() {
       this.fetchCsvFileContent();
       this.csvFileContents = this.$store.getters.getCsvFileContents;
      },
   }
 </script>