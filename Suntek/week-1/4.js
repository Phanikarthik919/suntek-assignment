function updateStatus(loggedIn,profileComplete){
  if(!isLoggedIn) console.log("please login")
  else if(isLoggedIn && !isProfileComplete) console.log("complete your profile")
  else if(isLoggedIn && isProfileComplete) console.log("welcome back!")
return "status updated"
}
let isLoggedIn = true
let isProfileComplete = false
result = updateStatus(isLoggedIn,isProfileComplete)
console.log(result)