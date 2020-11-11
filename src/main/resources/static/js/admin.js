function all() {
    axios.get("/admin/api/all")
        .then(function (response) {
            console.log(response)
            let all=JSON.parse(JSON.stringify(response.data))
            let out="";

            for (let i = 0; i <all.length; i++) {
                out+="<div class=\"col-5 border\">\n" +
                    "        "+all[i].email+"" +
                    "    </div>\n" +
                    "\n" +
                    "    <div class=\"col-5 border\">\n" +
                    "        "+all[i].password+"" +
                    "    </div>";
            }
            document.getElementById('root').innerHTML=out;
        })
}