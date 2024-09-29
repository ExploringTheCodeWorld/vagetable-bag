<template>
	<view style=" box-sizing: border;overflow: hidden;">
		<u-navbar :placeholder="true" :safeAreaInsetTop="true" :auto-back="false">
			<template #left>
				<u-icon name="arrow-left" size="20" @click="backHandler"></u-icon>
				<view class="navbar-wrap">
					<view class="navbar-wrap__img">
						<image class="image" :src="modelData.modelImage" mode=""></image>
					</view>
					<view class="navbar-wrap__content">
						<view class="navbar-wrap__content__name">{{ modelData.modelName }}</view>
						<view class="navbar-wrap__content__auth">@{{ modelData.creatorName }}</view>
					</view>
				</view>
			</template>
			<template #right>
				<view class="navbar-wrap__dot" @click="dotClickHandler">
					<image class="image" src="/static/images/dot.png" mode=""></image>
				</view>
			</template>
		</u-navbar>
		<scroll-view class="chat-wrap scrollView" :style="{height:styleHeight,...backgroundStyle()}" :scroll-y="true" :scroll-top="scrollTop" :scroll-into-view="scrollIntoViewId" ref="scrollView">
			<view class="chat-wrap__default scrollItem">
				<view class="chat-wrap__default__img">
					<image class="image" :src="modelData.modelImage" mode=""></image>
				</view>
				<view class="chat-wrap__default__description">
					{{ modelData.prologue }}
				</view>
			</view>
			<template v-for="(item, index) in historyList" :key="item.id">
				<view class="chat-wrap__ai scrollItem" v-if="item.role == 'assistant'">
					<view class="chat-wrap__ai__content chat--content">
						<!-- {{ item.message }} -->
						<ua-markdown :source="item.message" />
					</view>
				</view>
				<view class="chat-wrap__user scrollItem" v-if="item.role == 'user'">
					<view class="chat-wrap__user__content chat--content">
					<!-- {{ item.message }} -->
					<ua-markdown :source="item.message" />
					</view>
				</view>
			</template>
				<!-- 占位！ -->
				<!-- #ifdef APP -->
				<view style="height: 200rpx " class="scrollItem" ></view>
				<!-- #endif -->
				<!-- #ifndef APP -->
				
				<view style="height: 130rpx " class="scrollItem" ></view>
				<!-- #endif -->
				
		</scroll-view>
		<fetch-chat :url="fetchOptions.url" :options="fetchOptions.options" ref="fetchChatRef" @callback="fetchChatCallbackHandler"></fetch-chat>
	</view>
	<view class="chat-input">
		<u-input placeholder="" border="surround" v-model="form.send" :customStyle="customStyle">
			<template #suffix>
				<view @click="btnClickMessage" class="chat-input__send"><image class="image" src="/static/images/send.png" mode=""></image></view>
			</template>
		</u-input>
	</view>
	<delete-dialog ref="deleteDialogRef" @update="updateHistoryHandler"></delete-dialog>
</template>

<script setup>
import { computed, getCurrentInstance, ref, nextTick } from 'vue';
import { onLoad } from '@dcloudio/uni-app';
import fetchChat from './fetchChat.vue';
import config from '@/config.js';
import { getToken } from '@/utils/auth.js';
import { chatHistory,detailModel } from '@/api/index/index.js';
import useUserStore from '@/store/modules/user';
import {sleep} from '@/utils/common.js'
import deleteDialog from './deleteDialog.vue'
import useTabbarStore from '@/store/modules/tabbar';
const tabbarStore = useTabbarStore()
const userStore = useUserStore();
const userInfo = computed(() => userStore.userInfo);
const fetchChatRef = ref();
const { proxy } = getCurrentInstance();
const eventChannel = proxy.getOpenerEventChannel();
const form = ref({});
const modelData = ref({});
const queryParams = ref({
	modelId: undefined
});
const deleteDialogRef = ref()
const styleHeight = ref('')
const scrollIntoViewId = ref('');
const fetchOptions = computed(() => {
	return {
		url: config.base_url + '/ai/chat/' + modelData.value.modelId,
		options: {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${getToken()}`
			},
			body: JSON.stringify({
				message: form.value.send
				// detail: false,
				// stream: true
			})
		}
	};
});
const historyList = ref([]);
const total = ref(0);
const msg = ref('');
const scrollTop = ref(0);
onLoad((options) => {
	console.log('$devices',proxy.$devices);
	styleHeight.value = proxy.$devices.windowHeight - 50 + 'px'
	// 
	if(options.modelId){
		detailModel(options.modelId).then(res=>{
			console.log('res',res);
			res.data.modelImage = config.image_url + res.data.modelImage;
			if(res.data.enableBackground){
				res.data.backgroundImage = config.image_url + res.data.backgroundImage
			}
			modelData.value = res.data
			
			fetchOptions.value.url = config.base_url + '/ai/chat/' + res.data.modelId;
			queryParams.value.modelId = res.data.modelId
			getHistoryList();
		})
	}
});
const backgroundStyle = ()=>{
	if(modelData.value){
		return {
			backgroundImage:`url(${modelData.value.backgroundImage})`
		}
	}else{
		return {
			backgroundColor:'#fff'
		}
	}
	
}
const dotClickHandler = ()=>{
	deleteDialogRef.value.openDialog(modelData.value)
}
const customStyle = {
	boxShadow: '4rpx 4rpx 8px rgba(0, 0, 0, 0.3)',
	backgroundColor:'#fff',
};

const getHistoryList = () => {
	chatHistory(queryParams.value).then((res) => {
		console.log('res', res);
		historyList.value = res.data;
		scrollBottom();
	});
};
const fetchChatCallbackHandler = (data) => {
	const { type } = data;

	switch (type) {
		case 'open':
			msg.value = '';
			historyList.value.push({
				id: +new Date(),
				role: 'assistant',
				message: ''
			});
			break;
		case 'message':
			msg.value += data.data;
			historyList.value = historyList.value.map((item, index) => {
				if (index === historyList.value.length - 1) {
					return {
						...item,
						message: msg.value
					};
				}
				return item;
			});
			scrollBottom()
			break;
		case 'end':
			scrollBottom()
			console.log('结束！');
			break;
		case 'error':
			console.log('出错！');
			break;
		case 'tips':
			break;
		default:
			break;
	}
};
const backHandler = async ()=>{
	const pages = getCurrentPages();
	const page = pages[pages.length - 2];
	const route = '/' + page.route;
	console.log('route',route);
	const isTabbarPageFlag = await tabbarStore.findPage(route);
	
	console.log('isTabbarPageFlag',isTabbarPageFlag);
	const url = isTabbarPageFlag ? route : '/pages/index/index'
	uni.reLaunch({
		url:url,
	});
}
const updateHistoryHandler = ()=>{
	getHistoryList()
}
const btnClickMessage = async() => {
	console.log('form。value', form.value);
	historyList.value.push({
		id: +new Date(),
		role: 'user',
		message: form.value.send
	});
	fetchChatRef.value.send();
	await sleep(500)
	form.value.send = ''
	scrollBottom()
};

const updateScrollTop = () => {
	const query = uni.createSelectorQuery().in();
	query.selectAll('.scrollItem').boundingClientRect();
	query.select('.scrollView').boundingClientRect();
	query.exec((res) => {
		let totalHeight = 0;
		if (res.length > 1) {
			res[0].forEach((item) => {
				totalHeight += item.height;
			});
			if (totalHeight > res[1].height) {
				scrollTop.value = totalHeight - res[1].height;
			}
			scrollTop.value = parseInt(scrollTop.value) + 10000
		}
	});
};
const scrollBottom = () => {
	nextTick(() => {
		updateScrollTop();
	});
	
};
</script>
<style lang="scss">
	page{
		overflow: hidden;
	}
</style>
<style scoped lang="scss">
.navbar-wrap {
	@include q_flex(flex-start);
	margin-left: 40rpx;
	&__img {
		width: 40rpx;
		height: 40rpx;
		border-radius: 50%;
		overflow: hidden;
	}
	&__content {
		margin-left: 20rpx;
		&__name {
			@include q_font_style(24rpx, 600, #000);
		}
		&__auth {
			@include q_font_style(20rpx, 400, #9b9b9b);
		}
	}
	&__dot{
		width: 54rpx;
		height: 40rpx;
	}
}
.chat-wrap {
	box-sizing: border-box;
	background-repeat: no-repeat;
	background-size: 100% 100%;
	padding: 0 40rpx;
	width: 100%;
		&__default {
		@include q_flex(flex-start, center);
		flex-direction: column;

		&__img {
			width: 300rpx;
			height: 300rpx;
			border-radius: 50%;
			overflow: hidden;
		}
		&__description {
			background-color: #f5f5f5;
			padding: 20rpx;
			border-radius: 20rpx;
			margin-top: 20rpx;
			color: #000;
		}
	}
	&__ai {
		&__content {
			background-color: #f5f5f5;
			color: #000;
		}
	}
	&__user {
		&__content {
			background-color: #0166fe;
			color: #fff;
			// text-decoration: underline;
		}
	}
}
.chat--content {
	padding: 20rpx;
	border-radius: 20rpx;
	margin-top: 20rpx;
}
.chat-input {
	position: fixed;
	bottom: 0rpx;
	background-color: transparent;
	display: flex;
	width: 100%;
	padding: 20rpx 40rpx;
	box-sizing: border-box;
	&__send {
		width: 40rpx;
		height: 40rpx;
	}
}
</style>
