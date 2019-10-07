class Participant {
  constructor(name) {
    this.name = name;
    this.differentGroup = [];
    this.group = null;
  }

  clone() {
    const clonie = new Participant(this.name);
    this.differentGroup.forEach((part) => clonie.differentGroup.push(part));
    clonie.group = this.group;
    return clonie;
  }

  addDifferentGroup(participantData) {
    const index = this.differentGroup.indexOf(participantData);
    if(index === -1) {
      this.differentGroup.push(participantData);
    }
  }

  removeDifferentGroup(participantData) {
    const index = this.differentGroup.indexOf(participantData);
    if(index !== -1) {
      this.differentGroup.splice(index, 1);
    }
  }
}

export default Participant;
