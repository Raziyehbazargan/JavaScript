


  //-----------------------------------------------------------------------------------
  const one = () => { console.log("I am One")};
  const two = () => { 
      return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve("I am Two")
          }, 3000);
      });
  };

  const three = () => { console.log("I am three")};

  const callMe = async () => {
      console.log(one());
      console.log(await two());
      console.log(three());
  }

  callMe();