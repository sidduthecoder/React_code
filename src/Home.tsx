import React, { useState } from "react";

interface ReportCategory {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  isExpanded: boolean;
}

const Index: React.FC = () => {
  const [currentURL, setCurrentURL] = useState("");
  const [expandedFAQ, setExpandedFAQ] = useState<string | null>(null);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  // Simple SVG Icons
  const ChevronDown = ({ size = 20 }: { size?: number }) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <polyline points="6,9 12,15 18,9"></polyline>
    </svg>
  );

  const BarChart3 = ({ size = 24 }: { size?: number }) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M3 3v18h18"></path>
      <path d="M18 17V9"></path>
      <path d="M13 17V5"></path>
      <path d="M8 17v-3"></path>
    </svg>
  );

  const Users = ({ size = 24 }: { size?: number }) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
      <circle cx="9" cy="7" r="4"></circle>
      <path d="M22 21v-2a4 4 0 0 1 0 7.75"></path>
      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
    </svg>
  );

  const DollarSign = ({ size = 24 }: { size?: number }) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <line x1="12" y1="1" x2="12" y2="23"></line>
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
    </svg>
  );

  const Monitor = ({ size = 24 }: { size?: number }) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
      <line x1="8" y1="21" x2="16" y2="21"></line>
      <line x1="12" y1="17" x2="12" y2="21"></line>
    </svg>
  );

  const TrendingUp = ({ size = 24 }: { size?: number }) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <polyline points="22,7 13.5,15.5 8.5,10.5 2,17"></polyline>
      <polyline points="16,7 22,7 22,13"></polyline>
    </svg>
  );

  const FileText = ({ size = 24 }: { size?: number }) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2Z"></path>
      <polyline points="14,2 14,8 20,8"></polyline>
      <line x1="16" y1="13" x2="8" y2="13"></line>
      <line x1="16" y1="17" x2="8" y2="17"></line>
      <polyline points="10,9 9,9 8,9"></polyline>
    </svg>
  );

  const Book = ({ size = 24 }: { size?: number }) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
    </svg>
  );

  const Megaphone = ({ size = 24 }: { size?: number }) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M3 11v3a1 1 0 0 0 1 1h5l6 6V4l-6 6H4a1 1 0 0 0-1 1z"></path>
      <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
    </svg>
  );

  const Bell = ({ size = 24 }: { size?: number }) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path>
      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path>
    </svg>
  );

  const [categories, setCategories] = useState<ReportCategory[]>([
    {
      id: "operations",
      title: "Operations",
      description: "Bill-to-Pay, Ratios, Control Tower",
      icon: <BarChart3 size={24} />,
      color: "#3B82F6",
      isExpanded: false,
    },
    {
      id: "people",
      title: "People",
      description: "Attrition, Span of Control, Talent Management",
      icon: <Users size={24} />,
      color: "#3B82F6",
      isExpanded: false,
    },
    {
      id: "finance",
      title: "Finance",
      description: "P&L, AR, Invoicing, Procurement",
      icon: <DollarSign size={24} />,
      color: "#3B82F6",
      isExpanded: false,
    },
    {
      id: "technology",
      title: "Technology",
      description: "ServiceNow, Downtimes",
      icon: <Monitor size={24} />,
      color: "#3B82F6",
      isExpanded: false,
    },
    {
      id: "sales",
      title: "Sales",
      description: "Pipelines, NNR and ACV, Forecasts",
      icon: <TrendingUp size={24} />,
      color: "#3B82F6",
      isExpanded: false,
    },
    {
      id: "my-reports",
      title: "My Reports",
      description: "Your personalized and frequently accessed reports",
      icon: <FileText size={24} />,
      color: "#3B82F6",
      isExpanded: false,
    },
  ]);

  const toggleCategory = (categoryId: string) => {
    setCategories((prev) =>
      prev.map((cat) =>
        cat.id === categoryId ? { ...cat, isExpanded: !cat.isExpanded } : cat
      )
    );
  };

  const handleCategoryClick = (categoryId: string) => {
    console.log(`Selected category: ${categoryId}`);

    // Toggle dropdown for non-my-reports categories
    if (categoryId !== "my-reports") {
      setOpenDropdown(openDropdown === categoryId ? null : categoryId);
    } else {
      // Handle my-reports special case
      toggleCategory(categoryId);
    }
  };

  const handleBoxClick = (category: any) => {
    handleCategoryClick(category.id);
  };

  const getDropdownContent = (categoryId: string) => {
    const dropdownData = {
      operations: [
        {
          name: "Bill to Pay",
          url: "https://askted-dev.ttec.com/dashboards/x9a94OaUppMGyef4f9ZJFw?",
        },
        { name: "Ratios", url: "https://google.com" },
        { name: "Control Tower", url: "https://google.com" },
      ],
      people: [
        { name: "Attrition", url: "https://google.com" },
        { name: "Span of Control", url: "https://google.com" },
        { name: "Talent Management", url: "https://google.com" },
      ],
      finance: [
        { name: "P&L", url: "https://google.com" },
        { name: "AR", url: "https://google.com" },
        { name: "Invoicing", url: "https://google.com" },
        { name: "Procurement", url: "https://google.com" },
      ],
      technology: [
        { name: "Service Now", url: "https://google.com" },
        { name: "Downtimes", url: "https://google.com" },
      ],
      sales: [
        { name: "Pipelines", url: "https://google.com" },
        { name: "NNR", url: "https://google.com" },
        { name: "ACV", url: "https://google.com" },
        { name: "Forecasts", url: "https://google.com" },
      ],
    };

    return dropdownData[categoryId] || [];
  };

  const toggleFAQ = (faqId: string) => {
    setExpandedFAQ(expandedFAQ === faqId ? null : faqId);
  };

  const faqData = [
    {
      id: "recent-data",
      question: "Why don't I see my most recent data?",
      answer:
        "📅 Data refresh happens as per schedule. Check the Data Refresh section or contact support.",
    },
    {
      id: "report-scheduler",
      question: "How can I export data from a dashboard?",
      answer:
        "📤 Use the download/export options available in the dashboard menu.",
    },
    {
      id: "contact-support",
      question: "Who should I contact if something looks wrong?",
      answer: "🛠️ Reach out to the Development Team.",
    },
    {
      id: "access-reports",
      question: "Why can't I access certain reports?",
      answer:
        "🔒 Access might be restricted. Please follow the Access Request process or contact the administrator.",
    },
  ];

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
          .category-card {
            position: relative;
            z-index: 1;
          }
          
          .category-card.active {
            z-index: 1000;
          }
          
          .category-card:hover {
            background-color: #F8FAFC !important;
            transform: translateY(-2px);
            box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15) !important;
          }
          
          .category-card:hover .category-border {
            border-color: var(--category-color) !important;
          }
          
          .dropdown-menu {
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background-color: white;
            border: 1px solid #E2E8F0;
            border-radius: 12px;
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
            z-index: 9999;
            opacity: 0;
            visibility: hidden;
            transform: translateY(-10px);
            transition: all 0.3s ease;
            margin-top: 8px;
            min-width: 280px;
          }
          
          .dropdown-menu.show {
            opacity: 1 !important;
            visibility: visible !important;
            transform: translateY(0) !important;
          }
        `}
      </style>

      <h1
        style={{
          fontSize: "clamp(24px, 5vw, 28px)",
          fontWeight: "600",
          color: "#1E293B",
          margin: "0 0 32px 0",
          textAlign: "center" as const,
        }}
      >
        Report Categories
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "minmax(0, 1fr) 320px",
          gap: "32px",
          maxWidth: "1400px",
          margin: "0 auto",
        }}
        className="lg:grid-cols-[1fr_320px] md:grid-cols-1 sm:grid-cols-1"
      >
        {/* Main Content - Report Categories */}
        <div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "16px",
            }}
            className="sm:grid-cols-1"
          >
            {categories.map((category) => (
              <div
                key={category.id}
                className={`category-card ${
                  category.id === "my-reports" ? "my-reports" : ""
                } ${openDropdown === category.id ? "active" : ""}`}
                style={
                  {
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
                  } as React.CSSProperties & { "--category-color": string }
                }
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
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                    }}
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
                    <ChevronDown size={20} />
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

                {/* Dropdown Menu for non-my-reports categories */}
                {category.id !== "my-reports" && (
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
                        {category.title} Reports
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
                              const target = e.currentTarget as HTMLElement;
                              target.style.backgroundColor = category.color;
                              target.style.color = "white";
                            }}
                            onMouseLeave={(e) => {
                              const target = e.currentTarget as HTMLElement;
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
                )}

                {/* Special handling for My Reports category */}
                {category.isExpanded && category.id === "my-reports" && (
                  <div style={{ marginTop: "16px" }}>
                    <a
                      href={currentURL}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <p
                        style={{
                          fontSize: "12px",
                          color: category.color,
                          fontWeight: "500",
                          margin: "0",
                        }}
                      >
                        Click to view {category.title.toLowerCase()} reports in
                        Looker
                      </p>
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* FAQ Section */}
          <div
            style={{
              marginTop: "40px",
              padding: "clamp(16px, 4vw, 24px)",
              backgroundColor: "white",
              borderRadius: "12px",
              boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
              border: "1px solid #E2E8F0",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                marginBottom: "20px",
              }}
            >
              <div
                style={{
                  width: "8px",
                  height: "8px",
                  backgroundColor: "#3B82F6",
                  borderRadius: "50%",
                }}
              ></div>
              <h2
                style={{
                  fontSize: "clamp(16px, 4vw, 18px)",
                  fontWeight: "600",
                  color: "#64748B",
                  margin: "0",
                }}
              >
                FAQs / Common Issues
              </h2>
            </div>

            <div
              style={{ display: "flex", flexDirection: "column", gap: "8px" }}
            >
              {faqData.map((faq) => (
                <div key={faq.id}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "12px 0",
                      cursor: "pointer",
                      borderBottom: "1px solid #F1F5F9",
                    }}
                    onClick={() => toggleFAQ(faq.id)}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "14px",
                          color: "#F59E0B",
                        }}
                      >
                        ▶
                      </span>
                      <span
                        style={{
                          fontSize: "clamp(12px, 3vw, 14px)",
                          color: "#64748B",
                          fontWeight: "500",
                        }}
                      >
                        {faq.question}
                      </span>
                    </div>
                    <div style={{ color: "#94A3B8" }}>
                      <ChevronDown size={16} />
                    </div>
                  </div>

                  {expandedFAQ === faq.id && (
                    <div
                      style={{
                        padding: "12px 24px 16px 24px",
                        backgroundColor: "#F8FAFC",
                        borderRadius: "8px",
                        marginBottom: "8px",
                      }}
                    >
                      <p
                        style={{
                          fontSize: "clamp(11px, 3vw, 13px)",
                          color: "#475569",
                          lineHeight: "1.5",
                          margin: "0",
                        }}
                      >
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side - Help Section */}
        <div
          style={{ display: "flex", flexDirection: "column", gap: "16px" }}
          className="lg:block md:hidden sm:hidden"
        >
          {/* Need Help Card */}
          <div
            style={{
              backgroundColor: "white",
              borderRadius: "12px",
              padding: "20px",
              border: "1px solid #E2E8F0",
              boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                marginBottom: "16px",
              }}
            >
              <div
                style={{
                  backgroundColor: "#ffff",
                  color: "white",
                  padding: "4px 8px",
                  borderRadius: "4px",
                  fontSize: "12px",
                  fontWeight: "600",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 2048 2048"
                  style={{ display: "block" }}
                >
                  <defs>
                    <style>
                      {`
          .fil0 { fill: none }
          .fil1, .fil2, .fil3 { fill-rule: nonzero }
          .fil1 { fill: #e34544 }
          .fil2 { fill: #424242 }
          .fil3 { fill: #6e6e6e }
        `}
                    </style>
                  </defs>
                  <g id="Layer_x0020_1">
                    <path className="fil0" d="M0 0h2048v2048H0z" />
                    <g id="_348089224">
                      <path
                        className="fil1"
                        d="M435 1457.08c-51.894-5.6-97.732-39.13-130.975-90.508C270.029 1314.031 249 1242.16 249 1163.415c0-78.743 21.03-150.614 55.025-203.154 33.243-51.378 79.08-84.907 130.975-90.508v587.327z"
                      />
                      <path
                        className="fil2"
                        d="M435 869.75v-31.838c0-136.43 55.792-260.439 145.675-350.323 89.884-89.883 213.893-145.675 350.323-145.675h186.003c136.43 0 260.439 55.792 350.322 145.676 89.884 89.885 145.676 213.892 145.676 350.322v619.165c-5.11.552-10.28.837-15.5.837-2.94 0-6.275-.135-9.975-.401-3.029-.215-6.29-.572-9.763-1.057l-26.763-3.744v-614.8c0-119.317-48.835-227.81-127.51-306.486-78.677-78.676-187.17-127.511-306.488-127.511H930.997c-119.317 0-227.81 48.835-306.488 127.51C545.835 610.1 497 718.594 497 837.912V1452.71l-26.762 3.745c-3.473.485-6.735.842-9.763 1.057-3.7.265-7.035.401-9.975.401-5.203 0-10.35-.283-15.443-.83l-.058-.007V869.75z"
                      />
                      <path
                        className="fil3"
                        d="M557.313 961.915c0-17.121-13.88-31.002-31-31.002-17.122 0-31.002 13.88-31.002 31.002v464.999c0 17.12 13.88 31 31.002 31 17.12 0 31-13.88 31-31V961.915z"
                      />
                      <path
                        className="fil3"
                        d="M1551 956.904c0-17.12-13.88-31-31.002-31-17.12 0-31 13.88-31 31v465c0 17.12 13.88 31 31 31 17.122 0 31.002-13.88 31.002-31v-465z"
                      />
                      <path
                        className="fil1"
                        d="M1613 1457.08c51.894-5.6 97.732-39.13 130.975-90.508 33.996-52.541 55.025-124.413 55.025-203.157 0-78.743-21.03-150.614-55.025-203.154-33.243-51.378-79.08-84.907-130.975-90.508v587.327z"
                      />
                      <path
                        className="fil2"
                        d="M496.954 1448.77c-.65 79.586 9.298 128.303 65.325 153.417 64.509 28.916 185.352 35.294 400.719 28.952l1.875 52.588c-226.029 6.656-355.1-1.045-429.78-34.52-83.166-37.278-100.209-99.622-99.387-200.294l61.248-.143z"
                      />
                      <ellipse
                        cx="994.601"
                        cy="1653.92"
                        rx="67.265"
                        ry="52.172"
                        style={{ fill: "#212121" }}
                      />
                    </g>
                  </g>
                </svg>
              </div>
              <h3
                style={{
                  fontSize: "16px",
                  fontWeight: "600",
                  color: "#1E293B",
                  margin: "0",
                }}
              >
                Need Help?
              </h3>
            </div>

            <div
              style={{ display: "flex", flexDirection: "column", gap: "12px" }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "8px",
                }}
              >
                <div
                  style={{
                    width: "6px",
                    height: "6px",
                    backgroundColor: "#3B82F6",
                    borderRadius: "50%",
                    marginTop: "6px",
                  }}
                ></div>
                <div>
                  <p
                    style={{
                      fontSize: "14px",
                      fontWeight: "600",
                      color: "#1E293B",
                      margin: "0 0 4px 0",
                    }}
                  >
                    Dashboard Enhancements:
                  </p>
                  <a
                    href="mailto:development@company.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontSize: "13px",
                      color: "#3B82F6",
                      textDecoration: "none",
                    }}
                  >
                    Contact Development Team
                  </a>
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "8px",
                }}
              >
                <div
                  style={{
                    width: "6px",
                    height: "6px",
                    backgroundColor: "#3B82F6",
                    borderRadius: "50%",
                    marginTop: "6px",
                  }}
                ></div>
                <div>
                  <p
                    style={{
                      fontSize: "14px",
                      fontWeight: "600",
                      color: "#1E293B",
                      margin: "0 0 4px 0",
                    }}
                  >
                    For access issues:
                  </p>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "2px",
                    }}
                  >
                    <a
                      href="mailto:sanjeeva.gonuguntla@ttec.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        fontSize: "13px",
                        color: "#3b82F6",
                        textDecoration: "none",
                      }}
                    >
                      Contact Admin Team
                    </a>
                  </div>
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "8px",
                }}
              >
                <div
                  style={{
                    width: "6px",
                    height: "6px",
                    backgroundColor: "#3B82F6",
                    borderRadius: "50%",
                    marginTop: "6px",
                  }}
                ></div>
                <div>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontSize: "14px",
                      color: "#3B82F6",
                      textDecoration: "none",
                      fontWeight: "500",
                    }}
                  >
                    🔗 Report Owners
                  </a>
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "8px",
                }}
              >
                <div
                  style={{
                    width: "6px",
                    height: "6px",
                    backgroundColor: "#3B82F6",
                    borderRadius: "50%",
                    marginTop: "6px",
                  }}
                ></div>
                <div>
                  <a
                    href="https://asknow.service-now.com/asknow?id=asknow_sc_cat_item&sys_id=bec6a503874e29dc97c8646d8bbb3597&sysparm_category=d866a94b87ca29dc97c8646d8bbb35a1"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontSize: "14px",
                      color: "#3B82F6",
                      textDecoration: "none",
                      fontWeight: "500",
                    }}
                  >
                    🔗 Raise a Ticket Here
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Help Documents Card */}
          <div
            style={{
              backgroundColor: "white",
              borderRadius: "12px",
              padding: "20px",
              border: "1px solid #E2E8F0",
              boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                marginBottom: "16px",
              }}
            >
              <div style={{ color: "#10B981" }}>
                <Book size={20} />
              </div>
              <h3
                style={{
                  fontSize: "16px",
                  fontWeight: "600",
                  color: "#1E293B",
                  margin: "0",
                }}
              >
                Help Documents
              </h3>
            </div>

            <div
              style={{ display: "flex", flexDirection: "column", gap: "12px" }}
            >
              <div
                style={{ display: "flex", alignItems: "center", gap: "8px" }}
              >
                <div style={{ color: "#6366F1" }}>
                  <FileText size={16} />
                </div>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontSize: "14px",
                    color: "#3B82F6",
                    textDecoration: "none",
                  }}
                >
                  Looker Training Videos
                </a>
              </div>
              <div
                style={{ display: "flex", alignItems: "center", gap: "8px" }}
              >
                <div style={{ color: "#6366F1" }}>
                  <FileText size={16} />
                </div>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontSize: "14px",
                    color: "#3B82F6",
                    textDecoration: "none",
                  }}
                >
                  Business Requirement Document
                </a>
              </div>
            </div>
          </div>

          {/* Announcements Card */}
          <div
            style={{
              backgroundColor: "white",
              borderRadius: "12px",
              padding: "20px",
              border: "1px solid #E2E8F0",
              boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                marginBottom: "16px",
              }}
            >
              <div style={{ color: "#F59E0B" }}>
                <Megaphone size={20} />
              </div>
              <h3
                style={{
                  fontSize: "16px",
                  fontWeight: "600",
                  color: "#1E293B",
                  margin: "0",
                }}
              >
                Announcements
              </h3>
            </div>

            <div
              style={{ display: "flex", flexDirection: "column", gap: "16px" }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "8px",
                }}
              >
                <div style={{ color: "#3B82F6", marginTop: "2px" }}>
                  <Bell size={16} />
                </div>
                <div>
                  <p
                    style={{
                      fontSize: "14px",
                      fontWeight: "600",
                      color: "#1E293B",
                      margin: "0 0 4px 0",
                    }}
                  >
                    Apr 29:{" "}
                    <span style={{ fontWeight: "400" }}>
                      New XXX Dashboard live
                    </span>
                  </p>
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "8px",
                }}
              >
                <div
                  style={{
                    width: "0",
                    height: "0",
                    borderLeft: "8px solid transparent",
                    borderRight: "8px solid transparent",
                    borderBottom: "12px solid #EF4444",
                    marginTop: "2px",
                  }}
                ></div>
                <div>
                  <p
                    style={{
                      fontSize: "14px",
                      fontWeight: "600",
                      color: "#1E293B",
                      margin: "0 0 4px 0",
                    }}
                  >
                    Apr 30:{" "}
                    <span style={{ fontWeight: "400" }}>
                      Scheduled Looker downtime (12-1 AM)
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
