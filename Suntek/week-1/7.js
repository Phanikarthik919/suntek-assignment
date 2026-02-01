let skills = ['react','angular','nodejs','java']

function findSkill(skills,skillName){
  for(let i=0 ; i<skills.length ; i++){
    if(skills[i] == skillName){
      return i;
    }
  }
  return "Skill NOT Found !!"
}
let result1 = findSkill(skills,"java")
let result2 = findSkill(skills,"python")
console.log("The index of java is : ",result1)
console.log("The index of python is : ",result2)