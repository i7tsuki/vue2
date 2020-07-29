<template>
	<div id="hello">
		<div id="question">
			<h1>{{ msg }}</h1>
			<div id="input-bar">
				<div id="step">STEP1</div>
				<div id="explanation">お客様の情報を入力してください</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}


let stepCount = 1;

window.onload = function() {
	screenChange();
}

function screenChange() {
	
	const question = document.getElementById('question');
	let className;
	
	//初期化
	document.querySelectorAll('.first').forEach(n => n.remove());
	document.querySelectorAll('.second').forEach(n => n.remove());
	
	switch (stepCount) {
	
		case 2: {
			className = 'second';
			document.getElementById('step').textContent = 'STEP2';
			document.getElementById('explanation').textContent = '以下にお答えください';
			
			//質問1
			messageCreate(className, '現在、生命保険に加入されていますか？', 'yesno', 'はい', 'いいえ');
			
			//質問2
			messageCreate(className, '現在入院中ですか。または最近3か月以内に医師の診察・検査の結果、入院・手術をすすめられたことはありますか', 'yesno', 'はい', 'いいえ');
			
			//質問3
			messageCreate(className, '過去5年以内に、病気やけがで、手術をうけたことまたは継続して7日以上の入院をしたことがありますか？', 'yesno', 'はい', 'いいえ');
			
			//次に進む
			const hello = document.getElementById('hello');
			const buttonElementNode = document.createElement('button');
			buttonElementNode.setAttribute('onclick', 'screenChange();');
			buttonElementNode.className = className;
			const buttonTextNode = document.createTextNode('次に進む');
			buttonElementNode.appendChild(buttonTextNode);
			hello.appendChild(buttonElementNode);
			
			stepCount++;
			break;
		}
		
		default: {
			className = 'first';
			
			//性別
			const sexElementNode = document.createElement('p');
			sexElementNode.className = className;
			const sexTextNode = document.createTextNode('-性別-');
			sexElementNode.appendChild(sexTextNode);
			question.appendChild(sexElementNode);
			
			//男性・女性ラジオボタン
			let radioElementNode, radioLabelElementNode, radioLabelTextNode;
			radioElementNode = document.createElement('input');
			radioElementNode.setAttribute('type', 'radio');
			radioElementNode.setAttribute('name', 'gender');
			radioElementNode.setAttribute('value', 'male');
			radioElementNode.className = className;
			question.appendChild(radioElementNode);
			radioLabelElementNode = document.createElement('label');
			radioLabelElementNode.className = className;
			radioLabelTextNode = document.createTextNode('男性');
			radioLabelElementNode.appendChild(radioLabelTextNode);
			question.appendChild(radioLabelElementNode);
			
			radioElementNode = document.createElement('input');
			radioElementNode.className = className;
			radioElementNode.setAttribute('type', 'radio');
			radioElementNode.setAttribute('name', 'gender');
			radioElementNode.setAttribute('value', 'female');
			question.appendChild(radioElementNode);
			radioLabelElementNode = document.createElement('label');
			radioLabelElementNode.className = className;
			radioLabelTextNode = document.createTextNode('女性');
			radioLabelElementNode.appendChild(radioLabelTextNode);
			question.appendChild(radioLabelElementNode);
			
			//生年月日
			const birthdayElementNode = document.createElement('p');
			birthdayElementNode.className = className;
			const birthdayTextNode = document.createTextNode('-生年月日-');
			birthdayElementNode.appendChild(birthdayTextNode);
			question.appendChild(birthdayElementNode);
			
			//年
			const yearParentNode = document.createElement('select');
			yearParentNode.className = className;
			yearParentNode.setAttribute('id', 'year');
			let yearElementNode, yearTextNode, japaneseCalendar;
			for (let i = new Date().getFullYear()-100; i <= new Date().getFullYear(); i++) {
				yearElementNode = document.createElement('option');
				
				if (Number(i) > 2018) {	//2019年から令和とする
					japaneseCalendar = '年（令和' + String(Number(i) - 2018) + '）';
				} else if (Number(i) > 1988) { //1989年から平成とする
					japaneseCalendar = '年（平成' + String(Number(i) - 1988) + '）';
				} else if (Number(i) > 1925) { //1926年から昭和とする
					japaneseCalendar = '年（昭和' + String(Number(i) - 1925) + '）';
				} else { //その他は大正
					japaneseCalendar = '年（大正' + String(Number(i) - 1911) + '）';
				}
				
				yearTextNode = document.createTextNode(i + japaneseCalendar);
				yearElementNode.appendChild(yearTextNode);
				yearParentNode.appendChild(yearElementNode);
				question.appendChild(yearParentNode);
			}
			const yearLabelParentNode = document.createElement('label');
			yearLabelParentNode.className = className;
			const yearLabelTextNode = document.createTextNode('年');
			yearLabelParentNode.appendChild(yearLabelTextNode);
			question.appendChild(yearLabelParentNode);
			
			//月
			const monthParentNode = document.createElement('select');
			monthParentNode.className = className;
			monthParentNode.setAttribute('id', 'month');
			let monthElementNode, monthTextNode;
			for (let i = 1; i <= 12; i++) {
				monthElementNode = document.createElement('option');
				monthTextNode = document.createTextNode(i);
				monthElementNode.appendChild(monthTextNode);
				monthParentNode.appendChild(monthElementNode);
			}
			question.appendChild(monthParentNode);
			const monthLabelParentNode = document.createElement('label');
			const monthLabelTextNode = document.createTextNode('月');
			monthLabelParentNode.appendChild(monthLabelTextNode);
			question.appendChild(monthLabelParentNode);
			
			//日
			daySet(className);
			
			//次に進む
			const hello = document.getElementById('hello');
			const buttonElementNode = document.createElement('button');
			buttonElementNode.setAttribute('onclick', 'screenChange();');
			buttonElementNode.className = className;
			const buttonTextNode = document.createTextNode('次に進む');
			buttonElementNode.appendChild(buttonTextNode);
			hello.appendChild(buttonElementNode);
			
			stepCount++;
			break;
		}
	}
}

function daySet(className) {
	let isLeapYear = 0;
	let dayNum;
	let year = document.getElementById('year').value;
	
	//うるう年判定
	if (year % 4 === 0 && year % 100 !== 0) {
		isLeapYear = 1;
	} 
	if (year % 400 ===0) {
		isLeapYear = 1;
	}	
	
	let month = document.getElementById('month').value;
	
	switch (Number(month)) {
		case 1: {
			dayNum = 31;
			break;
		}
		case 2: {
			if (isLeapYear === 0) {
				dayNum = 28;
			} else {
				dayNum = 29;
			}
			break;
		}
		case 3: {
			dayNum = 31;
			break;
		}
		case 4: {
			dayNum = 30;
			break;
		}
		case 5: {
			dayNum = 31;
			break;
		}
		case 6: {
			dayNum = 30;
			break;
		}
		case 7: {
			dayNum = 31;
			break;
		}
		case 8: {
			dayNum = 31;
			break;
		}
		case 9: {
			dayNum = 30;
			break;
		}
		case 10: {
			dayNum = 31;
			break;
		}
		case 11: {
			dayNum = 30;
			break;
		}
		case 12: {
			dayNum = 31;
			break;
		}
		default: {
			dayNum = 1;
			break;
		}
	}
	const question = document.getElementById('question');
	const dayParentNode = document.createElement('select');
	dayParentNode.className  = className;
	dayParentNode.setAttribute('id', 'day');
	let dayElementNode, dayTextNode;
	for (let i = 1; i <= dayNum; i++) {
		dayElementNode = document.createElement('option');
		dayTextNode = document.createTextNode(i);
		dayElementNode.appendChild(dayTextNode);
		dayParentNode.appendChild(dayElementNode);
	}
	question.appendChild(dayParentNode);
	const dayLabelParentNode = document.createElement('label');
	dayLabelParentNode.className = className;
	const dayLabelTextNode = document.createTextNode('日');
	dayLabelParentNode.appendChild(dayLabelTextNode);
	question.appendChild(dayLabelParentNode);
}

function messageCreate(className, message, radioName, choiceText1, choiceText2) {
	
	const question = document.getElementById('question');
	
	//質問文
	const message1ElementNode = document.createElement('p');
	message1ElementNode.className = className;
	const message1TextNode = document.createTextNode(message);
	message1ElementNode.appendChild(message1TextNode);
	question.appendChild(message1ElementNode);
	
	//ラジオボタン
	let radioElementNode, radioLabelElementNode, radioLabelTextNode;
	radioElementNode = document.createElement('input');
	radioElementNode.setAttribute('type', 'radio');
	radioElementNode.setAttribute('name', radioName);
	radioElementNode.className = className;
	question.appendChild(radioElementNode);
	radioLabelElementNode = document.createElement('label');
	radioLabelElementNode.className = className;
	radioLabelTextNode = document.createTextNode(choiceText1);
	radioLabelElementNode.appendChild(radioLabelTextNode);
	question.appendChild(radioLabelElementNode);
	
	radioElementNode = document.createElement('input');
	radioElementNode.className = className;
	radioElementNode.setAttribute('type', 'radio');
	radioElementNode.setAttribute('name', radioName);
	question.appendChild(radioElementNode);
	radioLabelElementNode = document.createElement('label');
	radioLabelElementNode.className = className;
	radioLabelTextNode = document.createTextNode(choiceText2);
	radioLabelElementNode.appendChild(radioLabelTextNode);
	question.appendChild(radioLabelElementNode);

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
