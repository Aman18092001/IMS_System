const mongoose=require('mongoose');

const Database=()=>{
    mongoose.connect('mongodb://localhost/ISM')
       .then(()=>console.log('Database is successfully connected'))
       .catch((err)=> console.log('error in database***',err))
}

module.exports=Database;