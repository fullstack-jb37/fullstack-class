const reg = /[a-z]/gi

console.log(reg)

const reg1 = new RegExp(/[a-z]/, 'ig')

console.log(reg1);


/*

    email: (name)@(domain).(extension)(.again)

     name: any letters, digits, dots, hyphens
     domain: any letters, digits, hyphens
     extension: any letters
     again: a dot and than any letters

*/

const patterns = {
    email: /^[\w.-]+@[\w-]+\.[a-z]{2,4}(.[a-z]{2,4})?$/i,
    phoneNumber: /^\d{10}$/,
    password: /[\w@#&]{8,}/,
    username: /^\w{5,8}$/
}

const data = {
    email: ['nissank52@gmail.com', 'kfir82@gmail.', 'ami-r@gmail.co-'],
    phoneNumber: [8987865849, '055443265'],
    password: ['ewrtwe2@', '@@'],
    username: ['yossiA', 'tomerVaaknin']   
}

function validate(regex, str){
    const test = regex.test(str)
    console.log(regex, str, test)
    return test
}

for(const key in data){
    data[key] = data[key].filter(function(item){
        return validate(patterns[key], item)
    })
}

console.log(data)