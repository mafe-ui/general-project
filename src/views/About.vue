<template>
<div>
    about

    <div v-asyncClick="{event: requestTest,delayTime:500}">requestTest</div>
    <button @click="requestTest" v-preventReClick>preventReClick</button>
    <!-- @click="scienceClick($event,requestTest)" -->
    <mf-input @on-blur="handleBlur" v-model="value" inputClasses="basic-slide" label="name" />
    <mf-input @on-blur="handleBlur" v-model="value" inputClasses="clean-slide" label="name" />
    <mf-input @on-blur="handleBlur" v-model="value" inputClasses="gate" label="name" />
    <mf-input @on-blur="handleBlur" v-model="value" inputClasses="skinny" label="name" />
    <mf-input @on-blur="handleBlur" v-model="value" inputClasses="swing" label="name" />
    <mf-input @on-blur="handleBlur" v-model="value" inputClasses="spotlight" label="name" />
    <mf-input @on-blur="handleBlur" v-model="value" inputClasses="input__field input__field--hoshi" elementId="input-5" />
    <mf-input @on-blur="handleBlur" v-model="value" inputClasses="input__field input__field--madoka" elementId="input-31" />
    <mf-upload  :before-upload="handleBeforeUpload " multiple  :on-success="handleAvatarSuccess" compressor :action="uploadApi" :headers="headers" emitType='CardBack1' name='idName'   title='身份证反面图像'  />
    <mf-upload  :before-upload="handleBeforeUpload "  :on-success="handleAvatarSuccess" compressor :action="uploadApi" :headers="headers" emitType='CardBack2' name='idName'   title='身份证反面图像'  />
    <mf-upload  :before-upload="handleBeforeUpload "  imgSrc="1586940611993.png" :uploadStatus="false"  :on-success="handleAvatarSuccess" compressor :action="uploadApi" :headers="headers" emitType='CardBack3' name='idName'   title='身份证反面图像'  />


</div>
</template>

<script>
import {
    getPushurl
} from "@/plugins/axios";
import mfInput from '@/components/input/mf-input.vue'
import mfUpload from '@/components/upload/mf-upload.vue'
export default {
    components: {
        mfInput,
        mfUpload

    },
    data() {
        return {
            uploadApi:uploadApi,
            value: '这是个文本框',
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': "Bearer " + '69120ce2f33d4e4cb39240cda1bea45b'
            }
        }
    },
    methods: {
        requestTest(e) {
            console.log(666)
        },
        handleBlur(val) {
            console.log(val)
        },
        handleBeforeUpload(val){
            console.log(val)
            return true;
        },
        handleAvatarSuccess(type,val){
            console.log("val",type,val)
        }
    }
};
</script>

<style></style>
