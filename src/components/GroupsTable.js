import React from 'react';

function GroupsTable({groupsData}) {
  if(!groupsData.length) {
    return null;
  }

  const tableRows = [];
  let hasParticipant = true;
  let i = 0;

  while(hasParticipant) {
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
    <div>
      <table>
        <thead>
          <tr>
            {groupsData.map((group) => <th key={group.name}>{group.name}</th>)}
          </tr>
        </thead>
        <tbody>
          {
            tableRows.map(({id, items}) => {
              return (
                <tr key={id}>
                  {items.map((groupName, j) => groupName ? <td key={groupName}>{groupName}</td> : <td key={`${id}_${j}`}></td>)}
                </tr>
              );
            })
          }
        </tbody>
      </table>
    </div>
  );
}

export default GroupsTable;
