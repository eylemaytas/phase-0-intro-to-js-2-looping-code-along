
const names = ["Charlie", "Samip", "Ali"]
function writeCards(names, birthday) {
const messages = []
for(let i=0; i < names.length; i++){
    messages.push(`Thank you, ${names[i]}, for the wonderful ${birthday} gift!`)
}
return messages
}
console.log(writeCards(["Charlie", "Samip", "Ali"]))




function countDown(num) { 
    while (num>=0) {
        console.log(num--)
    }
        
    }
    countDown(10)















/* function countDown(num) { 
while (num>=0) {
    console.log(num--)
}
    
}
countDown(10)







const names= ["Charlie", "Samip", "Ali"];
function writeCards(names, birthday) {
    const messages= [];
for (let i=0; i <names.length; i++) {
    messages.push(`Thank you, ${names[i]}, for the wonderful ${birthday} gift!`)
}
return messages;
}
console.log(writeCards(["Charlie", "Samip", "Ali"],"birthday" ));
*/