"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type Position = {
  x: number;
  y: number;
};

type CertificateContextType = {
  previewImage: string | null;
  setPreviewImage: (image: string | null) => void;
  position: Position;
  setPosition: (position: Position) => void;
  csvFile: File | null;
  setCsvFile: (file: File | null) => void;
  dataModelCertificate: File | null;
  setDataModelCertificate: (file: File | null) => void;
};

const CertificateContext = createContext<CertificateContextType | undefined>(
  undefined
);

export function CertificateProvider({ children }: { children: ReactNode }) {
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [dataModelCertificate, setDataModelCertificate] = useState<File | null>(
    null
  );
  const [position, setPosition] = useState<Position>({ x: 50, y: 50 });
  const [csvFile, setCsvFile] = useState<File | null>(null);

  return (
    <CertificateContext.Provider
      value={{
        previewImage,
        setPreviewImage,
        position,
        setPosition,
        csvFile,
        setCsvFile,
        dataModelCertificate,
        setDataModelCertificate,
      }}
    >
      {children}
    </CertificateContext.Provider>
  );
}

export function useCertificate() {
  const context = useContext(CertificateContext);
  if (context === undefined) {
    throw new Error(
      "useCertificate deve ser usado dentro de um CertificateProvider"
    );
  }
  return context;
}
