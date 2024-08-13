import { useEffect, useState } from "react";

// value = баштапкы абалы
// pauza = канча убаккытта куттуу керек
export const usePauza = (value, pauza) => {
  const [pauzadagyZnachenie, setPauzadayZnachenie] = useState(value);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setPauzadayZnachenie(value);
    }, pauza);

    return () => {
      clearTimeout(timerId);
    };
  }, [value, pauza]);

  return pauzadagyZnachenie;
};
