console.log("Start");

setTimeout(function cb() {
    console.log("time out invkoed")
}, 5000);

console.log("end"); //because js waits for none. it calls the setTimeout API and creates  a call back the goes the next line


//output
/**
Start
end
time out invkoed
 
 */