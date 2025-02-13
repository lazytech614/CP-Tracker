"use client";

import { useState } from "react";

import { 
    Dialog, 
    DialogContent, 
    DialogHeader, 
    DialogTitle, 
    DialogTrigger, 
    DialogFooter 
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
    Select, 
    SelectContent, 
    SelectItem, 
    SelectTrigger, 
    SelectValue 
} from "@/components/ui/select";
import toast from "react-hot-toast";

interface AddPlatformFormProps {
  onAddPlatform: (platform: string, handle: string, platformEmail: string) => void;
}

export default function AddPlatformForm({ onAddPlatform }: AddPlatformFormProps) {
  const [selectedPlatform, setSelectedPlatform] = useState("");
  const [platformUsername, setPlatformUsername] = useState("");
  const [platformEmail, setPlatformEmail] = useState("");

  const handleSubmit = () => {

    if (!selectedPlatform || !platformUsername.trim() || !platformEmail.trim()) {
      toast.error("Please fill out all fields");
      return;
    }

    onAddPlatform(selectedPlatform, platformUsername, platformEmail);
  };

  return (
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">Add New Platform</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add New Platform</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <Select value={selectedPlatform} onValueChange={setSelectedPlatform}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select platform" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="leetcode">LeetCode</SelectItem>
                <SelectItem value="codeforces">CodeForces</SelectItem>
                <SelectItem value="codechef">CodeChef</SelectItem>
                {/* Add more options as needed */}
              </SelectContent>
            </Select>
            <div className="space-y-2">
              <div className="text-sm text-card-foreground">Enter your username on platform</div>
              <Input
                  placeholder="username_123"
                  value={platformUsername}
                  onChange={(e) => setPlatformUsername(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <div className="text-sm text-card-foreground">Enter the email registered on platform</div>
              <Input
                  placeholder="example@example.com"
                  value={platformEmail}
                  onChange={(e) => setPlatformEmail(e.target.value)}
              />
            </div>
          </div>
          <DialogFooter>
            <Button onClick={handleSubmit}>Submit</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
  );
}
