<template>
  <div class="row py-4">
     <the-spinner v-if="isFetching"/>
     <div class="col-md-12" v-else>
       <the-header />
       <router-view />
        <pre class="json-class">{{ csvFileContents }}</pre>
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
         csvTableHeaders: [
           '#', 'Name', 'Address', 'Post code', 'Phone', 'Credit Limit', 'Birthday'
         ]
       }
     },
 
     methods: {
       async fetchCsvFileContent() {
         this.isFetching = true;
         const response = await this.$store.dispatch('fetchFileContents', filesConstants.csv);
         const csvFileContents = await response.data;
         this.csvFileContents = csvFileContents;
         this.isFetching = false;
       }, 
     },
 
     mounted() {
       this.fetchCsvFileContent();
     },
   }
 </script>

 <style scoped>
  .json-class {
    display: flex;
    justify-content: center;
    align-items: center;
    background: black;
    color: #fff;
    padding: 1rem;
  }
</style>