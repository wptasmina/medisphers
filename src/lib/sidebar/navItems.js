import {
    Stethoscope,
    CalendarDays,
    UserRoundPlus,
    UserRoundCog,
    Users,
    CircleDollarSign,
    ClipboardList,
    BriefcaseMedical,
    MessagesSquare,
    Settings,
  } from "lucide-react";
  
  export const getSidebarItemsByRole = (role) => {
    const commonItems = [
      {
        title: "Dashboard",
        url: "/dashboard",
        icon: Stethoscope,
        isActive: true,
        items: [
          { title: "Overview", url: "/dashboard" },
          { title: "Profile", url: "/dashboard/profile" },
        ],
      },
    ];
  
    const doctorItems = [
      {
        title: "Appointment",
        icon: CalendarDays,
        items: [
          { title: "My Appointments", url: "/doctor/appointments" },
          { title: "Patients", url: "/doctor/patients" },
        ],
      },
      {
        title: "Patient Records",
        icon: ClipboardList,
        items: [
          { title: "All Records", url: "/doctor/records" },
        ],
      },
    ];
  
    const adminItems = [
      {
        title: "Doctors",
        icon: UserRoundPlus,
        items: [
          { title: "All Doctors", url: "/admin/doctors" },
          { title: "Add Doctor", url: "/admin/add-doctor" },
        ],
      },
      {
        title: "Patients",
        icon: UserRoundCog,
        items: [
          { title: "All Patients", url: "/admin/patients" },
        ],
      },
      {
        title: "Staff",
        icon: Users,
        items: [
          { title: "Staff List", url: "/admin/staff" },
        ],
      },
      {
        title: "Payments",
        icon: CircleDollarSign,
        items: [
          { title: "Transactions", url: "/admin/payments" },
        ],
      },
    ];
  
    const patientItems = [
      {
        title: "Appointments",
        icon: CalendarDays,
        items: [
          { title: "Book Appointment", url: "/patient/book" },
          { title: "My Appointments", url: "/patient/appointments" },
        ],
      },
    ];
  
    const settings = [
      {
        title: "Settings",
        url: "/settings",
        icon: Settings,
        items: [
          { title: "Account Settings", url: "/settings" },
        ],
      },
    ];
  
    if (role === "admin") return [...commonItems, ...adminItems, ...settings];
    if (role === "doctor") return [...commonItems, ...doctorItems, ...settings];
    if (role === "patient") return [...commonItems, ...patientItems, ...settings];
    return commonItems; // fallback
  };
  