import React from 'react';

function GroupsTable({groupsData}) {
  if(!groupsData.length) {
    return null;
  }

  const tableRows = [];
  let hasParticipant = true;
  let i = 0;

  while(hasParticipant) {
    if(!groupsData[0].participants[i]) {
      hasParticipant = false;
      continue;
    }

    tableRows.push(
      {
        id: i,
        items: groupsData.map((group) => {
          if(!group.participants[i]) {
            hasParticipant = false;
            return '';
          }

          return group.participants[i].name;
        })
      }
    );

    i++;
  }

  return (
    <div className="table-container">
      <table className="table table-bordered">
        <thead className="thead-dark">
          <tr>
            {groupsData.map((group) => <th key={group.name}>{group.name}</th>)}
          </tr>
        </thead>
        <tbody>
          {
            tableRows.map(({id, items}) => (
              <tr key={id}>
                {items.map((groupName, j) => (groupName ? <td key={groupName}>{groupName}</td> : <td key={`${id}_${j}`}></td>))}
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
}

export default GroupsTable;
