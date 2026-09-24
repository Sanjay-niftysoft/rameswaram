const fs = require("fs");
const path = require("path");

const basePath = "C:/Users/innoc/Desktop/nifyst-soft/rameswaramthilahomam/src";
const compPath = path.join(basePath, "components/home");
const sharedPath = path.join(basePath, "shared/components/home");

function getBody(filePath) {
    let content = fs.readFileSync(filePath, "utf-8");
    // Remove imports
    content = content.replace(/^import\s+.*?;\s*$/gm, "");
    content = content.replace(/^import\s+.*?\n.*?;\s*$/gm, ""); // multiline imports roughly
    content = content.replace(/^import\s+.*?\s+from\s+.*?['"].*?['"]\s*;?\s*$/gm, "");
    // Remove any remaining import blocks
    content = content.replace(/import\s+\{[\s\S]*?\}\s+from\s+['"].*?['"]\s*;?/g, "");
    // Remove default exports
    content = content.replace(/export default function\s+(\w+)/g, "function $1");
    // Handle specific const exports
    content = content.replace(/export\s+default\s+\w+;?/g, "");
    return content.trim();
}

const imports = `import React, { useState, useEffect, useRef, useCallback } from "react";
import { Link } from "react-router-dom";
import { 
  ChevronLeft, ChevronRight, ArrowRight, Flame, Users, ShieldCheck, 
  Image as ImageIcon, Star, BookOpen, Flower2, HeartHandshake, Sparkles, 
  Calendar, CheckCircle2, Clock, MapPin, PhoneCall, MessageCircle, Send
} from "lucide-react";
`;

const bannerBody = getBody(path.join(sharedPath, "home.jsx"));
const aboutBody = getBody(path.join(compPath, "AboutUs.jsx"));
const servicesBody = getBody(path.join(compPath, "Services.jsx"));
const galleryBody = getBody(path.join(compPath, "Gallery.jsx"));
const whyChooseUsBody = getBody(path.join(compPath, "WhyChooseUs.jsx"));
const testimonialsBody = getBody(path.join(compPath, "Testimonials.jsx"));
const homeBody = getBody(path.join(compPath, "home.jsx"));

const finalContent = imports + "\n\n" + 
  bannerBody + "\n\n" + 
  aboutBody + "\n\n" + 
  servicesBody + "\n\n" + 
  galleryBody + "\n\n" + 
  whyChooseUsBody + "\n\n" + 
  testimonialsBody + "\n\n" + 
  homeBody + "\n\n" + 
  "export default Home;\n";

fs.writeFileSync(path.join(sharedPath, "home.jsx"), finalContent);
console.log("Merged successfully");

// Now update the original wrapper
const wrapperContent = `import React from "react";
import Home from "../../shared/components/home/home.jsx";

export default function HomePage({ onOpenEnquiry }) {
  return <Home onOpenEnquiry={onOpenEnquiry} />;
}
`;
fs.writeFileSync(path.join(compPath, "home.jsx"), wrapperContent);
console.log("Wrapper updated");
