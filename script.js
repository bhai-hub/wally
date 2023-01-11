
// Access key :- KssPAt2bTNqkCwdQiDMpfd8nJaKnyXTVGN-N2aHyS6c

// screte key :- NvA8hQgbLbo_8uaaV7AN-5wegYIwtci3NrSqonfhISw

const start = () =>{
    fetch("https://pixabay.com/api/?key=32772009-56c2de2493ecd842f32bb8af0&q=&per_page=90")
    .then(Response => Response.json())
    .then(data => {
        console.log(data.hits)

        let content = document.querySelector(".items")
        let attr = '<div class="objects">'
        data.hits.forEach(element => {
            attr += `
                <div class="card">
                    <div class="image">
                       <img src="` + element.largeImageURL +`">
                    </div>
                    <div class="desc">
                        <a href="`+ element.largeImageURL+`" download="image" target="_blank"><button class="btn2">Download</button></a><br>
                        <span class="credit">By <span id="user" >`+element.user+`</span></span>
                    </div>
                </div>
                
            </div>
        </div>`
        }
        
        );

        attr += `</div>`

        content.innerHTML = attr;
    })
}

start()


const search = () =>{
    fetch("https://pixabay.com/api/?key=32772009-56c2de2493ecd842f32bb8af0&q="+ $("#query").val() +"&per_page=150")
    .then(Response => Response.json())
    .then(data => {
        console.log(data.hits)

        let content = document.querySelector(".items")
        let attr = '<div class="objects">'
        data.hits.forEach(element => {
            attr += `
                <div class="card">
                    <div class="image">
                       <img src="` + element.previewURL +`">
                    </div>
                    <div class="desc">
                        <a href="`+ element.largeImageURL+`" download="image" target="_blank"><button class="btn2">Download</button></a><br>
                        <span class="credit">By <span id="user" >`+element.user+`</span></span>
                    </div>
                </div>
                
            </div>
        </div>`
        }
        
        );

        attr += `</div>`

        content.innerHTML = attr;
    })

}

$(".bar").click(function(){
    if( $(".search").css("display") == "none"){
        $(".search").css("display", "block") 
    }
    else{
        $(".search").css("display", "none") 
    }
})