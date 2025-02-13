import toast from "react-hot-toast";

interface SyncDataProps {
    userId: string;
    handle: string;
    platform: string;
}

export async function syncData({ userId, handle, platform }: SyncDataProps) {
    try {
        const response = await fetch("/api/sync-data", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ userId, handle, platform }),
        });
        const result = await response.json();
        if (result.success) {
            toast.success("Platform synced successfully");
            console.log("Platform synced successfully", result.data);
        } else {
            toast.error("Sync error: " + result.error);
            console.error("Sync error:", result.error);
        }
    } catch (err) {
        toast.error("Error calling sync API: " + err);
        console.error("Error calling sync API:", err);
    }
}