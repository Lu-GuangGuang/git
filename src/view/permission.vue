<template>
  <div>
    <div v-if="!ty">
      <img :src="permissionimg" alt="" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      permissionimg: null,
      chimg: null,
      time: null,
    };
  },
  computed: {
    ...mapGetters(["ty"]),
  },
  created() {
    this.$store.commit("fun", false);
    this.axios({
      method: "get",
      url: "http://qr.rjk66.cn/api/gethzqr/",
      params: {
        // id:requestUrl
      },
    }).then((res) => {
      console.log(res);
      this.permissionimg = res.data.data.qrcode;
      this.time = setInterval(() => {
        this.axios({
          method: "get",
          url: "api/hzqrlogin/",
          params: {
            id: res.data.data.id,
            r: Date.now(),
          },
        }).then((data) => {
          console.log(data);
          if (data.data.qrstate == 4) {
            this.$store.commit("fun", true);
            clearInterval(this.time);
          }
        });
      }, 2000);
    });
  },
};
</script>

<style></style>
