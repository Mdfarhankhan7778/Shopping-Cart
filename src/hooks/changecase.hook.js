

export function useChangeCase(str){

    var firstchar = str.charAt(0);
    var restchar = str.substring(1);
    var sentence = firstchar.toUpperCase() + restchar.toLowerCase();
    return sentence;
}