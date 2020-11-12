import jwt from 'jsonwebtoken';
const JWT_KEY = '123456789';
const data = [
    {
        id:1,
        name:"Samsung Galaxy Note 20 Ultra",
        price:1000,
        image:"https://cdn.tgdd.vn/Products/Images/42/220522/samsung-galaxy-note-20-ultra-vangdong-400x460-400x460.png",
        qty:10,
        desc:"Kha dep"
    },
    {
        id:2,
        name:"Iphone 11 Pro",
        price:2000,
        image:"https://cdn.tgdd.vn/Products/Images/42/200533/iphone-11-pro-max-black-400x460.png",
        qty:15,
        desc:"Rat dep" 
    },
    {
        id:3,
        name:"Oppo kui bap",
        price:500,
        image:"https://cdn.tgdd.vn/Products/Images/42/220654/oppo-a92-tim-400x460-400x460.png",
        qty:30,
        desc:"Dep binh thuong"
    }
];
const getDataById = (id) => (data.filter((item) => item.id === id));

const checkLoginUser = (user,pass)=>{
    var token = null;
    if(user === 'admin' && pass === '123'){
       token = jwt.sign({exp:Math.floor(Date.now()/1000 + (60*60)),
        data: user }, 
        JWT_KEY);
       console.log(token);
       localStorage.setItem('token',token);

    }
    return token;
}

export const api = {
    product : data,
    getDataById,
    checkLoginUser
}