//1. 박스 2개 만들기
//2. 드랍다운 리스트 만들기
//3. 환율 정보 기입
//4. 드랍다운 리스트에서 선택 시 아이템 바뀜
//5. 금액을 입력하면 환전이 된다
//6. 드랍다운 리스트에서 아이템을 선택하면 다시 그 단위 기준으로 환전이 됨

//7. 반대로 밑에 박스에서 숫자를 바꿔도 위에 박스에 환율이 적용이 된다
//8. 숫자를 한국어로 읽는법

let currencyRatio = {
    USD:{
        KRW: 1470.18,
        USD: 1,
        VND: 25485.04,
        unit: "달러"
    },
    KRW:{
        KRW: 1,
        USD: 0.00068,
        VND: 17.33,
        unit: "원"
    },
    VND:{
        VND: 1,
        KRW: 0.058,
        USD: 0.000039,
        unit: "동"
    }
}

let fromCurrency = "USD"
let toCurrency = "USD"

document.querySelectorAll("#from-currency-list a").forEach(menu=>menu.addEventListener("click",function() {
    //1. 버튼을 가져온다
    //2. 버튼에 값을 바꾼다
    //3. 선택된 currency 값을 변수에 저장해준다
    document.getElementById("from-button").textContent=this.textContent;
    fromCurrency = this.textContent;
    convert();
}));
document.querySelectorAll("#to-currency-list a").forEach(menu=>menu.addEventListener("click",function() {
    document.getElementById("to-button").textContent=this.textContent;
    fromCurrency = this.textContent;
    convert();
}));

//1. 키를 입력하는 순간
//2. 환전
//3. 환전된 값이 보인다
function convert() {
    let amount = document.getElementById("from-input").value;
    let convertedAmount = amount * currencyRatio[fromCurrency][toCurrency];
    document.getElementById("to-input").value = convertedAmount;
}