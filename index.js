const deleteMessage = id => {
    const removeElement = document.getElementById(id)
    removeElement.remove()
    }
    
    const handleJokeSubmit = () => {
        let url ="https://api.icndb.com/jokes/random"
        fetch(url).then(responses => responses.json())
        .then(data => {
                index++ 
                const newJoke = document.createElement("p")
                newJoke.innerHTML = ` <div class="message" id="${index}">
                <span>${time}</span>
                <span class="sender">Fact</span>
                <p>${data.value.joke.trim()}</p>
                <span class="delete" onclick={deleteMessage(${index})}>❌</span>
                </div>`
    
                message.appendChild(newJoke)
            })
    
    
    }
    
    button.addEventListener('click', handleJokeSubmit   )  //eventListener goes outside of funciton
    
    