async function main(){
    const countContainer = document.querySelector('#count-container');
    const incrementButton = document.querySelector('#increment-button');
    const decrementButton = document.querySelector('#decrement-button');

    let response = await fetch('http://127.0.0.1:9001/counter')
    let responseJSON = await response.json()

    console.log(responseJSON)

    let countValue = responseJSON.value;

    async function patchData(value){
    let patchData = await fetch('http://127.0.0.1:9001/counter', {
    method: 'PATCH',
    body: JSON.stringify ({
    value: countValue                                    
    }),
    headers: {
    'Content-Type': 'application/json'
    }
    })
    }

    console.log(patchData)

    function increment(){
        countValue++;
        countContainer.textContent = countValue;
        patchData(countValue)
    }

    function decrement(){
        countValue--;
        countContainer.textContent = countValue;
        patchData(countValue)
    }

    incrementButton.addEventListener('click', increment);
    decrementButton.addEventListener('click', decrement);
    countContainer.textContent = countValue;
}
main()