const platfrom = [
    {
        name: "leetcode",
        url: process.env.LEETCODE_API_BASE_URL
    },
    {
        name: "codeforces",
        url: process.env.CODEFORCES_API_BASE_URL
    }
]


export async function fetchData(handle: string, platform: string) {
    const baseUrl = platfrom.find((item) => item.name.toLocaleLowerCase() === platform.toLocaleLowerCase())?.url;
    if (!baseUrl) {
      throw new Error(`Platform not found: ${platform}`);
    }

    let url;
    if(platform.toLocaleLowerCase() === "codeforces") {
        url = `${baseUrl}/user.info?handles=${handle}`
    } 

    if(platform.toLocaleLowerCase() === "leetcode") {
        url = `${baseUrl}/${handle}`    
    }

    const response = await fetch(`${url}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch data for handle: ${handle}`);
    }
    const data = await response.json();
    return data;
  }
  