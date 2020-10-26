const app = Vue.createApp({
	data() {
		return {
			counter: 0,
			name: '',
			lastName: '',
			//fullname: '',
		};
	},
	watch: {
		counter(value) {
			if (value > 50) {
				const that = this;

				setTimeout(function () {
					that.counter = 0;
				}, 2000);
			}
		},
		// data or computed name to watch
		// could accept two values by default, new and old value
		// name(value) {
		// 	if (value.trim() !== '')
		// 		this.fullname = value + ' ' + this.lastName;
		// 	else this.fullname = '';
		// },
		// lastName(value) {
		// 	if (value.trim() !== '') this.fullname = this.name + ' ' + value;
		// 	else this.fullname = '';
		// },
	},
	computed: {
		fullname() {
			if (this.name.trim() === '' || this.lastName.trim() === '')
				return '';

			return this.name + ' ' + this.lastName;
		},
	},
	methods: {
		setName(event, lastName) {
			this.name = event.target.value;
		},
		add(num) {
			this.counter = this.counter + num;
		},
		reduce(num) {
			this.counter = this.counter - num;
			// this.counter--;
		},
		outputFullName() {
			if (this.name.trim() !== '') return this.name + ' ' + 'Piccoli';
			else return '';
		},
		resetInput() {
			this.name = '';
		},
	},
});

app.mount('#events');
