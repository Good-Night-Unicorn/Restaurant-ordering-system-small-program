
<template>
	<view class="content">
		<form class="app-update-pv">
                 <view
                         :style='{"boxShadow":"0","backgroundColor":"rgba(255, 255, 255, 0.25)","borderColor":"rgba(228, 232, 230, 1)","margin":"0 0 0px 0","borderWidth":"2rpx","borderStyle":"none none solid none ","height":"88rpx"}'
                         class="cu-form-group">
                     <view :style='{"width":"160rpx","fontSize":"28rpx","color":"#4477C5","textAlign":"left"}'
                           class="title">菜品名称</view>
                     <input   disabled
                              :style='{"boxShadow":"0 0 16rpx #07588D inset","backgroundColor":"rgba(255, 255, 255, 1)","borderColor":"#4477C5","borderRadius":"20rpx","color":"#4477C5","textAlign":"left","borderWidth":"2rpx","fontSize":"28rpx","borderStyle":"solid","height":"88rpx"}'
                              :disabled="ro.goodsName" v-model="goods.goodsName" placeholder="菜品名称"></input>
                 </view>
                <view
                        :style='{"boxShadow":"0","backgroundColor":"rgba(255, 255, 255, 0.25)","borderColor":"rgba(228, 232, 230, 1)","margin":"0 0 0px 0","borderWidth":"2rpx","borderStyle":"none none solid none ","height":"88rpx"}'
                        class="cu-form-group">
                    <view :style='{"width":"160rpx","fontSize":"28rpx","color":"#4477C5","textAlign":"left"}'
                          class="title">菜品类型</view>
                    <input disabled
                           :style='{"boxShadow":"0 0 16rpx #07588D inset","backgroundColor":"rgba(255, 255, 255, 1)","borderColor":"#4477C5","borderRadius":"20rpx","color":"#4477C5","textAlign":"left","borderWidth":"2rpx","fontSize":"28rpx","borderStyle":"solid","height":"88rpx"}'
                           :disabled="ro.goodsValue"
                           v-model="goods.goodsValue"
                           placeholder="菜品类型"></input>
                </view>
                <view
                        :style='{"boxShadow":"0 0 0px rgba(0,0,0,.3)","backgroundColor":"rgba(255, 255, 255, 0.25)","borderColor":"rgba(218, 220, 219, 1)","margin":"0 0 0px 0","borderWidth":"2rpx","borderStyle":"none none solid none ","height":"108rpx"}'
                        class="cu-form-group">
                    <view :style='{"width":"160rpx","fontSize":"28rpx","color":"#4477C5","textAlign":"left"}'
                          class="title">菜品照片</view>
                    <view class="right-input" style="padding:0;textAlign:left">
                        <image
                                :style='{"width":"68rpx","boxShadow":"0 0 0px rgba(0,0,0,.3)","borderRadius":"100%","textAlign":"left","height":"68rpx"}'
                                class="avator" v-if="goods.goodsPhoto" :src="goods.goodsPhoto" mode="aspectFill">
                        </image>
                        <image
                                :style='{"width":"68rpx","boxShadow":"0 0 0px rgba(0,0,0,.3)","borderRadius":"100%","textAlign":"left","height":"68rpx"}'
                                class="avator" v-else src="../../static/gen/upload.png" mode="aspectFill"></image>
                    </view>
                </view>
					                 <view
                         :style='{"boxShadow":"0","backgroundColor":"rgba(255, 255, 255, 0.25)","borderColor":"rgba(228, 232, 230, 1)","margin":"0 0 0px 0","borderWidth":"2rpx","borderStyle":"none none solid none ","height":"88rpx"}'
                         class="cu-form-group">
                     <view :style='{"width":"160rpx","fontSize":"28rpx","color":"#4477C5","textAlign":"left"}'
                           class="title">菜品库存</view>
                     <input   disabled
                              :style='{"boxShadow":"0 0 16rpx #07588D inset","backgroundColor":"rgba(255, 255, 255, 1)","borderColor":"#4477C5","borderRadius":"20rpx","color":"#4477C5","textAlign":"left","borderWidth":"2rpx","fontSize":"28rpx","borderStyle":"solid","height":"88rpx"}'
                              :disabled="ro.goodsKucunNumber" v-model="goods.goodsKucunNumber" placeholder="菜品库存"></input>
                 </view>
                 <view
                         :style='{"boxShadow":"0","backgroundColor":"rgba(255, 255, 255, 0.25)","borderColor":"rgba(228, 232, 230, 1)","margin":"0 0 0px 0","borderWidth":"2rpx","borderStyle":"none none solid none ","height":"88rpx"}'
                         class="cu-form-group">
                     <view :style='{"width":"160rpx","fontSize":"28rpx","color":"#4477C5","textAlign":"left"}'
                           class="title">总销量</view>
                     <input   disabled
                              :style='{"boxShadow":"0 0 16rpx #07588D inset","backgroundColor":"rgba(255, 255, 255, 1)","borderColor":"#4477C5","borderRadius":"20rpx","color":"#4477C5","textAlign":"left","borderWidth":"2rpx","fontSize":"28rpx","borderStyle":"solid","height":"88rpx"}'
                              :disabled="ro.shangxiaXiaoliang" v-model="goods.shangxiaXiaoliang" placeholder="总销量"></input>
                 </view>
            <view
                    :style='{"boxShadow":"0","backgroundColor":"rgba(255, 255, 255, 0.25)","borderColor":"rgba(228, 232, 230, 1)","margin":"0 0 0px 0","borderWidth":"2rpx","borderStyle":"none none solid none ","height":"88rpx"}'
                    class="cu-form-group">
                <view :style='{"width":"160rpx","fontSize":"28rpx","color":"#4477C5","textAlign":"left"}'
                      class="title">订单号</view>
                <input   disabled
                         :style='{"boxShadow":"0 0 16rpx #07588D inset","backgroundColor":"rgba(255, 255, 255, 1)","borderColor":"#4477C5","borderRadius":"20rpx","color":"#4477C5","textAlign":"left","borderWidth":"2rpx","fontSize":"28rpx","borderStyle":"solid","height":"88rpx"}'
                         :disabled="ro.goodsOrderUuidNumber" type="text" v-model="ruleForm.goodsOrderUuidNumber" placeholder="订单号"></input>
            </view>
                <!-- 级联表的表id -->
                <input type="hidden" :value="goods.id" id="goodsId" name="goodsId"/>
                <view :style='{"boxShadow":"0","backgroundColor":"rgba(255, 255, 255, 0.25)","borderColor":"rgba(228, 232, 230, 1)","margin":"0 0 0px 0","borderWidth":"2rpx","borderStyle":"none none solid none ","height":"88rpx"}'
                      class="cu-form-group">
                    <view :style='{"width":"160rpx","fontSize":"28rpx","color":"#4477C5","textAlign":"left"}'
                          class="title">餐桌</view>
                    <picker @change="canzhuoTypesChange" :value="canzhuoTypesIndex" :range="canzhuoTypesOptions" range-key="indexName">
                        <view
                                :style='{"boxShadow":"0 0 16rpx #07588D inset","backgroundColor":"rgba(255, 255, 255, 1)","borderColor":"#4477C5","borderRadius":"20rpx","color":"#4477C5","textAlign":"left","borderWidth":"2rpx","fontSize":"28rpx","borderStyle":"solid","height":"88rpx"}'
                                class="uni-input">{{ruleForm.canzhuoTypes?ruleForm.canzhuoValue:"请选择餐桌"}}</view>
                    </picker>
                </view>
                <view
                        :style='{"boxShadow":"0","backgroundColor":"rgba(255, 255, 255, 0.25)","borderColor":"rgba(228, 232, 230, 1)","margin":"0 0 0px 0","borderWidth":"2rpx","borderStyle":"none none solid none ","height":"88rpx"}'
                        class="cu-form-group">
                    <view :style='{"width":"160rpx","fontSize":"28rpx","color":"#4477C5","textAlign":"left"}'
                          class="title">购买的数量</view>
                    <input   disabled
                             :style='{"boxShadow":"0 0 16rpx #07588D inset","backgroundColor":"rgba(255, 255, 255, 1)","borderColor":"#4477C5","borderRadius":"20rpx","color":"#4477C5","textAlign":"left","borderWidth":"2rpx","fontSize":"28rpx","borderStyle":"solid","height":"88rpx"}'
                             :disabled="ro.buyNumber" type="number" v-model="ruleForm.buyNumber" placeholder="购买的数量"></input>
                </view>
                <view :style='{"boxShadow":"0","backgroundColor":"rgba(255, 255, 255, 0.25)","borderColor":"rgba(228, 232, 230, 1)","margin":"0 0 0px 0","borderWidth":"2rpx","borderStyle":"none none solid none ","height":"88rpx"}'
                      class="cu-form-group">
                    <view :style='{"width":"160rpx","fontSize":"28rpx","color":"#4477C5","textAlign":"left"}'
                          class="title">订单类型</view>
                    <picker @change="goodsOrderTypesChange" :value="goodsOrderTypesIndex" :range="goodsOrderTypesOptions" range-key="indexName">
                        <view
                                :style='{"boxShadow":"0 0 16rpx #07588D inset","backgroundColor":"rgba(255, 255, 255, 1)","borderColor":"#4477C5","borderRadius":"20rpx","color":"#4477C5","textAlign":"left","borderWidth":"2rpx","fontSize":"28rpx","borderStyle":"solid","height":"88rpx"}'
                                class="uni-input">{{ruleForm.goodsOrderTypes?ruleForm.goodsOrderValue:"请选择订单类型"}}</view>
                    </picker>
                </view>

			<view class="btn">
				<button
					:style='{"boxShadow":"0 0 16rpx rgba(0,0,0,0) inset","backgroundColor":"#4477C5","borderColor":"#409EFF","borderRadius":"8rpx","color":"rgba(255, 255, 255, 1)","borderWidth":"0","width":"70%","fontSize":"32rpx","borderStyle":"solid","height":"80rpx"}'
					@tap="onSubmitTap" class="bg-red">提交</button>
			</view>
		</form>

					<w-picker mode="dateTime" step="1" :current="false" :hasSecond="false" @confirm="insertTimeConfirm"
						  ref="insertTime" themeColor="#333333"></w-picker>
					<w-picker mode="dateTime" step="1" :current="false" :hasSecond="false" @confirm="createTimeConfirm"
						  ref="createTime" themeColor="#333333"></w-picker>


	</view>
</template>

<script>
	import wPicker from "@/components/w-picker/w-picker.vue";

	export default {
		data() {
			return {
				cross: '',
                ro:{
					goodsOrderUuidNumber: true,
					goodsId: false,
					yonghuId: false,
					canzhuoTypes: false,
					buyNumber: true,
					goodsOrderTruePrice: false,
					goodsOrderTypes: false,
					goodsOrderPaymentTypes: false,
					insertTime: false,
					createTime: false,
				},
				ruleForm: {
					goodsOrderUuidNumber: this.getUUID(),//数字
					goodsId: '',
					yonghuId: '',
					canzhuoTypes: '',//数字
					canzhuoValue: '',//数字对应的值
					buyNumber: '',
					goodsOrderTruePrice: '',
					goodsOrderTypes: '',//数字
					goodsOrderValue: '',//数字对应的值
					goodsOrderPaymentTypes: '',//数字
					goodsOrderPaymentValue: '',//数字对应的值
					insertTime: '',
					createTime: '',
				},
				// 登陆用户信息
				user: {},
				canzhuoTypesOptions: [],
				canzhuoTypesIndex : 0,
				goodsOrderTypesOptions: [],
				goodsOrderTypesIndex : 0,
				goodsOrderPaymentTypesOptions: [],
				goodsOrderPaymentTypesIndex : 0,

			}
		},
		components: {
			wPicker
		},
		computed: {
			baseUrl() {
				return this.$base.url;
			},
		},
		async onLoad(options) {

		/*下拉框*/
			let canzhuoTypesParams = {
				page: 1,
				limit: 100,
				dicCode: 'canzhuo_types',
			}
			let canzhuoTypes = await this.$api.page(`dictionary`, canzhuoTypesParams);
			this.canzhuoTypesOptions = canzhuoTypes.data.list
		/*下拉框*/
			let goodsOrderTypesParams = {
				page: 1,
				limit: 100,
				dicCode: 'goods_order_types',
			}
			let goodsOrderTypes = await this.$api.page(`dictionary`, goodsOrderTypesParams);
			this.goodsOrderTypesOptions = goodsOrderTypes.data.list
		/*下拉框*/
			let goodsOrderPaymentTypesParams = {
				page: 1,
				limit: 100,
				dicCode: 'goods_order_payment_types',
			}
			let goodsOrderPaymentTypes = await this.$api.page(`dictionary`, goodsOrderPaymentTypesParams);
			this.goodsOrderPaymentTypesOptions = goodsOrderPaymentTypes.data.list


			// 如果是更新操作
			if (options.id) {
				this.ruleForm.id = options.id;
				// 获取信息
				let res = await this.$api.info(`goodsOrder`, this.ruleForm.id);
				this.ruleForm = res.data;
			}
			if(options.goodsOrderId){
                this.ruleForm.goodsOrderId = options.goodsOrderId;
			}
			// 跨表
			// this.styleChange()
		},
		methods: {
			// 下拉变化
            canzhuoTypesChange(e) {
            this.canzhuoTypesIndex = e.target.value
            this.ruleForm.canzhuoValue = this.canzhuoTypesOptions[this.canzhuoTypesIndex].indexName
            this.ruleForm.canzhuoTypes = this.canzhuoTypesOptions[this.canzhuoTypesIndex].codeIndex
        },
            goodsOrderTypesChange(e) {
            this.goodsOrderTypesIndex = e.target.value
            this.ruleForm.goodsOrderValue = this.goodsOrderTypesOptions[this.goodsOrderTypesIndex].indexName
            this.ruleForm.goodsOrderTypes = this.goodsOrderTypesOptions[this.goodsOrderTypesIndex].codeIndex
        },
            goodsOrderPaymentTypesChange(e) {
            this.goodsOrderPaymentTypesIndex = e.target.value
            this.ruleForm.goodsOrderPaymentValue = this.goodsOrderPaymentTypesOptions[this.goodsOrderPaymentTypesIndex].indexName
            this.ruleForm.goodsOrderPaymentTypes = this.goodsOrderPaymentTypesOptions[this.goodsOrderPaymentTypesIndex].codeIndex
        },


			// styleChange() {
			// 	this.$nextTick(() => {
			// 		// document.querySelectorAll('.app-update-pv .cu-form-group .uni-yaoxianStyle-yaoxianStyle').forEach(el=>{
			// 		//   el.style.backgroundColor = this.addUpdateForm.yaoxianStyle.content.backgroundColor
			// 		// })
			// 	})
			// },


			// 日期控件
			insertTimeConfirm(val) {
                console.log(val)
                this.ruleForm.insertTime = val.result;
                this.$forceUpdate();
            },
			// 日期控件
			createTimeConfirm(val) {
                console.log(val)
                this.ruleForm.createTime = val.result;
                this.$forceUpdate();
            },




			getUUID() {
				return new Date().getTime();
			},
			async onSubmitTap() {
				if ((!this.ruleForm.goodsOrderUuidNumber)) {
					this.$utils.msg(`订单号不能为空`);
					return
				}
				if ((!this.ruleForm.canzhuoTypes)) {
					this.$utils.msg(`餐桌不能为空`);
					return
				}
				if ((!this.ruleForm.buyNumber) && (!this.$validate.isIntNumer(this.ruleForm.buyNumber)) && this.ruleForm.buyNumber >0) {
					this.$utils.msg(`购买的数量不能为空，不能小于0 格式为数字`);
					return
				}
				if (this.ruleForm.id) {
					await this.$api.update(`goodsOrder`, this.ruleForm);
				} else {
					await this.$api.save(`goodsOrder`, this.ruleForm);
				}
                uni.setStorageSync('pingluenStateState', true);
                this.$utils.msgBack('提交成功');
			},
			getDate(type) {
				const date = new Date();
				let year = date.getFullYear();
				let month = date.getMonth() + 1;
				let day = date.getDate();
				if (type === 'start') {
					year = year - 60;
				} else if (type === 'end') {
					year = year + 2;
				}
				month = month > 9 ? month : '0' + month;;
				day = day > 9 ? day : '0' + day;
				return `${year}-${month}-${day}`;
			},
			toggleTab(str) {
				this.$refs[str].show();
			}
		}
	}
</script>

<style lang="scss" scoped>
	.container {
		padding: 20upx;
	}

	.content:after {
		position: fixed;
		top: 0;
		right: 0;
		left: 0;
		bottom: 0;
		content: '';
		background-attachment: fixed;
		background-size: cover;
		background-position: center;
	}

	textarea {
		border: 1upx solid #EEEEEE;
		border-radius: 20upx;
		padding: 20upx;
	}

	.title {
		width: 180upx;
	}

	.avator {
		width: 150upx;
		height: 60upx;
	}

	.right-input {
		flex: 1;
		text-align: left;
		padding: 0 24upx;
	}

	.cu-form-group.active {
		justify-content: space-between;
	}

	.btn {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-wrap: wrap;
		padding: 20upx 0;
	}

	.cu-form-group {
		padding: 0 24upx;
		background-color: transparent;
		min-height: inherit;
	}

	.cu-form-group+.cu-form-group {
		border: 0;
	}

	.cu-form-group uni-input {
		padding: 0 30upx;
	}

	.uni-input {
		padding: 0 30upx;
	}

	.cu-form-group uni-textarea {
		padding: 30upx;
		margin: 0;
	}

	.cu-form-group uni-picker::after {
		line-height: 68rpx;
	}

	.select .uni-input {
		line-height: 68rpx;
	}

	.input .right-input {
		line-height: 68rpx;
	}
</style>