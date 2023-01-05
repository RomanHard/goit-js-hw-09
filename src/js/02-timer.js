const timer = {
  start() {
    const startTime = Date.now();

    setInterval(() => {
      //   console.log('start -> startTime', startTime);
      const currentTime = Date.now();
    }, 1000);
  },
};

timer.start();
