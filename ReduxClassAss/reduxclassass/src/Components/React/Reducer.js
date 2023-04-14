var initialdata = {
    name: "shubham",
};

const reducer = (storedata= initialdata, action)=>{
    if(action.type === "name"){
        return {
            name : action.username,
        };
    }
    return storedata;
}
export default reducer;