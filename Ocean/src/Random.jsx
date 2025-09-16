function Random() {

    let num = Math.random() * 100;

    return <h2>Random number is : {Math.round(num)}</h2>
}

export default Random;