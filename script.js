const avanca = document.querySelectorAll(".btn-proximo")

avanca.forEach(button => {
    button.addEventlitener('click', function(){
        const atual = document.querySelector('.ativo');
        const proximopasso = 'passo-' + this.getattribute('.ativo');

        atual.classList.remove('ativo');
        document.getElementById(proximopasso).classList.add('ativo')
    })
})
    
    
 
    
