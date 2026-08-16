const itemLocater=(sequence, item)=>{
    //implying that we have not yet foound the target item
 let targetItem = false;
 //we are checking one thing/item at a time while comparing 
 // it with the target item
 for(thing of sequence){
    //if the target item is seen among the things in the sequence
    //, then we return/keep that thing aside
    if(targetItem===true)return thing
    //if the thing is exactly the specified item, 
    // then the target item has been located
    if(thing === item) targetItem = true
 }
 //if all the comparison hasn't yielded to what we are looking for 
 //...then we are doomed, the mission has failed and therefore we return 
 //undefined and go back to the village.
 return undefined
}

//imagine a prince set out to look for a wife material gal in a group of 
//gals in a certain village, he has a specific gal in mind with certain qualities.
//(Loop)...He has to observe one gal at a time while comparing her with her
//..dream/target gal attributes.
//(First if...)Once he sees a gal with the targeted attributes, he pusts aside...
//(second if...)Once those attributes are specifically what he wants
//..target dream gal is found 
//(return undefined) if he goes through the entire group of gals and does not see any, he 
//..quits and leaves the village

function searchForAqueen(groupOfGals, princess){
    let dreamGal = false;
    for(gal of groupOfGals){
        if(dreamGal === true) return gal
        if(gal === princess) dreamGal = true
    }
    return undefined
}

