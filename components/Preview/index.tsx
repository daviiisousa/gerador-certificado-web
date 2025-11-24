"use client";
import { ImageSquare } from "phosphor-react";
import { useCertificate } from "@/contexts/CertificateContext";
import Image from "next/image";

export function Preview() {
  const { previewImage, position } = useCertificate();

  return (
    <div className="w-full mt-4 rounded-md max-w-2xl shadow-2xl p-5 bg-white dark:bg-neutral-900">
      <h2 className="text-lg font-semibold">Preview do Template</h2>
      <div className="mt-4 w-full h-96 border-2 border-dashed border-gray-300 dark:border-gray-500 rounded-md flex flex-col items-center justify-center relative overflow-hidden">
        {previewImage ? (
          <>
            <Image
              src={previewImage}
              alt="Preview do certificado"
              fill
              className="object-contain"
            />
            <div
              className="absolute left-0 right-0 h-0.5 bg-red-500 shadow-lg transition-all"
              style={{ top: `${position.y}%` }}
            >
              <div className="absolute right-2 -top-7 bg-red-500/90 text-white px-2  rounded text-xs font-medium whitespace-nowrap">
                Y: {position.y}%
              </div>
            </div>
            <div
              className="absolute top-0 bottom-0 w-0.5 bg-green-500 shadow-lg transition-all"
              style={{ left: `${position.x}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -left-8 bg-green-500/90 text-white px-2  rounded text-xs font-medium whitespace-nowrap">
                X: {position.x}%
              </div>
            </div>

            <div
              className="absolute -translate-x-1/2 text-center"
              style={{
                left: `${position.x}%`,
                top: `${position.y}%`,
              }}
            >
              <p className="text-sm font-bold text-black drop-shadow-lg  ">
                Nome do Aluno
              </p>
            </div>
          </>
        ) : (
          <>
            <ImageSquare color="#6a7282" size={40} weight="bold" />
            <span className="text-gray-500 dark:text-gray-400 text-center text-sm md:text-base px-2 md:px-0">
              Aqui será exibido o preview do template do certificado
            </span>
          </>
        )}
      </div>
      <div className="mt-4 dark:bg-neutral-800 p-2 rounded-md text-black/70 dark:text-gray-300 text-sm">
        <div className="flex items-center gap-4">
          <span className="block w-2.5 h-2.5 bg-red-500 rounded-full text-sm md:text-base"></span>
          <p>Linha Vermelha (Horizontal) - Posição Y</p>
        </div>
        <div className="mt-2 flex items-center gap-4">
          <span className="block w-2.5 h-2.5 bg-green-500 rounded-full text-sm md:text-base"></span>
          <p>Linha Verde (Vertical) - Posição X</p>
        </div>
      </div>
    </div>
  );
}
