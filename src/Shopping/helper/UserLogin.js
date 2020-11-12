import jwt from 'jsonwebtoken';
const JWT_KEY = '123456789';
// cong viec  doc du lieu token  tu localStorage
// kiem tra neu token  trong localStorage co ton tai => user da login 
// sau do giai ma chuoi token de lay thong tin co ban cua user
const  getInfoUserLogin = ()=>{
    const token = localStorage.getItem('token');
    // console.log(token)
    if(token){
      // giai ma token
       const decoded = jwt.verify(token, JWT_KEY);
       console.log(decoded)  
       return decoded;
    }
    return false;
}
export const helper = {
    getInfoUserLogin
}