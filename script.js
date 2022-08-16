let usersWord = ""
let oddList = document.getElementById("odd")
let evenList = document.getElementById("even")
// console.log(evenList)

function changeWord(element) {
    usersWord = element.value

    console.log(usersWord)
  }

  let preventEnter = (e) => {
    console.log(e.keyCode)
    if(e.keyCode === 13) {
        handleSubmit()
        return false
    }
  }

  function handleSubmit() {
    let newListItem = document.createElement('LI')
    newListItem.innerText = usersWord

    if(usersWord.length % 2 === 0) {
        evenList.appendChild(newListItem)
    } else {
        oddList.appendChild(newListItem)
    }


    usersWord = ""
    document.getElementById("even-odd-form").reset()
  }

