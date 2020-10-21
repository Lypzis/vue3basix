const app = Vue.createApp({
	data() {
		return {
			alertText: 'Shreksophone!',
			someText: '',
			someOtherText: '',
			confirmedText: '',
		};
	},
	methods: {
		showAlert() {
			alert(this.alertText);
		},
		changeText(event) {
			this.someText = event.target.value;
		},
		changeOtherText(event) {
			this.someOtherText = event.target.value;
		},
		confirmText() {
			this.confirmedText = this.someOtherText;
		},
	},
});

app.mount('#assignment');
