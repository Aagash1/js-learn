//helper methods



async function getUsers(){
    const userData=await fetch("https://jsonplaceholder.typicode.com/users");
    const users=await userData.json();
    const userNames=users.map((user)=>{
        return user.username;
    })
    userNames.forEach(user=>console.log(user));
    const user=userNames.find(user=>user=="Antonette");
    console.log(user);
    const updatedUsers=userNames.filter(user=>user!="Antonette");
    updatedUsers.forEach(user=>console.log(user));
}
getUsers();

//spread, every, some
const originalItems = [{ inStock: true }, { inStock: true }];
const items=[...originalItems,{inStock:false}];
const allAvailable = items.every(item => item.inStock);
const anyAvailable = items.some(item => item.inStock);
console.log(allAvailable,anyAvailable);


//