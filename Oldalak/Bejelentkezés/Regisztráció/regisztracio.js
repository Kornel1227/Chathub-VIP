import data from './regisz.json' with {type: 'json'};



const a = document.getElementById("regisz");
a.addEventListener('keypress', function (event){
    if (event.key == 'Enter')
    {
        this.submit();
    }
});
