const bcrypt = require('bcrypt');

const encryptDecrypt = {
    hashPwd(orignalPwd){
       const hashedPwd =  bcrypt.hashSync(orignalPwd,10);
       return hashedPwd;
    },
    matchPwd(orignalPwd,hashedPwd){
        const matched = bcrypt.compareSync(orignalPwd,hashedPwd);
        return matched;
    }

}

module.exports = encryptDecrypt;