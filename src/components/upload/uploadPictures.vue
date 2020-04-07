<template>
<section>
    <div class="upload">
        <ul>
            <li>
                <img :src="frontSrc" alt="">
                <div>
                </div>
                <input type="file" :name="openTitle.refName" autocomplete="off" :ref="openTitle.refName" @change="addImg($event)" accept="image/*" v-if="openTitle.uploadStatus==true||openTitle.uploadStatus==undefined">
            </li>
            <!-- <li>

<img :src="backSrc" alt="">

<div>

<p></p>

<p>身份证背面照片</p>

<p>（文字清晰，四角齐全）</p>

</div>

<input type="file" ref="inputer1" @change="addImg1" accept="image/*">

</li> -->
        </ul>
        <p>{{openTitle.title}}</p>

    </div>
</section>
</template>

<script>
import { uploadimg, saveibinfo, isopenaccount } from "@/plugins/axios";
import Compressor from "compressorjs";
import axios from "axios";
export default {
  name:'uploadPictures',
  props: ["openTitle"],
  data() {
    return {
      frontSrc: require("@/assets/imgs/openingInformation/upload.png"), //身份证正面的图片路径
      backSrc: "", //身份证反面的图片路径
      CardFront: "", //身份证正面的图片
      CardBack: "" //身份证反面的图片
    };
  },
  methods: {
    // 添加身份证正面
    addImg(e) {
      let self = this;
      // let refName = this.openTitle.refName ;
      // let inputDOM = this.$refs.inputer;
      let inputDOM = e.target;
      // 通过DOM取文件数据
      const file = inputDOM.files[0];
      if (!file) {
        return;
      }
      new Compressor(file, {
        quality: 0.1,
        success(result) {
          const formData = new FormData();
          // The third parameter is required for server
          formData.append("file", result, result.name);
          let params = formData;
          axios.defaults.headers.common["Authorization"] =
            "Bearer " + localStorage.getItem("Token");
          axios({
            method: "post",
            url: uploadApi,
            data: params
          }).then(function(r) {
            if (r.data.rst == true) {
              if (r.data.Url.length > 0) {
                self.frontSrc = "";
                self.frontStatus = true;
                self.CardFront = r.data.Url;
                self.frontSrc = showImg + r.data.Url;
                self.$parent.$emit(self.openTitle.emitType, r.data.Url);
              }
            } else {
              // self.$vux.toast.text(r.data.Msg, "middle");
              console.log(r.data.msg);
               self.$Notice.warning({
                        title: self.$t("m.common.typeError")
                    });
            }
          });
          // uploadimg(params).then(r => {
          //   if (r.data.rst == true) {
          //     if (r.data.Url.length > 0) {
          //       self.frontStatus = true;
          //       self.CardFront = r.data.Url;
          //       self.frontSrc = self.$axios + "/Img/Show/" + r.data.Url;
          //       self.$parent.$emit(self.openTitle.emitType,r.data.Url)
          //     }
          //   } else {
          //     self.$vux.toast.text(r.data.Msg, "middle");
          //   }
          // });
        }
      });
    }
  },
  computed: {
    ImgSrc() {
      if (this.openTitle.imgSrc != undefined&&this.openTitle.imgSrc) {
        this.frontSrc = showImg + this.openTitle.imgSrc;
      }
    }
  },
  watch: {
    ImgSrc: {
      //深度监听，可监听到对象、数组的变化
      handler(newV, oldV) {
      },
      deep: true
    }
  },
  mounted() {
  }
};
</script>

<style lang="scss" scoped>
.upload {
  background-color: #fafafa;
  border-radius: 4px;
  border: 1px dashed #e6e6e6;
  // margin: 30px 0;

  p {
    text-align: center;
    line-height: 40px;
    color: #333333;
    border-top: 1px dashed #f0f0f0;
  }

  ul {
    position: relative;
    height: 158px;
    padding: 14px 30px;

    li {
      width: 100%;
      height: 100%;
      // width: 214px;
      // height: 130px;
      // position: absolute;
      // left: 50%;
      // // top: 0;
      // margin-left: -107px;

      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }

      input {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
      }
    }
  }
}
</style>
