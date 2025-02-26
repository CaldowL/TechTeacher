<template>
	<view :class="'content_'+String(sex_select)">
		<view class="avatar_class">
			<view style="position: relative;text-align: center;">
				<view style="position: relative;display: flex;width: 80px; justify-content: space-between;
				 font-size: 20px;margin:auto;line-height:30px;">
					<view>性别</view>
					<view style="position: relative;width: 15px;height: 10px;"></view>
					<image style="position: relative;height: 20px;width: 20px; top: 6px;"
						:src="sex_select===0?'/static/fill_no.png':'/static/fill_ok.png'" mode="scaleToFill"></image>
				</view>
			</view>
			<view style="position: relative;height: 20px;width: 10px;"></view>
			<view class="avatar">
				<view>
					<view class="">
						<image :class="'avatar_image_'+String(getBorderClassNum(1))"
							style="position: relative;height: 250rpx;width: 250rpx;border-radius: 50%;"
							src="/static/logo.png" mode="scaleToFill" @click="chooseSex(1)"></image>
						<image
							style="position: relative;height: 20px;width: 20px;border-radius: 50%;top: -30rpx;left: -35rpx;"
							:src="getRefreshPic(1)" mode="scaleToFill"></image>
						<view :style="'position: relative;width: 250rpx;text-align: center;color:'+getSexFontColor(1)">
							男</view>
					</view>
				</view>

				<view :class="'avatar_'+String(sex_select)">
					<view style="position: relative; left: 20px;">
						<image :class="'avatar_image_'+String(getBorderClassNum(2))"
							style="position: relative;height: 250rpx;width: 250rpx;border-radius: 50%;"
							src="/static/logo.png" mode="scaleToFill" @click="chooseSex(2)"></image>
						<image
							style="position: relative;height: 20px;width: 20px;border-radius: 50%;top: -30rpx;left: -35rpx;"
							:src="getRefreshPic(2)" mode="scaleToFill"></image>
						<view :style="'position: relative;width: 250rpx;text-align: center;color:'+getSexFontColor(2)">
							女</view>
					</view>
				</view>
			</view>

			<view class="form" style="position: relative;top: 60px;">
				<view class="form-name">
					<view class="form-name-item" :style="'color:'+['#000000','#548CFF','#FF743C'][sex_select]+';'">姓名
					</view>
					<view :class="'form-name-input_'+String(sex_select)">
						<input style="position: relative;font-size: 20px;text-align: center; width: 100%;top: 13px;"
							type="text" @input="inputName" />
					</view>
					<view class="form-name-pic">
						<image style="position: relative;height: 20px;width: 20px; "
							:src="input_name==='' ? '/static/fill_no.png':'/static/fill_ok.png'" mode="scaleToFill">
						</image>
					</view>
				</view>

				<view style="position: relative;height: 30px;width: 10px;"></view>

				<view class="form-name">
					<view class="form-name-item" :style="'color:'+['#000000','#548CFF','#FF743C'][sex_select]+';'">生日
					</view>
					<view :class="'form-name-input_'+String(sex_select)">
						<picker mode="date" @change="chooseData">
							<input
								style="position: relative;font-size: 20px;text-align: center; width: 100%;left: 0%;top: 13px;"
								type="text" :value="input_birth" disabled />
						</picker>
					</view>
					<view class="form-name-pic">
						<image style="position: relative;height: 20px;width: 20px; "
							:src="input_birth==='' ? '/static/fill_no.png':'/static/fill_ok.png'" mode="scaleToFill">
						</image>
					</view>
				</view>

				<view style="position: relative;height: 30px;width: 10px;"></view>

				<view class="form-name">
					<view class="form-name-item" :style="'color:'+['#000000','#548CFF','#FF743C'][sex_select]+';'">电话
					</view>
					<view :class="'form-name-input_'+String(sex_select)">
						<input
							style="position: relative;font-size: 20px;text-align: center; width: 100%;left: 0%;top: 13px;"
							type="tel" @input="inputPhone" />
					</view>
					<view class="form-name-pic">
						<image style="position: relative;height: 20px;width: 20px; "
							:src="input_phone_check ? '/static/fill_ok.png':'/static/fill_no.png'" mode="scaleToFill">
						</image>
					</view>
				</view>
			</view>

			<view class="next">
				<image style="position: relative;width: 180rpx;height: 90rpx;" mode="scaleToFill"
					:src="'/static/next_'+getNextPic()+'.png'">
				</image>
			</view>
			
		</view>
	</view>
</template>

<script>
	import {
		watch
	} from 'vue';

	export default {
		data() {
			return {
				sex_select: 0, // [none，男，女]
				input_name: "",
				input_birth: "",
				input_phone: "",
				input_phone_check: false
			}
		},
		onLoad() {
			watch(this.sex_select, (old_, new_) => {
				console.log(old_, new_)
			})

		},
		methods: {
			getSexFontColor(idx) {
				if (this.sex_select === 0) {
					return "#7E7E7E"
				}
				if (this.sex_select === 1) {
					return idx === 1 ? "#548CFF" : "#7E7E7E"
				}
				if (this.sex_select === 2) {
					return idx === 1 ? "#7E7E7E" : "#FF743C"
				}
			},
			chooseSex(idx) {
				this.sex_select = idx
				uni.setNavigationBarColor({
					backgroundColor: ["#DBDBDB", "#A6BEED", "#FFC9C9"][this.sex_select],
					frontColor: "#ffffff"
				})
			},
			getRefreshPic(idx) {
				if (this.sex_select === 0) {
					return "/static/refresh_0.png"
				}
				if (this.sex_select === 1) {
					return idx === 1 ? "/static/refresh_1.png" : "/static/refresh_0.png"
				}
				if (this.sex_select === 2) {
					return idx === 1 ? "/static/refresh_0.png" : "/static/refresh_2.png"
				}
			},
			getBorderClassNum(idx) {
				if (this.sex_select === 0) {
					return 0
				}
				if (this.sex_select === 1) {
					return idx === 1 ? 1 : 0
				}
				if (this.sex_select === 2) {
					return idx === 1 ? 0 : 2
				}
			},
			inputName(s) {
				s = s.detail.value
				this.input_name = s
			},
			chooseData(s) {
				console.log(s)
				this.input_birth = s.detail.value
			},
			checkPhoneNumber(phoneNumber) {
				let reg = /^1[3-9]\d{9}$/;
				return reg.test(phoneNumber);
			},
			inputPhone(s) {
				this.input_phone = s.detail.value
				this.input_phone_check = this.checkPhoneNumber(this.input_phone)
			},
			getNextPic() {
				if (this.sex_select == 0) {
					return 0
				}
				if (this.sex_select == 1 && this.input_birth !== "" && this.input_name != "" && this.input_phone_check) {
					return 1
				}
				if (this.sex_select == 2 && this.input_birth !== "" && this.input_name != "" && this.input_phone_check) {
					return 2
				}
				return 0
			}
		}
	}
</script>

<style>
	.content_0 {
		position: absolute;
		height: 100%;
		width: 100%;
		background: linear-gradient(to bottom, rgba(219, 219, 219, 1) 0%, rgba(255, 255, 255, 1) 60%);
	}

	.content_1 {
		position: absolute;
		height: 100%;
		width: 100%;
		background: linear-gradient(to bottom, rgba(166, 190, 237, 1) 0% 0%, rgba(255, 255, 255, 1) 60%);
	}

	.content_2 {
		position: absolute;
		height: 100%;
		width: 100%;
		background: linear-gradient(to bottom, rgba(255, 201, 201, 1) 0% 0%, rgba(255, 255, 255, 1) 60%);
	}


	.avatar_class {}

	.avatar {
		position: relative;
		height: 250rpx;
		width: 600rpx;
		left: 75rpx;
		display: flex;
		justify-content: space-between;
	}

	.avatar_0 {
		position: relative;
	}

	.avatar_1 {
		position: relative;
	}

	.avatar_2 {
		position: relative;
	}

	.avatar_image_0 {

		border-radius: 50%;
		border-style: solid;
		border-color: #7E7E7E;

	}

	.avatar_image_1 {
		border-radius: 50%;
		border-style: solid;
		border-color: #548CFF;
	}

	.avatar_image_2 {
		border-radius: 50%;
		border-style: solid;
		border-color: #FF743C;
	}

	.form {
		position: relative;
		top: 60px;
	}

	.form-name {
		position: relative;
		height: 50px;
		width: 70%;
		left: 15%;
		position: relative;
		display: flex;
		justify-content: space-between;
		/* background-color: aqua; */
	}

	.form-name-item {
		font-size: 20px;
		font-weight: 700;
		line-height: 50px;
	}

	.form-name-input_0 {
		position: relative;
		height: 50px;
		width: 330rpx;
		/* background-color: blueviolet; */
		border-radius: 30px;
		border-color: #000000;
		border-style: solid;
		border-width: 1px;
	}

	.form-name-input_1 {
		position: relative;
		height: 50px;
		width: 330rpx;
		/* background-color: blueviolet; */
		border-radius: 30px;
		border-color: #548CFF;
		border-style: solid;
		border-width: 1px;
	}

	.form-name-input_2 {
		position: relative;
		height: 50px;
		width: 330rpx;
		/* background-color: blueviolet; */
		border-radius: 30px;
		border-color: #FF743C;
		border-style: solid;
		border-width: 1px;
	}

	.form-name-pic {
		position: relative;
		top: 15px;
		/* left: 10px; */
	}

	.next {
		position: fixed;
		top: 80%;
		left: 65%;
	}
</style>