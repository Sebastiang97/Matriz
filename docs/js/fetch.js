
const getData = async () =>{
    
    const f = await fetch('https://sebastiang97.github.io/Matriz/data/database.json');
    const res = await f.json();
    return res;
    
}

export default getData;
