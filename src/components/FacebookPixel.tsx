"use client";
import React, { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export const FacebookPixelEvents: React.FC = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    import("react-facebook-pixel")
      .then((x) => x.default)
      .then((ReactPixel) => {
        ReactPixel.init("1385586748752732"); // Substitua pelo seu ID do pixel
        ReactPixel.pageView();

        // Exemplo de rastreamento de um evento personalizado
        ReactPixel.track("contact", {
          customData: "qualquer dado adicional aqui",
        });
      });
  }, [pathname, searchParams]);

  return null;
};