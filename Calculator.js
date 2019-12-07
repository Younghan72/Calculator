
        var clickFlag = false
        var check = true
        //첫번째 연산 뒤 두번째 연산하기전 초기화
        function decision(re){
            if (clickFlag) {
            AC()
            clickFlag = false
        }
            var sum = document.getElementsByClassName('sum')
            sum[0].innerHTML += re.innerText
            check = false
        }
        
        function AC() {
            var sum = document.getElementsByClassName('sum')
            sum[0].innerHTML = ''
        }
        
        function operatorClick(op) {
            if (!check) {
                var sum = document.getElementsByClassName('sum')
                sum[0].innerHTML += op.innerText
                check = true
            }
        }
        //연산자가 2개 이상 있을때 계산 하지 않기  
        function sumMake() {
            var sum = document.getElementsByClassName('sum')
            sum[0].innerHTML = eval(sum[0].innerText)
            clickFlag = true
        }
        
        