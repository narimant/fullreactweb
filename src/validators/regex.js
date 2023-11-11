const testEmail=(value)=>{
    const emailPattent = /^[a-z0-9\._]+@[a-z]+\.[a-z]{2,3}$/g
    return emailPattent.test(value)
}
const codeMelli=(value)=>{
      //codes
}
const testPhone=(value)=>{
    //codes
}

export default {testEmail,codeMelli,testPhone};