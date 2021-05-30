//https://www.youtube.com/watch?v=IrHmpdORLu8

//Normal script tag no async or defer
/*
  broswer start parsing html, as soon as browser encounter a script tag, it fetch the script, execute it 
  and then continue parsing HTML

  (1)parsing HTML --> (2)fetching --> (3)executing --> (4)Parsing HTML again
*/ 


// the script to be fetch from the network asyncronosly
//<script async src="google.com"></script>
/*
  async: does not garantee executing scripts in order, so if we have multiple scripts dependent of each other async is not a good option
  broswer start parsing html and fetching the script will run in a async manner, 
  as soon as script is available. start executing script, and after that continue parsing HTML

(1)parsing HTML --------------> (3)Parsing HTML again          
   (1)fetching -----> (2)executing 

*/ 

// using defer in the script tag, will let the script to be fetch from the network asyncronosly
//<script defer src="google.com"></script>
/*
  defer: maintains the order of execution of scripts.
  broswer start parsing html goes on and fetching the script in pararell, 
  once parsing HTML is complete start executing script

(1)parsing HTML---------------------Done        
     (1)fetching ---------> (2) executing 
*/ 