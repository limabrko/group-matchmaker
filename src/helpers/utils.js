/**
 * Get random number between min (included) and max (excluded)
 * @param {number} min 
 * @param {number} max 
 * @param {number[]} blockedValues 
 */
function getRndInteger(min, max, blockedValues = []) {
  const selectedValue = Math.floor(Math.random() * (max - min)) + min;

  if (blockedValues.indexOf(selectedValue) !== -1) {
    return getRndInteger(min, max, blockedValues);
  }

  return selectedValue;
}

/**
 * Shuffles array in place
 * @param {Array} a
 */
function shuffleArray(a) {
  for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/**
 * Create randomized groups based on preferences
 * @param {object[]} participants 
 * @param {number} groupTotal 
 */
function createGroups(participants, groupTotal) {
  const groups = [];
  const participantsPerGroup = Math.ceil(participants.length / groupTotal);

  // Reset participants groups
  participants.forEach((participant) => {
    participant.group = null;
  });

  // Create groups
  for (let i = 0; i < groupTotal; i++) {
    groups.push({
      name: `그룹${String.fromCharCode(97 + i)}`,
      participants: []
    });
  }

  // Create priority list
  const priorityParticipants = participants.filter((participant) => participant.differentGroup.length !== 0);

  for (let i = 0; i < priorityParticipants.length; i++) {
    const curParticipant = priorityParticipants[i];
    const unavailableGroups = curParticipant.differentGroup.reduce((acc, differentGroupPart) => {
      if(differentGroupPart.group && acc.indexOf(differentGroupPart.group) === -1) {
        acc.push(differentGroupPart.group);
      }

      return acc;
    }, []);
    const unavailableGroupsIndex = unavailableGroups.map((unavailableGroup) => groups.indexOf(unavailableGroup));

    const selectedGroupIndex = getRndInteger(0, groups.length, unavailableGroupsIndex);
    const selectedGroup = groups[selectedGroupIndex];

    curParticipant.group = selectedGroup;
    selectedGroup.participants.push(curParticipant);
  }

  // Select other participants
  let missingParticipants = participants.filter((participant) => participant.group === null);
  let i = 0;

  while(missingParticipants.length !== 0) {
    for(let j = 0; j < groupTotal; j++) {
      if(!groups[j].participants[i]) {
        if(!missingParticipants.length) {
          continue;
        }
  
        const selectedParticipantIndex = getRndInteger(0, missingParticipants.length);
        const selectedParticipant = missingParticipants[selectedParticipantIndex];
        selectedParticipant.group = groups[j];
        groups[j].participants.push(selectedParticipant);
        missingParticipants.splice(selectedParticipantIndex, 1);
      }
    }

    i++;
  }

  // Shuffle participants inside the group
  groups.forEach((group) => {
    shuffleArray(group.participants);
  });

  return groups;
}

export default {
  getRndInteger,
  createGroups
};
