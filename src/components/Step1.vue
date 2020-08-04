<template>
	<div id="step1">
		<div>STEP1</div>
		<div>お客様の情報を入力してください</div>
		<p>-性別-</p>
		<label><input type="radio" name="gender" value="male">男性</label>
		<label><input type="radio" name="gender" value="female">女性</label>
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
			if (Number(i) > 2018) {	//2019年から令和とする
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
			inputYear: '', 
			inputMonth: '',
			inputDay: '', 
		}
	},
	watch: {
		inputYear: function() {
			this.daysSet();
		},
		inputMonth: function() {
			this.daysSet();
		}
	},
	methods: {
		daysSet: function() {
			if (this.inputYear === '') {
				this.days = 0;
				return;
			}
			if (this.inputMonth === '') {
				this.days = 0;
				return;
			}
			
			let year = this.inputYear
			let isLeapYear;
			
			//うるう年判定
			if (year % 4 === 0 && year % 100 !== 0) {
				isLeapYear = 1;
			} 
			if (year % 400 ===0) {
				isLeapYear = 1;
			}	
			
			let month = this.inputMonth
			
			switch (Number(month)) {
				case 1: {
					this.days = 31;
					break;
				}
				case 2: {
					if (isLeapYear === 0) {
						this.days = 28;
					} else {
						this.days = 29;
					}
					break;
				}
				case 3: {
					this.days = 31;
					break;
				}
				case 4: {
					this.days = 30;
					break;
				}
				case 5: {
					this.days = 31;
					break;
				}
				case 6: {
					this.days = 30;
					break;
				}
				case 7: {
					this.days = 31;
					break;
				}
				case 8: {
					this.days = 31;
					break;
				}
				case 9: {
					this.days = 30;
					break;
				}
				case 10: {
					this.days = 31;
					break;
				}
				case 11: {
					this.days = 30;
					break;
				}
				case 12: {
					this.days = 31;
					break;
				}
				default: {
					this.days = 1;
					break;
				}
			}
		}, 
		nextQuestion: function() {
			console.log('ボタンクリック');
			this.$parent.stepNum++;
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
