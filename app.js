async function featchData(){
    try {
        const res = await fetch("https://www.reddit.com/r/reactjs.json")
        const data  =  await res.json();
        console.log(data.data.children)

    } catch (error) {
        console.log(error)
    }
}

featchData()