"use client";

import { AppSidebar } from "@/components/app-sidebar";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Bell, User } from "lucide-react";
import { ThemeProvider } from "@/components/shared/theme-provider";
import { ModeToggle } from "@/components/shared/mode-toggle";
import { ToastContainer } from "react-toastify";
import { useAuth } from "@/context/authContext";

export default function Layout({ children }) {
  const { user, logout } = useAuth(); 

  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <SidebarProvider>
          <AppSidebar />
          <SidebarInset>
            {/* Header Section (NavBar) */}
            <header className="flex h-16 shrink-0 items-center gap-2 px-4 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
              <SidebarTrigger className="-ml-1" />
              <Separator
                orientation="vertical"
                className="mr-2 data-[orientation=vertical]:h-4"
              />

              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem className="hidden md:block">
                    <BreadcrumbLink href="#">Dashboard</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator className="hidden md:block" />
                  <BreadcrumbItem>
                    <BreadcrumbPage>Current Page</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>

              {/* Notifications and Mode Toggle */}
              <div className="flex items-center ml-auto gap-4">
                {/* Bell Notification Button */}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button className="focus:outline-none outline-none">
                      <Bell />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuLabel>Message Notification</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Thanks for everything</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>

                {/* Mode Toggle Button */}
                <ModeToggle />

                {/* User Profile Dropdown */}
                <DropdownMenu>
                  <DropdownMenuTrigger className="w-10 h-10 flex justify-center items-center cursor-pointer rounded-full transition-all duration-200 border border-gray-600 data-[state=open]:bg-gray-100 dark:data-[state=open]:bg-gray-800">
                    {user?.photoURL ? (
                      <img
                        src={user.photoURL}
                        alt="User"
                        className="w-8 h-8 rounded-full object-cover"
                      />
                    ) : (
                      <User className="w-5 h-5" />
                    )}
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem disabled>
                      {user?.name || "Unknown User"}
                    </DropdownMenuItem>
                    <DropdownMenuItem disabled>
                      {user?.email || "No email"}
                    </DropdownMenuItem>

                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={logout}>
                      Log Out
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </header>

            {/* ThemeProvider  */}
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              {/* Page Content */}
              <main>{children}</main>
              <ToastContainer richColors position="top-right" />
            </ThemeProvider>
          </SidebarInset>
        </SidebarProvider>
      </body>
    </html>
  );
}
