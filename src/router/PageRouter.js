import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { ChatPage } from '../pages/ChatPage';
import { MapsPage } from '../pages/MapsPage';

export const PageRouter = () => {
  return (
    <div className="">
      <Routes>
        <Route path="map" element={<MapsPage />} />
        <Route path="chat" element={<ChatPage />} />
        <Route path="*" element={<Navigate to="chat" replace />} />
      </Routes>
    </div>
  );
};
