console.log("Hello world!")
console.log("Hai Zan!")

async function test() {
    try {
        console.log("bymaximise")
    } catch (error) {
        console.log("error", error)
    }
}

test().then(console.log(test))
