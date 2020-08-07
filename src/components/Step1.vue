<template>
  <div id="step1">
    <div>STEP1</div>
    <div>お客様の情報を入力してください</div>
    <p>-性別-</p>
    <label><input type="radio" name="gender" value="male" v-model="gender">男性</label>
    <label><input type="radio" name="gender" value="female" v-model="gender">女性</label>
    <p>-生年月日-</p>
    <select v-model="inputYear">
      <option v-for="item in years" v-bind:key="item.key">{{ item[1] }}</option>
    </select>年
    <select v-model="inputMonth">
      <option v-for="item in 12" v-bind:key="item">{{ item }}</option>
    </select>月
    <select v-model="inputDay">
      <option v-for="item in days" v-bind:key="item">{{ item }}</option>
    </select>日
    <p><button v-on:click="nextQuestion">次へ進む</button></p>
  </div>
</template>

<script>
export default {
  name: 'Step1',
  data: function() {
    //年
    let yearData = new Map();
    let japaneseCalendar;
    for (let i = new Date().getFullYear()-100; i <= new Date().getFullYear(); i++) {
      if (Number(i) > 2018) {  //2019年から令和とする
        japaneseCalendar = '年（令和' + String(Number(i) - 2018) + '）';
      } else if (Number(i) > 1988) { //1989年から平成とする
        japaneseCalendar = '年（平成' + String(Number(i) - 1988) + '）';
      } else if (Number(i) > 1925) { //1926年から昭和とする
        japaneseCalendar = '年（昭和' + String(Number(i) - 1925) + '）';
      } else { //その他は大正
        japaneseCalendar = '年（大正' + String(Number(i) - 1911) + '）';
      }
      yearData.set(i, String(i) + japaneseCalendar);
    }
    return {
      years: yearData,
      days: 0,
      gender: this.$store.state.gender,
      inputYear: this.$store.state.yearOfBirth, 
      inputMonth: this.$store.state.monthOfBirth,
      inputDay: this.$store.state.dateOfBirth, 
    }
  },
  watch: {
    inputYear: function() {
      this.setDays();
    },
    inputMonth: function() {
      this.setDays();
    }
  },
  methods: {
    setDays: function() {
      if (this.inputYear === '' || this.inputMonth === '') {
        this.days = 0;
        return;
      }
      const year = Number(this.inputYear.slice(0, 4));
      const month = Number(this.inputMonth);
      const isLeapYear = year => (year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0);
      const datesOfFebruary = isLeapYear(year) ? 29 : 28;
      const datesOfYear= [31, datesOfFebruary, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
      this.days = datesOfYear[month-1];
    }, 
    setState: function() {
      this.$store.state.gender = this.gender;
      this.$store.state.yearOfBirth = this.inputYear;
      this.$store.state.monthOfBirth = this.inputMonth;
      this.$store.state.dateOfBirth = this.inputDay;
    }, 
    nextQuestion: function() {
      this.setState();
      this.$router.push('/step2');
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
</style>
