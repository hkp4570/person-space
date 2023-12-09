<script>
import RightMenu from "@/pages/Blog/components/RightMenu.vue";

export default {
  components: {
    RightMenu
  },
  data() {
    return {
      list: [
        {name: "a", isSelect: false},
        {name: "b", isSelect: false},
        {
          name: "c",
          isSelect: true,
          children: [
            {name: "c-1", isSelect: false},
            {
              name: "c-2",
              isSelect: false,
              children: [
                {name: "c-2-1", isSelect: false},
                {name: "c-2-2", isSelect: false},
                {name: "c-2-3", isSelect: false},
                {name: "c-2-4", isSelect: false},
              ],
            },
            {name: "c-3", isSelect: false},
            {name: "c-4", isSelect: false},
          ],
        },
        {name: "d", isSelect: false},
      ],
    }
  },
  methods: {
    handleSelect(v) {
      console.log(v, 'select');
    }
  }
}
</script>

<template>
  <div>
    <RightMenu v-bind:list="list" @select="handleSelect"/>
  </div>

</template>

<style scoped lang="less">

</style>
