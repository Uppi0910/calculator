/ получаем первое и второе число
function calculate() {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  const operator = document.getElementById("operator").value;
  let result;

  if (isNaN(num1) || isNaN(num2)) {
    document.getElementById("result").innerText = "Ошибка! Введите числа";
    return;
  }
// смотрим, что было в переменной с действием, и действуем исходя из этого
  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      if (num2 === 0) {
        document.getElementById("result").innerText = "Ошибка! Деление на ноль";
        return;
      }
      result = num1 / num2;
      break;
    default:
      document.getElementById("result").innerText = "Ошибка! Неизвестная операция";
      return;
  }
  document.getElementById("result").innerText = "Результат: " + result;
}
// смена знака первого числа
function changeSign() {
    const numInput = document.getElementById("num1");
    let currentValue = parseFloat(numInput.value);
    if(!isNaN(currentValue)) {
        numInput.value = -currentValue;
    }     
}
