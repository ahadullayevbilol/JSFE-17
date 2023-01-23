let users = [
    {
        name: 'Alex'
    },
    {
        name: 'John'
    },
    {
        name: 'Oliver'
    },
    {
        name: 'Leo'
    },
    {
        name: 'James'
    },
    {
        name: 'Robert'
    },
    {
        name: 'Michael'
    },
    {
        name: 'Joseph'
    },
]

function checkUsersNameLength() {
    for(let i = 0; i < users.length; i++){
        if(users[i].name.length > 5){
            console.log(`${users[i].name} ismi 5 ta harfdan ko'p `);
        }else if(users[i].name.length < 5) {
            console.log(`${users[i].name} ismi 5 ta harfdan kam `)
        }else{
            console.log(`${users[i].name} ismi 5 ta harfdan iborat `)
        }
    }

}
checkUsersNameLength()