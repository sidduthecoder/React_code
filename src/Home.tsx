import React, { useState } from "react";

// --- Icon Definitions (as in your styling) ---
const BarChart = ({ size = 24 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="12" y1="20" x2="12" y2="10"></line>
    <line x1="18" y1="20" x2="18" y2="4"></line>
    <line x1="6" y1="20" x2="6" y2="16"></line>
  </svg>
);
const Users = ({ size = 24 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
    <circle cx="9" cy="7" r="4"></circle>
    <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
  </svg>
);
const DollarSign = ({ size = 24 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="12" y1="1" x2="12" y2="23"></line>
    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
  </svg>
);
const Monitor = ({ size = 24 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
    <line x1="8" y1="21" x2="16" y2="21"></line>
    <line x1="12" y1="17" x2="12" y2="21"></line>
  </svg>
);
const TrendingUp = ({ size = 24 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="22,7 13.5,15.5 8.5,10.5 2,17"></polyline>
    <polyline points="16,7 22,7 22,13"></polyline>
  </svg>
);
const FileText = ({ size = 24 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
    <polyline points="14,2 14,8 20,8"></polyline>
    <line x1="16" y1="13" x2="8" y2="13"></line>
    <line x1="16" y1="17" x2="8" y2="17"></line>
    <polyline points="10,9 9,9 8,9"></polyline>
  </svg>
);
const Book = ({ size = 24 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
  </svg>
);
const Megaphone = ({ size = 24 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M3 11v3a1 1 0 0 0 1 1h5l6 6V4l-6 6H4a1 1 0 0 0-1 1z"></path>
    <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
  </svg>
);
const Bell = ({ size = 24 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path>
    <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path>
  </svg>
);

const Index = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const categories = [
    {
      id: "operations",
      title: "Operations",
      description: "Bill-to-Pay, Switch Agent Reports, CPI, Scorecard",
      icon: <BarChart size={24} />,
      color: "#3B82F6",
    },
    {
      id: "people",
      title: "People",
      description: "Span of Control, Talent Management, Attrition",
      icon: <Users size={24} />,
      color: "#3B82F6",
    },
    {
      id: "finance",
      title: "Finance",
      description: "Accounting, Digital, Engage, Procurement",
      icon: <DollarSign size={24} />,
      color: "#3B82F6",
    },
    {
      id: "technology",
      title: "Technology",
      description: "CSO, USAA, BQ Monitoring",
      icon: <Monitor size={24} />,
      color: "#3B82F6",
    },
    {
      id: "sales",
      title: "Sales",
      description: "Pipelines, NNR and ACV, Snapshot Comparison",
      icon: <TrendingUp size={24} />,
      color: "#3B82F6",
    },

    {
      id: "WFM",
      title: "WFM",
      description: "Work Force Management",
      icon: <FileText size={24} />,
      color: "#3B82F6",
    },
    {
      id: "MyItems",
      title: "My Items",
      description: "Recently Viewed, My Favorites",
      icon: <FileText size={24} />,
      color: "#3B82F6",
    },
  ];

  const handleBoxClick = (category) => {
    setOpenDropdown(openDropdown === category.id ? null : category.id);
  };

  const getDropdownContent = (categoryId) => {
    const dropdownData = {
      operations: [
        {
          name: "Bill to Pay",
          url: "https://askted.ttec.com/dashboards/x9a94OaUppMGyef4f9ZJFw",
        },
        {
          name: "Switch Agent Reports",
          url: "https://askted.ttec.com/folders/340",
        },
        { name: "CPI - Justmore", url: "https://askted.ttec.com/folders/7633" },
        { name: "Scorecard", url: "https://askted.ttec.com/folders/8134" },
      ],
      people: [
        { name: "Span of Control", url: "https://askted.ttec.com/folders/53" },
        {
          name: "Talent Management",
          url: "https://askted.ttec.com/folders/8830",
        },
        {
          name: "Production Attrition - JustMore",
          url: "https://askted.ttec.com/folders/7636",
        },
        {
          name: "Span of Control - JustMore",
          url: "https://askted.ttec.com/folders/7638",
        },
        {
          name: "Ratio & Headcount - JustMore",
          url: "https://askted.ttec.com/folders/7637",
        },
        {
          name: "Hire to Production Attrition - Justmore",
          url: "https://askted.ttec.com/folders/7635",
        },
      ],
      finance: [
        { name: "Accounting", url: "https://askted.ttec.com/folders/155" },
        { name: "Digital", url: "https://askted.ttec.com/folders/157" },
        { name: "Engage", url: "https://askted.ttec.com/folders/158" },
        { name: "Procurement", url: "https://askted.ttec.com/folders/280" },
        {
          name: "Finance - Justmore",
          url: "https://askted.ttec.com/folders/7634",
        },
      ],
      technology: [
        { name: "CSO", url: "https://askted.ttec.com/folders/9769" },
        { name: "USAA", url: "https://lookerdataiq.ttec.com/folders/18" },
        {
          name: "Big Query Monitoring",
          url: "https://askted.ttec.com/dashboards/U3TaRKsoenEP2cu8L6VlLY?",
        },
      ],
      sales: [
        {
          name: "Snapshot Comparison",
          url: "https://askted.ttec.com/dashboards/YpFcBEkFf4E3XB7fEprp5D",
        },
        {
          name: "NNR Pipeline",
          url: "https://askted.ttec.com/dashboards/twzEqZXHMIG0waWndXGQ9S?",
        },
        {
          name: "ACV Pipeline",
          url: "https://askted.ttec.com/dashboards/PJWcOVPIXT7l0KfIU9iWvI",
        },
        {
          name: "Sales Executive Pipeline Dashboard",
          url: "https://askted.ttec.com/dashboards/pZ6I0UMyLcyBbbxVItrGrX",
        },
      ],

      WFM: [
        {
          name: "Staffing Outlook",
          url: "https://askted.ttec.com/dashboards/QoPFWGZSiQSA4cHA3FUQyS?",
        },
        {
          name: "Operational Top Deck",
          url: "https://askted.ttec.com/dashboards/1HPc0kDIj00CyouupayeSW?",
        },
        {
          name: "Occupancy Summary",
          url: "https://askted.ttec.com/dashboards/vj7wsduTcZSq2pVgiRb2GF?",
        },
        {
          name: "Absenteeism Report",
          url: "https://askted.ttec.com/dashboards/Ig2jnIi4kuq4VBZvZJZkmF?",
        },
        {
          name: "AWH - WFM",
          url: "https://askted.ttec.com/folders/7390",
        },
      ],
      MyItems: [
        {
          name: "Recently Viewed",
          url: "https://askted.ttec.com/browse/recent",
        },
        {
          name: "My Favorites",
          url: "https://askted.ttec.com/browse/favorites",
        },
      ],
    };
    return dropdownData[categoryId] || [];
  };

  return (
    <div
      style={{
        padding: "24px",
        backgroundColor: "#F8FAFC",
        minHeight: "100vh",
        fontFamily: "'Poppins', sans-serif",
        position: "relative",
      }}
    >
      <style>
        {`
        .category-card { position: relative; z-index: 1; }
        .category-card.active { z-index: 1000; }
        .category-card:hover {
          background-color: #F8FAFC !important;
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0,0,0,0.15) !important;
        }
        .category-card:hover .category-border { border-color: var(--category-color) !important; }
        .dropdown-menu {
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          background-color: white;
          border: 1px solid #E2E8F0;
          border-radius: 12px;
          box-shadow: 0 10px 25px rgba(0,0,0,0.2);
          z-index: 9999;
          opacity: 0;
          visibility: hidden;
          transform: translateY(-10px);
          transition: all 0.3s ease;
          margin-top: 8px;
          min-width: 280px;
        }
        .dropdown-menu.show {
          opacity: 1 !important; visibility: visible !important; transform: translateY(0) !important;
        }
        .help-row {
          display: flex;
          gap: 24px;
          margin-top: 60px;
          width: 100%;
          max-width: 1400px;
          margin-left: auto;
          margin-right: auto;
          flex-wrap: wrap;
        }
        .help-card {
          flex: 1 1 300px;
          min-width: 300px;
          background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
          border: 1px solid #e2e8f0;
          border-radius: 16px;
          padding: 24px;
          box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06);
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }
        .help-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0; height: 3px;
          background: linear-gradient(90deg, #3b82f6, #10b981, #f59e0b);
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .help-card:hover { transform: translateY(-4px); box-shadow: 0 20px 25px -5px rgba(0,0,0,0.1), 0 8px 10px -6px rgba(0,0,0,0.1);}
        .help-card:hover::before { opacity: 1; }
        .help-link {
          display: flex; align-items: center; gap: 12px;
          padding: 12px 16px; border-radius: 10px; text-decoration: none; color: #475569;
          font-weight: 500; transition: all 0.2s ease; border: 1px solid transparent; position: relative; overflow: hidden;
        }
        .help-link::before {
          content: '';
          position: absolute; top: 0; left: -100%; width: 100%; height: 100%;
          background: linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.1), transparent);
          transition: left 0.5s ease;
        }
        .help-link:hover {
          background-color: #f1f5f9; border-color: #e2e8f0;
          transform: translateX(4px); color: #1e293b;
        }
        .help-link:hover::before { left: 100%; }
        .help-link:hover .help-icon { transform: scale(1.1);}
        .help-icon {
          padding: 8px; border-radius: 8px; display: flex; align-items: center;
          justify-content: center; transition: transform 0.2s ease;
        }
        .access-icon { background: linear-gradient(135deg, #ef4444, #dc2626); color: white; }
        .broken-icon { background: linear-gradient(135deg, #f59e0b, #d97706); color: white; }
        .dashboard-icon { background: linear-gradient(135deg, #3b82f6, #2563eb); color: white; }
        .training-icon { background: linear-gradient(135deg, #8b5cf6, #7c3aed); color: white; }
        .announcement-item {
          display: flex; align-items: flex-start; gap: 12px;
          padding: 16px; background: linear-gradient(135deg, #fef3c7, #fde68a); border-radius: 12px;
          border-left: 4px solid #f59e0b; transition: all 0.3s ease; position: relative; overflow: hidden;
        }
        .announcement-item::before {
          content: '';
          position: absolute; top: 0; right: -100%; width: 100%; height: 100%;
          background: linear-gradient(90deg, transparent, rgba(245,158,11,0.1), transparent);
          transition: right 0.5s ease;
        }
        .announcement-item:hover { transform: translateY(-2px); box-shadow: 0 8px 12px -4px rgba(245,158,11,0.3);}
        .announcement-item:hover::before { right: 100%; }
        .section-title {
          display: flex; align-items: center; gap: 12px;
          margin-bottom: 20px; padding-bottom: 12px; border-bottom: 2px solid #f1f5f9; position: relative;
        }
        .section-title::after {
          content: '';
          position: absolute; bottom: -2px; left: 0;
          width: 40px; height: 2px;
          background: linear-gradient(90deg, #3b82f6, #10b981); border-radius: 1px;
        }
        .section-icon {
          padding: 8px; border-radius: 10px; display: flex;
          align-items: center; justify-content: center;
        }
        .help-section-icon { background: linear-gradient(135deg, #3b82f6, #2563eb); color: white; }
        .docs-section-icon { background: linear-gradient(135deg, #10b981, #059669); color: white; }
        .announcements-section-icon { background: linear-gradient(135deg, #f59e0b, #d97706); color: white; }
        @media (max-width: 960px) {
          .help-row { flex-direction: column; gap: 20px;}
        }
        `}
      </style>

      <h1
        style={{
          fontSize: "clamp(24px, 5vw, 28px)",
          fontWeight: "600",
          color: "#1E293B",
          margin: "0 0 32px 0",
          textAlign: "center",
        }}
      >
        Report Categories
      </h1>

      {/* Categories grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "16px",
          maxWidth: "1400px",
          margin: "0 auto",
        }}
      >
        {categories.map((category) => (
          <div
            key={category.id}
            className={`category-card ${
              category.id === "justmore" ? "justmore" : ""
            } ${openDropdown === category.id ? "active" : ""}`}
            style={{
              position: "relative",
              display: "block",
              backgroundColor: "white",
              borderRadius: "12px",
              padding: "20px",
              border: "1px solid #E2E8F0",
              cursor: "pointer",
              transition: "all 0.2s ease",
              textDecoration: "none",
              color: "inherit",
              "--category-color": category.color,
            }}
            onClick={(e) => {
              e.stopPropagation();
              handleBoxClick(category);
            }}
          >
            <div
              className="category-border"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                border: "1px solid #E2E8F0",
                borderRadius: "12px",
                transition: "border-color 0.2s ease",
                pointerEvents: "none",
              }}
            />
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "space-between",
                marginBottom: "12px",
                position: "relative",
                zIndex: 1,
              }}
            >
              <div
                style={{ display: "flex", alignItems: "center", gap: "12px" }}
              >
                <div
                  style={{
                    color: category.color,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {category.icon}
                </div>
                <h3
                  style={{
                    fontSize: "clamp(16px, 4vw, 18px)",
                    fontWeight: "600",
                    color: "#1E293B",
                    margin: "0",
                  }}
                >
                  {category.title}
                </h3>
              </div>
              <div style={{ color: "#64748B" }}>
                <svg
                  width={20}
                  height={20}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="6,9 12,15 18,9"></polyline>
                </svg>
              </div>
            </div>
            <p
              style={{
                fontSize: "clamp(12px, 3vw, 14px)",
                color: "#64748B",
                lineHeight: "1.5",
                margin: "0",
                position: "relative",
                zIndex: 1,
              }}
            >
              {category.description}
            </p>
            <div
              className={`dropdown-menu ${
                openDropdown === category.id ? "show" : ""
              }`}
            >
              <div style={{ padding: "16px" }}>
                <h4
                  style={{
                    fontSize: "14px",
                    fontWeight: "600",
                    color: category.color,
                    margin: "0 0 12px 0",
                  }}
                >
                  {category.title}
                </h4>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "8px",
                  }}
                >
                  {getDropdownContent(category.id).map((item, index) => (
                    <a
                      key={index}
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: "block",
                        padding: "8px 12px",
                        backgroundColor: "#F8FAFC",
                        borderRadius: "6px",
                        textDecoration: "none",
                        color: "#475569",
                        fontSize: "13px",
                        transition: "all 0.2s ease",
                      }}
                      onMouseEnter={(e) => {
                        const target = e.currentTarget;
                        target.style.backgroundColor = category.color;
                        target.style.color = "white";
                      }}
                      onMouseLeave={(e) => {
                        const target = e.currentTarget;
                        target.style.backgroundColor = "#F8FAFC";
                        target.style.color = "#475569";
                      }}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Below: Help/Resources/Latest Updates, in a row */}
      <div className="help-row">
        {/* Need Help Card */}
        <div className="help-card">
          <div className="section-title">
            <div className="section-icon help-section-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                <path d="M12 17h.01" />
              </svg>
            </div>
            <h3
              style={{
                fontSize: "18px",
                fontWeight: "600",
                color: "#1E293B",
                margin: "0",
              }}
            >
              Need Help?
            </h3>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <a
              href="https://asknow.service-now.com/asknow?id=asknow_sc_cat_item&sys_id=612fd235db3e3640bc74f3861d961903&sysparm_category=d866a94b87ca29dc97c8646d8bbb35a1&catalog_id=-1&requesttype=access"
              target="_blank"
              rel="noopener noreferrer"
              className="help-link"
            >
              <div className="help-icon access-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                  <circle cx="12" cy="16" r="1" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
              </div>
              <div>
                <div style={{ fontSize: "14px", fontWeight: "600" }}>
                  Need Access?
                </div>
                <div style={{ fontSize: "12px", color: "#64748B" }}>
                  Request dashboard access
                </div>
              </div>
            </a>
            <a
              href="https://asknow.service-now.com/asknow?id=asknow_sc_cat_item&sys_id=ce02555fdbbab640958bf9a41d9619a8&sysparm_category=d866a94b87ca29dc97c8646d8bbb35a1&catalog_id=-1"
              target="_blank"
              rel="noopener noreferrer"
              className="help-link"
            >
              <div className="help-icon broken-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="8" x2="12" y2="12" />
                  <line x1="12" y1="16" x2="12.01" y2="16" />
                </svg>
              </div>
              <div>
                <div style={{ fontSize: "14px", fontWeight: "600" }}>
                  Something Broken?
                </div>
                <div style={{ fontSize: "12px", color: "#64748B" }}>
                  Report technical issues
                </div>
              </div>
            </a>
            <a
              href="https://asknow.service-now.com/asknow?id=asknow_sc_cat_item&sys_id=bec6a503874e29dc97c8646d8bbb3597&sysparm_category=d866a94b87ca29dc97c8646d8bbb35a1&catalog_id=-1&requesttype=needsomethingnew"
              target="_blank"
              rel="noopener noreferrer"
              className="help-link"
            >
              <div className="help-icon dashboard-icon">
                <BarChart size={16} />
              </div>
              <div>
                <div style={{ fontSize: "14px", fontWeight: "600" }}>
                  New Dashboard
                </div>
                <div style={{ fontSize: "12px", color: "#64748B" }}>
                  Request custom dashboard
                </div>
              </div>
            </a>
          </div>
        </div>
        {/* Resources Card */}
        <div className="help-card">
          <div className="section-title">
            <div className="section-icon docs-section-icon">
              <Book size={20} />
            </div>
            <h3
              style={{
                fontSize: "18px",
                fontWeight: "600",
                color: "#1E293B",
                margin: "0",
              }}
            >
              Resources
            </h3>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <a
              href="https://ttec-pmo.atlassian.net/wiki/spaces/DWH/pages/1433043543/Askted+Looker+Training+Videos"
              target="_blank"
              rel="noopener noreferrer"
              className="help-link"
            >
              <div className="help-icon training-icon">
                <FileText size={16} />
              </div>
              <div>
                <div style={{ fontSize: "14px", fontWeight: "600" }}>
                  Training Videos
                </div>
                <div style={{ fontSize: "12px", color: "#64748B" }}>
                  Learn how to use Looker
                </div>
              </div>
            </a>
          </div>
        </div>
        {/* Announcements Card */}
        <div className="help-card">
          <div className="section-title">
            <div className="section-icon announcements-section-icon">
              <Megaphone size={20} />
            </div>
            <h3
              style={{
                fontSize: "18px",
                fontWeight: "600",
                color: "#1E293B",
                margin: "0",
              }}
            >
              Latest Updates
            </h3>
          </div>
          <div className="announcement-item">
            <div style={{ color: "#f59e0b", marginTop: "2px" }}>⚠️</div>
            <div>
              <div
                style={{
                  fontSize: "14px",
                  fontWeight: "600",
                  color: "#1E293B",
                  marginBottom: "4px",
                }}
              >
                Looker Maintenance Downtime:
              </div>
              <div
                style={{
                  fontSize: "13px",
                  color: "#8B5CF6",
                  fontWeight: "500",
                }}
              >
                Weekly maintenance starts Sundays at 1:00 AM UTC and may last ~2
                hours
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
