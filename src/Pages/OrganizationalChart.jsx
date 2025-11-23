import React from 'react';
import './OrganizationalChart.css';

const OrganizationalChart = () => {
  const organizationData = {
    level1: [
      { id: 1, title: "Chairman", type: "top" },
      { id: 2, title: "Managing Director", type: "top" },
      { id: 3, title: "Director", type: "top" },
      { id: 4, title: "General Manager", type: "top" }
    ],
    level2: [
      { id: 5, title: "Manager (Recruitment)", parentId: 4, type: "manager" },
      { id: 6, title: "Manager (Admin)", parentId: 4, type: "manager" },
      { id: 7, title: "Manager (Accounts)", parentId: 4, type: "manager" },
      { id: 8, title: "Manager (Travel)", parentId: 4, type: "manager" }
    ],
    level3: [
      { id: 9, title: "Instructors", parentId: 5, type: "staff" },
      { id: 10, title: "PRO", parentId: 6, type: "staff" },
      { id: 11, title: "Accountants (Officer)", parentId: 7, type: "staff" },
      { id: 12, title: "Executive Officer", parentId: 8, type: "staff" }
    ],
    level4: [
      { id: 13, title: "Asst. Accountants (Officer)", parentId: 11, type: "staff" },
      { id: 14, title: "Officer (Admin)", parentId: 10, type: "staff" },
      { id: 15, title: "Officer (Embassy Relation)", parentId: 10, type: "staff" }
    ]
  };

  const Node = ({ title, type, isLastInRow = false }) => (
    <div className={`node ${type} ${isLastInRow ? 'last-in-row' : ''}`}>
      <div className="node-content">
        <span>{title}</span>
      </div>
    </div>
  );

  const Connector = ({ hasChildren = false }) => (
    <div className="connector">
      <div className="vertical-line"></div>
      {hasChildren && <div className="horizontal-line"></div>}
    </div>
  );

  return (
    <div className="organizational-chart">
      <h1>Organization Structure</h1>
      
      {/* Level 1 - Top Management */}
      <div className="level level-1">
        <div className="nodes-row">
          {organizationData.level1.map((member, index) => (
            <React.Fragment key={member.id}>
              <Node 
                title={member.title} 
                type={member.type}
                isLastInRow={index === organizationData.level1.length - 1}
              />
            </React.Fragment>
          ))}
        </div>
        <Connector hasChildren={true} />
      </div>

      {/* Level 2 - Managers */}
      <div className="level level-2">
        <div className="nodes-row">
          {organizationData.level2.map((manager, index) => (
            <React.Fragment key={manager.id}>
              <Node 
                title={manager.title} 
                type={manager.type}
                isLastInRow={index === organizationData.level2.length - 1}
              />
            </React.Fragment>
          ))}
        </div>
        <Connector hasChildren={true} />
      </div>

      {/* Level 3 - Staff */}
      <div className="level level-3">
        <div className="nodes-row">
          {organizationData.level3.map((staff, index) => (
            <React.Fragment key={staff.id}>
              <Node 
                title={staff.title} 
                type={staff.type}
                isLastInRow={index === organizationData.level3.length - 1}
              />
            </React.Fragment>
          ))}
        </div>
        <Connector hasChildren={true} />
      </div>

      {/* Level 4 - Junior Staff */}
      <div className="level level-4">
        <div className="nodes-row">
          {/* Empty space for first two columns */}
          <div className="node-spacer"></div>
          <div className="node-spacer"></div>
          
          {/* Accountants column */}
          <div className="node-column">
            <Node 
              title={organizationData.level4[0].title} 
              type={organizationData.level4[0].type}
            />
          </div>
          
          {/* PRO column with two subordinates */}
          <div className="node-column">
            <Node 
              title={organizationData.level4[1].title} 
              type={organizationData.level4[1].type}
            />
            <Node 
              title={organizationData.level4[2].title} 
              type={organizationData.level4[2].type}
              isLastInRow={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrganizationalChart;