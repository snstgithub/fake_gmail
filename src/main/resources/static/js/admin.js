function all() {
    axios.get("/admin/api/all")
        .then(function (response) {
            console.log(response)
        })
}