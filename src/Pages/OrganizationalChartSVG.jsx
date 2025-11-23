import React from "react";
import "./OrganizationalChart.css";

const OrganizationalChartSVG = () => {
  return (
    <div className="org-chart-svg-container">
      <h1>Organization Structure</h1>
      <svg
        width="1000"
        height="600"
        viewBox="0 0 1000 600"
        className="org-chart-svg"
      >
        {/* Connections */}
        {/* Level 1 to Level 2 */}
        <line
          x1="500"
          y1="120"
          x2="500"
          y2="180"
          stroke="#666"
          strokeWidth="2"
        />

        {/* Level 2 to Level 3 */}
        <line
          x1="200"
          y1="240"
          x2="200"
          y2="300"
          stroke="#666"
          strokeWidth="2"
        />
        <line
          x1="350"
          y1="240"
          x2="350"
          y2="300"
          stroke="#666"
          strokeWidth="2"
        />
        <line
          x1="500"
          y1="240"
          x2="500"
          y2="300"
          stroke="#666"
          strokeWidth="2"
        />
        <line
          x1="650"
          y1="240"
          x2="650"
          y2="300"
          stroke="#666"
          strokeWidth="2"
        />

        {/* Level 3 to Level 4 */}
        <line
          x1="500"
          y1="360"
          x2="500"
          y2="420"
          stroke="#666"
          strokeWidth="2"
        />
        <line
          x1="650"
          y1="360"
          x2="575"
          y2="420"
          stroke="#666"
          strokeWidth="2"
        />
        <line
          x1="650"
          y1="360"
          x2="725"
          y2="420"
          stroke="#666"
          strokeWidth="2"
        />

        {/* Horizontal connection lines */}
        <line
          x1="200"
          y1="180"
          x2="650"
          y2="180"
          stroke="#666"
          strokeWidth="2"
        />
        <line
          x1="200"
          y1="300"
          x2="650"
          y2="300"
          stroke="#666"
          strokeWidth="2"
        />

        {/* Level 1 - Top Management */}
        <rect
          x="100"
          y="50"
          width="150"
          height="60"
          rx="8"
          fill="#e3f2fd"
          stroke="#2196F3"
          strokeWidth="2"
        />
        <text
          x="175"
          y="80"
          textAnchor="middle"
          dominantBaseline="middle"
          fill="#333"
          fontSize="14"
          fontWeight="bold"
        >
          Chairman
        </text>

        <rect
          x="300"
          y="50"
          width="150"
          height="60"
          rx="8"
          fill="#e3f2fd"
          stroke="#2196F3"
          strokeWidth="2"
        />
        <text
          x="375"
          y="80"
          textAnchor="middle"
          dominantBaseline="middle"
          fill="#333"
          fontSize="14"
          fontWeight="bold"
        >
          Managing Director
        </text>

        <rect
          x="500"
          y="50"
          width="150"
          height="60"
          rx="8"
          fill="#e3f2fd"
          stroke="#2196F3"
          strokeWidth="2"
        />
        <text
          x="575"
          y="80"
          textAnchor="middle"
          dominantBaseline="middle"
          fill="#333"
          fontSize="14"
          fontWeight="bold"
        >
          Director
        </text>

        <rect
          x="700"
          y="50"
          width="150"
          height="60"
          rx="8"
          fill="#e3f2fd"
          stroke="#2196F3"
          strokeWidth="2"
        />
        <text
          x="775"
          y="80"
          textAnchor="middle"
          dominantBaseline="middle"
          fill="#333"
          fontSize="14"
          fontWeight="bold"
        >
          General Manager
        </text>

        {/* Level 2 - Managers */}
        <rect
          x="125"
          y="180"
          width="150"
          height="50"
          rx="8"
          fill="#fff3e0"
          stroke="#FF9800"
          strokeWidth="2"
        />
        <text
          x="200"
          y="205"
          textAnchor="middle"
          dominantBaseline="middle"
          fill="#333"
          fontSize="12"
        >
          Manager (Recruitment)
        </text>

        <rect
          x="275"
          y="180"
          width="150"
          height="50"
          rx="8"
          fill="#fff3e0"
          stroke="#FF9800"
          strokeWidth="2"
        />
        <text
          x="350"
          y="205"
          textAnchor="middle"
          dominantBaseline="middle"
          fill="#333"
          fontSize="12"
        >
          Manager (Admin)
        </text>

        <rect
          x="425"
          y="180"
          width="150"
          height="50"
          rx="8"
          fill="#fff3e0"
          stroke="#FF9800"
          strokeWidth="2"
        />
        <text
          x="500"
          y="205"
          textAnchor="middle"
          dominantBaseline="middle"
          fill="#333"
          fontSize="12"
        >
          Manager (Accounts)
        </text>

        <rect
          x="575"
          y="180"
          width="150"
          height="50"
          rx="8"
          fill="#fff3e0"
          stroke="#FF9800"
          strokeWidth="2"
        />
        <text
          x="650"
          y="205"
          textAnchor="middle"
          dominantBaseline="middle"
          fill="#333"
          fontSize="12"
        >
          Manager (Travel)
        </text>

        {/* Level 3 - Staff */}
        <rect
          x="125"
          y="300"
          width="150"
          height="50"
          rx="8"
          fill="#e8f5e8"
          stroke="#4CAF50"
          strokeWidth="2"
        />
        <text
          x="200"
          y="325"
          textAnchor="middle"
          dominantBaseline="middle"
          fill="#333"
          fontSize="12"
        >
          Instructors
        </text>

        <rect
          x="275"
          y="300"
          width="150"
          height="50"
          rx="8"
          fill="#e8f5e8"
          stroke="#4CAF50"
          strokeWidth="2"
        />
        <text
          x="350"
          y="325"
          textAnchor="middle"
          dominantBaseline="middle"
          fill="#333"
          fontSize="12"
        >
          PRO
        </text>

        <rect
          x="425"
          y="300"
          width="150"
          height="50"
          rx="8"
          fill="#e8f5e8"
          stroke="#4CAF50"
          strokeWidth="2"
        />
        <text
          x="500"
          y="325"
          textAnchor="middle"
          dominantBaseline="middle"
          fill="#333"
          fontSize="12"
        >
          Accountants (Officer)
        </text>

        <rect
          x="575"
          y="300"
          width="150"
          height="50"
          rx="8"
          fill="#e8f5e8"
          stroke="#4CAF50"
          strokeWidth="2"
        />
        <text
          x="650"
          y="325"
          textAnchor="middle"
          dominantBaseline="middle"
          fill="#333"
          fontSize="12"
        >
          Executive Officer
        </text>

        {/* Level 4 - Junior Staff */}
        <rect
          x="425"
          y="420"
          width="150"
          height="40"
          rx="8"
          fill="#f5f5f5"
          stroke="#666"
          strokeWidth="2"
        />
        <text
          x="500"
          y="440"
          textAnchor="middle"
          dominantBaseline="middle"
          fill="#333"
          fontSize="11"
        >
          Asst. Accountants (Officer)
        </text>

        <rect
          x="525"
          y="420"
          width="100"
          height="40"
          rx="8"
          fill="#f5f5f5"
          stroke="#666"
          strokeWidth="2"
        />
        <text
          x="575"
          y="440"
          textAnchor="middle"
          dominantBaseline="middle"
          fill="#333"
          fontSize="11"
        >
          Officer (Admin)
        </text>

        <rect
          x="650"
          y="420"
          width="150"
          height="40"
          rx="8"
          fill="#f5f5f5"
          stroke="#666"
          strokeWidth="2"
        />
        <text
          x="725"
          y="440"
          textAnchor="middle"
          dominantBaseline="middle"
          fill="#333"
          fontSize="11"
        >
          Officer (Embassy Relation)
        </text>
      </svg>
    </div>
  );
};

export default OrganizationalChartSVG;
