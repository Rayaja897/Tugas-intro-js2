const names = [
    "Abigail", "Alexandra", "Alison",
    "Amanda", "Angela", "Bella",
    "Carol", "Caroline", "Carolyn",
    "Deirdre", "Diana", "Elizabeth",
    "Ella", "Faith", "Olivia", "Penelope"];

const searchName = (input, num, callback) => {
    let result = names.filter((name) => name.toLowerCase().indexOf(input.toLowerCase()) != -1);
    result = result.slice(0, num);
    callback(result);
}
const showResult = (result) =>{
    if (result.length === 0) {
        console.log("Data Not Founds.....");
    }else{
        console.log(result);
    }
}

searchName("an", 3, showResult)
