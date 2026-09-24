import React from "react";
import About from "../../shared/components/about/AboutPage.jsx";

export default function AboutPage({ onOpenEnquiry, onNavigate }) {
  return <About onOpenEnquiry={onOpenEnquiry} onNavigate={onNavigate} />;
}

