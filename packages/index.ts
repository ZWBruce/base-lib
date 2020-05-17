import {VueConstructor} from 'vue';
// const fs = require('fs');
// const path = require('path');
//
// let dirs = fs.readdirSync('./');
// dirs.forEach(dir=>{
//     if(fs.statSync(dir).isDirectory()){
//         let cmps = fs.readdirSync(dir)
//         cmps.forEach(cmp=>{
//             let fileName = cmp.replace('.vue','');
//             let comp = require(path.resolve(`./${dir}/${cmp}`))
//             console.log(comp);
//             Vue.component(fileName,comp);
//         })
//
//         console.log('???',cmps);
//     }
// })

let dirs = require.context('@')
let arr = dirs.keys().filter(t=>t.endsWith('.vue') && t.indexOf('lib-') > -1);
let fileList = [];

arr.forEach(t=>{
    let ar = t.split('/');
    let fileName = ar[ar.length - 1].replace('.vue','').replace('lib-','');
    ar.splice(0,1);
    let cmp = require(`@/${ar.join('/')}`)
    fileList.push({fileName,cmp})

})
console.log(arr);

export default function install(Vue:VueConstructor){
    fileList.forEach(t=>{
        Vue.component(t.fileName, t.cmp.default || t.cmp);
    })
}