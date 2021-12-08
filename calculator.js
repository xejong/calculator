const lab = document.querySelector('.calLabMain'),
    labNum = document.querySelector('.calLabNum'),
    labOpr = document.querySelector('.calLabOpr'),
    btn = document.querySelector('.cal.btn button');

const btn1 = document.getElementById('1'),
    btn2 = document.getElementById('2'),
    btn3 = document.getElementById('3'),
    btn4 = document.getElementById('4'),
    btn5 = document.getElementById('5'),
    btn6 = document.getElementById('6'),
    btn7 = document.getElementById('7'),
    btn8 = document.getElementById('8'),
    btn9 = document.getElementById('9'),
    btn0 = document.getElementById('0'),
    btnMulti = document.getElementById('multi'),
    btnMinus = document.getElementById('minus'),
    btnPlus = document.getElementById('plus'),
    btnCancel = document.getElementById('cancel'),
    btnDivis = document.getElementById('divis'),
    btnBack = document.getElementById('back'),
    btnDot = document.getElementById('dot'),
    btnSquare = document.getElementById('square'),
    btnRoot = document.getElementById('root'),
    btnResult = document.getElementById('result');

function KeyEffect() {
    btn1.addEventListener('mousedown', btn1Efd);
    btn1.addEventListener('mouseup', btn1Efu);
    function btn1Efd() {
        btn1.style.border = "3px #FFE2E2 inset";
    }
    function btn1Efu() {
        btn1.style.border = "3px #FFE2E2 outset";
    }
    btn2.addEventListener('mousedown', btn2Efd);
    btn2.addEventListener('mouseup', btn2Efu);
    function btn2Efd() {
        btn2.style.border = "3px #FFE2E2 inset";
    }
    function btn2Efu() {
        btn2.style.border = "3px #FFE2E2 outset";
    }
    btn3.addEventListener('mousedown', btn3Efd);
    btn3.addEventListener('mouseup', btn3Efu);
    function btn3Efd() {
        btn3.style.border = "3px #FFE2E2 inset";
    }
    function btn3Efu() {
        btn3.style.border = "3px #FFE2E2 outset";
    }
    btn4.addEventListener('mousedown', btn4Efd);
    btn4.addEventListener('mouseup', btn4Efu);
    function btn4Efd() {
        btn4.style.border = "3px #FFE2E2 inset";
    }
    function btn4Efu() {
        btn4.style.border = "3px #FFE2E2 outset";
    }
    btn5.addEventListener('mousedown', btn5Efd);
    btn5.addEventListener('mouseup', btn5Efu);
    function btn5Efd() {
        btn5.style.border = "3px #FFE2E2 inset";
    }
    function btn5Efu() {
        btn5.style.border = "3px #FFE2E2 outset";
    }
    btn6.addEventListener('mousedown', btn6Efd);
    btn6.addEventListener('mouseup', btn6Efu);
    function btn6Efd() {
        btn6.style.border = "3px #FFE2E2 inset";
    }
    function btn6Efu() {
        btn6.style.border = "3px #FFE2E2 outset";
    }
    btn7.addEventListener('mousedown', btn7Efd);
    btn7.addEventListener('mouseup', btn7Efu);
    function btn7Efd() {
        btn7.style.border = "3px #FFE2E2 inset";
    }
    function btn7Efu() {
        btn7.style.border = "3px #FFE2E2 outset";
    }
    btn8.addEventListener('mousedown', btn8Efd);
    btn8.addEventListener('mouseup', btn8Efu);
    function btn8Efd() {
        btn8.style.border = "3px #FFE2E2 inset";
    }
    function btn8Efu() {
        btn8.style.border = "3px #FFE2E2 outset";
    }
    btn9.addEventListener('mousedown', btn9Efd);
    btn9.addEventListener('mouseup', btn9Efu);
    function btn9Efd() {
        btn9.style.border = "3px #FFE2E2 inset";
    }
    function btn9Efu() {
        btn9.style.border = "3px #FFE2E2 outset";
    }
    btn0.addEventListener('mousedown', btn0Efd);
    btn0.addEventListener('mouseup', btn0Efu);
    function btn0Efd() {
        btn0.style.border = "3px #FFE2E2 inset";
    }
    function btn0Efu() {
        btn0.style.border = "3px #FFE2E2 outset";
    }
    btnMulti.addEventListener('mousedown', btnMultiEfd);
    btnMulti.addEventListener('mouseup', btnMultiEfu);
    function btnMultiEfd() {
        btnMulti.style.border = "3px #FFE2E2 inset";
    }
    function btnMultiEfu() {
        btnMulti.style.border = "3px #FFE2E2 outset";
    }
    btnMinus.addEventListener('mousedown', btnMinusEfd);
    btnMinus.addEventListener('mouseup', btnMinusEfu);
    function btnMinusEfd() {
        btnMinus.style.border = "3px #FFE2E2 inset";
    }
    function btnMinusEfu() {
        btnMinus.style.border = "3px #FFE2E2 outset";
    }
    btnPlus.addEventListener('mousedown', btnPlusEfd);
    btnPlus.addEventListener('mouseup', btnPlusEfu);
    function btnPlusEfd() {
        btnPlus.style.border = "3px #FFE2E2 inset";
    }
    function btnPlusEfu() {
        btnPlus.style.border = "3px #FFE2E2 outset";
    }
    btnCancel.addEventListener('mousedown', btnCancelEfd);
    btnCancel.addEventListener('mouseup', btnCancelEfu);
    function btnCancelEfd() {
        btnCancel.style.border = "3px #FFE2E2 inset";
    }
    function btnCancelEfu() {
        btnCancel.style.border = "3px #FFE2E2 outset";
    }
    btnDivis.addEventListener('mousedown', btnDivisEfd);
    btnDivis.addEventListener('mouseup', btnDivisEfu);
    function btnDivisEfd() {
        btnDivis.style.border = "3px #FFE2E2 inset";
    }
    function btnDivisEfu() {
        btnDivis.style.border = "3px #FFE2E2 outset";
    }
    btnResult.addEventListener('mousedown', btnResultEfd);
    btnResult.addEventListener('mouseup', btnResultEfu);
    function btnResultEfd() {
        btnResult.style.border = "3px #FFE2E2 inset";
    }
    function btnResultEfu() {
        btnResult.style.border = "3px #FFE2E2 outset";
    }
    btnBack.addEventListener('mousedown', btnBackEfd);
    btnBack.addEventListener('mouseup', btnBackEfu);
    function btnBackEfd() {
        btnBack.style.border = "3px #FFE2E2 inset";
    }
    function btnBackEfu() {
        btnBack.style.border = "3px #FFE2E2 outset";
    }
    btnDot.addEventListener('mousedown', btnDotEfd);
    btnDot.addEventListener('mouseup', btnDotEfu);
    function btnDotEfd() {
        btnDot.style.border = "3px #FFE2E2 inset";
    }
    function btnDotEfu() {
        btnDot.style.border = "3px #FFE2E2 outset";
    }
    btnSquare.addEventListener('mousedown', btnSquareEfd);
    btnSquare.addEventListener('mouseup', btnSquareEfu);
    function btnSquareEfd() {
        btnSquare.style.border = "3px #FFE2E2 inset";
    }
    function btnSquareEfu() {
        btnSquare.style.border = "3px #FFE2E2 outset";
    }
    btnRoot.addEventListener('mousedown', btnRootEfd);
    btnRoot.addEventListener('mouseup', btnRootEfu);
    function btnRootEfd() {
        btnRoot.style.border = "3px #FFE2E2 inset";
    }
    function btnRootEfu() {
        btnRoot.style.border = "3px #FFE2E2 outset";
    }
}
function keyListener() {
    btn1.addEventListener('click', btn1fun);
    btn2.addEventListener('click', btn2fun);
    btn3.addEventListener('click', btn3fun);
    btn4.addEventListener('click', btn4fun);
    btn5.addEventListener('click', btn5fun);
    btn6.addEventListener('click', btn6fun);
    btn7.addEventListener('click', btn7fun);
    btn8.addEventListener('click', btn8fun);
    btn9.addEventListener('click', btn9fun);
    btn0.addEventListener('click', btn0fun);
    btnMulti.addEventListener('click', btnMultifun);
    btnMinus.addEventListener('click', btnMinusfun);
    btnPlus.addEventListener('click', btnPlusfun);
    btnCancel.addEventListener('click', btnCancelfun);
    btnDivis.addEventListener('click', btnDivisfun);
    btnResult.addEventListener('click', btnResultfun);
    btnBack.addEventListener('click', btnBackfun);
    btnDot.addEventListener('click', btnDotfun);
    btnSquare.addEventListener('click', btnSquarefun);
    btnRoot.addEventListener('click', btnRootfun);

    function btn1fun() {
        event.preventDefault()
        return lab.innerText = lab.innerText == "CALCULATOR" ? "1" : lab.innerText + "1";
    }
    function btn2fun() {
        event.preventDefault()
        return lab.innerText = lab.innerText == "CALCULATOR" ? "2" : lab.innerText + "2";
    }
    function btn3fun() {
        event.preventDefault()
        return lab.innerText = lab.innerText == "CALCULATOR" ? "3" : lab.innerText + "3";
    }
    function btn4fun() {
        event.preventDefault()
        return lab.innerText = lab.innerText == "CALCULATOR" ? "4" : lab.innerText + "4";
    }
    function btn5fun() {
        event.preventDefault()
        return lab.innerText = lab.innerText == "CALCULATOR" ? "5" : lab.innerText + "5";
    }
    function btn6fun() {
        event.preventDefault()
        return lab.innerText = lab.innerText == "CALCULATOR" ? "6" : lab.innerText + "6";
    }
    function btn7fun() {
        event.preventDefault()
        return lab.innerText = lab.innerText == "CALCULATOR" ? "7" : lab.innerText + "7";
    }
    function btn8fun() {
        event.preventDefault()
        return lab.innerText = lab.innerText == "CALCULATOR" ? "8" : lab.innerText + "8";
    }
    function btn9fun() {
        event.preventDefault()
        return lab.innerText = lab.innerText == "CALCULATOR" ? "9" : lab.innerText + "9";
    }
    function btn0fun() {
        event.preventDefault()
        return lab.innerText = lab.innerText == "CALCULATOR" ? "0" : lab.innerText + "0";
    }
    function btnMultifun() {
        event.preventDefault()
        if (labNum.innerText == "") {
            labNum.innerText = lab.innerText == "CALCULATOR" ? "0" : lab.innerText;
            labOpr.innerText = "x";
        } else {
            if (labOpr.innerText == "x") {
                labNum.innerText *= lab.innerText;
            } else if (labOpr.innerText == "-") {
                labNum.innerText -= lab.innerText;
            } else if (labOpr.innerText == "+") {
                labNum.innerText = Number(labNum.innerText) + Number(lab.innerText);
            } else if (labOpr.innerText == "÷") {
                labNum.innerText /= lab.innerText;
            }
            labOpr.innerText = "x";
        }
        lab.innerText = "";
    }
    function btnMinusfun() {
        event.preventDefault()
        if (labNum.innerText == "") {
            labNum.innerText = lab.innerText == "CALCULATOR" ? "0" : lab.innerText;
            labOpr.innerText = "-";
        } else {
            if (labOpr.innerText == "x") {
                labNum.innerText *= lab.innerText;
            } else if (labOpr.innerText == "-") {
                labNum.innerText -= lab.innerText;
            } else if (labOpr.innerText == "+") {
                labNum.innerText = Number(labNum.innerText) + Number(lab.innerText);
            } else if (labOpr.innerText == "÷") {
                labNum.innerText /= lab.innerText;
            }
            labOpr.innerText = "-";
        }
        lab.innerText = "";
    }
    function btnPlusfun() {
        event.preventDefault()
        if (labNum.innerText == "") {
            labNum.innerText = lab.innerText == "CALCULATOR" ? "0" : lab.innerText;
            labOpr.innerText = "+";
        } else {
            if (labOpr.innerText == "x") {
                labNum.innerText *= lab.innerText;
            } else if (labOpr.innerText == "-") {
                labNum.innerText -= lab.innerText;
            } else if (labOpr.innerText == "+") {
                labNum.innerText = Number(labNum.innerText) + Number(lab.innerText);
            } else if (labOpr.innerText == "÷") {
                labNum.innerText /= lab.innerText;
            }
            labOpr.innerText = "+";
        }
        lab.innerText = "";
    }
    function btnDivisfun() {
        event.preventDefault()
        if (labNum.innerText == "") {
            labNum.innerText = lab.innerText == "CALCULATOR" ? "0" : lab.innerText;
            labOpr.innerText = "÷";
        } else {
            if (labOpr.innerText == "x") {
                labNum.innerText *= lab.innerText;
            } else if (labOpr.innerText == "-") {
                labNum.innerText -= lab.innerText;
            } else if (labOpr.innerText == "+") {
                labNum.innerText = Number(labNum.innerText) + Number(lab.innerText);
            } else if (labOpr.innerText == "÷") {
                labNum.innerText /= lab.innerText;
            }
            labOpr.innerText = "÷";
        }
        lab.innerText = "";
    }
    function btnCancelfun() {
        event.preventDefault()
        lab.innerText = "CALCULATOR";
        labNum.innerText = "";
        labOpr.innerText = "";
    }
    function btnResultfun() {
        event.preventDefault()
        if (lab.innerText == "") {
            lab.innerText = labNum.innerText;
        } else {
            if (labOpr.innerText == "x") {
                lab.innerText = labNum.innerText * lab.innerText;
            } else if (labOpr.innerText == "-") {
                lab.innerText = labNum.innerText - lab.innerText;
            } else if (labOpr.innerText == "+") {
                lab.innerText = Number(labNum.innerText) + Number(lab.innerText);
            } else if (labOpr.innerText == "÷") {
                lab.innerText = labNum.innerText / lab.innerText;
            }
        }
        labNum.innerText = "";
        labOpr.innerText = "";
    }
    function btnBackfun() {
        event.preventDefault()
        return lab.innerText = lab.innerText == "CALCULATOR" ? "CALCULATOR" : lab.innerText.slice(0, -1);
    }
    function btnDotfun() {
        event.preventDefault()
        return lab.innerText = lab.innerText == "CALCULATOR" ? "0." : lab.innerText.includes(".") ? lab.innerText : lab.innerText + ".";
    }
    function btnSquarefun() {
        event.preventDefault()
        return lab.innerText = lab.innerText == "CALCULATOR" ? "CALCULATOR" : Math.pow(lab.innerText, 2);
    }
    function btnRootfun() {
        event.preventDefault()
        return lab.innerText = lab.innerText == "CALCULATOR" ? "CALCULATOR" : Math.sqrt(lab.innerText);
    }
}
function init() {

}
KeyEffect()
keyListener();
init();
