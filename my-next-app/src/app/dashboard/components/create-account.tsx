"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Github } from "lucide-react";

export function CreateAccount() {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <div className="space-y-2">
          <Button variant="outline" className="w-full">
            <Github className="mr-2 h-4 w-4" />
            Github
          </Button>
          <Button variant="outline" className="w-full">
            <svg
              className="mr-2 h-4 w-4"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 0C5.37273 0 0 5.37273 0 12C0 18.6273 5.37273 24 12 24C18.6273 24 24 18.6273 24 12C24 5.37273 18.6273 0 12 0Z"
                fill="#FFF"
              />
              <path
                d="M12 0.75C5.7868 0.75 0.75 5.7868 0.75 12C0.75 18.2132 5.7868 23.25 12 23.25C18.2132 23.25 23.25 18.2132 23.25 12C23.25 5.7868 18.2132 0.75 12 0.75ZM12 22.5C6.201 22.5 1.5 17.799 1.5 12C1.5 6.201 6.201 1.5 12 1.5C17.799 1.5 22.5 6.201 22.5 12C22.5 17.799 17.799 22.5 12 22.5Z"
                fill="#EA4335"
              />
              <path
                d="M12 4.5C8.0145 4.5 4.5 8.0145 4.5 12C4.5 15.9855 8.0145 19.5 12 19.5C15.9855 19.5 19.5 15.9855 19.5 12C19.5 8.0145 15.9855 4.5 12 4.5ZM16.044 8.25L13.6725 10.6215C13.4775 10.8165 13.125 10.6845 13.125 10.3935V8.25H12.375V10.3935C12.375 10.6845 12.0225 10.8165 11.8275 10.6215L9.456 8.25H8.25V15.75H15.75V8.25H16.044Z"
                fill="#EA4335"
              />
            </svg>
            Google
          </Button>
        </div>
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">
              Or Continue With
            </span>
          </div>
        </div>
      </div>
      <div className="space-y-2">
        <Input placeholder="Email" type="email" />
        <Input placeholder="Password" type="password" />
      </div>
      <Button className="w-full">Create Account</Button>
    </div>
  );
}