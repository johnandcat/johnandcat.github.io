var johnandcat = {
    chunk: function(array, size) { //将数组（array）拆分成多个size长度的区块，并将这些区块组成一个个数组。如果array无法被分割成全部等长的区块，那么最后剩余的元素将组成一个区块。
        var num = []
        for (var i = 0; i < array.length; i = i + size) {
            num.push(array.slice(i, i + size))
        }
        return num
    },
    compact: function (array) { //创建一个新数组，包含原数组中所有的非假值元素。例如false，null， 0，""，undefined，状语从句：NaN都是被认为的英文“假值”。
        var num = []
        for (var i = 0; i < array.length; i++){
            if (array[i]) {
                num.push(array[i])
            }
        }
        return num
    },
}

