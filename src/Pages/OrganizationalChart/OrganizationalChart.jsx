import React from "react";
import "./OrganizationalChart.css";

const OrganizationalChart = () => {
  return (
    <div className="org-chart-container">
      <div className="org-chart-page">
        <div className="chart-container">
          <svg
            width="900"
            height="600"
            viewBox="0 0 900 600"
            className="org-chart-svg"
            xmlns="https://i.ibb.co.com/PGgNqCLk/man-person-icon.png"
          >
            {/* Vertical connecting lines */}
            {/* <line
              x1="450"
              y1="80"
              x2="450"
              y2="140"
              stroke="#333"
              strokeWidth="2"
            /> */}
            {/* <line
              x1="450"
              y1="220"
              x2="450"
              y2="280"
              stroke="#333"
              strokeWidth="2"
            /> */}
            <line
              x1="450"
              y1="360"
              x2="450"
              y2="420"
              stroke="#333"
              strokeWidth="2"
            />

            {/* Horizontal connecting lines from General Manager to Managers */}
            {/* <line
              x1="200"
              y1="140"
              x2="700"
              y2="140"
              stroke="#333"
              strokeWidth="2"
            /> */}

            {/* Vertical lines from horizontal line to Managers
            <line
              x1="200"
              y1="140"
              x2="200"
              y2="180"
              stroke="#333"
              strokeWidth="2"
            />
            <line
              x1="300"
              y1="140"
              x2="300"
              y2="180"
              stroke="#333"
              strokeWidth="2"
            />
            <line
              x1="450"
              y1="140"
              x2="450"
              y2="180"
              stroke="#333"
              strokeWidth="2"
            />
            <line
              x1="600"
              y1="140"
              x2="600"
              y2="180"
              stroke="#333"
              strokeWidth="2"
            /> */}

            {/* Horizontal lines from Managers to their teams */}
            <line
              x1="150"
              y1="280"
              x2="750"
              y2="280"
              stroke="#333"
              strokeWidth="2"
            />

            {/* Vertical lines from horizontal line to Staff */}
            <line
              x1="150"
              y1="280"
              x2="150"
              y2="320"
              stroke="#333"
              strokeWidth="2"
            />
            {/* <line
              x1="250"
              y1="280"
              x2="250"
              y2="320"
              stroke="#333"
              strokeWidth="2"
            /> */}
            <line
              x1="350"
              y1="280"
              x2="350"
              y2="320"
              stroke="#333"
              strokeWidth="2"
            />
            {/* <line
              x1="450"
              y1="280"
              x2="450"
              y2="320"
              stroke="#333"
              strokeWidth="2"
            /> */}
            <line
              x1="550"
              y1="280"
              x2="550"
              y2="320"
              stroke="#333"
              strokeWidth="2"
            />
            {/* <line
              x1="650"
              y1="280"
              x2="650"
              y2="320"
              stroke="#333"
              strokeWidth="2"
            /> */}
            <line
              x1="750"
              y1="280"
              x2="750"
              y2="320"
              stroke="#333"
              strokeWidth="2"
            />

            {/* Lines from PRO to Officers */}
            <line
              x1="350"
              y1="360"
              x2="300"
              y2="420"
              stroke="#333"
              strokeWidth="2"
            />
            <line
              x1="350"
              y1="360"
              x2="400"
              y2="420"
              stroke="#333"
              strokeWidth="2"
            />

            {/* Level 1 - Top Row (Single box) */}
            <rect
              x="400"
              y="30"
              width="100"
              height="40"
              fill="#2E86AB"
              stroke="#333"
              strokeWidth="1.5"
              rx="5"
            />
            <text
              x="450"
              y="55"
              textAnchor="middle"
              fontSize="12"
              fontWeight="bold"
              fill="#fff"
            >
              Chairman
            </text>

            {/* Level 2 - Second Row */}
            <rect
              x="380"
              y="100"
              width="140"
              height="40"
              fill="#2E86AB"
              stroke="#333"
              strokeWidth="1.5"
              rx="5"
            />
            <text
              x="450"
              y="125"
              textAnchor="middle"
              fontSize="12"
              fontWeight="bold"
              fill="#fff"
            >
              Managing Director
            </text>

            {/* Level 3 - Third Row */}
            <rect
              x="380"
              y="180"
              width="140"
              height="40"
              fill="#2E86AB"
              stroke="#333"
              strokeWidth="1.5"
              rx="5"
            />
            <text
              x="450"
              y="205"
              textAnchor="middle"
              fontSize="12"
              fontWeight="bold"
              fill="#fff"
            >
              Director
            </text>

            {/* Level 4 - Fourth Row */}
            <rect
              x="380"
              y="260"
              width="140"
              height="40"
              fill="#A23B72"
              stroke="#333"
              strokeWidth="1.5"
              rx="5"
            />
            <text
              x="450"
              y="285"
              textAnchor="middle"
              fontSize="12"
              fontWeight="bold"
              fill="#fff"
            >
              General Manager
            </text>

            {/* Level 5 - Managers Row */}
            <rect
              x="150"
              y="320"
              width="120"
              height="40"
              fill="#A23B72"
              stroke="#333"
              strokeWidth="1.5"
              rx="5"
            />
            <text x="210" y="345" textAnchor="middle" fontSize="11" fill="#fff">
              Manager (Recruitment)
            </text>

            <rect
              x="280"
              y="320"
              width="120"
              height="40"
              fill="#A23B72"
              stroke="#333"
              strokeWidth="1.5"
              rx="5"
            />
            <text x="340" y="345" textAnchor="middle" fontSize="11" fill="#fff">
              Manager (Admin)
            </text>

            <rect
              x="410"
              y="320"
              width="120"
              height="40"
              fill="#A23B72"
              stroke="#333"
              strokeWidth="1.5"
              rx="5"
            />
            <text x="470" y="345" textAnchor="middle" fontSize="11" fill="#fff">
              Manager (Accounts)
            </text>

            <rect
              x="540"
              y="320"
              width="120"
              height="40"
              fill="#A23B72"
              stroke="#333"
              strokeWidth="1.5"
              rx="5"
            />
            <text x="600" y="345" textAnchor="middle" fontSize="11" fill="#fff">
              Manager (Travel)
            </text>

            {/* Level 6 - Staff Row */}
            <rect
              x="100"
              y="400"
              width="100"
              height="40"
              fill="#F18F01"
              stroke="#333"
              strokeWidth="1.5"
              rx="5"
            />
            <text x="150" y="425" textAnchor="middle" fontSize="10" fill="#fff">
              Instructors
            </text>

            <rect
              x="210"
              y="400"
              width="80"
              height="40"
              fill="#F18F01"
              stroke="#333"
              strokeWidth="1.5"
              rx="5"
            />
            <text x="250" y="425" textAnchor="middle" fontSize="10" fill="#fff">
              PRO
            </text>

            <rect
              x="300"
              y="400"
              width="100"
              height="40"
              fill="#F18F01"
              stroke="#333"
              strokeWidth="1.5"
              rx="5"
            />
            <text x="350" y="425" textAnchor="middle" fontSize="10" fill="#fff">
              Accountants (Officer)
            </text>

            <rect
              x="410"
              y="400"
              width="100"
              height="40"
              fill="#F18F01"
              stroke="#333"
              strokeWidth="1.5"
              rx="5"
            />
            <text x="460" y="425" textAnchor="middle" fontSize="10" fill="#fff">
              Executive Officer
            </text>

            {/* Level 7 - Junior Staff Row */}
            <rect
              x="250"
              y="480"
              width="120"
              height="40"
              fill="#C73E1D"
              stroke="#333"
              strokeWidth="1.5"
              rx="5"
            />
            <text x="310" y="505" textAnchor="middle" fontSize="10" fill="#fff">
              Asst. Accountants (Officer)
            </text>

            <rect
              x="380"
              y="480"
              width="100"
              height="40"
              fill="#C73E1D"
              stroke="#333"
              strokeWidth="1.5"
              rx="5"
            />
            <text x="430" y="505" textAnchor="middle" fontSize="10" fill="#fff">
              Officer (Admin)
            </text>

            <rect
              x="490"
              y="480"
              width="130"
              height="40"
              fill="#C73E1D"
              stroke="#333"
              strokeWidth="1.5"
              rx="5"
            />
            <text x="555" y="505" textAnchor="middle" fontSize="10" fill="#fff">
              Officer (Embassy Relation)
            </text>
          </svg>
        </div>

        <div className="chart-legend">
          {/* <div className="legend-item">
            <span className="color-box top-management"></span>
            <span>Top Management</span>
          </div>
          <div className="legend-item">
            <span className="color-box managers"></span>
            <span>Managers</span>
          </div>
          <div className="legend-item">
            <span className="color-box staff"></span>
            <span>Staff</span>
          </div>
          <div className="legend-item">
            <span className="color-box junior-staff"></span>
            <span>Junior Staff</span>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default OrganizationalChart;
