export async function syncLeetCodeData(userId: string, handle: string) {
    try {
      const response = await fetch("/api/sync-leetcode", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId, handle }),
      });
      const result = await response.json();
      if (result.success) {
        console.log("LeetCode data synced successfully", result.data);
      } else {
        console.error("Sync error:", result.error);
      }
    } catch (err) {
      console.error("Error calling sync API:", err);
    }
  }