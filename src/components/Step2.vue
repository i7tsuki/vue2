<template>
  <div id="step2">
    <transition appear>
      <div>
        <div>STEP2</div>
        <div>以下にお答えください</div>
        <p>現在、生命保険に加入されていますか？</p>
        <label><input type="radio" name="having-life-insurance" value="yes" v-model="havingLifeInsurance">はい</label>
        <label><input type="radio" name="having-life-insurance" value="no" v-model="havingLifeInsurance">いいえ</label>
        <transition>
          <div v-if="havingLifeInsurance">
            <p>現在入院中ですか。または、最近3ヵ月以内に医師の診察・検査の結果、入院・手術をすすめられたことはありますか？</p>
            <label><input type="radio" name="hospitalization" value="yes" v-model="hospitalization">はい</label>
            <label><input type="radio" name="hospitalization" value="no" v-model="hospitalization">いいえ</label>
          </div>
        </transition>
        <transition>
          <div v-if="hospitalization">
            <p>過去5年以内に、病気やけがで、手術をうけたことまたは継続して7日以上の入院をしたことがありますか？</p>
            <label><input type="radio" name="last-five-years" value="yes" v-model="lastFiveYears">はい</label>
            <label><input type="radio" name="last-five-years" value="no" v-model="lastFiveYears">いいえ</label>
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
      havingLifeInsurance: this.$store.state.havingLifeInsurance,
      hospitalization: this.$store.state.hospitalization,
      lastFiveYears: this.$store.state.lastFiveYears,
    }
  },
  methods: {
    setState: function() {
      this.$store.state.havingLifeInsurance = this.havingLifeInsurance;
      this.$store.state.hospitalization = this.hospitalization;
      this.$store.state.lastFiveYears = this.lastFiveYears;
    },
    prevQuestion: function() {
      this.setState();
      this.$router.push('/step1')
    },
    nextQuestion: function() {
      this.setState();
      this.$router.push('/step3')
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
