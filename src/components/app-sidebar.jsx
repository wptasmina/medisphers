"use client"

import * as React from "react"
import {
  ArrowLeftFromLine,
  Stethoscope,
  UserRoundPlus,
  UserRoundCog,
  MessagesSquare,
  Settings,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"

// Simulated user data (replace with real user info from auth/session)
const data = {
  user: {
    name: "Medisphere",
    email: "medisphere@example.com",
    avatar: "/avatars/Medisheper-logo.png",
    role: "admin", // Change to 'doctor' or 'patient' to test other roles
  },
  projects: [
    {
      name: "Log Out",
      url: "/logout",
      icon: ArrowLeftFromLine,
    },
  ],
}

// Role-based menu configuration
const navMainItems = {
  admin: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: Stethoscope,
    },
    {
      title: "Doctor",
      url: "/dashboard/doctor",
      icon: UserRoundPlus,
      items: [
        { title: "All Doctors", url: "/dashboard/all-doctors" },
        { title: "Add Doctor", url: "/dashboard/add-doctor" },
        { title: "Profile", url: "/dashboard/profile" },
      ],
    },
    {
      title: "Messages",
      url: "/contact",
      icon: MessagesSquare,
    },
    {
      title: "Settings",
      url: "/settings",
      icon: Settings,
    },
  ],
  doctor: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: Stethoscope,
    },
    {
      title: "Profile",
      url: "/dashboard/profile",
      icon: UserRoundCog,
    },
    {
      title: "Messages",
      url: "/contact",
      icon: MessagesSquare,
    },
  ],
  patient: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: Stethoscope,
    },
    {
      title: "Messages",
      url: "/contact",
      icon: MessagesSquare,
    },
  ],
}

export function AppSidebar({ ...props }) {
  const role = data.user.role || "patient"
  const navItems = navMainItems[role] || []

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={[]} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={navItems} />
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
