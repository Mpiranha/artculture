$('#subscribe-form').submit(function (event) {
    event.preventDefault();

    const url = 'http://localhost:3000/email';
    let value = $('#subscribe-email').val().toString().toLowerCase();
    let regex = /\S+@\S+\.\S+/.test(value);
    console.log(value);
    console.log(regex + ' :regex');

    if (value.length <= 0) {
        $('.message').text('Please enter your email');
    } else if (!regex) {
        $('.message').text('Please enter a valid email');
    } else {
        

        var settings = {
            "url": "http://localhost:3000/email",
            "method": "POST",
            "timeout": 0,
            "headers": {
                "Content-Type": "application/json"
            },
            "data": JSON.stringify({
                "email": value
            }),
        };

        $.ajax(settings).done(function (response) {
            console.log(response);
            $('.message').text(response.message);
        });
        // The data we are going to send in our request

        // let data = {
        //     'email': value
        // }

        // console.log(data)
        // The parameters we are gonna pass to the fetch function
        // let fetchData = {
        //     method: 'POST',
        //     body: {'email': value},
        //     credentials: 'omit',
        //     headers: {
        //         'Content-Type': 'application/json',
        //         'Accept': 'application/json',
        //     }
        // }
        // fetch(url, fetchData)
        //     .then(function (res) {
        //         // Handle response you get from the server
        //         console.log(JSON.stringify(res))
        //     }).catch(error => console.log(error));
    }

});