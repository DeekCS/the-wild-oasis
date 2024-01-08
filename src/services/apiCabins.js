import supabase from "./supabase";

export async function getCabins() {
  try {
    const { data, error } = await supabase.from("cabins").select("*");
    if (error) {
      throw error;
    }
    return data;
  } catch (error) {
    console.log(error.message);
  }
}
