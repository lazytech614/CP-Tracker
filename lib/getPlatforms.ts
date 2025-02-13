interface PlatformData {
    platform: string;
    handle: string;
    email: string;
    contestRating?: number;
    currentStreak?: number;
    totalProblemsSolved?: number;
  }

export const getPlatforms = async (userId: string, setConnectedPlatforms: (platforms: PlatformData[]) => void) => {
    console.log("Hello");
    try {
      const response = await fetch("/api/platforms", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId }),
      });
      const result = await response.json();
      console.log(result);
      if (result.success) {
        const transformedPlatforms: PlatformData[] = result.data.map((item: any) => ({
          platform: item.platform.displayName || item.platform.name,
          handle: item.handle,
          email: item.email || "",
          contestRating: item.currentRating, 
          currentStreak: item.currentStreak,
          totalProblemsSolved: item.totalProblemsSolved,
        }));
        setConnectedPlatforms(transformedPlatforms);
      } else {
        console.error("Failed to fetch platforms:", result.error);
      }
    } catch (err) {
      console.error("Error calling sync API:", err);
    }
  }