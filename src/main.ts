let word:string = "Hello World!"
let num:number = 3
let bool:boolean = true
console.log(word)


function func():any{
    return ""
    
}

const myFunc = ():string => {
    return ""
}


function main(x:number | string) {
    console.log("main","x",x)
}
function test1(x: any, y: any) {
    console.log("test1", "x",x,"y",y)
}
function test2(x: string, y: number) {
    console.log("test2","x",x,"y",y)
}
function test3<T>(x: T) {
    console.log("test3","x",x)
}
main("abc")
main(12345)
test1("abc",123)
test2("def",456)
test3(789)
