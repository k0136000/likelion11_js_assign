let input = document.getElementById('input'); 
let addBtn = document.getElementById('addBtn');
let lists = document.getElementById('list');

addBtn.addEventListener('click', function(){
    var list = document.createElement('li'); 
    if (!input.value)            
        alert('내용을 입력해 주세요!');
    else
    {
        list.innerText = input.value;  
        lists.appendChild(list); 
        input.value= "";               
    }

    list.addEventListener('click', function(){     
        list.style.color = "#a0a0a0"
        list.style.textDecoration = "line-through";
    })
    list.addEventListener('dblclick', function(){  
        lists.removeChild(list);
    })
})
