<template>
	<!-- <theme> -->
	<view class="login">
		<view class="login__logo">
			<image class="image" :src="config.logo" mode=""></image>
		</view>
		<view class="show-text">
			{{ showText }}
		</view>
		<view class="login__form">
			<u-form labelPosition="left" :model="form" :rules="rules" ref="formRef" labelWidth="0">
				<u-form-item label="" prop="phone" class="formItem">
					<u-input v-model="form.phone" placeholder="请输入手机号" border="none" fontSize="28rpx" color="#AAAAAA"></u-input>
				</u-form-item>
				<u-form-item label="" prop="password" class="formItem" style="margin-top: 30rpx">
					<u-input v-model="form.password" placeholder="请输入验证码" border="none" fontSize="28rpx" color="#AAAAAA">
						<template #suffix>
							<u-button class="btn-text" color="#4FACFD4d" @click="getCodeHandler">{{ tips }}</u-button>
						</template>
					</u-input>
				</u-form-item>
			</u-form>
		</view>
	</view>
	<button class="ymBtn" @click="submit">登录</button>
	<u-code :seconds="seconds" start-text="获取验证码" change-text="X秒重新获取" end-text="重新获取" ref="uCodeRef" @change="codeChange"></u-code>
	<!-- </theme> -->
</template>

<script setup>
import { ref } from 'vue';
import config from '@/config.js';
import { onShow } from '@dcloudio/uni-app';
import { regMobile } from '@/utils/reg-exp.js';
import useUserStore from '@/store/modules/user.js';
import useTabbarStore from '@/store/modules/tabbar';
const tabbarStore = useTabbarStore();
const userStore = useUserStore();
let timer;
const showText = ref('');
const tips = ref('');
const seconds = ref(60);
const formRef = ref();
const form = ref({
	phone: '',
	password: ''
});
const uCodeRef = ref();
onShow(() => {
	appear('你好，我是 菜包 ');
});
const codeChange = (text) => {
	tips.value = text;
};
const rules = ref({
	phone: [
		{
			required: true,
			message: '请输入手机号码',
			trigger: ['blur']
		},
		{
			validator: (rule, value, callback) => {
				if (regMobile.test(value)) {
					return callback();
				}
				callback(new Error('请输入正确的手机号码'));
			},
			message: '',
			trigger: ['change', 'blur']
		}
	],
	password: {
		len: 6,
		required: true,
		message: '请输入6位验证码',
		trigger: ['change', 'blur']
	}
});
const appear = (content) => {
	showText.value = '';
	clearTimeout(timer);
	let speed = 50;
	let count = 1;
	function changeContent() {
		showText.value = content.substring(0, count);
		count++;
		if (count != content.length) {
			speed -= 1;
			if (speed < 5) speed = 5;
			timer = setTimeout(changeContent, speed);
		}
	}
	changeContent();
};
const getCodeHandler = () => {
	if (!regMobile.test(form.value.phone)) {
		return toast('请输入正确的手机号码');
	}
	if (uCodeRef.value.canGetCode) {
		uCodeRef.value.start();
	}
};

const submit = () => {
	formRef.value
		.validate()
		.then((valid) => {
			if (valid) {
				userStore
					.logOn(form.value)
					.then(() => {
						loginSuccess();
					})
					.catch(() => {});
			}
		})
		.catch((err) => {
			console.log('err----->', err);
		});
};
const loginSuccess = () => {
	userStore.getInfo().then(() => {
		uni.reLaunch({
			url: '/pages/index/index',
			success: (res) => {
				tabbarStore.setCurrent(0);
			}
		});
	});
};
</script>
<style lang="scss">
page {
	padding: 0 40rpx;
	box-sizing: border-box;
}
</style>
<style scoped lang="scss">
.login {
	&__logo {
		padding-top: 100rpx;
		width: 400rpx;
		height: 400rpx;
		margin: 0rpx auto;
	}
	&__form {
	}
}
.show-text {
	@include q_font_style(60rpx, 500);
}
.ymBtn {
	background: linear-gradient(180deg, #4facfd 0%, #00f2fd 100%);
	border-radius: 42rpx;
	font-size: 32rpx;
	font-weight: 400;
	color: #ffffff;
	flex: 1;
	margin-top: 40rpx;
}
.btn-text {
	@include q_font_style(22rpx, #4facfd !important, 400);
	border: none !important;
	height: 48rpx;
}
.formItem {
	background: #4facfd1f;
	border-radius: 20rpx;
}
:deep(.u-input__content__subfix-icon) {
	margin-right: 28rpx;
}
:deep(.u-input__content__field-wrapper) {
	margin-left: 24rpx;
}
</style>
