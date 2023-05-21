



const postcontainer=document.querySelector(".cards");
function addNote(text=""){
    
    var newcard=document.createElement('div');
    newcard.classList.add("card")
    newcard.innerHTML=` 
    <div class="head">
        <i class="fa-solid fa-floppy-disk" id="save" onclick="saveNote()"></i></button>
        <i class="fa-solid fa-trash" style="color: #000000;" id="delete" ></i>
    </div>
    <textarea name="" id="text" cols="30" rows="10"placeholder="write your note">${text}</textarea>
`
// saveNote();
newcard.querySelector("textarea").addEventListener(
    "focusout",
    function() {
        saveNote()
    }
)

newcard.querySelector("#delete").addEventListener("click",function(){
    newcard.remove();
    saveNote();
})
postcontainer.appendChild(newcard)
saveNote();

}



// document.querySelector("#save").addEventListener("click",saveNote)

function saveNote(){
    var notes=document.querySelectorAll(".card textarea")
    console.log(notes)
    var data=[];
    notes.forEach(
        (note)=>data.push(note.value))
    localStorage.setItem("note",JSON.stringify(data))
    console.log(data);
    if (data.length === 0) {
        localStorage.removeItem("note")
    } else {
        localStorage.setItem("note", JSON.stringify(data))
    }

}
(
    function (){
      
     const lsnote=JSON.parse(localStorage.getItem("note"))
     console.log(lsnote)
     if (lsnote === null) {
        addNote()
    } else {
        lsnote.forEach(
            (lsnote) => {
                addNote(lsnote)
            }
        )
    }

     
    }
)()
    