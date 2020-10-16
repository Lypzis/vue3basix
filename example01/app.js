Vue.createApp({
	data() {
		return {
			goals: [],
			enteredValue: '',
		};
	},
	methods: {
		addGoal() {
			this.goals.unshift(this.enteredValue);
			this.enteredValue = '';
		},
	},
}).mount('#app');
