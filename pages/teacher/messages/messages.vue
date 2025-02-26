<template>
	<view class="content"
		:style="'background: linear-gradient(to bottom,'+ status_colors[status_index]+ ', #F0F0F0 50%, #F0F0F0 50%);'">
		<view class="tab">
			<view :class="status_index==1? 'opt button_style_1':'opt button_style_0'" @click="status_index=0">
				公告
			</view>
			<view :class="status_index==0? 'opt button_style_1':'opt button_style_0'" @click="status_index=1">
				其它
			</view>
		</view>

		<view>
			<view class="notice-list" v-for="(item,index) in msg_list[status_index==0?'notice':'other']">
				<view class="notice-item" @click="open(item)">
					<image class="notice-icon"
						:src="status_index==0?'/static/notice_icon.png':'/static/notice_icon2.png'" mode="scaleToFill">
					</image>
					<view class="notice-info">
						<view class="notice-title">
							{{item.title}}
						</view>
						<view class="notice-msg">
							{{item.msg}}
						</view>
					</view>
					<image class="notice-unfold" src="/static/notice_unfold.png" mode="scaleToFill"></image>
				</view>
			</view>
		</view>
		<uni-popup ref="popup" type="bottom" border-radius="10px 10px 10px 10px">
			<view
				style="position: relative; min-height: 300rpx; background-color: #FFFFFF; width: 88%;left: 6%;top: 20rpx;border-radius: 30rpx;">
				<view style="position: relative;width: 100%;text-align: center;font-weight: 600; font-size: 35rpx;top: 10rpx;">详情
				</view>
				<view style="position: relative;width: 90%;left: 5%;top: 15rpx; margin-bottom: 25rpx;">
					{{show_msg}}
				</view>
			</view>
			<view style="position: relative;width: 100%;height: 30px;"></view>
		</uni-popup>
	</view>
</template>

<script>
	import {
		watch
	} from 'vue';

	export default {
		data() {
			return {
				status_colors: ["#A6BEED", "#F7EFCB"],
				status_index: 0,
				msg_list: [],
				show_msg: "阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴"

			}
		},
		onLoad() {
			watch(this.status_index, (n) => {
				console.log(n)
			})
			this.demoList()
		},
		watch: {
			status_index: {
				handler(newValue, oldValue) {
					uni.setNavigationBarColor({
						backgroundColor: this.status_colors[this.status_index],
						frontColor: "#ffffff"
					})
				},
				immediate: true
			}
		},
		methods: {
			demoList() {
				this.msg_list = {
					"notice": [{
							"date": "3",
							"msg": "阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴",
							"title": "公告",
							"unfold": false
						},
						{
							"date": "3",
							"msg": "阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴",
							"title": "公告",
							"unfold": false
						},
						{
							"date": "3",
							"msg": "阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴",
							"title": "公告",
							"unfold": false
						}
					],
					"other": [{
							"date": "3",
							"msg": "阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴",
							"title": "公告其他测试消息",
							"unfold": false
						},
						{
							"date": "3",
							"msg": "阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴",
							"title": "其他测试消息",
							"unfold": false
						},
						{
							"date": "3",
							"msg": "阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴",
							"title": "其他测试消息",
							"unfold": false
						},
						{
							"date": "3",
							"msg": "阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴",
							"title": "其他测试消息",
							"unfold": false
						}, {
							"date": "3",
							"msg": "阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴",
							"title": "其他测试消息",
							"unfold": false
						}
					]
				}
			},

			open(item) {
				console.log(item)
				this.show_msg = item.msg
				this.$refs.popup.open()
			}

		}
	}
</script>

<style>
	.content {
		position: absolute;
		height: 100%;
		width: 100%;
		background: linear-gradient(to bottom, #F7EFCB, #F0F0F0 50%, #F0F0F0 50%);
	}

	.tab {
		position: relative;
		width: 660rpx;
		left: 6%;
		height: 70rpx;
		top: 50rpx;
		display: flex;
		/* background-color: blueviolet; */
	}

	.opt {
		position: relative;
		height: 70rpx;
		width: 180rpx;
		/* background-color: aquamarine; */
		line-height: 70rpx;
		text-align: center;
		font-size: 30rpx;
		color: white;
		margin-right: 50rpx;
		border-radius: 35rpx;
		background-color: #548CFF;
	}

	.notice-list {
		position: relative;
		width: 660rpx;
		left: 6%;
		top: 100rpx;
		background-color: #FDFDFD;
		border-radius: 35rpx;
		margin-bottom: 30rpx;
	}

	.notice-item {
		position: relative;
		display: flex;
		width: 660rpx;
		height: 150rpx;
		left: 30rpx;
	}

	.notice-icon {
		position: relative;
		width: 100rpx;
		height: 100rpx;
		top: 25rpx;
	}

	.notice-info {
		position: relative;
		left: 30rpx;
		width: 450rpx;
		height: 150rpx;
	}

	.notice-title {
		position: relative;
		top: 30rpx;
		font-weight: 400;
		font-size: 35rpx;
	}

	.notice-msg {
		position: relative;
		top: 40rpx;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		font-weight: 300;
		font-size: 30rpx;
	}

	.notice-msg-unfold {
		position: relative;
		top: 40rpx;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		font-weight: 300;
		font-size: 30rpx;
	}

	.notice-unfold {
		position: relative;
		height: 40rpx;
		width: 40rpx;
		top: 55rpx;
		left: 25rpx;
	}

	.button_style_0 {
		background-color: #548CFF;
		color: #E5EEFF;
	}

	.button_style_1 {
		background-color: #E5EEFF;
		color: #548CFF;
	}
</style>