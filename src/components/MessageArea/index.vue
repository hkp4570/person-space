<script>
import DataForm from "@/components/MessageArea/DataForm.vue";
import DataList from "@/components/MessageArea/DataList.vue";
export default {
  name: "index",
  components: {
    DataForm,
    DataList,
  },
  props: {
    title: {
      type: String,
      default: '',
    },
    subTitle: {
      type: String,
      default: '',
    },
    list: {
      type: Array,
      default: () => [],
    },
    isListLoading: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<template>
<div class="message-area-container">
  <DataForm v-on="$listeners"/>
  <h3>
    {{ title }}
    <span>{{ subTitle }}</span>
  </h3>
  <DataList :list="list" />
  <div class="loading" v-loading="isListLoading"></div>
</div>
</template>

<style scoped lang="less">
.loading {
  position: relative;
  height: 100px;
}
</style>
