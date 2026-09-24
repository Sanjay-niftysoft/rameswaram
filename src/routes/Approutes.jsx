import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from '../core/layout.jsx'
import Home from '../components/home/home.jsx'
import AboutPage from '../components/about/AboutPage.jsx'
import ContactPage from '../components/contact/ContactPage.jsx'
import GalleryPage from '../components/gallery/GalleryPage.jsx'
import TestimonialsPage from '../components/testimonials/TestimonialsPage.jsx'
import ServicePage from '../shared/components/services/ServicePage.jsx'

export default function Approutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/testimonials" element={<TestimonialsPage />} />
        <Route path="/:serviceId" element={<ServicePage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  )
}