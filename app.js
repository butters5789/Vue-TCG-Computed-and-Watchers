const { createApp } = Vue;

const vueApp = createApp({
	data() {
		return {
			count: 0,
		};
	},
	computed: {
		display() {
			if (this.count > 37) {
				return 'Too much!';
			}

			if (this.count < 37) {
				return 'Not there yet';
			}

			return this.count;
		},
	},
	methods: {
		add(number) {
			this.count = this.count + number;
		},
	},
	watch: {
		display() {
			const that = this;

			setTimeout(() => {
				that.count = 0;
			}, 5000);
		},
	},
});

vueApp.mount('#assignment');
