<template>
  <div class="row py-4">
     <the-spinner v-if="isFetching"/>
     <div class="col-md-12" v-else>
       <the-header :linkType="filesConstants.prn"/>
       <router-view />
        <pre class="json-class">{{ prnFileContents }}</pre>
     </div>
  </div>
 </template>
 
 <script>
   import filesConstants from '@/constants/files.constants';
   
   export default {
     data() {
       return {
         isFetching: false,
         filesConstants: filesConstants,
         prnFileContents: [],
       }
     },
 
     methods: {
       async fetchPrnFileContent() {
         this.isFetching = true;
         await this.$store.dispatch('fetchFileContents', filesConstants.prn);
         this.isFetching = false;
       }, 
     },
 
     mounted() {
      this.fetchPrnFileContent();
      this.prnFileContents = this.$store.getters.getPrnFileContents;
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