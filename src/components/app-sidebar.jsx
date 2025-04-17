"use client"

import * as React from "react"
import {
  ArrowLeftFromLine,
  AudioWaveform,
  BriefcaseMedical,
  CalendarDays,
  CircleDollarSign,
  ClipboardList,
  Command,
  GalleryVerticalEnd,
  Home,
  MessagesSquare,
  Settings,
  Stethoscope,
  UserRoundCog,
  UserRoundPlus,
  Users,
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

// This is sample data.
const data = {
  user: {
    name: "Medisphere",
    email: "medisphere@example.com",
    avatar: "/avatars/Medisheper-logo.png",
  },

  navMain: [
    {
      title: "Dashboard",
      url: "/admin",
      icon: Stethoscope,
      isActive: true,
      items: [
        {
          title: "Overview",
          url: "/dashboard",
        },
      ],
    },
    {
      title: "Appointment",
      url: "#",
      icon: CalendarDays,
      isActive: true,
      items: [
        {
          title: "History",
          url: "#",
        },
      ],
    },
    {
      title: "Doctor",
      url: "/doctor",
      icon: UserRoundPlus,
      items: [
        {
          title: "All Doctors",
          url: "/doctor/all-doctors",
        },
        {
          title: "Edit Doctor",
          url: "/doctor/edit-doctor",
        },
        {
          title: "Add Doctor",
          url: "/dashboard/add-doctor",
        },
        {
          title: "Profile",
          url: "/doctor/profile",
        },
      ],
    },
    {
      title: "Patient",
      url: "/patient",
      icon: UserRoundCog,
      items: [
        {
          title: "Profile",
          url: "/patient/profile",
        },
        {
          title: "Get Started",
          url: "#",
        },
      ],
    },
    {
      title: "Staff",
      url: "#",
      icon: Users,
      items: [
        {
          title: "Introduction",
          url: "#",
        },
        {
          title: "Get Started",
          url: "#",
        },
      ],
    },
    {
      title: "Payments",
      url: "#",
      icon: CircleDollarSign,
      items: [
        {
          title: "Introduction",
          url: "#",
        },
        {
          title: "Get Started",
          url: "#",
        },
        {
          title: "Tutorials",
          url: "#",
        },
        {
          title: "Changelog",
          url: "#",
        },
      ],
    },
    {
      title: "Patient Records",
      url: "#",
      icon: ClipboardList,
      items: [
        {
          title: "Introduction",
          url: "#",
        },
        {
          title: "Get Started",
          url: "#",
        },
        {
          title: "Tutorials",
          url: "#",
        },
        {
          title: "Changelog",
          url: "#",
        },
      ],
    },
    {
      title: "Department",
      url: "#",
      icon: BriefcaseMedical,
      items: [
        {
          title: "Introduction",
          url: "#",
        },
        {
          title: "Get Started",
          url: "#",
        },
        {
          title: "Tutorials",
          url: "#",
        },
        {
          title: "Changelog",
          url: "#",
        },
      ],
    },
    {
      title: "Massage",
      url: "/contact",
      icon: MessagesSquare,
      items: [
        {
          title: "Contact",
          url: "/contact",
        },
      ],
    },
    {
      title: "Settings",
      url: "/settings",
      icon: Settings,
      items: [
        {
          title: "General",
          url: "#",
        },
      ],
    },
  ],
  projects: [
    {
      name: "Home",
      url: "/",
      icon: Home,
    },
    {
      name: "Log Out",
      url: "/logout",
      icon: ArrowLeftFromLine,
    },
  ],
}
import { useAuth } from "@/context/authContext";

export function AppSidebar({...props}) {
  const { user } = useAuth();
  const userRole = user?.role;

  const doctorAllowed = [
    "Dashboard",
    "Appointment",
    "Doctor",
    "Massage",
    "Overview",
    "Settings",
  ];
  
  const patientAllowed = [
    "Dashboard",
    "Patient",
    "Massage",
    "Settings",
  ];
  
  const staffAllowed = [
    "Dashboard",
    "Staff",
    "Patient Records",
    "Department",
    "Massage",
    "Settings",
  ];
  
  const navRoleMap = {
    admin: () => true,
  
    doctor: (item) => doctorAllowed.includes(item.title),
  
    patient: (item) => patientAllowed.includes(item.title),
  
    staff: (item) => staffAllowed.includes(item.title),
  };
  
  const items = data.navMain.filter((item) => navRoleMap[userRole]?.(item));

  return (
    (<Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams || []} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={items} />
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>)
  );
}