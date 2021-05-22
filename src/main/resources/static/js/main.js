$(function () {

    let checkAuthStatus = function () {
        $.get('/api/auth', function (response) {

            if(response.result) {
                initChat();
            } else {
                let name = prompt("Введите имя пользователя");
                $.post('/api/user', {'name'})
            }
        })

    }
})