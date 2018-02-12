	var app = new Vue({

	    el: '#root',

	    data: {

	        newTask: '',

	        tasks: []

	    },

	    methods: {

	        addTask() {

	            this.tasks.push(this.newTask);

	            this.newTask = '';

	        }

	    }

	})