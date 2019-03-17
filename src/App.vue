<template>
	<div id="app">
		<div class="header">
			<s-header :seller="seller"></s-header>
		</div>
		<div class="tab">
				<div class="tab-item">
					<router-link to="/goods">商品</router-link>
				</div>
				<div class="tab-item">
						<router-link to="/ratings">评价</router-link>
				</div>
				<div class="tab-item">
						<router-link to="/seller">商家</router-link>
				</div>
		</div>
		<div class="content">
			i am content
		</div>
    <router-view></router-view>
	</div>
</template>

<script>
	import header from './components/header/header.vue'
	const ERROR_OK = 0;
	export default {
		name: 'App',
		data() {
				return {
					seller: {}
				}
		},
		created(){
			this.$http.get('/api/seller').then((res) =>{
				res = res.body;
				if(res.errno === ERROR_OK ){
						this.seller = res.data;
				}
				console.log('seller',this.seller);
			})
		},
		components: {
			's-header': header
		}
	}

</script>

<style lang="scss">
	#app {
		.tab{
      display: flex;
      width: 100%;
      height: 40px;
      line-height: 40px;
			border-bottom: 1px solid rgba(7,17,27,0.1);
        .tab-item{
          flex: 1;
          text-align: center;
					& > a{
						display: block;
						font-size: 14px;
						color:#778593;
						&.active{
							color: red;
						}
					}
        }
    }
	}

</style>
