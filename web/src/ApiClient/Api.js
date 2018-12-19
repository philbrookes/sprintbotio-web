class api {
    register(email) {
        return fetch('/api/register', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: email,
            })
        })
    }
}

function newApi(){
    return new api();
}

export default newApi;