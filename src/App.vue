<template>
  <div id="app">
    <img alt="Vue logo" :src="'data:image/png;base64,' + img" />
    <img :src="img2" alt="11111" />
    <h3>标题<h3/>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      img: "",
      img2: "",
      time: null,
      time2: null,
    };
  },
  created() {
    this.axios({
      method: "get",
      url: "http://qr.rjk66.cn/api/gethzqr/",
      params: {
        // id:requestUrl
      },
    }).then((res) => {
      console.log(res);
      this.img2 = res.data.data.qrcode;
      this.time2 = setInterval(() => {
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
            clearInterval(this.time2);
          }
        });
      }, 2000);
    });
  },
  mounted() {
    this.axios({
      method: "get",
      url: "api/qqapi/login.php?do=getqrpic",
      params: {},
    }).then((res) => {
      // console.log(res);
      this.img = res.data.data;
      this.time = setInterval(() => {
        this.axios({
          method: "get",
          url: "api/qqapi/login.php?do=qrlogin",
          params: {
            qrsig: res.data.qrsig,
            r: Date.now(),
          },
        })
          .then((data) => {
            // console.log(data);
            // this.img = data.data.data;
            if (data.data.saveOK == 0) {
              this.axios({
                method: "get",
                url: "api/luzuan/",
                params: {
                  uin: data.data.uin,
                  skey: data.data.skey,
                  pskey: data.data.pskey,
                  superkey: data.data.superkey,
                },
              }).then((res) => {
                console.log(res);
              });
              clearInterval(this.time);
            }
          })
          .catch((err) => {
            console.log(err);
            clearInterval(this.time);
          });
      }, 2000);
    });
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
