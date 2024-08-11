import axios from "axios";
import { QueryClient } from "@tanstack/react-query";
import dummyAntrean from "../../status_antrean.json";

export const queryClient = new QueryClient();

export async function getDataAntean({ signal }) {
  const url = "";
  if (!url) return dummyAntrean;

  const response = await axios.get(url, { signal });

  return response.data;
}
