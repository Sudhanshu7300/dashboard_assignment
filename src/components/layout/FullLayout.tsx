import React, { useState } from "react";
import { styled, Box, Container } from "@mui/material";
import Header from "components/layout/header";
import Sidebar from "components/layout/sidebar";

const PageWrapper = styled("div")(() => ({
  display: "flex",
  flexGrow: 1,
  paddingBottom: "60px",
  flexDirection: "column",
  zIndex: 1,
}));

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarOpen] = useState(true);
  const [isCollapsed, setIsCollapsed] = React.useState(true);
  const [isMobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  return (
    <PageWrapper className="page-wrapper">
      <Sidebar
        isCollapsed={isCollapsed}
        isSidebarOpen={isSidebarOpen}
        setIsCollapsed={setIsCollapsed}
        isMobileSidebarOpen={isMobileSidebarOpen}
        onSidebarClose={() => setMobileSidebarOpen(false)}
      />
      <div style={{ flexGrow: 1 }}>
        <Header toggleMobileSidebar={() => setMobileSidebarOpen(true)} />
        <Box
          sx={{
            minHeight: "calc(100vh - 170px)",
            marginLeft: {
              xs: "20px",
              sm: "20px",
              lg: "85px",
            },
            marginRight: "10px",
          }}
        >
          {children}
        </Box>
      </div>
    </PageWrapper>
  );
}
