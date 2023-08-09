const xhr = new XMLHttpRequest();
 
let text="general"
let what = "everything" 
 
Request();

document.getElementById("search-btn").addEventListener("click", () => {
    text = document.getElementById("search-bar").value;
    Request();
    document.getElementById("search-bar").value = null
    
})

document.getElementById("headlines").addEventListener('click', () => {
    what = "top-headlines"
    text =""
    Request();
})

document.getElementById("entertainment").addEventListener('click' , () =>{
    text = "entertainment";
    Request();
} )

document.getElementById("health").addEventListener('click' , () => {
    text = "health"
    Request();
}) 
 
document.getElementById("technology").addEventListener('click' , () => {
    text ="technology"
    Request();
})
   
document.getElementById("sports").addEventListener('click' , () =>{
    text ="sports"
    Request();   
}) 


function Request(){
// const url = `https://newsapi.org/v2/${what}?country=in&language=en&category=${cat}&apiKey=c6631a6a850d4a5d92956d0398e80f7f&pageSize=100`
const url = `https://newsapi.org/v2/${what}?q=${text}&language=en&apiKey=c6631a6a850d4a5d92956d0398e80f7f&pageSize=100`

xhr.open('GET' , url);
xhr.onreadystatechange = () => {
    if(xhr.readyState == 4 && xhr.status == 200){
        const jsonRes = xhr.responseText;
        const res = JSON.parse(jsonRes);
        console.log(res);
        document.getElementById('container').innerHTML = "<h1>HEADLINES</h1>"


        
        let output = '';
        for(let i = 0 ; i < res.articles.length ; i++){
            // console.log(res.articles[i]);
            output += `
            <div>
               
                <a href="${res.articles[i].url}" target=_blank" style="color:black; text-decoration:none;">
                    <h2 id="title">${res.articles[i].title}</h2>
                    <img style="height:50%%; width:100%;" src="${res.articles[i].urlToImage}"/>
                    <h3 id="description">${res.articles[i].description}</h3> 
                </a>
                
            </div>
            `
        }
        document.getElementById('container').innerHTML = output

    }
    
}
xhr.send();
}

 