const a = document.getElementById("login");
a.addEventListener('keypress', function (event){
    if (event.key == 'Enter')
    {
        a.submit();
    }
});