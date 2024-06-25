const findTheOldest = function (people) {
  return people.reduce((oldest, current) => {
    const oldestAge = oldest.yearOfDeath
      ? oldest.yearOfDeath - oldest.yearOfBirth
      : new Date().getFullYear() - oldest.yearOfBirth;
    const currentAge = current.yearOfDeath
      ? current.yearOfDeath - current.yearOfBirth
      : new Date().getFullYear() - current.yearOfBirth;
    return currentAge > oldestAge ? current : oldest;
  }, people[0]);
};

// Do not edit below this line
module.exports = findTheOldest;
