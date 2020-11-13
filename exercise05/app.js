const app = Vue.createApp({
	data() {
		return {
			aTask: '',
			tasks: [],
			showList: true,
		};
	},
	methods: {
		addTask() {
			this.tasks.unshift(this.aTask);
			this.aTask = '';
		},
		toggleShowList() {
			this.showList = !this.showList;
		},
	},
});

app.mount('#assignment');
