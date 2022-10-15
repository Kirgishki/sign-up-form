const rptPw = document.getElementById("rptPw");
const pw = document.getElementById("pw");
rptPw.addEventListener('blur', () => {
    if(rptPw.value != pw.value){
        rptPw.style.backgroundColor = "rgb(153, 51, 59)";
    }else{
        rptPw.style.backgroundColor = "white";
    }
});