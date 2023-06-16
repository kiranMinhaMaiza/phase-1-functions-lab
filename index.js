// Code your solution in this file!

function distanceFromHqInBlocks(pickupLocation) {
    const hqLocation = 42;
    const distance = Math.abs(hqLocation - pickupLocation);
    return distance;
  }
  
  function distanceFromHqInFeet(pickupLocation) {
    const blocks = distanceFromHqInBlocks(pickupLocation);
    const feet = blocks * 264;
    return feet;
  }
  
  function distanceTravelledInFeet(startBlock, endBlock) {
    const blocks = Math.abs(endBlock - startBlock);
    const feet = blocks * 264;
    return feet;
  }
  
  function calculatesFarePrice(start, destination) {
    const distanceInFeet = distanceTravelledInFeet(start, destination);
  
    if (distanceInFeet <= 400) {
      return 0;
    } else if (distanceInFeet > 400 && distanceInFeet <= 2000) {
      const fare = (distanceInFeet - 400) * 0.02;
      return fare;
    } else if (distanceInFeet > 2000 && distanceInFeet <= 2500) {
      return 25;
    } else if (distanceInFeet > 2500) {
      return 'cannot travel that far';
    }
  }
  