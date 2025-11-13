function calculate() {
    var a = parseFloat(document.calcform.txta.value);
    var b = parseFloat(document.calcform.txtb.value);
    var operator = document.calcform.sto.value;
    var result;

    // Kiểm tra nếu các ô nhập liệu bị bỏ trống hoặc không phải số
    if (isNaN(a) || document.calcform.txta.value.trim() === "") {
        alert("Please enter a valid number for A.");
        return;
    }
    if (isNaN(b) || document.calcform.txtb.value.trim() === "") {
        alert("Please enter a valid number for B.");
        return;
    }

    // Thực hiện phép toán
    switch (operator) {
        case "+":
            result = a + b;
            break;
        case "-":
            result = a - b;
            break;
        case "*":
            result = a * b;
            break;
        case "/":
            result = b === 0 ? "Cannot divide by zero" : a / b;
            break;
        case "%":
            result = a % b;
            break;
        case "**":
            result = a ** b;
            break;
        default:
            result = "Invalid operator";
    }

    document.calcform.txtr.value = result;
}

function clearFields() {
    // Xóa toàn bộ nội dung trong các ô nhập liệu và kết quả
    document.calcform.txta.value = "";
    document.calcform.txtb.value = "";
    document.calcform.txtr.value = "";
    document.calcform.sto.value = "+";
}