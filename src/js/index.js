import Vue from "vue";

new Vue({
  el: '#app',
  data: {
    number: 0,
    result: 0
  },
  methods: {
    onKeyup: function(){
      this.result = Math.floor(this.number / Math.sqrt(2));
    }
  }
});