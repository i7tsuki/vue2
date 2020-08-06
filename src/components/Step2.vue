<template>
  <div id="step2">
    <transition appear>
      <div>
        <div>STEP2</div>
        <div>以下にお答えください</div>
        <p>現在、生命保険に加入されていますか？</p>
        <label><input type="radio" name="life-insurance" value="yes" v-model="isHospital">はい</label>
        <label><input type="radio" name="life-insurance" value="no" v-model="isHospital">いいえ</label>
        <transition>
          <div v-if="isHospital">
            <p>現在入院中ですか。または、最近3ヵ月以内に医師の診察・検査の結果、入院・手術をすすめられたことはありますか？</p>
            <label><input type="radio" name="hospitalization" value="yes" v-model="isLastFiveYears">はい</label>
            <label><input type="radio" name="hospitalization" value="no" v-model="isLastFiveYears">いいえ</label>
          </div>
        </transition>
        <transition>
          <div v-if="isLastFiveYears">
            <p>過去5年以内に、病気やけがで、手術をうけたことまたは継続して7日以上の入院をしたことがありますか？</p>
            <label><input type="radio" name="last-five-years" value="yes">はい</label>
            <label><input type="radio" name="last-five-years" value="no">いいえ</label>
          </div>
        </transition>
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
  name: 'Step2',
  data: function() {
    return {
      isHospital: false,
      isLastFiveYears: false
    }
  },
  methods: {
    prevQuestion: function() {
      this.$store.commit('StepNumDecrement');
    },
    nextQuestion: function() {
      this.$store.commit('StepNumIncrement');
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
/* 現れている最中は、0.9秒 */
.v-enter-active {
  transition: 0.9s;
}
/* 現れる前の状態は、透明度0*/
.v-enter {
  opacity: 0;
}
</style>
