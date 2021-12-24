// getting all required elements
const searchWrapper = document.querySelector(".search-input");
const inputBox = searchWrapper.querySelector("input");
const suggBox = searchWrapper.querySelector(".autocom-box");
const icon = searchWrapper.querySelector(".icon");
let linkTag = searchWrapper.querySelector("a");
let webLink;

// if user press any key and release
let prevData = "";

inputBox.onkeyup = (e)=>{
    let userData = e.target.value; //user enetered data
    let emptyArray = [];
   
    if(userData){
        icon.onclick = ()=>{
            webLink = `https://www.google.com/search?q=${userData}`;
            linkTag.setAttribute("href", webLink);
            linkTag.click();
        }
        // console.log(suggestions);

        emptyArray = suggestions.filter((datas)=>{
            //filtering array value and user characters to lowercase and return only those words which are start with user enetered chars
            return datas.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
        });
        console.log(emptyArray.length)

        if(emptyArray.length == 0 && prevData!==""){
            var data = userData.replace(prevData, '')
            console.log("##################", data);
            emptyArray = suggestions.filter((datas)=>{
                //filtering array value and user characters to lowercase and return only those words which are start with user enetered chars
                return datas.toLocaleLowerCase().startsWith(data.toLocaleLowerCase());
            });
        }
        prevData = userData;
        emptyArray = emptyArray.map((data)=>{
            // passing return data inside li tag
            return data = `<li>${data}</li>`;
        });
        console.log(emptyArray)
       
        showSuggestions(emptyArray);
        searchWrapper.classList.add("active"); //show autocompl ete box
        
        console.log(suggBox)
        let allList = suggBox.querySelectorAll("li");
        for (let i = 0; i < allList.length; i++) {
            //adding onclick attribute in all li tag
            allList[i].setAttribute("onclick", "select(this)");
        }
        console.log(allList)
    }else{
        searchWrapper.classList.remove("active"); //hide autocomplete box
    }
}

function select(element){
    let selectData = element.textContent;
    inputBox.value = selectData;
    icon.onclick = ()=>{
        webLink = `https://www.google.com/search?q=${selectData}`;
        linkTag.setAttribute("href", webLink);
        linkTag.click();
    }
    searchWrapper.classList.remove("active");
}


function showSuggestions(list){
    let listData;
    if(!list.length){
        userValue = inputBox.value;
        listData = `<li>${userValue}</li>`;
    }else{
      listData = list.join('');
      console.log(listData)
    }
    suggBox.innerHTML = listData;
}
