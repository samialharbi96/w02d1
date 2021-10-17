const addToArray = function (array, string) {

    array.push(string)
    return array
}


const convertToString = function (array) {
  // TODO: Your code here
  return array.join("@")

};

const updateOrCreate = function (array, value, index) {
    // TODO: Your code here
if (index > array.length){
    return "there is no element to updated in this index"
}else{
    array[index] =value
    return array 

}


};


const onlyString = function (array) {
    // TODO: Your code here
  };

