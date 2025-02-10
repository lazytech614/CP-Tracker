"use client";
import { signOut } from "next-auth/react";

export default function LogoutButton() {
    return (
        <button
            className="bg-red-500 text-white px-4 py-2 rounded-md"
            onClick={() => signOut({ callbackUrl: "/" })}
        >
            Logout
        </button>
    );
}
