<template>
    <view class="content">
        <form>
			<view class="cu-form-group">
				<picker @change="yonghucanzhuoTypesChange" :value="canzhuoTypesIndex" :range="canzhuoTypesOptions" range-key="indexName">
					<view style="padding: 0 30upx;text-align: center;"
						  class="title uni-input picker-select-input">{{yixuancanzhuo?yixuancanzhuoValue:"请选择餐桌"}}</view>
				</picker>
			</view>
			<view class="cu-form-group">
                <view class="title">购买清单</view>
            </view>
            <view v-for="(item,index) in orderGoods " v-bind:key="index" class="cu-form-group">
                <image class="avator" :src="item.goodsPhoto" mode=""></image>
                <view class="title" style="width: 75%;">
                    <view style="margin-top: -50rpx;">{{item.goodsName}}</view>
                    <view >
                        x{{item.buyNumber}}
                        <text style="margin-left: 30upx;color: red;">￥{{item.goodsNewMoney}}</text>
                    </view>
                </view>
            </view>
            <view @tap="onAddressTap" class="cu-form-group">
                <view class="title">总价</view>
                <view>
                    <text v-if="goodsOrderPaymentTypes == 1">原价：￥{{(maxNewMouey).toFixed(2)}}</text>
                    <view v-if="goodsOrderPaymentTypes == 1"></view>
                    <text v-if="goodsOrderPaymentTypes == 1">折扣价：￥{{(maxNewMouey * zhekou).toFixed(2)}}</text>
                    <text v-if="goodsOrderPaymentTypes == 2">{{(maxNewMouey).toFixed(2)}}积分</text>
                </view>
            </view>
        </form>
        <view class="padding" style="text-align: center;">
            <button @tap="onSubmitTap()" class="bg-red lg">确认支付</button>
        </view>
    </view>
</template>

<script>
    export default {
        data() {
            return {
                user: {},//登录用户
                orderGoods: [],//展示数据
                maxNewMouey: 0,//总价格
                goodsOrderPaymentTypes:1,//是什么支付类型
				canzhuoTypesOptions: [],
				yixuancanzhuo:null,
				yixuancanzhuoValue:'',
				canzhuoTypesIndex: 0,
                zhi:[
                    {
                        id:1,
                        val:"余额"
                    },
                    {
                        id:2,
                        val:"积分"
                    },
                ],
                zhekou:1,//折扣
            }
        },
        async onLoad(options) {
            // 获取订单信息，座位信息
            this.orderGoods = uni.getStorageSync('orderGoods');
            if(this.orderGoods.length>0){
                for (let i = 0; i < this.orderGoods.length; i++) {
                    this.maxNewMouey = this.maxNewMouey + parseFloat(this.orderGoods[i].goodsNewMoney) * this.orderGoods[i].buyNumber
                }
            }
            uni.removeStorageSync("orderGoods")
			let canzhuo_typesParams = {
				page: 1,
				limit: 100,
				dicCode: 'canzhuo_types',
			}
			let canzhuo_typesRes = await this.$api.page(`dictionary`, canzhuo_typesParams);
        
        	this.canzhuoTypesOptions = canzhuo_typesRes.data.list
		},
        async onShow() {
            let _this = this
            let table = uni.getStorageSync("nowTable");
            let userRes = await _this.$api.session(table)
            _this.user = userRes.data

            let huiyuandengjiTypesRes = await _this.$api.page("dictionary",{
                dicCode: "huiyuandengji_types",
                dicName: "会员等级类型",
                codeIndexStart: _this.user.huiyuandengjiTypes,
                codeIndexEnd: _this.user.huiyuandengjiTypes,
            })
            if(huiyuandengjiTypesRes.data.list.length >0){
                _this.zhekou = huiyuandengjiTypesRes.data.list[0].beizhu;
            }


        },
        methods: {
			yonghucanzhuoTypesChange(e) {
				this.canzhuoTypesIndex = e.target.value
				this.yixuancanzhuoValue = this.canzhuoTypesOptions[this.canzhuoTypesIndex].indexName
				this.yixuancanzhuo = this.canzhuoTypesOptions[this.canzhuoTypesIndex].codeIndex
			},
            async onSubmitTap() {
                let _this = this;
				if(_this.yixuancanzhuo == null){
					_this.$utils.msg('请选择餐桌');
					return
				}
                let table = uni.getStorageSync("nowTable");
                uni.showModal({
                    title: '提示',
                    content: '是否确认支付',
                    success: async function(res) {
                        if (res.confirm) {
							 let data = {
								 goodss: JSON.stringify(_this.orderGoods),
								 yonghuId: _this.user.id,
								 canzhuoTypes: _this.yixuancanzhuo,
								 goodsOrderPaymentTypes:  _this.goodsOrderPaymentTypes,
							 }
							await _this.$api.requestConditionDataGet('goodsOrder','order',null,data);
                            _this.$utils.jump('/pages/goodsOrder/list');
                        }
                    }
                });
            },
        }
    }
</script>

<style lang="scss">
    .avator {
        width: 150upx;
        height: 150upx;
        margin: 20upx 0;
    }
</style>
