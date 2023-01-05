const timer = {
  start() {
    const startTime = Date.now();

    setInterval(() => {
      //   console.log('start -> startTime', startTime);
      const currentTime = Date.now();

      console.log(currentTime - startTime);
    }, 1000);
  },
};

timer.start();
