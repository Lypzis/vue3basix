const app = Vue.createApp({
	data() {
		return {
			style1: '',
			background: '',
			visible: true,
		};
	},
	computed: {
		toggledAboveParagraph() {
			return this.visible ? { visible: true } : { hidden: true };
		},
	},
	methods: {
		toggleAboveParagraph() {
			this.visible = !this.visible;
		},
		onInputFirst(event) {
			this.style1 = event.target.value;
		},
		onInputSecond(event) {
			this.background = `background-color: ${event.target.value}`;
		},
	},
});

app.mount('#assignment');
