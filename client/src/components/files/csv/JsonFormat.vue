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