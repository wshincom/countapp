new Vue({
  el: '#countLenth',
  data: {
    sentence_length: "",
  },
  methods: {
    getLenth() {
      const sentence = this.sentence_length.length;
      return sentence;
    },
  },
});