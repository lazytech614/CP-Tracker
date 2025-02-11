export async function fetchLeetCodeData(handle: string) {
    const response = await fetch(`${process.env.LEETCODE_API_BASE_URL}/${handle}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch data for handle: ${handle}`);
    }
    const data = await response.json();
    return data;
  }
  