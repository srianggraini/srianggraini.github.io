// function tambah(a,b){
//         var huruf = 'a b c d e f g h i j k l m n o p q r s t u v w x y z'.split('')
//         var cari = a.split('') // ['a','b']
//         var index = [] // [0,1]
//         for(var i=0; i<cari.length; i++){
//             var hurufcari = cari[i]
//             var indexhurufcari = huruf.indexOf(hurufcari)
//             index.push(indexhurufcari)
//         }
//         var output = ''
//         for(var j=0; j< index.length; j++){
//             var indexhuruf = index[j]
//             output += huruf[indexhuruf + b ]
//         }
//         return output
//     }
    
//     console.log(tambah('g' , 2)); // h

// function middle(plat,tanggal){
//         var nomor = plat.split(' ')
//         var plat = nomor[1]
    
//         if(parseInt(plat)% 2 ==0 && tanggal %2 ==0){
//             return 'boleh masuk'
//         }else if(parseInt(plat) %2 !=0 && tanggal %2 !=0){
//             return 'boleh masuk'
//         }else{
//             return 'tidak boleh masuk'
//         }
//     }
//     console.log(ganjilgenap('B 1123 SS' , '3'));

function Mean(arr){
    var arrHasilSorting = arr.sort(function(a,b){return a-b})
    if(arrHasilSorting.length % 2 ==0){
        var indeks1 = arrHasilSorting.length / 2 
        var indeks2 = indeks1 - 1
        return (arrHasilSorting[indeks1] + arrHasilSorting[indeks2]) / 2

    }else{
        var indeksTengah = parseInt(arrHasilSorting.length / 2) 
        return arrHasilSorting[indeksTengah]
    }
}

var arr = [Test]
console.log(arr.sort(function(a,b){
    return a-b
}))
console.log(Mean(arr))