const wordSearch = (letters, word) => { 

    if(letters.length === 0 || !word) return false;
    
    const horizontalJoin = letters.map(ls => ls.join(''));
    
    for (l of horizontalJoin) { 
        if (l.includes(word)) return true
    }    
    
    const verticalArray = transpose(letters);  
    const verticalJoin = verticalArray.map(ls => ls.join(''));
    
    for (l of verticalJoin) { 
        if (l.includes(word)) return true;
    }

    return false;
}
 
const transpose = function(matrix) {
    
    let output = [];
    for (let i = 0; i < matrix[0].length; i++) {
        let newRow = [];  
        for (let j = 0; j < matrix.length; j++){
        newRow.push(matrix[j][i]);
        }
        output.push(newRow);
    }
    return output;
};

   

module.exports = wordSearch;