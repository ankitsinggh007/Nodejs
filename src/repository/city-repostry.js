const {City} =require('../models/index');
class   CityRepositry{
async creatCity({name}){
    try{
    await City.create({name});
}
catch(err){
    throw err;
}
}

async deleteCity({city_id}){
try{    
    await City.destroy({
        where:{
            id:city_id
        }
    });
    
    
}catch(err){
throw err;
}
}



}
module.exports=CityRepositry;
