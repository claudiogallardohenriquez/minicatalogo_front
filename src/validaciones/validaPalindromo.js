export default function esPalindromo( value ){
    let esPalidromo = false;
    if(value){
        let removeChar = value.replace(/[^A-Z0-9]/ig, "").toLowerCase();
        let checkPalindrome = removeChar.split('').reverse().join('');
        
        if(removeChar === checkPalindrome){
            esPalidromo =  true;
        }
        return esPalidromo;
    }
};