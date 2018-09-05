//input객체
//객체 선언
var input = { 'array': [] };
//수식을 문자열로 리턴
input.getInput = function () {
    return this.array.join('');
};
//수식을 초기화
input.removeAll = function (value) {
    this.array = [];
    this.array.push(value);
};
//계산을 실행하기 전 준비단계
//getValue()를 호출하기 전 반드시 수행되어야 함
input.prepareCalc = function () {
    this.array = this.array.join('').split(' ');
};

//수식에서 값을 읽어옴
input.getValue = function () {
    var str = input.array.shift();
    var n = Number(str);
    return n;
};
//수식이 비어있는지 확인
input.isEmpty = function () {
    return this.array.length === 0;
};
//수식에서 연산자를 읽어옴
input.getOperator = function () {
    var op = input.array.shift();
    if (op === '+' || op === '-' || op === '*' || op === '/') {
        return op;
    } else {
        return '$';
    }
};

//output객체
//객체 선언
var output = {};
//입력값을 보여줌
output.text = document.getElementById('output');
//결과를 출력
output.print = function (str) {
    output.text.innerHTML = str;
}

var calculator = {};
calculator.calculate = function (first, second, op) {
    var ret;
    if (op === '+') {
        ret = first + second;
    } else if (op === '-') {
        ret = first - second;
    } else if (op === '*') {
        ret = first * second;
    } else if (op === '/') {
        ret = first / second;
    } else {
        ret = '오류';
    }
    return ret;
};
//숫자 버튼의 이벤트 핸들러
var clicknums = function (event) {
    var str = event.target.innerHTML;
    console.log(str);
    if (str === '←') {
        input.array.pop();
    } else if (str === '+' || str === '-' || str === '/' || str === '*') {
        input.array.push(' ' + str + ' ');
    } else {
        input.array.push(str);
    }

    if (input.isEmpty()) {
        output.text.innerHTML = 'Empty';
    } else {
        output.text.innerHTML = input.getInput();
    }
};


//'=' 버튼의 이벤트 핸들러
var clickshowrets = function (event) {
    input.prepareCalc();

    var result = input.getValue();

    while (!input.isEmpty()) {
        var op = input.getOperator();
        var second = input.getValue();
        result = calculator.calculate(result, second, op);
    }
    output.print(result);
    input.removeAll(result);
}











