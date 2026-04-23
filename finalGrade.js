const finalGrade = (examGrade, numOfPro)=>{
    if(examGrade>90 || numOfPro>10){
        return 100
    }else if(examGrade>75 && numOfPro<=5){
        return 90
    }else if(examGrade>50 && numOfPro<=2){
        return 75
    }else{
        return 0
    }
}
console.log(finalGrade(55, 20))