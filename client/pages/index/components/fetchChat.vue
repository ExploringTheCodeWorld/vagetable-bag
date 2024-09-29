<template>
	<view id="fetchEvent" class="fetchEvent" v-show="false" :props="mergeProps" :change:props="fetchEvent.propsChange"></view>
</template>

<script>
export default {
	data() {
		return {
			isSend: false
		}
	},
	props: {
		url: {
			type: String,
			default: ''
		},
		options: {
			type: Object,
			default: () => ({})
		},
		isSSEClose: {
			type: Boolean,
			default: false
		}
	},
	computed: {
		mergeProps({ url, options, isSend }) {
			return {
				url,
				options,
				isSend
			};
		}
	},
	methods: {
		send() {
			this.isSend = true;
			this.$nextTick(() => {
				this.isSend = false;
			});
		},
		dataSource(data) {
			this.$emit('callback',data)
			// console.log('------------data>', data);
		}
	}
};
</script>
<script module="fetchEvent" lang="renderjs">
import {fetchSource} from '../../../utils/fetchSource.js'


export default {
	data(){
		return{
			controller:null
		}
	},
	methods:{
		propsChange(opt){
			const {url,isSend} = opt || {}
			if(!url)return this.emits({ type: "tips", msg: "URL cannot be empty." });
			if(!isSend) return
			this.fetchFlow(opt)
		},
		fetchFlow(fetchOptions){
			const _this = this
			this.controller = new AbortController()
			const { url, options = {} } = fetchOptions || {};
			fetchSource(url,{
				...options,
				signal:this.controller.signal,
				onOpen:()=>{
					this.emits({type:'open',msg:'EventSource onOpen'})
				},
				onMessage:(data)=>{
					// console.log('data--->',data);
					this.emits({type:'message',msg:'EventSource onMessage',data,})
				},
				onEnd:()=>{
					this.emits({type:'end',msg:'EventSource onEnd'})
				},
				onError:(error)=>{
					console.log('error',error);
					this.emits({type:'error',msg:'EventSource onError',data:JSON.stringify(error)})
					 // this.controller?.abort()
				}
			})
		},
		emits(data){
			this.$ownerInstance.callMethod('dataSource', data);
		},
		closeSSE(){
			this.controller?.abort()
		}
	}
}
</script>
<style scoped lang="scss"></style>
