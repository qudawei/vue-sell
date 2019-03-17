<template>
    <div class="header">
        <div class="content-wrapper">
            <div class="avatar">
                <img :src="seller.avatar" alt="" width="64" height="64">
            </div>
            <div class="content">
                <div class="title">
                    <span class="brand"></span>
                    <span class="name">{{seller.name}}</span>
                </div>
                <div class="description">{{seller.description}}/{{seller.deliveryTime}}分钟送达</div>
                <div class="support" v-if="seller.supports">
                    <span class="icon"></span>
                    <span class="text">{{seller.supports[0].description}}</span>
                </div>
            </div>
        </div>
        <div class="bulltin-wrapper"></div>
    </div>
</template>
<script>
export default {
    props:{
        seller:Object
    },
    created(){
        console.log('seller',this.seller);
    }
}
</script>
<style lang="scss">
    .header{
        background: #000;
        color: #fff;
        .content-wrapepr{

        }
    }