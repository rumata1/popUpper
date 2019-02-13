    //По клику на вызове указанному в параметрах popUp-контейнеру придается класс active
    //В дом дереве кнопки вызова должны быть в том же порядке, что и контейнеры
	//несколько серий поп-апов не конфликтуют с друг другом
    
    /*
    Чтобы вызвать поп-ап, нужно прописать
    
    new popUpper({
        popBtn: 'класс кнопок вызова поп-апов',
        popBtnClose: 'класс кнопок закрытия поп-апов', 
        popUp: 'класс контейнеров поп-апов',
        callback: 'функция для коллбеков после вызова поп-апа'
    });
    
    */

    function popUpper({popBtn, popBtnClose, popUp, pointer, callback, oneForAll}){
	let paramsObj = arguments;
	paramsObj.popBtn = document.querySelectorAll(popBtn);
        paramsObj.popUp = document.querySelectorAll(popUp);
        paramsObj.popBtnClose = document.querySelectorAll(popBtnClose);
        paramsObj.callback = callback || function(){};
		
        window.addEventListener('load',()=>{
			start();    
        });   
        
        function start(){
            paramsObj.open =(index)=>{
				if(oneForAll){
                     paramsObj.popUp[0].classList.add('active');     
                }
                else {
                     paramsObj.popUp[index].classList.add('active');      
                }
                
                paramsObj.callback();     
            }
            
            paramsObj.close =(index)=>{
				if(oneForAll){
                    paramsObj.popUp[0].classList.remove('active');    
                }
                else {
                    paramsObj.popUp[index].classList.remove('active');       
                } 
            }
            
            for(let i = 0; i < paramsObj.popBtn.length; i++){
                paramsObj.popBtn[i].addEventListener('click',()=>{
                    paramsObj.open(i);      
                });
            
            }
            
            for(let i = 0; i < paramsObj.popBtnClose.length; i++){
                paramsObj.popBtnClose[i].addEventListener('click',()=>{
                    paramsObj.close(i);      
                });
            
            } 
        } 
    }
