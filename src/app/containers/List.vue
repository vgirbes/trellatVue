<template>
  <div class="todoapp" id="root">
    <header-component></header-component>
    <main-section :filter="filter"></main-section>
    <url-list-result></url-list-result>
  </div>
</template>

<script>
import Header from '../components/Header.vue';
import MainSection from '../components/MainSection.vue';
import UrlListResult from '../components/UrlListResult.vue';
import {SHOW_ALL} from '../constants/TodoFilters';

export default {
  name: 'List',
  data() {
    return {
      filter: SHOW_ALL
    };
  },
  components: {
    /*'header-component': Header,
    'main-section': MainSection,*/
    'url-list-result': UrlListResult
  }
};
</script>
