"use client";

import { 
    Table, 
    TableBody, 
    TableCell, 
    TableHead, 
    TableHeader, 
    TableRow 
} from "@/components/ui/table";

interface PlatformData {
  platform: string;
  handle: string;
  email: string;
  contestRating?: number;
  currentStreak?: number;
  totalProblemsSolved?: number;
}

interface ConnectedPlatformsTableProps {
  platforms: PlatformData[];
}

export default function ConnectedPlatformsTable({ platforms }: ConnectedPlatformsTableProps) {
  return (
    <div className="overflow-x-auto">
      <Table className="min-w-full">
        <TableHeader>
          <TableRow>
            <TableHead>Platform</TableHead>
            {/* <TableHead>Username</TableHead>
            <TableHead>Email</TableHead> */}
            <TableHead>Contest Rating</TableHead>
            <TableHead>Current Streak</TableHead>
            <TableHead>Total Problems Solved</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {platforms.map((item, index) => (
            <TableRow key={index}>
              <TableCell>{item.platform}</TableCell>
              {/* <TableCell>{item.handle}</TableCell>
              <TableCell>{item.email}</TableCell> */}
              <TableCell>{item.contestRating ?? "N/A"}</TableCell>
              <TableCell>{item.currentStreak ?? "N/A"}</TableCell>
              <TableCell>{item.totalProblemsSolved ?? "N/A"}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
