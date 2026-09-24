import React from "react";
import Gallery from "../../shared/components/gallery/GalleryPage.jsx";

export default function GalleryPage({ onOpenEnquiry, onNavigate }) {
  return <Gallery onOpenEnquiry={onOpenEnquiry} onNavigate={onNavigate} />;
}

