<template>
 <div class="row py-4">
    <the-spinner v-if="isFetching"/>
    <div class="col-md-12" v-else>
      <the-header :linkType="filesConstants.csv"/>
      <router-view />
       <the-table>
          <template #header>
            <tr>
              <th scope="col" v-for="header in csvTableHeaders.sort()" :key="header">
                {{ header }}
              </th>
            </tr>
          </template>
          <template #body>
            <tr v-for="(content, i) in csvFileContents" :key="i">
              <th scope="row">{{ i }}</th>
              <td>{{ content.Address }}</td>
              <td>{{ content.Birthday }}</td>
              <td>{{ content['Credit Limit'] }}</td>
              <td>{{ content.Name }}</td>
              <td>{{ content.Phone }}</td>
              <td>{{ content.Postcode }}</td>
            </tr>
          </template>
       </the-table>
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