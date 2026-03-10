"use client";

import { useState } from "react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function PersonalInfo() {
  const [fullName, setFullName] = useState("");
  const [designation, setDesignation] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-semibold text-foreground">
        Personal Information
      </h2>

      <div className="mt-4 flex flex-col lg:flex-row gap-8">
        {/* LEFT SIDE */}
        <div className="w-full space-y-4">
          {/* Full Name */}
          <div>
            <Label htmlFor="full-name">Full Name</Label>
            <Input
              id="full-name"
              placeholder="John Doe"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="rounded-xl"
            />
          </div>

          {/* Email */}
          <div>
            <Label>Email</Label>
            <Input
              type="email"
              placeholder="example@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="rounded-xl"
            />
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="w-full space-y-4">
          {/* Designation */}
          <div>
            <Label>Designation</Label>
            <Input
              placeholder="Intern Doctor"
              value={designation}
              onChange={(e) => setDesignation(e.target.value)}
              className="rounded-xl"
            />
          </div>

          {/* Contact */}
          <div>
            <Label>Contact Number</Label>
            <Input
              type="tel"
              placeholder="+880 1XXXXXXXXX"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              className="rounded-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
