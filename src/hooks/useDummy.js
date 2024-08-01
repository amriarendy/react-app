import { useState, useEffect } from "react";
import DataDummy from "../dummy.json"; // Ganti dengan path yang sesuai

const useDummy = (endpoint) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Mengambil data sesuai dengan endpoint yang dipilih
        const result = DataDummy[endpoint];
        setData(result);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [endpoint]);

  return { data, loading, error };
};

export default useDummy;
