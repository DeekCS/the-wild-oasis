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

export async function deleteCabin(id) {
  try {
    const { data, error } = await supabase.from("cabins").delete().eq("id", id);
    if (error) {
      throw error;
    }
    return data;
  } catch (error) {
    console.log(error.message);
  }
}
