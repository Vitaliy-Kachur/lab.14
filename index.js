function celsFm(min) {
    const hours = Math.floor(min / 60);
    const minutes = min % 60;
  
    if (hours === 1 || hours === 21 || hours === 31 || hours === 41 || hours === 51 || hours === 61 || hours === 71 || hours === 81 || hours === 91) {
      return `${hours} година ${minutes} хвилин`;
    } else if ((hours > 1 && hours < 5) || (hours > 21 && hours < 24) || (hours > 31 && hours < 35) || (hours > 41 && hours < 45) || (hours > 51 && hours < 55) || (hours > 61 && hours < 65) || (hours > 71 && hours < 75) || (hours > 81 && hours < 85) || (hours > 91 && hours < 95)) {
      return `${hours} години ${minutes} хвилин`;
    } else {
      return `${hours} годин ${minutes} хвилин`;
    }
  }
  
  let min;
  do {
    min = prompt("Введіть ціле число хвилин:");
  } while (min === "" || isNaN(min) || !Number.isInteger(Number(min)) || Number(min) < 0);
  
  console.log(celsFm(Number(min)));
