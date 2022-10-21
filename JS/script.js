function Output(num) {
    var display = document.getElementById("display");
    //  마지막 입력이 '.' 이고 다시한번 '.' 입력시 입력 방지
    if (display.value.substring(display.value.length-1) =="." && num == '.')
    {}
    // 사칙연산 변경 작업 및 중복 방지  
    else if (
      isNaN(num) &&
      (display.value.substring(display.value.length-1) =='+'||
      display.value.substring(display.value.length-1) =='-'||
      display.value.substring(display.value.length-1) =='/'||
      display.value.substring(display.value.length-1) =='*'))
    {
      display.value = display.value.substring(0, display.value.length - 1) + num ;
    }
    // 관련 없을시 입력 진행
    else 
    {
      display.value = display.value + num;
    }
    console.log(display.value)
    }
    // 계산 값 출력
    function calculate() {
      var displayResult = document.getElementById("result");
      var display = document.getElementById("display");
      // 처음 값이 빈값일경우 
      if (display.value == 0 )
      {
        alert("값을 입력 해주세요")
      }
      else {
        var result = eval(display.value);
        displayResult.value = result;
      }
    }
    // 리셋 버튼 
    function reset() {
    var display = document.getElementById("display");
    display.value = "";
    var displayResult = document.getElementById("result");
    displayResult.value = "";
    }
    // 삭제 버튼
    function del() {
      console.log(display)
    var display = document.getElementById("display");
    // value 값을 subtring 해서 0~length -1 까지 출력하여 마지막 자리 삭제
    display.value = display.value.substring(0, display.value.length - 1);
    }