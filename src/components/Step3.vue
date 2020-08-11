<template>
  <div id="step3">
    <transition appear>
      <div>
        <div>STEP3</div>
        <div>ご相談内容をご記入ください</div>
        <p>-ご相談内容-</p>
        <textarea v-model="consultationContent"></textarea>
        <p>
          <button v-on:click="prevQuestion">前へ戻る</button>
          <button v-on:click="nextQuestion">次へ進む</button>
        </p>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'Step3',
  data: function() {
    return {
      consultationContent: this.$store.state.consultationContent,
    }
  },
  methods: {
    prevQuestion: function() {
      this.$store.commit('setStateStep3', {
        consultationContent: this.consultationContent
      });
      this.$router.push('/step2');
    },
    nextQuestion: function() {
      this.$store.commit('setStateStep3', {
        consultationContent: this.consultationContent
      });
      alert('実装していないため、次に進むことができません。');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
textarea {
  width: 400px;
  height: 300px;
}
/* 現れている最中は、0.9秒 */
.v-enter-active {
  transition: 0.9s;
}
/* 現れる前の状態は、透明度0*/
.v-enter {
  opacity: 0;
}
</style>
