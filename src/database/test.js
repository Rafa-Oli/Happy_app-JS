const Database= require('./db')
const saveOrphanage= require('./saveOrphanage')
Database.then(async db => {


//inserir dados na tabela
await saveOrphanage(db,{ 
    lat: "-7.2290248",
    lng: "-35.903706",
    name: "Lar de amor",
    description: "sfsdfgsgf",
    images:[
"https://images.unsplash.com/photo-1600711725407-2ea4733a38c3?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
"https://images.unsplash.com/photo-1602571833724-984f81111ce1?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
    ].toString,
    instructions: "sjfsajfjdfnsdngvjsodg",
    opening_hours:"dsfsdgd",
    open_on_weekends:"1"
})


//consultar dados da tabela
const selectedOrphanage= await db.all("SELECT * FROM orphanages")
console.log(selectedOrphanage)


//consultar somente 1 orphanato, pel id
const orphanage= await db.all("SELECT * FROM orphanages where id = '3' " )
console.log(orphanage)
})