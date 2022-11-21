function checkError(errorObj=[]){
    if( errorObj && errorObj.length > 0 ) return errorObj[0];
}

export default checkError