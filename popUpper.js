    //По клику на вызове указанному в параметрах popUp-контейнеру придается класс active
    //В дом дереве кнопки вызова должны быть в том же порядке, что и контейнеры
    
    /*
    Чтобы вызвать поп-ап, нужно прописать
    
    popUpper({
        popBtn: 'класс кнопок вызова поп-апов',
        popBtnClose: 'класс кнопок закрытия поп-апов', 
        popUp: 'класс контейнеров поп-апов',
        callback: 'функция для коллбеков после вызова поп-апа'
        
    });
    
    */

    function popUpper({popBtn, popBtnClose, popUp, pointer, callback}){
        this.popBtn = document.querySelectorAll(popBtn);
        this.popUp = document.querySelectorAll(popUp);
        this.popBtnClose = document.querySelectorAll(popBtnClose);
        this.callback = callback || function(){}
        
        window.addEventListener('load',()=>{
            start();    
        });   
        
        function start(){
            this.open =(index)=>{
                this.popUp[index].classList.add('active'); 
                this.callback();
            }
            
            this.close =(index)=>{
                this.popUp[index].classList.remove('active'); 
            }
            
            for(let i = 0; i < this.popBtn.length; i++){
                this.popBtn[i].addEventListener('click',()=>{
                    this.open(i);      
                });
            
            }
            
            for(let i = 0; i < this.popBtnClose.length; i++){
                this.popBtnClose[i].addEventListener('click',()=>{
                    this.close(i);      
                });
            
            }  
        } 
    }