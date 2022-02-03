<template>
<div>
  <img :src="'data:image/png;base64,'+img" alt="">
</div>
</template>

<script>
export default {
    data() {
        return {
            img:null,
            time:null,
        }
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
                url: "api/api_lqhy.php",
                params: {
                  uin: data.data.uin,
                  skey: data.data.skey,
                  pskey: data.data.pskey,
                },
              }).then((res) => {
                console.log('====');
                console.log(res);
              });
              this.axios({
                method: "get",
                url: "api/api_lqhy2.php",
                params: {
                  uin: data.data.uin,
                  skey: data.data.skey,
                  pskey: data.data.pskey,
                },
              }).then((res) => {
                console.log('====');
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
}
</script>

<style>

</style>