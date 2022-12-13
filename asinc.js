const fs = require("fs")

async function main(){

    function readFile(){
        return new Promise((resolve, reject) => {
            fs.readFile("talk.md", "utf-8", (err, data)=>{
                if (err) {
                    reject(err);
                    return
                }
                resolve(data)
            })
        })
        
    }
    const minhaPromise = await readFile()
    console.log(minhaPromise)
    console.log("--------- por ultimo")
}
main()
