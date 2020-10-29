const app = Vue.createApp({
	data() {
		return {
			counter: 0,
		};
	},
	watch: {
		counter() {
			setTimeout(() => {
				this.counter = 0;
			}, 5000);
		},
	},
	computed: {
		result() {
			if (this.counter < 37) return 'Not there yet';
			else if (this.counter > 37) return 'Too much!';
			else return 37;
		},
	},
	methods: {
		add(number) {
			this.counter += number;
		},
	},
});

app.mount('#assignment');
