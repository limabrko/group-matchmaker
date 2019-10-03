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
  const priorityList = [];
  for (let i = 0; i < participants.length; i++) {
    const curParticipant = participants[i];
    const curParticipantPriority = [curParticipant];

    curParticipant.differentGroup.forEach((differentGroupPart) => {
      curParticipantPriority.push(differentGroupPart);
    });

    if (curParticipantPriority.length > 1) {
      priorityList.push(curParticipantPriority);
    }
  }

  // Select priority list first
  priorityList.forEach((priorityParticipants) => {
    let groupsUnavailable = [];

    for (let i = 0; i < priorityParticipants.length; i++) {
      if (!priorityParticipants[i].group) {
        const selectedGroupIndex = getRndInteger(0, groups.length, groupsUnavailable);
        const selectedGroup = groups[selectedGroupIndex];
        groupsUnavailable.push(selectedGroupIndex);

        priorityParticipants[i].group = selectedGroup;
        selectedGroup.participants.push(priorityParticipants[i]);

        if(groupsUnavailable.length === groups.length) {
          groupsUnavailable = [];
        }
      }
    }
  });

  // Select other participants
  let missingParticipants = participants.filter((participant) => participant.group === null);

  groups.every((group) => {
    if(group.participants.length >= participantsPerGroup) {
      return true;
    }

    for(let i = group.participants.length; i < participantsPerGroup; i++) {
      if(!missingParticipants.length) {
        return false;
      }

      const selectedParticipantIndex = getRndInteger(0, missingParticipants.length);
      const selectedParticipant = missingParticipants[selectedParticipantIndex];
      selectedParticipant.group = group;
      group.participants.push(selectedParticipant);
      missingParticipants.splice(selectedParticipantIndex, 1);
    }
  });

  return groups;
}

export default {
  getRndInteger,
  createGroups
};
