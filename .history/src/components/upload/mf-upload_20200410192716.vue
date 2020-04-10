<template>
<section>
    <div class="form-group" v-if="multiple">
        <label class="control-label">上传图片</label>
        <div class="control-form">
            <p class="help-block">(建议图片格式为：JPEG/BMP/PNG/GIF，大小不超过5M，最多可上传4张)</p>
            <ul class="upload-imgs">
                <li v-if="imgLen>=4 ? false : true">
                    <input type="file" class="upload" @change="addImgMultipe" ref="inputer" multiple accept="image/png,image/jpeg,image/gif,image/jpg" />
                    <a class="add"><i class="iconfont icon-plus"></i>
                        <p>点击上传</p>
                    </a>
                </li>
                <li v-for='(value, key) in imgs'>
                    <p class="img"><img :src="getObjectURL(value)"><a class="close" @click="delImg(key)">×</a></p>
                </li>
<<<<<<< Updated upstream
                <div class="progress" v-if="isShow">
                    <CircleProgress class="progress_svg" ref="$circle" key="duration-model" :isAnimation="false" :isRound="true" :width="width" :radius="radius" :progress="progress" :barColor="barColor" :duration="duration" :delay="delay" :timeFunction="timeFunction" :backgroundColor="backgroundColor">
                    </CircleProgress>
                </div>
=======
                 <div class="progress" v-if="isShow">
                <CircleProgress class="progress_svg" ref="$circle" key="duration-model" :isAnimation="false" :isRound="true" :width="width" :radius="radius" :progress="progress" :barColor="barColor" :duration="duration" :delay="delay" :timeFunction="timeFunction" :backgroundColor="backgroundColor">
                </CircleProgress>
            </div>
>>>>>>> Stashed changes
            </ul>
        </div>
        <button @click="submit">确定</button>
    </div>
    <div class="upload" v-else>
        <ul>
            <li>
                <img :src="frontSrc" alt="">
                <input type="file" :name="refName" autocomplete="off" :ref="refName" @change="addImg($event)" accept="image/*" v-if="uploadStatus">
            </li>
            <!-- <div class="progress-bar" v-show="progress && progress !=100">
                <div class="progress-percent" :style="{width:progress+'%'}"></div>
                <div class="tip" :style="{left:progress+'%'}" v-show="progress && progress !=100">{{progress+'%'}}
                    <p>{{title}}</p>
                </div>
            </div> -->
            <div class="progress" v-if="isShow">
                <CircleProgress class="progress_svg" ref="$circle" key="duration-model" :isAnimation="false" :isRound="true" :width="width" :radius="radius" :progress="progress" :barColor="barColor" :duration="duration" :delay="delay" :timeFunction="timeFunction" :backgroundColor="backgroundColor">
                </CircleProgress>
            </div>
        </ul>

    </div>
</section>
</template>

<script>
import axios from "axios";
import Compressor from "compressorjs";
import CircleProgress from "./progress";
export default {
    name: "mf-upload",
    props: {
        action: {
            type: String,
            required: true,
        },
        headers: {
            type: Object,
            default () {
                return {};
            },
        },
        data: Object,
        title: String,
        beforeUpload: Function,
        onSuccess: Function,
        name: {
            type: String,
            default: "file",
        },
        accept: {
            type: String,
            default: "image/*",
        },
        compressor: {
            type: Boolean,
            default: false,
        },
        imgSrc: {
            type: String,
            default: "",
        },
        refName: {
            type: String,
            default: "",
        },
        uploadStatus: {
            type: Boolean,
            default: true,
        },
        multiple: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            formData: new FormData(),
            imgs: {},
            imgLen: 0,
            frontSrc: require("@/assets/img/upload.png"), //身份证正面的图片路径
            CardFront: "", //身份证正面的图片
            // progress: 0,
            //
            isDurationModel: true, // 是否打开持续缓动模式
            isShow: false,
            width: 100,
            radius: 10,
            progress: 20,
            duration: 1000,
            delay: 0,
            barColor: "#F2AE57",
            backgroundColor: "#FFE8CC",
            timeFunction: "cubic-bezier(0.99, 0.01, 0.22, 0.94)",
            intervalTimer: null, // 持续模式，循环计时器
            currentTime: 0, // 当前时间
            durationTime: 60, // 持续模式总时长
        };
    },
    components: {
        CircleProgress,
    },
    methods: {
        addImgMultipe(event) {
            let inputDOM = this.$refs.inputer;
            // 通过DOM取文件数据
            this.fil = inputDOM.files;
            let oldLen = this.imgLen;
            let len = this.fil.length + oldLen;
            if (len > 4) {
                alert("最多可上传4张，您还可以上传" + (4 - oldLen) + "张");
                return false;
            }
            for (let i = 0; i < this.fil.length; i++) {
                let size = Math.floor(this.fil[i].size / 1024);
                if (size > 5 * 1024 * 1024) {
                    alert("请选择5M以内的图片！");
                    return false;
                }
                this.imgLen++;
                this.$set(
                    this.imgs,
                    this.fil[i].name + "?" + new Date().getTime() + i,
                    this.fil[i]
                );
            }
<<<<<<< Updated upstream
            this.beforeUpload(this.imgs)
=======
                this.beforeUpload(this.imgs)
>>>>>>> Stashed changes
        },
        getObjectURL(file) {
            var url = null;
            if (window.createObjectURL != undefined) {
                // basic
                url = window.createObjectURL(file);
            } else if (window.URL != undefined) {
                // mozilla(firefox)
                url = window.URL.createObjectURL(file);
            } else if (window.webkitURL != undefined) {
                // webkit or chrome
                url = window.webkitURL.createObjectURL(file);
            }
            return url;
        },
        delImg(key) {
            this.$delete(this.imgs, key);
            this.imgLen--;
        },
        submitDemo() {
            for (let key in this.imgs) {
                let name = key.split("?")[0];
                formData.append("multipartFiles", this.imgs[key], name);
            }
            this.$http
                .post("/opinion/feedback", formData, {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                })
                .then(res => {
                    this.alertShow = true;
                });
        },
        submit() {
            console.log("this.imgs", this.imgs);
            let self = this;
            const formData = new FormData();
            for (let key in this.imgs) {
                let name = key.split("?")[0];
                formData.append("file", this.imgs[key], name);
                console.log(name, this.imgs[key])
            }
            console.log(formData)
            // axios.defaults.headers.common["Authorization"] =
            //     "Bearer " + '69120ce2f33d4e4cb39240cda1bea45b'
            axios({
                method: "post",
                url: this.action,
                data: formData,
                headers: this.headers,
                // onUploadProgress: progressEvent => {
                //     let complete = (progressEvent.loaded / progressEvent.total * 100) - 1 | 0;
                //     self.progress = complete;
                //     self.isShow = true;
                //     console.log("上传 " + self.progress);
                // },
            }).then(function (r) {
                console.log(r);
                if (r.data.rst == true) {
                    self.onSuccess(r.data)
                    alert("上传成功!")
                }
            });
        },
        // ======单张=======
        // 添加身份证正面
        addImg(e) {
            let self = this;
            let inputDOM = e.target;
            // 通过DOM取文件数据
            const file = inputDOM.files[0];
            // console.log("!this.beforeUpload", this.beforeUpload)
            // if (!this.beforeUpload == false) {
            //     return false;
            // }
            // const before = this.beforeUpload(file);
            if (!file) {
                return;
            }
            if (this.compressor) {
                this.compressImg(file);
            } else {
                this.upload(file)
            }
        },
        compressImg(file) {
            let self = this;
            new Compressor(file, {
                quality: 0.1,
                success(result) {
                    self.upload(result)
                },
            });
        },
        upload(file) {
            let self = this;
            const formData = new FormData();
            formData.append("file", file, file.name);
            let params = formData;
            axios({
                method: "post",
                url: self.action,
                data: params,
                headers: self.headers, //原生获取上传进度的事件
                onUploadProgress: progressEvent => {
                    let complete = (progressEvent.loaded / progressEvent.total * 100) - 1 | 0;
                    self.progress = complete;
                    self.isShow = true;
                    console.log("上传 " + self.progress);
                },
            }).then(function (r) {
                if (r.data.rst == true) {
                    if (r.data.Url.length > 0) {
                        self.frontSrc = "";
                        self.frontStatus = true;
                        self.CardFront = r.data.Url;
                        self.frontSrc = showImg + r.data.Url;
                        self.onSuccess(r.data)
                        // self.$parent.$emit(self.emitType, r.data.Url);
                    }
                } else {
                    console.log(r.data.msg);
                    self.isShow = false;
                    alert("请上传正确的文件类型!")
                }
            }).catch(function (error) {
                self.isShow = false;
                alert("上传失败，请重新上传")
            });
        }
    },
    computed: {
        ImgSrc() {
            if (this.imgSrc != undefined && this.imgSrc) {
                this.frontSrc = showImg + this.imgSrc;
            }
        },
    },
    watch: {
        ImgSrc: {
            //深度监听，可监听到对象、数组的变化
            handler(newV, oldV) {

            },
            deep: true,
        },
        frontSrc(val) {
            console.log("val", val, val.indexOf(showImg))
            if (val.indexOf(showImg) != -1) {
                this.$nextTick(() => {
                    this.progress = 100;
                    setTimeout(() => {
                        this.isShow = false;
                    }, 1000);
                })
            }
        },
    },
};
</script>

<style lang="scss" scoped>
$them-color: #58bc58;

.upload-imgs {
    margin: 10px 0 30px 0;
    overflow: hidden;
    font-size: 0;
}

.upload-imgs li {
    position: relative;
    width: 118px;
    height: 118px;
    font-size: 14px;
    display: inline-block;
    padding: 10px;
    margin-right: 25px;
    border: 2px dashed #ccc;
    text-align: center;
    vertical-align: middle;
}

.upload-imgs li:hover {
    border-color: $them-color;
}

.upload-imgs .add {
    display: block;
    background-color: #ccc;
    color: #ffffff;
    height: 94px;
    padding: 8px 0;
}

.upload-imgs .add .iconfont {
    padding: 10px 0;
    font-size: 40px;
}

.upload-imgs li:hover .add {
    background-color: $them-color;
}

.upload-imgs li .upload {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 118px;
    height: 118px;
    opacity: 0;
}

.upload-imgs .img {
    position: relative;
    width: 94px;
    height: 94px;
    line-height: 94px;
}

.upload-imgs .img img {
    vertical-align: middle;
    width: 100%;
    height: 100%;
    object-fit: contain;
}

.upload-imgs .img .close {
    display: none;
}

.upload-imgs li:hover .img .close {
    display: block;
    position: absolute;
    right: -6px;
    top: -10px;
    line-height: 1;
    font-size: 22px;
    color: #aaa;
}

// =======单张=========
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

// ===
.progress-bar {
    padding-bottom: 50px;
}

.progress-percent {
    width: 5px;
    height: 5px;
    background-color: #58bc58;
}

// ===
.progress {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: #333;
    opacity: 0.8;

    .progress_svg {
        height: 100%;
        padding-top: 6%;
    }
}
</style>
