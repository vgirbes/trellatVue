<template>
  <div class="other-services">
    <input
      class="serv-of"
      type="text"
      name="url[]"
      v-for="url in urls"
      :id="url.id"
    />
    <button @click="addInput">Añadir</button>
  </div>
</template>

<script>
export default {
  name: 'UrlList',
  data() {
    return {
      urls: [ { id: 'url-text-1' } ]
    };
  },
  methods: {
    addInput() {
      this.urls.push({ id: 'url-text-' + parseInt(this.urls.length + 1) });
    }
  }
};
</script>
